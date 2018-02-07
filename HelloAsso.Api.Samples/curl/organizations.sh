# You need to set MyBasicToken to your token base64(id:key)

# list organizations
curl -X GET \
  https://api.helloasso.com/v3/organizations.json \
  -H 'Authorization: Basic MyBasicToken'

# get organizations detail
curl -X GET \
  https://api.helloasso.com/v3/organizations/000000249671.json \
  -H 'Authorization: Basic MyBasicToken'