//create user
http://localhost:8000/api/users
method:post
request body
{
    "username":"aaa",
    "password":"123"
}
//create client
http://localhost:8000/api/clients
method:post
Basic Auth
    Username:"aaa",
    "password":"123"
request form-urlencoded
{
    "name":"client name",
    "id":"client id",
    "secret":"client_secrete"
}

//Open up your favorite web browser and browse to: http://localhost:3000/api/oauth2/authorize?client_id=this_is_my_id&response_type=code&redirect_uri=http://localhost:8000.


we will want to POST to http://localhost:3000/api/oauth2/token
//basic Auth
Username:"client_id",
Password:"secret_id"


//form-urlencode
code:"browser code"
grant_type:"authorization_code"
redirect_uri:"http:localhost:8000"


//All you have to do is make GET, POST, PUT, or DELETE requests to the API endpoints we made in billings
http:localhost:8000/api/billings
//headers
Authorization:token(that is response of value from token url)