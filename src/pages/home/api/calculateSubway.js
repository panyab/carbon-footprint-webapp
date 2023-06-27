import axios from "axios";

export default function calculatePublic(req, res) {
    const options = {
        method: 'GET',
        url: 'https://carbonfootprint1.p.rapidapi.com/CarbonFootprintFromPublicTransit',
        params: {
          distance: req.query.subwaydist,
          type: 'Subway'
        },
        headers: {
          'X-RapidAPI-Key': '26ef3dafabmsh412b29197d34de2p19385fjsn26ea48a5f3d1',
          'X-RapidAPI-Host': 'carbonfootprint1.p.rapidapi.com'
        }
      };
      
      axios
        .request(options)
        .then(function (response) {
        res.status(200).json(response.data);
        })
        .catch(function (error) {
        console.error(error);
        });
}
