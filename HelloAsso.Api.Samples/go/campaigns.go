package campaigns

import (
	"fmt"
	"net/http"
	"io/ioutil"
	"encoding/base64"
)

// You need to set id and key
id := ""
key := ""
data := []byte(id + ":" + key)
token := base64.StdEncoding.EncodeToString(data)

// list campaigns
func ListCampaigns() {

	url := "https://api.helloasso.com/v3/campaigns.json"

	req, _ := http.NewRequest("GET", url, nil)

	req.Header.Add("Authorization", "Basic " + token)

	res, _ := http.DefaultClient.Do(req)

	defer res.Body.Close()
	body, _ := ioutil.ReadAll(res.Body)

	fmt.Println(res)
	fmt.Println(string(body))

}

// list organization's campaigns
func ListOrganizationCampaigns() {

	url := "https://api.helloasso.com/v3/organizations/000000249671/campaigns.json"

	req, _ := http.NewRequest("GET", url, nil)

	req.Header.Add("Authorization", "Basic " + token)

	res, _ := http.DefaultClient.Do(req)

	defer res.Body.Close()
	body, _ := ioutil.ReadAll(res.Body)

	fmt.Println(res)
	fmt.Println(string(body))

}

// list event campaigns
func ListEventCampaigns() {

	url := "https://api.helloasso.com/v3/campaigns.json?type=EVENT"

	req, _ := http.NewRequest("GET", url, nil)

	req.Header.Add("Authorization", "Basic " + token)

	res, _ := http.DefaultClient.Do(req)

	defer res.Body.Close()
	body, _ := ioutil.ReadAll(res.Body)

	fmt.Println(res)
	fmt.Println(string(body))

}

// list event created after 01/01/2018 and before 01/02/2018, updated after 15/01/2018 and before 30/01/2018
func ListEventByDate() {

	url := "https://api.helloasso.com/v3/campaigns.json?type=EVENT&createdFrom=2018-01-01T00:00:00&createdTo=2018-02-01T00:00:00&updatedFrom=2018-01-15T00:00:00&updatedTo=2018-01-30T00:00:00"

	req, _ := http.NewRequest("GET", url, nil)

	req.Header.Add("Authorization", "Basic " + token)

	res, _ := http.DefaultClient.Do(req)

	defer res.Body.Close()
	body, _ := ioutil.ReadAll(res.Body)

	fmt.Println(res)
	fmt.Println(string(body))

}

// get campaign detail
func GetCampaignDetail() {

	url := "https://api.helloasso.com/v3/campaigns/000000329511.json"

	req, _ := http.NewRequest("GET", url, nil)

	req.Header.Add("Authorization", "Basic " + token)

	res, _ := http.DefaultClient.Do(req)

	defer res.Body.Close()
	body, _ := ioutil.ReadAll(res.Body)

	fmt.Println(res)
	fmt.Println(string(body))

}