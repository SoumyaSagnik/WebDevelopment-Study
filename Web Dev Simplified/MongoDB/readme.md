# MongoDB

### Enter terminal

#### mongosh

### Show dtabases

#### show dbs

### Use a database

#### use <database_name>

<span style="color:orangered">In case db doesn't exist it'll create a new db with the specified name and put us inside of that.</span>

### View collections in the database

#### show collections

<p style="color:orangered">
    In MongoDb we have databases and collections. Databases are like normal dbs as in sql. Collections are tables inside of a database.
</p>

### Delete database

<p>db.dropDatabase() <span style="color:greenyellow"> When you're inside the db to be deleted.</span></p>

### Clear Screen in mongosh

#### cls

<p style="color:orangered">MongoDB is different from other databases in a way that you don't need to create anything in order to store data. Whenever you try to access something that's not already present, and you try to put data in it, MongoDB will create them automatically for you.</p>

### Exit terminal

#### exit

### Return the db you're in

#### db

### Insert data into a collection

<p>db.users.insertOne({ name: "John" }) <span style="color:greenyellow"> users -> name of collection.</span></p>

### Select \* from users

#### db.users.find()

<p style="color:orangered">
    MongoDB automatically generates a unique id '_id' every time you insert a record. There's no schema, no columns in MongoDB. The thing you have to worry about instead is called document. Every single object you store inside of a database in MongoDB is called a document. Documents live in collections, and collections live inside of databases.
</p>

<p style="color:orangered">
    We can insert anything and everything in a collection in MongoDB since we don't need to worry about schema or column(s).
</p>

#### db.users.insertOne({ name: "Sally", age: 19, address: { street: "987 BOSTON Street" }, hobbies: ["Singing", "Dancing"] })

### Insert Multiple records at once.

#### db.users.insertMany([{ name: "Jill" }, { name: "Mike" }])

### limit

#### db.users.find().limit(2)

### ascending sort

#### db.users.find().sort({ name: 1 })

### descending sort

#### db.users.find().sort({ name: -1 })

### Sort by multiple fields

#### db.users.find().sort({ age: 1, name: -1 })

<p style="color:orangered">
    Point to be noted here is that if all the documents don't have let's say age here, the one's not having age will come first then the ones that have will appear in ascending order and if two or more people have the same age then they would be sorted in descending order of their names.
</p>

### Skip

#### appdb> db.users.find().skip(1).sort({ name: -1 })

<p style="color:orangered">
    This will include everything but the first document obtained after sorting names in descending order.   
</p>

### Second oldest person query

#### db.users.find().skip(1).sort({ age: -1 }).limit(1)

### where euqivalent with SELECT

#### db.users.find({ name: "Kyle" })

<p style="color:orangered">
    SQL Equivaluent: SELECT * FROM users where `name`="Kyle";   
</p>

#### db.users.find({ age: 27 })

<p style="color:orangered">
    It is important to note that age here is a number and 27 !== "27".   
</p>

### Select only particular columns

#### db.users.find({}, { name: 1, age: 1, \_id: 0 })

<p style="color:orangered">
    SQL Equivalent: SELECT name, age FROM users;
</p>
<p style="color:orangered">By default id is also shown hence _id: 0.</p>

### Fetch all columns except age

#### db.users.find({}, { age: 0 })

---

## Complex Queries

### Users whose name is Kyle

#### db.users.find({ name: { $eq: "Kyle" }})

### Users whose name is not Kyle

#### db.users.find({ name: { $ne: "Kyle" } })

### Users having age > 13

#### db.users.find({ age: { $gt: 13 } })

<p style="color:orangered">Note that documents not having age will not be shown.</p>

### Users having age >= 13

#### db.users.find({ age: { $gte: 13 } })

### Users having age <= 20

#### db.users.find({ age: { $lte: 20 } })

### Users having name Kyle or Sally

#### db.users.find({ name: { $in: ["Kyle", "Sally"] } })

### Users not having name Kyle or Sally

#### db.users.find({ name: { $nin: ["Kyle", "Sally"] } })

### Names of users other than Kyle or Sally

#### db.users.find({ name: { $nin: ["Kyle", "Sally"] }}, { name: 1, \_id: 0 })

### Documents having age as a key.

#### db.users.find({ age: { $exists: true }})

### Documents that don't have age.

#### db.users.find( {age: { $exists: false }})

<p style="color:orangered">Point to be noted here is that this will only check if the key exists or not. If there is a document that has the age key set to null, that will be returned with the above query.</p>

### Age < 20 and Age >= 10

#### db.users.find( { age: { $lt: 20, $gte: 10 }})

### Name = Kyle and age = 27

#### db.users.find({ name: "Kyle", age: 27 })

#### db.users.find( { name: {$eq: "Kyle"}, age: 27})

#### db.users.find({ $and: [{ name: "Kyle" }, { age: 27 }]})

<p style="color:orangered">These are all ANDs. However, ORs can be done only using one way.</p>

### Name = Kyle or age doesn't exist.

#### db.users.find({ $or: [{name: "Kyle"}, {age: {$exists: false}}] })

<p style="color:orangered">There's no other way to do or and hence this is important.</p>

### documents where age !== 27

#### db.users.find({ age: { $ne: 27 } })

#### db.users.find({ age: { $not: { $eq: 27 } } })

### documents where age exists and age !== null.

#### db.users.find({ age: { $ne: null, $exists: true } })

#### db.users.find({ $and: [{ age: { $exists: true, $ne: null }}] })

### Users who have balance > debt, where balance and debt are two keys.

#### db.users.find({ $expr: { $gt: [ "$balance", "$debt" ] } })

<p style="color:orangered">balance and debt are equivalnet of two columns in SQL. Another thing to note here is that in order to access a particular key/ column we have to include the $ sign inside of "" quotes.</p>

### Queries on nested field.

#### db.users.find({"address.street": "987 BOSTON Street"})

### Find one

#### db.users.findOne({ age: {$exists: true} })

<p style="color:orangered">Returns the first result. by default order by is _id.</p>

### Count. Find users count with age less than or equal to 50.

---

## Updating data

### Update Mr. Wonderful's age to 68.

#### db.users.updateOne({ name: "Mr. Wonderful" }, { $set: {age: 68} })

### Increase Sally's age by 3.

#### db.users.updateOne({ name: "Sally" }, { $inc: { age: 3 } })

### Decrease the age of Kyle by 1.

#### db.users.updateOne({ name: "Kyle" }, { $inc: { age: -1 } })

### Rename Column. Set name as firstName for Billy.

#### db.users.updateOne({ name: "Billy" }, { $rename: { name: "firstName" } })

### Remove a property/ column. Remove age property for Mark Cuban.

#### db.users.updateOne({name: "Mark Cuban"}, { $unset: { age: "" } })

<p style="color:orangered">Note that this will completely remove the age property and not set it to null or something.</p>

### Add swimming as a hobby for Mark Cuban. hobbies here is an array.

#### db.users.updateOne({ name: "Mark Cuban" }, { $push: { hobbies: "Swimming" } })

### Remove singing as a hobby for Sally.

#### db.users.updateOne({ name: "Sally" }, { $pull: { hobbies: "Singing" } })

### Update Many. Add a property of rich: true for Mark Cuban and Mr. Wonderful.

#### db.users.updateMany({ name: { $in: ["Mr. Wonderful", "Mark Cuban"] }}, { $set: { rich: true } })

---

## Replace

<p style="color:orangered">Replace will basically replace an entire record/ document with another object passed by the user. Usually this is not used as much as update.</p>

### Replace document having firstName as Billy

#### db.users.replaceOne({ firstName: "Billy" }, { name: "Billy", age: 21 })

---

## Delete

### Delete One

#### db.users.deleteOne({ name: "Billy" })

### Delete Many.

## db.users.deleteMany({ age: { $exists: false } })

<p style="color:orangered">Deleting all records/ documents not having age parameter.</p>
