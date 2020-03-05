## Endpoints

#### **All values are strings unless otherwise noted**

#### **All values are required unless otherwise noted**

**Unprotected Endpoints (token needed)**
------------------------------------------

###Register

### POST  https://build-african-marketplace.herokuapp.com/api/auth/register/customer
* Endpoint to register a new customer
* Request example:

```
{
	"username": "seeduser2",
	"password": "password123",
	"name": "Handell Desulme",
	"email_address": "hd@example.com"
}
```

* Returns new customer:

```
{
  "id": 3,
  "username": "seeduser2",
  "password": "$2a$08$bxkaeRu0H6QRybQpCcQZZ.PMmcwBo/P3TF7nijBUZUQJOXRjtck5y",
  "name": "Handell Desulme",
  "email_address": "hd@example.com",
}
```

### POST  https://build-african-marketplace.herokuapp.com/api/auth/register/seller
* Endpoint to register a new seller
* Request example:

```
{
	"username": "seeduser2",
	"password": "password123",
	"name": "Handell Desulme",
	"about_me": "I sell produce",
	"email_address": "hd@example.com"
}
```

* Returns new seller:

```
{
  "id": 3,
  "username": "seeduser2",
  "password": "$2a$08$bxkaeRu0H6QRybQpCcQZZ.PMmcwBo/P3TF7nijBUZUQJOXRjtck5y",
  "name": "Handell Desulme",
  "email_address": "hd@example.com",
  "about_me": "I sell produce"
}
```

###Login

### POST  https://build-african-marketplace.herokuapp.com/api/auth/login/customer
* Endpoint to login as a customer
* Request example: 

```
{
  "username": "seeduser2",
  "password": "password123"
}
```

* Returns id and token:

```
{
  "user": "seeduser2",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjozLCJ1c2VybmFtZSI6InNlZWR1c2VyMiIsImlhdCI6MTU4MzQ0NDQ3NiwiZXhwIjoxNTgzNDUxNjc2fQ.TCpqGL4FOv4Jb46KDyNkpQX9NST-TgFIAR40q-0OSTE"
}
```

### POST  https://build-african-marketplace.herokuapp.com/api/auth/login/seller
* Endpoint to login as a seller
* Request example:


```
{
  "username": "seeduser2",
  "password": "password123"
}
```

* Returns id and token:

```
{
  "user": "seeduser2",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjozLCJ1c2VybmFtZSI6InNlZWR1c2VyMiIsImlhdCI6MTU4MzQ0NDQ3NiwiZXhwIjoxNTgzNDUxNjc2fQ.TCpqGL4FOv4Jb46KDyNkpQX9NST-TgFIAR40q-0OSTE"
}
```

**Protected Endpoints (token needed)**
------------------------------------------

### POST https://build-african-marketplace.herokuapp.com/api/items

* Create items
* Return example: 

```
{
    item id: "", 
    name: "", 
    description: "", 
    price: "", 
    currency: "", 
    category id: "", 
    category name: "", 
    market id: ""
}
```

### GET https://build-african-marketplace.herokuapp.com/api/items

* Retrieve all items
* Return example: 

```
[
    {
        item id: "", 
        name: "", 
        description: "", 
        price: "", 
        currency: "", 
        category id: "", 
        category name: ""
    }
]
```

### GET https://build-african-marketplace.herokuapp.com/api/:itemid || api/items/:sellerid || api/items/:username

* Retrieve items from a specified seller
* Return example: 

```
{
  item id: "", 
  name: "", 
  description: "", 
  price: "", 
  currency: "", 
  category id: "", 
  category name: "", 
  seller id: "", 
  market id: ""
}
```

### GET https://build-african-marketplace.herokuapp.com/api/categories

* Retrieve all categories
* Return example: 

```
[
    {
      category id: "", 
      name: "" 
    }
]
```

### GET https://build-african-marketplace.herokuapp.com/api/locations

* Retrieve market locations
* Return example: 

```
[
    {
        location id: "", 
        address: "", 
        city: "", 
        state: "", 
        postal code: ""
    }
]
```

### PUT https://build-african-marketplace.herokuapp.com/api/:sellerid || api/:username

* Edit/Update user (seller) info
* Return example: 

```
{
    seller id: "", 
    username (unique): "", 
    password: "", 
    first name: "", 
    last name: "", 
    email address: "", 
    about me: ""
}
```

### PUT https://build-african-marketplace.herokuapp.com/api/:itemid

* Edit/Update item info
* Return example: 

```
{
    item id: "", 
    name: "", 
    description: "", 
    price: "", 
    currency: "", 
    category id: "", 
    category name: "", 
    seller id: "", 
    market id: ""
}
```

### DELETE https://build-african-marketplace.herokuapp.com/api/:sellerid || api/:username

* Remove user (seller) account
* Return example: 

```
{
    seller id: "", 
    username (unique): "", 
    password: "", 
    first name: "", 
    last name: "", 
    email address: "", 
    about me: ""
}
```

### DELETE https://build-african-marketplace.herokuapp.com/api/:itemid

* Remove item listing
* Return example: 

```
{
    item id: "", 
    name: "", 
    description: "", 
    price: "", 
    currency: "", 
    category id: "", 
    category name: "", 
    seller id: "", 
    market id: ""
}
```
