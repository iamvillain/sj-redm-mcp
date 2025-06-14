# OxMySQL Complete Function Reference

This documentation covers all available OxMySQL functions with a focus on using exports for optimal compatibility and performance. OxMySQL is a modern MySQL wrapper for FiveM that provides both Promise-based and Callback-based database operations.

## Table of Contents

1. [insert](#insert)
2. [query](#query) 
3. [single](#single)
4. [scalar](#scalar)
5. [prepare](#prepare)
6. [rawExecute](#rawexecute)
7. [transaction](#transaction)
8. [Best Practices](#best-practices)
9. [Error Handling](#error-handling)
10. [Performance Considerations](#performance-considerations)

---

## Insert

### Description
Inserts a new entry into the database and returns the insert ID for the row, if valid.

### Export Syntax (Recommended)

#### Promise-based (Async)
```lua
local id = exports.oxmysql:insert_async('INSERT INTO `users` (identifier, firstname, lastname) VALUES (?, ?, ?)', {
    identifier, firstName, lastName
})
print(id)
```

#### Callback-based
```lua
exports.oxmysql:insert('INSERT INTO `users` (identifier, firstname, lastname) VALUES (?, ?, ?)', {
    identifier, firstName, lastName
}, function(id)
    print(id)
end)
```

### Alternative Syntax

#### Promise (MySQL.insert.await)
```lua
local id = MySQL.insert.await('INSERT INTO `users` (identifier, firstname, lastname) VALUES (?, ?, ?)', {
    identifier, firstName, lastName
})
print(id)
```

#### Callback (MySQL.insert)
```lua
MySQL.insert('INSERT INTO `users` (identifier, firstname, lastname) VALUES (?, ?, ?)', {
    identifier, firstName, lastName
}, function(id)
    print(id)
end)
```

### Available Aliases
- `MySQL.Sync.insert`
- `exports.ghmattimysql.executeSync`
- `MySQL.Async.insert`
- `exports.ghmattimysql.execute`

### Use Cases
- Creating new user accounts
- Adding new records to any table
- Logging system events
- Inventory item creation

### Return Value
- **Success**: Returns the auto-increment ID of the inserted row
- **Failure**: Returns `nil` or `false`

---

## Query

### Description
When selecting data, returns all matching rows and columns; otherwise, returns data like insertId, affectedRows, etc. This is the most commonly used function for SELECT operations.

### Export Syntax (Recommended)

#### Promise-based (Async)
```lua
local response = exports.oxmysql:query_async('SELECT `firstname`, `lastname` FROM `users` WHERE `identifier` = ?', {
    identifier
})
if response then
    for i = 1, #response do
        local row = response[i]
        print(row.firstname, row.lastname)
    end
end
```

#### Callback-based
```lua
exports.oxmysql:query('SELECT `firstname`, `lastname` FROM `users` WHERE `identifier` = ?', {
    identifier
}, function(response)
    if response then
        for i = 1, #response do
            local row = response[i]
            print(row.firstname, row.lastname)
        end
    end
end)
```

### Alternative Syntax

#### Promise (MySQL.query.await)
```lua
local response = MySQL.query.await('SELECT `firstname`, `lastname` FROM `users` WHERE `identifier` = ?', {
    identifier
})
if response then
    for i = 1, #response do
        local row = response[i]
        print(row.firstname, row.lastname)
    end
end
```

#### Callback (MySQL.query)
```lua
MySQL.query('SELECT `firstname`, `lastname` FROM `users` WHERE `identifier` = ?', {
    identifier
}, function(response)
    if response then
        for i = 1, #response do
            local row = response[i]
            print(row.firstname, row.lastname)
        end
    end
end)
```

### Available Aliases
- `MySQL.Sync.fetchAll`
- `exports.ghmattimysql.execute`
- `MySQL.Async.fetchAll`

### Use Cases
- Fetching multiple user records
- Getting all items in inventory
- Retrieving lists of vehicles, properties, etc.
- Complex JOIN operations returning multiple rows

### Return Value
- **Success**: Array of row objects, each containing column key-value pairs
- **Empty Result**: Empty array `{}`
- **Failure**: `nil` or `false`

---

## Single

### Description
Returns all selected columns for a single row. Ideal when you expect exactly one result.

### Export Syntax (Recommended)

#### Promise-based (Async)
```lua
local row = exports.oxmysql:single_async('SELECT `firstname`, `lastname` FROM `users` WHERE `identifier` = ? LIMIT 1', {
    identifier
})
if not row then return end
print(row.firstname, row.lastname)
```

#### Callback-based
```lua
exports.oxmysql:single('SELECT `firstname`, `lastname` FROM `users` WHERE `identifier` = ? LIMIT 1', {
    identifier
}, function(row)
    if not row then return end
    print(row.firstname, row.lastname)
end)
```

### Alternative Syntax

#### Promise (MySQL.single.await)
```lua
local row = MySQL.single.await('SELECT `firstname`, `lastname` FROM `users` WHERE `identifier` = ? LIMIT 1', {
    identifier
})
if not row then return end
print(row.firstname, row.lastname)
```

#### Callback (MySQL.single)
```lua
MySQL.single('SELECT `firstname`, `lastname` FROM `users` WHERE `identifier` = ? LIMIT 1', {
    identifier
}, function(row)
    if not row then return end
    print(row.firstname, row.lastname)
end)
```

### Use Cases
- Getting specific user data by unique identifier
- Fetching a single vehicle by plate number
- Retrieving player statistics
- Login validation queries

### Return Value
- **Success**: Single row object with column key-value pairs
- **No Result**: `nil`
- **Failure**: `nil`

---

## Scalar

### Description
Returns the first column for a single row. Perfect when you need just one value.

### Export Syntax (Recommended)

#### Promise-based (Async)
```lua
local firstName = exports.oxmysql:scalar_async('SELECT `firstname` FROM `users` WHERE `identifier` = ? LIMIT 1', {
    identifier
})
print(firstName)
```

#### Callback-based
```lua
exports.oxmysql:scalar('SELECT `firstname` FROM `users` WHERE `identifier` = ? LIMIT 1', {
    identifier
}, function(firstName)
    print(firstName)
end)
```

### Alternative Syntax

#### Promise (MySQL.scalar.await)
```lua
local firstName = MySQL.scalar.await('SELECT `firstname` FROM `users` WHERE `identifier` = ? LIMIT 1', {
    identifier
})
print(firstName)
```

#### Callback (MySQL.scalar)
```lua
MySQL.scalar('SELECT `firstname` FROM `users` WHERE `identifier` = ? LIMIT 1', {
    identifier
}, function(firstName)
    print(firstName)
end)
```

### Available Aliases
- `MySQL.Sync.fetchScalar`
- `exports.ghmattimysql.scalar`
- `MySQL.Async.fetchScalar`

### Use Cases
- Getting player count: `SELECT COUNT(*) FROM users`
- Checking if record exists: `SELECT 1 FROM users WHERE id = ?`
- Getting single values like money, level, etc.
- Simple validation queries

### Return Value
- **Success**: The actual value of the first column
- **No Result**: `nil`
- **Failure**: `nil`

---

## Prepare

### Description
Prepare can be used to execute frequently called queries faster and accepts multiple sets of parameters. Unlike rawExecute, SELECT statements return columns, rows, or arrays depending on results.

### Export Syntax (Recommended)

#### Promise-based (Async)
```lua
local response = exports.oxmysql:prepare_async('SELECT `firstname`, `lastname` FROM `users` WHERE `identifier` = ?', {
    identifier
})
print(json.encode(response, { indent = true, sort_keys = true }))
```

#### Callback-based
```lua
exports.oxmysql:prepare('SELECT `firstname`, `lastname` FROM `users` WHERE `identifier` = ?', {
    identifier
}, function(response)
    print(json.encode(response, { indent = true, sort_keys = true }))
end)
```

### Alternative Syntax

#### Promise (MySQL.prepare.await)
```lua
local response = MySQL.prepare.await('SELECT `firstname`, `lastname` FROM `users` WHERE `identifier` = ?', {
    identifier
})
print(json.encode(response, { indent = true, sort_keys = true }))
```

#### Callback (MySQL.prepare)
```lua
MySQL.prepare('SELECT `firstname`, `lastname` FROM `users` WHERE `identifier` = ?', {
    identifier
}, function(response)
    print(json.encode(response, { indent = true, sort_keys = true }))
end)
```

### Important Notes
- **Date Handling**: Date will not return the datestring commonly used in FiveM
- **Boolean Handling**: TINYINT 1 and BIT will not return a boolean
- **Placeholders**: You can only use `?` value placeholders; `??` column placeholders and named placeholders will throw an error

### Use Cases
- Frequently executed queries for performance optimization
- Batch operations with multiple parameter sets
- Complex queries that benefit from preparation
- High-performance database operations

### Performance Benefits
- Query compilation happens once
- Reduced parsing overhead
- Better performance for repeated execution

---

## RawExecute

### Description
rawExecute can be used to execute frequently called queries faster and accepts multiple sets of parameters. Unlike prepare, SELECT statements always return an array of rows.

### Export Syntax (Recommended)

#### Promise-based (Async)
```lua
local response = exports.oxmysql:rawExecute_async('SELECT `firstname`, `lastname` FROM `users` WHERE `identifier` = ?', {
    identifier
})
print(json.encode(response, { indent = true, sort_keys = true }))
```

#### Callback-based
```lua
exports.oxmysql:rawExecute('SELECT `firstname`, `lastname` FROM `users` WHERE `identifier` = ?', {
    identifier
}, function(response)
    print(json.encode(response, { indent = true, sort_keys = true }))
end)
```

### Alternative Syntax

#### Promise (MySQL.rawExecute.await)
```lua
local response = MySQL.rawExecute.await('SELECT `firstname`, `lastname` FROM `users` WHERE `identifier` = ?', {
    identifier
})
print(json.encode(response, { indent = true, sort_keys = true }))
```

#### Callback (MySQL.rawExecute)
```lua
MySQL.rawExecute('SELECT `firstname`, `lastname` FROM `users` WHERE `identifier` = ?', {
    identifier
}, function(response)
    print(json.encode(response, { indent = true, sort_keys = true }))
end)
```

### Key Differences from Prepare
- Always returns an array of rows for SELECT statements
- When using SELECT, return value matches `query`, `single`, or `scalar` depending on columns/rows selected
- Same performance benefits as prepare
- Same placeholder restrictions apply

### Important Notes
- **Date Handling**: Date will not return the datestring commonly used in FiveM
- **Boolean Handling**: TINYINT 1 and BIT will not return a boolean
- **Placeholders**: You can only use `?` value placeholders

### Use Cases
- When you always want array results regardless of row count
- High-performance batch operations
- Consistent return type requirements
- Complex query optimization

---

## Transaction

### Description
A transaction executes multiple queries and commits them only if all succeed. If one fails, none of the queries are committed. Returns a boolean indicating transaction success.

### Export Syntax (Recommended)

#### Promise-based (Async)
```lua
-- Specific format
local queries = {
    { query = 'INSERT INTO `test` (id) VALUES (?)', values = { 1 }},
    { query = 'INSERT INTO `test` (id, name) VALUES (?, ?)', values = { 2, 'bob' }},
}

local success = exports.oxmysql:transaction_async(queries)
print(success)

-- Shared format
local queries = {
    'INSERT INTO `test` (id, name) VALUES (@someid, @somename)',
    'SET `name` = @newname IN `test` WHERE `id` = @someid'
}
local values = {
    someid = 2,
    somename = 'John Doe',
    newname = 'John Notdoe'
}

local success = exports.oxmysql:transaction_async(queries, values)
print(success)
```

#### Callback-based
```lua
-- Specific format
exports.oxmysql:transaction(queries, function(success)
    print(success)
end)

-- Shared format
exports.oxmysql:transaction(queries, values, function(success)
    print(success)
end)
```

### Alternative Syntax

#### Promise (MySQL.transaction.await)
```lua
local success = MySQL.transaction.await(queries, values) -- leave values nil for specific format
print(success)
```

#### Callback (MySQL.transaction)
```lua
-- Specific format
MySQL.transaction(queries, function(success)
    print(success)
end)

-- Shared format
MySQL.transaction(queries, values, function(success)
    print(success)
end)
```

### Available Aliases
- `MySQL.Sync.transaction`
- `exports.ghmattimysql.transaction`
- `MySQL.Async.transaction`

### Transaction Formats

#### Specific Format
Each query has its own parameters:
```lua
local queries = {
    { query = 'INSERT INTO `test` (id) VALUES (?)', values = { 1 }},
    { query = 'INSERT INTO `test` (id, name) VALUES (?, ?)', values = { 2, 'bob' }},
}

-- Alternative array format
local queries = {
    { 'INSERT INTO `test` (id) VALUES (?)', { 1 } },
    { 'INSERT INTO `test` (id, name) VALUES (?, ?)', { 2, 'bob' } },
}
```

#### Shared Format
All queries share the same named parameters:
```lua
local queries = {
    'INSERT INTO `test` (id, name) VALUES (@someid, @somename)',
    'UPDATE `test` SET `name` = @newname WHERE `id` = @someid'
}
local values = {
    someid = 2,
    somename = 'John Doe',
    newname = 'John Notdoe'
}
```

### Transaction Isolation Levels
Set through the convar `mysql_transaction_isolation_level` (1-4, default: 2):

| Convar Value | Result |
|---|---|
| 1 | Repeatable Read |
| 2 | Read Committed |
| 3 | Read Uncommitted |
| 4 | Serializable |

### Use Cases
- Financial operations (money transfers, purchases)
- Complex data updates requiring consistency
- Batch operations that must all succeed
- Critical business logic requiring ACID properties

### Return Value
- **Success**: `true` - All queries executed successfully
- **Failure**: `false` - One or more queries failed, all rolled back

---

## Best Practices

### 1. Use Exports for Better Compatibility
```lua
-- Recommended: Using exports
local userData = exports.oxmysql:single_async('SELECT * FROM users WHERE id = ?', { userId })

-- Alternative: Direct MySQL calls
local userData = MySQL.single.await('SELECT * FROM users WHERE id = ?', { userId })
```

### 2. Choose the Right Function for Your Use Case
```lua
-- Getting multiple rows
local allUsers = exports.oxmysql:query_async('SELECT * FROM users')

-- Getting one row
local user = exports.oxmysql:single_async('SELECT * FROM users WHERE id = ? LIMIT 1', { userId })

-- Getting one value
local userCount = exports.oxmysql:scalar_async('SELECT COUNT(*) FROM users')

-- Inserting data
local insertId = exports.oxmysql:insert_async('INSERT INTO users (name) VALUES (?)', { name })
```

### 3. Always Validate Results
```lua
local user = exports.oxmysql:single_async('SELECT * FROM users WHERE id = ?', { userId })
if not user then
    print('User not found')
    return
end

-- Safe to use user data
print('Welcome, ' .. user.firstname)
```

### 4. Use Transactions for Related Operations
```lua
-- Money transfer example
local queries = {
    { query = 'UPDATE accounts SET balance = balance - ? WHERE id = ?', values = { amount, fromAccount } },
    { query = 'UPDATE accounts SET balance = balance + ? WHERE id = ?', values = { amount, toAccount } },
    { query = 'INSERT INTO transactions (from_account, to_account, amount) VALUES (?, ?, ?)', values = { fromAccount, toAccount, amount } }
}

local success = exports.oxmysql:transaction_async(queries)
if success then
    print('Transfer completed successfully')
else
    print('Transfer failed - all changes rolled back')
end
```

### 5. Use Parameterized Queries to Prevent SQL Injection
```lua
-- GOOD: Parameterized query
local user = exports.oxmysql:single_async('SELECT * FROM users WHERE name = ?', { playerName })

-- BAD: String concatenation (vulnerable to SQL injection)
-- local user = exports.oxmysql:single_async('SELECT * FROM users WHERE name = "' .. playerName .. '"')
```

### 6. Handle Database Errors Gracefully
```lua
local function getUserSafely(userId)
    local success, result = pcall(function()
        return exports.oxmysql:single_async('SELECT * FROM users WHERE id = ?', { userId })
    end)
    
    if not success then
        print('Database error:', result)
        return nil
    end
    
    return result
end
```

---

## Error Handling

### Promise-based Error Handling
```lua
local function safeQuery()
    local success, result = pcall(function()
        return exports.oxmysql:query_async('SELECT * FROM users WHERE active = ?', { true })
    end)
    
    if not success then
        print('Query failed:', result)
        return {}
    end
    
    return result or {}
end
```

### Callback-based Error Handling
```lua
exports.oxmysql:query('SELECT * FROM users WHERE active = ?', { true }, function(result)
    if not result then
        print('Query failed or returned no results')
        return
    end
    
    -- Process results
    for i = 1, #result do
        print('User:', result[i].name)
    end
end)
```

### Transaction Error Handling
```lua
local queries = {
    { query = 'INSERT INTO logs (action) VALUES (?)', values = { 'user_login' } },
    { query = 'UPDATE users SET last_login = NOW() WHERE id = ?', values = { userId } }
}

local success = exports.oxmysql:transaction_async(queries)
if not success then
    print('Failed to log user login - transaction rolled back')
    -- Handle the error appropriately
    TriggerClientEvent('notify', source, 'Login logging failed', 'error')
end
```

---

## Performance Considerations

### 1. Connection Pooling
OxMySQL automatically handles connection pooling. Configure pool size in your server.cfg:
```
set mysql_connection_string "mysql://user:password@localhost/database?pool_size=10"
```

### 2. Query Optimization
```lua
-- Use LIMIT when you only need one result
local user = exports.oxmysql:single_async('SELECT * FROM users WHERE email = ? LIMIT 1', { email })

-- Use specific columns instead of SELECT *
local userName = exports.oxmysql:scalar_async('SELECT name FROM users WHERE id = ?', { userId })

-- Use indexes for frequently queried columns
-- CREATE INDEX idx_user_email ON users(email);
```

### 3. Batch Operations
```lua
-- Instead of multiple individual queries
for i = 1, #items do
    exports.oxmysql:insert_async('INSERT INTO inventory (item_id, quantity) VALUES (?, ?)', { items[i].id, items[i].quantity })
end

-- Use a transaction for better performance
local queries = {}
for i = 1, #items do
    queries[#queries + 1] = {
        query = 'INSERT INTO inventory (item_id, quantity) VALUES (?, ?)',
        values = { items[i].id, items[i].quantity }
    }
end
exports.oxmysql:transaction_async(queries)
```

### 4. Prepare vs Regular Queries
Use `prepare` or `rawExecute` for frequently executed queries:
```lua
-- For queries executed many times
local getUserQuery = 'SELECT * FROM users WHERE id = ?'

-- Regular execution (less efficient for repeated use)
local user1 = exports.oxmysql:single_async(getUserQuery, { 1 })
local user2 = exports.oxmysql:single_async(getUserQuery, { 2 })

-- Prepared execution (more efficient for repeated use)
local user1 = exports.oxmysql:prepare_async(getUserQuery, { 1 })
local user2 = exports.oxmysql:prepare_async(getUserQuery, { 2 })
```

---

## Complete Example: User Management System

```lua
-- User Management Class using OxMySQL exports
local UserManager = {}

-- Create a new user
function UserManager.CreateUser(identifier, firstname, lastname, email)
    local insertId = exports.oxmysql:insert_async(
        'INSERT INTO users (identifier, firstname, lastname, email, created_at) VALUES (?, ?, ?, ?, NOW())',
        { identifier, firstname, lastname, email }
    )
    
    if insertId then
        print('User created with ID:', insertId)
        return insertId
    else
        print('Failed to create user')
        return false
    end
end

-- Get user by identifier
function UserManager.GetUser(identifier)
    local user = exports.oxmysql:single_async(
        'SELECT * FROM users WHERE identifier = ? LIMIT 1',
        { identifier }
    )
    
    return user
end

-- Get all active users
function UserManager.GetActiveUsers()
    local users = exports.oxmysql:query_async(
        'SELECT id, firstname, lastname, email FROM users WHERE active = ? ORDER BY lastname',
        { true }
    )
    
    return users or {}
end

-- Update user email
function UserManager.UpdateEmail(userId, newEmail)
    local affectedRows = exports.oxmysql:scalar_async(
        'UPDATE users SET email = ?, updated_at = NOW() WHERE id = ?',
        { newEmail, userId }
    )
    
    return affectedRows > 0
end

-- Transfer money between users (using transaction)
function UserManager.TransferMoney(fromUserId, toUserId, amount)
    local queries = {
        {
            query = 'UPDATE users SET money = money - ? WHERE id = ? AND money >= ?',
            values = { amount, fromUserId, amount }
        },
        {
            query = 'UPDATE users SET money = money + ? WHERE id = ?',
            values = { amount, toUserId }
        },
        {
            query = 'INSERT INTO transactions (from_user, to_user, amount, created_at) VALUES (?, ?, ?, NOW())',
            values = { fromUserId, toUserId, amount }
        }
    }
    
    local success = exports.oxmysql:transaction_async(queries)
    
    if success then
        print(string.format('Successfully transferred $%d from user %d to user %d', amount, fromUserId, toUserId))
    else
        print('Transfer failed - insufficient funds or database error')
    end
    
    return success
end

-- Get user count
function UserManager.GetUserCount()
    local count = exports.oxmysql:scalar_async('SELECT COUNT(*) FROM users WHERE active = ?', { true })
    return count or 0
end

-- Delete user (soft delete)
function UserManager.DeleteUser(userId)
    local success = exports.oxmysql:scalar_async(
        'UPDATE users SET active = ?, deleted_at = NOW() WHERE id = ?',
        { false, userId }
    )
    
    return success > 0
end

return UserManager
```

---

## Migration from mysql-async

If you're migrating from mysql-async, here are the equivalent OxMySQL export calls:

```lua
-- mysql-async -> OxMySQL exports
MySQL.Async.fetchAll() -> exports.oxmysql:query()
MySQL.Async.fetchScalar() -> exports.oxmysql:scalar()
MySQL.Async.insert() -> exports.oxmysql:insert()
MySQL.Async.execute() -> exports.oxmysql:query()

-- For async/await style
MySQL.Sync.fetchAll() -> exports.oxmysql:query_async()
MySQL.Sync.fetchScalar() -> exports.oxmysql:scalar_async()
MySQL.Sync.insert() -> exports.oxmysql:insert_async()
```

---

*This documentation covers the complete OxMySQL function reference with emphasis on using exports for better compatibility and performance. Always prefer the export syntax for new projects and when updating existing code.*