# You need to set MyBasicToken to your token base64(id:key)

# list campaigns
curl -X GET \
  https://api.helloasso.com/v3/campaigns.json \
  -H 'Authorization: Basic MyBasicToken'

# list organization's campaigns
curl -X GET \
  https://api.helloasso.com/v3/organizations/000000249671/campaigns.json \
  -H 'Authorization: Basic MyBasicToken'

# list event campaigns
curl -X GET \
  https://api.helloasso.com/v3/campaigns.json?type=EVENT \
  -H 'Authorization: Basic MyBasicToken'

# list event created after 01/01/2018 and before 01/02/2018, updated after 15/01/2018 and before 30/01/2018
curl -X GET \
  https://api.helloasso.com/v3/campaigns.json?type=EVENT&createdFrom=2018-01-01T00:00:00&createdTo=2018-02-01T00:00:00&updatedFrom=2018-01-15T00:00:00&updatedTo=2018-01-30T00:00:00 \
  -H 'Authorization: Basic MyBasicToken'

# get campaign detail
curl -X GET \
  https://api.helloasso.com/v3/campaigns/000000329511.json \
  -H 'Authorization: Basic MyBasicToken'