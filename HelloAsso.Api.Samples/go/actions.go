package actions

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

// list actions
func ListActions() {

	url := "https://api.helloasso.com/v3/actions.json"

	req, _ := http.NewRequest("GET", url, nil)

	req.Header.Add("Authorization", "Basic " + token)

	res, _ := http.DefaultClient.Do(req)

	defer res.Body.Close()
	body, _ := ioutil.ReadAll(res.Body)

	fmt.Println(res)
	fmt.Println(string(body))

}

// list organization's actions
func ListOrganizationActions() {

	url := "https://api.helloasso.com/v3/organizations/000000249671/actions.json"

	req, _ := http.NewRequest("GET", url, nil)

	req.Header.Add("Authorization", "Basic " + token)

	res, _ := http.DefaultClient.Do(req)

	defer res.Body.Close()
	body, _ := ioutil.ReadAll(res.Body)

	fmt.Println(res)
	fmt.Println(string(body))

}

// list campaign's actions
func ListCampaignActions() {

	url := "https://api.helloasso.com/v3/organizations/000000249671/campaigns/000000026934/actions.json"

	req, _ := http.NewRequest("GET", url, nil)

	req.Header.Add("Authorization", "Basic " + token)

	res, _ := http.DefaultClient.Do(req)

	defer res.Body.Close()
	body, _ := ioutil.ReadAll(res.Body)

	fmt.Println(res)
	fmt.Println(string(body))

}

// list donation actions
func LisDonationActions() {

	url := "https://api.helloasso.com/v3/actions.json?type=DONATION"

	req, _ := http.NewRequest("GET", url, nil)

	req.Header.Add("Authorization", "Basic " + token)

	res, _ := http.DefaultClient.Do(req)

	defer res.Body.Close()
	body, _ := ioutil.ReadAll(res.Body)

	fmt.Println(res)
	fmt.Println(string(body))

}

// list actions created after 01/01/2018 and before 31/01/2018
func ListActionByDate() {

	url := "https://api.helloasso.com/v3/actions.json?from=2018-01-01T00:00:00&to=2018-01-31T00:00:00"

	req, _ := http.NewRequest("GET", url, nil)

	req.Header.Add("Authorization", "Basic " + token)

	res, _ := http.DefaultClient.Do(req)

	defer res.Body.Close()
	body, _ := ioutil.ReadAll(res.Body)

	fmt.Println(res)
	fmt.Println(string(body))

}

// get action detail
func GetActionDetail() {

	url := "https://api.helloasso.com/v3/actions/000034043170.json"

	req, _ := http.NewRequest("GET", url, nil)

	req.Header.Add("Authorization", "Basic " + token)

	res, _ := http.DefaultClient.Do(req)

	defer res.Body.Close()
	body, _ := ioutil.ReadAll(res.Body)

	fmt.Println(res)
	fmt.Println(string(body))

}