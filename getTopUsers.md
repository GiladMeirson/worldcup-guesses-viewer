curl 'https://hevre.sport5.co.il/server/data.php?type=getTopUsers' \
  -H 'accept: application/json, text/plain, */*' \
  -H 'accept-language: he-IL,he;q=0.9,en-US;q=0.8,en;q=0.7' \
  -H 'authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJpYXQiOjE3ODMwNzY3NDMsImlzcyI6ImhldnJlLnNwb3J0NS5jby5pbCIsIm5iZiI6MTc4MzA3Njc0MywiZXhwIjoxNzgzMjQ5NTQzLCJlbWFpbCI6ImdpbGFkLm1laXJzb25AZ21haWwuY29tIn0.m_vixG-TEMLda-G_qw5GKrygzaw42Tcg8oY80msl5aU7KXBlIakrNKaFg6p9FrSGJVZN9amktQcU5RNO_xmMIw' \
  -H 'content-type: text/plain;charset=UTF-8' \
  -b 'FCCDCF=%5Bnull%2Cnull%2Cnull%2Cnull%2Cnull%2Cnull%2C%5B%5B32%2C%22%5B%5C%22a824fc11-86b2-4d3b-900e-c03176f4068f%5C%22%2C%5B1781094200%2C347000000%5D%5D%22%5D%5D%5D; _pubcid=12f02e05-de1e-4090-a80d-f738a4ddcad9; _ga=GA1.1.1984112241.1781094201; _cc_id=a59c03df3a7dc54033a564855ffdc20b; cto_bundle=0L7vFl9NJTJGRlQ1eSUyQk9CT1gxYlh6MiUyRkp4MDRRYVppZ1RSM0F2SFRTSFNlMmV3eFJTbEtuQk5RTGVYcFNZYldnN0VxR3JNNnZvOCUyRlJUOXpqRVJLUmtDanZwTmR4ekRlZFo1alZWRGJNVVZJbDg1Wkl6NG5SQVBTZWZ4JTJCa3BIRTRvcUwyd1MxTyUyRlVJQVAwZ2xXWmk4MG81Skg4JTJGdyUzRCUzRA; PHPSESSID=b1298ec1143227edf20b839223113b4b; panoramaId_expiry=1783681544976; panoramaId=fc3a8c60721f008738a16973506416d53938d963b7ff922414b90e4c0d42386e; panoramaIdType=panoIndiv; FCNEC=%5B%5B%22AKsRol8wwW9FyYVpt3zknlrX4a6HqV70OWfer6p-C6yOLfKPOv0Gvsycnj7NCALN2V0cHp9zmXk-sDtUVhfadMMxWlGr8EaGbIGzj4VcQ_l_PyQ3mWI0eO8Bb-BDwQB2rzvgdVrGCdSXklVTOwmNol6tRsTwNjNmCQ%3D%3D%22%5D%5D; _ga_2CB9C29485=GS2.1.s1783076744$o2$g1$t1783084878$j60$l0$h0; _ga_4B37KQBXZ1=GS2.1.s1783076744$o2$g1$t1783084878$j60$l0$h0' \
  -H 'origin: https://hevre.sport5.co.il' \
  -H 'priority: u=1, i' \
  -H 'referer: https://hevre.sport5.co.il/' \
  -H 'sec-ch-ua: "Google Chrome";v="149", "Chromium";v="149", "Not)A;Brand";v="24"' \
  -H 'sec-ch-ua-mobile: ?0' \
  -H 'sec-ch-ua-platform: "Windows"' \
  -H 'sec-fetch-dest: empty' \
  -H 'sec-fetch-mode: cors' \
  -H 'sec-fetch-site: same-origin' \
  -H 'user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/149.0.0.0 Safari/537.36' \
  --data-raw '{}'


response example: 
[
    {
        "_id": {
            "$oid": "6a157d4630cb12a8d60ec895"
        },
        "points": 255,
        "scorer": {
            "name": "צרפת",
            "img": "data/images/1779616594735.png",
            "ratio": 30,
            "tid": "196a12cb4992382",
            "isChampion": false,
            "nominated": true,
            "code": "3006"
        },
        "champion": {
            "name": "צרפת",
            "img": "data/images/1779616594735.png",
            "ratio": 30,
            "tid": "196a12cb4992382",
            "isChampion": false,
            "nominated": true,
            "code": "3006"
        },
        "name": "עדי משיח",
        "image": null,
        "pointsFromScrorer": 14,
        "pointsFromScrorerKing": 0,
        "id": "6a157d4630cb12a8d60ec895"
    },
    {
        "_id": {
            "$oid": "6a170271012e79c73a0d8383"
        },
        "points": 248,
        "scorer": {
            "name": "ברזיל",
            "img": "data/images/1779616207110.png",
            "ratio": 50,
            "tid": "86a12c9d253919",
            "isChampion": false,
            "nominated": true,
            "code": "3536"
        },
        "champion": {
            "name": "ברזיל",
            "img": "data/images/1779616207110.png",
            "ratio": 50,
            "tid": "86a12c9d253919",
            "isChampion": false,
            "nominated": true,
            "code": "3536"
        },
        "name": "Meir Sarusi",
        "image": null,
        "pointsFromScrorer": 12,
        "pointsFromScrorerKing": 0,
        "id": "6a170271012e79c73a0d8383"
    },
    {
        "_id": {
            "$oid": "6a2aaa5044887554ef0fe243"
        },
        "points": 243,
        "scorer": {
            "name": "פורטוגל",
            "img": "data/images/1779617016422.png",
            "ratio": 60,
            "tid": "356a12ccfa04833",
            "isChampion": false,
            "nominated": true,
            "code": "3640"
        },
        "champion": {
            "name": "פורטוגל",
            "img": "data/images/1779617016422.png",
            "ratio": 60,
            "tid": "356a12ccfa04833",
            "isChampion": false,
            "nominated": true,
            "code": "3640"
        },
        "name": "Menny Halfon",
        "image": null,
        "pointsFromScrorer": 12,
        "pointsFromScrorerKing": 0,
        "id": "6a2aaa5044887554ef0fe243"
    },
    {
        "_id": {
            "$oid": "6a2addc139c1be1f2c05efcd"
        },
        "points": 241.5,
        "scorer": {
            "name": "פורטוגל",
            "img": "data/images/1779617016422.png",
            "ratio": 60,
            "tid": "356a12ccfa04833",
            "isChampion": false,
            "nominated": true,
            "code": "3640"
        },
        "champion": {
            "name": "פורטוגל",
            "img": "data/images/1779617016422.png",
            "ratio": 60,
            "tid": "356a12ccfa04833",
            "isChampion": false,
            "nominated": true,
            "code": "3640"
        },
        "name": "itai half",
        "image": null,
        "pointsFromScrorer": 14,
        "pointsFromScrorerKing": 0,
        "id": "6a2addc139c1be1f2c05efcd"
    },
    {
        "_id": {
            "$oid": "6a27d8fce55c502847070984"
        },
        "points": 241,
        "scorer": {
            "name": "פורטוגל",
            "img": "data/images/1779617016422.png",
            "ratio": 60,
            "tid": "356a12ccfa04833",
            "isChampion": false,
            "nominated": true,
            "code": "3640"
        },
        "champion": {
            "name": "פורטוגל",
            "img": "data/images/1779617016422.png",
            "ratio": 60,
            "tid": "356a12ccfa04833",
            "isChampion": false,
            "nominated": true,
            "code": "3640"
        },
        "name": "Kohava Elisha",
        "image": null,
        "pointsFromScrorer": 11,
        "pointsFromScrorerKing": 0,
        "id": "6a27d8fce55c502847070984"
    },
    {
        "_id": {
            "$oid": "6a22fd006918f54dea0a92c4"
        },
        "points": 239.5,
        "scorer": {
            "name": "ספרד",
            "img": "data/images/1779620432924.png",
            "ratio": 30,
            "tid": "186a12cb3425ae4",
            "isChampion": false,
            "nominated": true,
            "code": "3003"
        },
        "champion": {
            "name": "ספרד",
            "img": "data/images/1779620432924.png",
            "ratio": 30,
            "tid": "186a12cb3425ae4",
            "isChampion": false,
            "nominated": true,
            "code": "3003"
        },
        "name": "דודו מ",
        "image": null,
        "pointsFromScrorer": 14,
        "pointsFromScrorerKing": 0,
        "id": "6a22fd006918f54dea0a92c4"
    },
    {
        "_id": {
            "$oid": "6a22dc3e4f4208e80f0ee352"
        },
        "points": 238,
        "scorer": {
            "name": "אנגליה",
            "img": "data/images/1779616604697.png",
            "ratio": 40,
            "tid": "206a12cb65d904e",
            "isChampion": false,
            "nominated": true,
            "code": "3770"
        },
        "champion": {
            "name": "אנגליה",
            "img": "data/images/1779616604697.png",
            "ratio": 40,
            "tid": "206a12cb65d904e",
            "isChampion": false,
            "nominated": true,
            "code": "3770"
        },
        "name": "אבי אשכנזי",
        "image": null,
        "pointsFromScrorer": 8,
        "pointsFromScrorerKing": 0,
        "id": "6a22dc3e4f4208e80f0ee352"
    },
    {
        "_id": {
            "$oid": "6a29587f821681061108e9c2"
        },
        "points": 236,
        "scorer": {
            "name": "ברזיל",
            "img": "data/images/1779616207110.png",
            "ratio": 50,
            "tid": "86a12c9d253919",
            "isChampion": false,
            "nominated": true,
            "code": "3536"
        },
        "champion": {
            "name": "ברזיל",
            "img": "data/images/1779616207110.png",
            "ratio": 50,
            "tid": "86a12c9d253919",
            "isChampion": false,
            "nominated": true,
            "code": "3536"
        },
        "name": "ערן עמר",
        "image": null,
        "pointsFromScrorer": 12,
        "pointsFromScrorerKing": 0,
        "id": "6a29587f821681061108e9c2"
    },
    {
        "_id": {
            "$oid": "6a2466949935103c9b0ca322"
        },
        "points": 235,
        "scorer": {
            "name": "ספרד",
            "img": "data/images/1779620432924.png",
            "ratio": 30,
            "tid": "186a12cb3425ae4",
            "isChampion": false,
            "nominated": true,
            "code": "3003"
        },
        "champion": {
            "name": "ספרד",
            "img": "data/images/1779620432924.png",
            "ratio": 30,
            "tid": "186a12cb3425ae4",
            "isChampion": false,
            "nominated": true,
            "code": "3003"
        },
        "name": "Ramy Bukra",
        "image": null,
        "pointsFromScrorer": 14,
        "pointsFromScrorerKing": 0,
        "id": "6a2466949935103c9b0ca322"
    },
    {
        "_id": {
            "$oid": "6a1b1660f003efbbf30976e2"
        },
        "points": 235,
        "scorer": {
            "name": "פורטוגל",
            "img": "data/images/1779617016422.png",
            "ratio": 60,
            "tid": "356a12ccfa04833",
            "isChampion": false,
            "nominated": true,
            "code": "3640"
        },
        "champion": {
            "name": "פורטוגל",
            "img": "data/images/1779617016422.png",
            "ratio": 60,
            "tid": "356a12ccfa04833",
            "isChampion": false,
            "nominated": true,
            "code": "3640"
        },
        "name": "Snir Katan",
        "image": null,
        "pointsFromScrorer": 14,
        "pointsFromScrorerKing": 0,
        "id": "6a1b1660f003efbbf30976e2"
    },
    {
        "_id": {
            "$oid": "6a28df6d06b69b9989026512"
        },
        "points": 234.5,
        "scorer": {
            "name": "פורטוגל",
            "img": "data/images/1779617016422.png",
            "ratio": 60,
            "tid": "356a12ccfa04833",
            "isChampion": false,
            "nominated": true,
            "code": "3640"
        },
        "champion": {
            "name": "פורטוגל",
            "img": "data/images/1779617016422.png",
            "ratio": 60,
            "tid": "356a12ccfa04833",
            "isChampion": false,
            "nominated": true,
            "code": "3640"
        },
        "name": "ענבל מור",
        "image": null,
        "pointsFromScrorer": 14,
        "pointsFromScrorerKing": 0,
        "id": "6a28df6d06b69b9989026512"
    },
    {
        "_id": {
            "$oid": "6a2a5529d80bd6de8106dd54"
        },
        "points": 234.5,
        "scorer": {
            "name": "פורטוגל",
            "img": "data/images/1779617016422.png",
            "ratio": 60,
            "tid": "356a12ccfa04833",
            "isChampion": false,
            "nominated": true,
            "code": "3640"
        },
        "champion": {
            "name": "פורטוגל",
            "img": "data/images/1779617016422.png",
            "ratio": 60,
            "tid": "356a12ccfa04833",
            "isChampion": false,
            "nominated": true,
            "code": "3640"
        },
        "name": "טל ארזי",
        "image": null,
        "pointsFromScrorer": 7,
        "pointsFromScrorerKing": 0,
        "id": "6a2a5529d80bd6de8106dd54"
    },
    {
        "_id": {
            "$oid": "6a2af2733a768ce25c00fec8"
        },
        "points": 234,
        "scorer": {
            "name": "פורטוגל",
            "img": "data/images/1779617016422.png",
            "ratio": 60,
            "tid": "356a12ccfa04833",
            "isChampion": false,
            "nominated": true,
            "code": "3640"
        },
        "champion": {
            "name": "פורטוגל",
            "img": "data/images/1779617016422.png",
            "ratio": 60,
            "tid": "356a12ccfa04833",
            "isChampion": false,
            "nominated": true,
            "code": "3640"
        },
        "name": "eran hayo",
        "image": null,
        "pointsFromScrorer": 14,
        "pointsFromScrorerKing": 0,
        "id": "6a2af2733a768ce25c00fec8"
    },
    {
        "_id": {
            "$oid": "6a1fd5ab541a1940dd071992"
        },
        "points": 234,
        "scorer": {
            "name": "צרפת",
            "img": "data/images/1779616594735.png",
            "ratio": 30,
            "tid": "196a12cb4992382",
            "isChampion": false,
            "nominated": true,
            "code": "3006"
        },
        "champion": {
            "name": "צרפת",
            "img": "data/images/1779616594735.png",
            "ratio": 30,
            "tid": "196a12cb4992382",
            "isChampion": false,
            "nominated": true,
            "code": "3006"
        },
        "name": "Oren Harari",
        "image": null,
        "pointsFromScrorer": 14,
        "pointsFromScrorerKing": 0,
        "id": "6a1fd5ab541a1940dd071992"
    },
    {
        "_id": {
            "$oid": "6a294d1ccceee4aaf80d1c76"
        },
        "points": 233.5,
        "scorer": {
            "name": "אנגליה",
            "img": "data/images/1779616604697.png",
            "ratio": 40,
            "tid": "206a12cb65d904e",
            "isChampion": false,
            "nominated": true,
            "code": "3770"
        },
        "champion": {
            "name": "אנגליה",
            "img": "data/images/1779616604697.png",
            "ratio": 40,
            "tid": "206a12cb65d904e",
            "isChampion": false,
            "nominated": true,
            "code": "3770"
        },
        "name": "עידן בן זקן",
        "image": "https://hevre.sport5.co.il/data/images/1781195057673.jpeg",
        "pointsFromScrorer": 12,
        "pointsFromScrorerKing": 0,
        "id": "6a294d1ccceee4aaf80d1c76"
    },
    {
        "_id": {
            "$oid": "6a1d89043dacf559440432e4"
        },
        "points": 233,
        "scorer": {
            "name": "פורטוגל",
            "img": "data/images/1779617016422.png",
            "ratio": 60,
            "tid": "356a12ccfa04833",
            "isChampion": false,
            "nominated": true,
            "code": "3640"
        },
        "champion": {
            "name": "פורטוגל",
            "img": "data/images/1779617016422.png",
            "ratio": 60,
            "tid": "356a12ccfa04833",
            "isChampion": false,
            "nominated": true,
            "code": "3640"
        },
        "name": "רותם מסעוד",
        "image": null,
        "pointsFromScrorer": 14,
        "pointsFromScrorerKing": 0,
        "id": "6a1d89043dacf559440432e4"
    },
    {
        "_id": {
            "$oid": "6a17de4cf45edee0f20ba774"
        },
        "points": 233,
        "scorer": {
            "name": "צרפת",
            "img": "data/images/1779616594735.png",
            "ratio": 30,
            "tid": "196a12cb4992382",
            "isChampion": false,
            "nominated": true,
            "code": "3006"
        },
        "champion": {
            "name": "צרפת",
            "img": "data/images/1779616594735.png",
            "ratio": 30,
            "tid": "196a12cb4992382",
            "isChampion": false,
            "nominated": true,
            "code": "3006"
        },
        "name": "Malmilian",
        "image": null,
        "pointsFromScrorer": 14,
        "pointsFromScrorerKing": 0,
        "id": "6a17de4cf45edee0f20ba774"
    },
    {
        "_id": {
            "$oid": "6a218431e1f6f512b80a01e2"
        },
        "points": 233,
        "scorer": {
            "name": "ברזיל",
            "img": "data/images/1779616207110.png",
            "ratio": 50,
            "tid": "86a12c9d253919",
            "isChampion": false,
            "nominated": true,
            "code": "3536"
        },
        "champion": {
            "name": "ברזיל",
            "img": "data/images/1779616207110.png",
            "ratio": 50,
            "tid": "86a12c9d253919",
            "isChampion": false,
            "nominated": true,
            "code": "3536"
        },
        "name": "דוד יוסי",
        "image": null,
        "pointsFromScrorer": 12,
        "pointsFromScrorerKing": 0,
        "id": "6a218431e1f6f512b80a01e2"
    },
    {
        "_id": {
            "$oid": "6a2138858d5dfde15d0ec9f5"
        },
        "points": 233,
        "scorer": {
            "name": "צרפת",
            "img": "data/images/1779616594735.png",
            "ratio": 30,
            "tid": "196a12cb4992382",
            "isChampion": false,
            "nominated": true,
            "code": "3006"
        },
        "champion": {
            "name": "צרפת",
            "img": "data/images/1779616594735.png",
            "ratio": 30,
            "tid": "196a12cb4992382",
            "isChampion": false,
            "nominated": true,
            "code": "3006"
        },
        "name": "שחר קורל",
        "image": null,
        "pointsFromScrorer": 14,
        "pointsFromScrorerKing": 0,
        "id": "6a2138858d5dfde15d0ec9f5"
    },
    {
        "_id": {
            "$oid": "6a29c255e181f41b300e4e93"
        },
        "points": 232.5,
        "scorer": {
            "name": "צרפת",
            "img": "data/images/1779616594735.png",
            "ratio": 30,
            "tid": "196a12cb4992382",
            "isChampion": false,
            "nominated": true,
            "code": "3006"
        },
        "champion": {
            "name": "צרפת",
            "img": "data/images/1779616594735.png",
            "ratio": 30,
            "tid": "196a12cb4992382",
            "isChampion": false,
            "nominated": true,
            "code": "3006"
        },
        "name": "יואב אלעד",
        "image": "https://hevre.sport5.co.il/data/images/1782154729513.jpeg",
        "pointsFromScrorer": 14,
        "pointsFromScrorerKing": 0,
        "id": "6a29c255e181f41b300e4e93"
    },
    {
        "_id": {
            "$oid": "6a12f5d2cf145c633001aa9b"
        },
        "points": 232.5,
        "scorer": {
            "name": "ספרד",
            "img": "data/images/1779620432924.png",
            "ratio": 30,
            "tid": "186a12cb3425ae4",
            "isChampion": false,
            "nominated": true,
            "code": "3003"
        },
        "champion": {
            "name": "ספרד",
            "img": "data/images/1779620432924.png",
            "ratio": 30,
            "tid": "186a12cb3425ae4",
            "isChampion": false,
            "nominated": true,
            "code": "3003"
        },
        "name": "רז דומב",
        "image": null,
        "pointsFromScrorer": 14,
        "pointsFromScrorerKing": 0,
        "id": "6a12f5d2cf145c633001aa9b"
    },
    {
        "_id": {
            "$oid": "6a16d4a3773b1ed4130afab9"
        },
        "points": 232,
        "scorer": {
            "name": "ספרד",
            "img": "data/images/1779620432924.png",
            "ratio": 30,
            "tid": "186a12cb3425ae4",
            "isChampion": false,
            "nominated": true,
            "code": "3003"
        },
        "champion": {
            "name": "ספרד",
            "img": "data/images/1779620432924.png",
            "ratio": 30,
            "tid": "186a12cb3425ae4",
            "isChampion": false,
            "nominated": true,
            "code": "3003"
        },
        "name": "אלירן שכטמן",
        "image": null,
        "pointsFromScrorer": 12,
        "pointsFromScrorerKing": 0,
        "id": "6a16d4a3773b1ed4130afab9"
    },
    {
        "_id": {
            "$oid": "6a1a1d7ae7b77cc4d308bbf3"
        },
        "points": 232,
        "scorer": {
            "name": "ספרד",
            "img": "data/images/1779620432924.png",
            "ratio": 30,
            "tid": "186a12cb3425ae4",
            "isChampion": false,
            "nominated": true,
            "code": "3003"
        },
        "champion": {
            "name": "ספרד",
            "img": "data/images/1779620432924.png",
            "ratio": 30,
            "tid": "186a12cb3425ae4",
            "isChampion": false,
            "nominated": true,
            "code": "3003"
        },
        "name": "yuval tserlin",
        "image": "https://hevre.sport5.co.il/data/images/1783025860564.jpeg",
        "pointsFromScrorer": 14,
        "pointsFromScrorerKing": 0,
        "id": "6a1a1d7ae7b77cc4d308bbf3"
    },
    {
        "_id": {
            "$oid": "6a28fae1fea3f6f8600b4c12"
        },
        "points": 232,
        "scorer": {
            "name": "פורטוגל",
            "img": "data/images/1779617016422.png",
            "ratio": 60,
            "tid": "356a12ccfa04833",
            "isChampion": false,
            "nominated": true,
            "code": "3640"
        },
        "champion": {
            "name": "פורטוגל",
            "img": "data/images/1779617016422.png",
            "ratio": 60,
            "tid": "356a12ccfa04833",
            "isChampion": false,
            "nominated": true,
            "code": "3640"
        },
        "name": "יובל אלחרר",
        "image": null,
        "pointsFromScrorer": 14,
        "pointsFromScrorerKing": 0,
        "id": "6a28fae1fea3f6f8600b4c12"
    },
    {
        "_id": {
            "$oid": "6a2ad7ed4653b0c5990de6b3"
        },
        "points": 232,
        "scorer": {
            "name": "צרפת",
            "img": "data/images/1779616594735.png",
            "ratio": 30,
            "tid": "196a12cb4992382",
            "isChampion": false,
            "nominated": true,
            "code": "3006"
        },
        "champion": {
            "name": "צרפת",
            "img": "data/images/1779616594735.png",
            "ratio": 30,
            "tid": "196a12cb4992382",
            "isChampion": false,
            "nominated": true,
            "code": "3006"
        },
        "name": "דוד ז׳אק",
        "image": null,
        "pointsFromScrorer": 14,
        "pointsFromScrorerKing": 0,
        "id": "6a2ad7ed4653b0c5990de6b3"
    },
    {
        "_id": {
            "$oid": "6a1f313d3c86369ad8030758"
        },
        "points": 231,
        "scorer": {
            "name": "צרפת",
            "img": "data/images/1779616594735.png",
            "ratio": 30,
            "tid": "196a12cb4992382",
            "isChampion": false,
            "nominated": true,
            "code": "3006"
        },
        "champion": {
            "name": "צרפת",
            "img": "data/images/1779616594735.png",
            "ratio": 30,
            "tid": "196a12cb4992382",
            "isChampion": false,
            "nominated": true,
            "code": "3006"
        },
        "name": "Gal Gueta",
        "image": null,
        "pointsFromScrorer": 14,
        "pointsFromScrorerKing": 0,
        "id": "6a1f313d3c86369ad8030758"
    },
    {
        "_id": {
            "$oid": "6a1434d0cc5a8004f701c003"
        },
        "points": 231,
        "scorer": {
            "name": "אנגליה",
            "img": "data/images/1779616604697.png",
            "ratio": 40,
            "tid": "206a12cb65d904e",
            "isChampion": false,
            "nominated": true,
            "code": "3770"
        },
        "champion": {
            "name": "אנגליה",
            "img": "data/images/1779616604697.png",
            "ratio": 40,
            "tid": "206a12cb65d904e",
            "isChampion": false,
            "nominated": true,
            "code": "3770"
        },
        "name": "Yoel Knoll",
        "image": null,
        "pointsFromScrorer": 12,
        "pointsFromScrorerKing": 0,
        "id": "6a1434d0cc5a8004f701c003"
    },
    {
        "_id": {
            "$oid": "6a13f4d051f4844e830c35b3"
        },
        "points": 231,
        "scorer": {
            "name": "פורטוגל",
            "img": "data/images/1779617016422.png",
            "ratio": 60,
            "tid": "356a12ccfa04833",
            "isChampion": false,
            "nominated": true,
            "code": "3640"
        },
        "champion": {
            "name": "פורטוגל",
            "img": "data/images/1779617016422.png",
            "ratio": 60,
            "tid": "356a12ccfa04833",
            "isChampion": false,
            "nominated": true,
            "code": "3640"
        },
        "name": "Yoav",
        "image": "https://hevre.sport5.co.il/data/images/1781098076689.jpeg",
        "pointsFromScrorer": 11,
        "pointsFromScrorerKing": 0,
        "id": "6a13f4d051f4844e830c35b3"
    },
    {
        "_id": {
            "$oid": "6a2a88bfc8df77b8690a2479"
        },
        "points": 231,
        "scorer": {
            "name": "ספרד",
            "img": "data/images/1779620432924.png",
            "ratio": 30,
            "tid": "186a12cb3425ae4",
            "isChampion": false,
            "nominated": true,
            "code": "3003"
        },
        "champion": {
            "name": "ספרד",
            "img": "data/images/1779620432924.png",
            "ratio": 30,
            "tid": "186a12cb3425ae4",
            "isChampion": false,
            "nominated": true,
            "code": "3003"
        },
        "name": "Daniel Solomon",
        "image": null,
        "pointsFromScrorer": 14,
        "pointsFromScrorerKing": 0,
        "id": "6a2a88bfc8df77b8690a2479"
    },
    {
        "_id": {
            "$oid": "6a133f30e52824cf1c0233e3"
        },
        "points": 230.5,
        "scorer": {
            "name": "פורטוגל",
            "img": "data/images/1779617016422.png",
            "ratio": 60,
            "tid": "356a12ccfa04833",
            "isChampion": false,
            "nominated": true,
            "code": "3640"
        },
        "champion": {
            "name": "פורטוגל",
            "img": "data/images/1779617016422.png",
            "ratio": 60,
            "tid": "356a12ccfa04833",
            "isChampion": false,
            "nominated": true,
            "code": "3640"
        },
        "name": "אלונסו",
        "image": null,
        "pointsFromScrorer": 11,
        "pointsFromScrorerKing": 0,
        "id": "6a133f30e52824cf1c0233e3"
    },
    {
        "_id": {
            "$oid": "6a2c3fb315665e13a00ca9a2"
        },
        "points": 230,
        "scorer": null,
        "champion": null,
        "name": "מישה בארטון",
        "image": null,
        "pointsFromScrorer": 0,
        "pointsFromScrorerKing": 0,
        "id": "6a2c3fb315665e13a00ca9a2"
    },
    {
        "_id": {
            "$oid": "6a2a68a23cf4f99fa104bad6"
        },
        "points": 230,
        "scorer": {
            "name": "צרפת",
            "img": "data/images/1779616594735.png",
            "ratio": 30,
            "tid": "196a12cb4992382",
            "isChampion": false,
            "nominated": true,
            "code": "3006"
        },
        "champion": {
            "name": "צרפת",
            "img": "data/images/1779616594735.png",
            "ratio": 30,
            "tid": "196a12cb4992382",
            "isChampion": false,
            "nominated": true,
            "code": "3006"
        },
        "name": "Noam Nuriel",
        "image": null,
        "pointsFromScrorer": 14,
        "pointsFromScrorerKing": 0,
        "id": "6a2a68a23cf4f99fa104bad6"
    },
    {
        "_id": {
            "$oid": "6a2a8f3f84582510250204a2"
        },
        "points": 229.5,
        "scorer": {
            "name": "צרפת",
            "img": "data/images/1779616594735.png",
            "ratio": 30,
            "tid": "196a12cb4992382",
            "isChampion": false,
            "nominated": true,
            "code": "3006"
        },
        "champion": {
            "name": "צרפת",
            "img": "data/images/1779616594735.png",
            "ratio": 30,
            "tid": "196a12cb4992382",
            "isChampion": false,
            "nominated": true,
            "code": "3006"
        },
        "name": "שלומי וינברגר",
        "image": null,
        "pointsFromScrorer": 14,
        "pointsFromScrorerKing": 0,
        "id": "6a2a8f3f84582510250204a2"
    },
    {
        "_id": {
            "$oid": "6a2843b93f081286e20fa3b3"
        },
        "points": 229.5,
        "scorer": {
            "name": "ספרד",
            "img": "data/images/1779620432924.png",
            "ratio": 30,
            "tid": "186a12cb3425ae4",
            "isChampion": false,
            "nominated": true,
            "code": "3003"
        },
        "champion": {
            "name": "ספרד",
            "img": "data/images/1779620432924.png",
            "ratio": 30,
            "tid": "186a12cb3425ae4",
            "isChampion": false,
            "nominated": true,
            "code": "3003"
        },
        "name": "Naama Rudnitsky",
        "image": null,
        "pointsFromScrorer": 12,
        "pointsFromScrorerKing": 0,
        "id": "6a2843b93f081286e20fa3b3"
    },
    {
        "_id": {
            "$oid": "6a2afc718a91da1954095f79"
        },
        "points": 229.5,
        "scorer": {
            "name": "ספרד",
            "img": "data/images/1779620432924.png",
            "ratio": 30,
            "tid": "186a12cb3425ae4",
            "isChampion": false,
            "nominated": true,
            "code": "3003"
        },
        "champion": {
            "name": "ספרד",
            "img": "data/images/1779620432924.png",
            "ratio": 30,
            "tid": "186a12cb3425ae4",
            "isChampion": false,
            "nominated": true,
            "code": "3003"
        },
        "name": "לירז עלו",
        "image": null,
        "pointsFromScrorer": 14,
        "pointsFromScrorerKing": 0,
        "id": "6a2afc718a91da1954095f79"
    },
    {
        "_id": {
            "$oid": "6a29d9785981ad4cd10c4dd2"
        },
        "points": 229,
        "scorer": {
            "name": "ספרד",
            "img": "data/images/1779620432924.png",
            "ratio": 30,
            "tid": "186a12cb3425ae4",
            "isChampion": false,
            "nominated": true,
            "code": "3003"
        },
        "champion": {
            "name": "ספרד",
            "img": "data/images/1779620432924.png",
            "ratio": 30,
            "tid": "186a12cb3425ae4",
            "isChampion": false,
            "nominated": true,
            "code": "3003"
        },
        "name": "Steve G",
        "image": null,
        "pointsFromScrorer": 14,
        "pointsFromScrorerKing": 0,
        "id": "6a29d9785981ad4cd10c4dd2"
    },
    {
        "_id": {
            "$oid": "6a21363b91115a25af0719c3"
        },
        "points": 229,
        "scorer": {
            "name": "ספרד",
            "img": "data/images/1779620432924.png",
            "ratio": 30,
            "tid": "186a12cb3425ae4",
            "isChampion": false,
            "nominated": true,
            "code": "3003"
        },
        "champion": {
            "name": "ספרד",
            "img": "data/images/1779620432924.png",
            "ratio": 30,
            "tid": "186a12cb3425ae4",
            "isChampion": false,
            "nominated": true,
            "code": "3003"
        },
        "name": "Nadav Berger",
        "image": null,
        "pointsFromScrorer": 10,
        "pointsFromScrorerKing": 0,
        "id": "6a21363b91115a25af0719c3"
    },
    {
        "_id": {
            "$oid": "6a1c0c76362f4939b7058f04"
        },
        "points": 229,
        "scorer": {
            "name": "פורטוגל",
            "img": "data/images/1779617016422.png",
            "ratio": 60,
            "tid": "356a12ccfa04833",
            "isChampion": false,
            "nominated": true,
            "code": "3640"
        },
        "champion": {
            "name": "פורטוגל",
            "img": "data/images/1779617016422.png",
            "ratio": 60,
            "tid": "356a12ccfa04833",
            "isChampion": false,
            "nominated": true,
            "code": "3640"
        },
        "name": "gal dvir",
        "image": null,
        "pointsFromScrorer": 14,
        "pointsFromScrorerKing": 0,
        "id": "6a1c0c76362f4939b7058f04"
    },
    {
        "_id": {
            "$oid": "6a2aca4f484978e5b7092f23"
        },
        "points": 228.5,
        "scorer": {
            "name": "צרפת",
            "img": "data/images/1779616594735.png",
            "ratio": 30,
            "tid": "196a12cb4992382",
            "isChampion": false,
            "nominated": true,
            "code": "3006"
        },
        "champion": {
            "name": "צרפת",
            "img": "data/images/1779616594735.png",
            "ratio": 30,
            "tid": "196a12cb4992382",
            "isChampion": false,
            "nominated": true,
            "code": "3006"
        },
        "name": "Elad Oren",
        "image": null,
        "pointsFromScrorer": 14,
        "pointsFromScrorerKing": 0,
        "id": "6a2aca4f484978e5b7092f23"
    },
    {
        "_id": {
            "$oid": "6a1c60149150306dc8064d75"
        },
        "points": 228.5,
        "scorer": {
            "name": "פורטוגל",
            "img": "data/images/1779617016422.png",
            "ratio": 60,
            "tid": "356a12ccfa04833",
            "isChampion": false,
            "nominated": true,
            "code": "3640"
        },
        "champion": {
            "name": "פורטוגל",
            "img": "data/images/1779617016422.png",
            "ratio": 60,
            "tid": "356a12ccfa04833",
            "isChampion": false,
            "nominated": true,
            "code": "3640"
        },
        "name": "Yonati Yukelson",
        "image": "https://hevre.sport5.co.il/data/images/1780246591726.jpg",
        "pointsFromScrorer": 12,
        "pointsFromScrorerKing": 0,
        "id": "6a1c60149150306dc8064d75"
    },
    {
        "_id": {
            "$oid": "6a29c07b4f69c28442043c12"
        },
        "points": 228,
        "scorer": {
            "name": "צרפת",
            "img": "data/images/1779616594735.png",
            "ratio": 30,
            "tid": "196a12cb4992382",
            "isChampion": false,
            "nominated": true,
            "code": "3006"
        },
        "champion": {
            "name": "צרפת",
            "img": "data/images/1779616594735.png",
            "ratio": 30,
            "tid": "196a12cb4992382",
            "isChampion": false,
            "nominated": true,
            "code": "3006"
        },
        "name": "שיאל עמוס",
        "image": null,
        "pointsFromScrorer": 14,
        "pointsFromScrorerKing": 0,
        "id": "6a29c07b4f69c28442043c12"
    },
    {
        "_id": {
            "$oid": "6a1ea27e4b9fa7c74e0604c2"
        },
        "points": 228,
        "scorer": {
            "name": "ספרד",
            "img": "data/images/1779620432924.png",
            "ratio": 30,
            "tid": "186a12cb3425ae4",
            "isChampion": false,
            "nominated": true,
            "code": "3003"
        },
        "champion": {
            "name": "ספרד",
            "img": "data/images/1779620432924.png",
            "ratio": 30,
            "tid": "186a12cb3425ae4",
            "isChampion": false,
            "nominated": true,
            "code": "3003"
        },
        "name": "Shlomi B",
        "image": null,
        "pointsFromScrorer": 14,
        "pointsFromScrorerKing": 0,
        "id": "6a1ea27e4b9fa7c74e0604c2"
    },
    {
        "_id": {
            "$oid": "6a12fcdc54aabb5e7507e0e7"
        },
        "points": 227.5,
        "scorer": {
            "name": "צרפת",
            "img": "data/images/1779616594735.png",
            "ratio": 30,
            "tid": "196a12cb4992382",
            "isChampion": false,
            "nominated": true,
            "code": "3006"
        },
        "champion": {
            "name": "צרפת",
            "img": "data/images/1779616594735.png",
            "ratio": 30,
            "tid": "196a12cb4992382",
            "isChampion": false,
            "nominated": true,
            "code": null
        },
        "name": "יואל כלפון",
        "image": null,
        "pointsFromScrorer": 14,
        "pointsFromScrorerKing": 0,
        "id": "6a12fcdc54aabb5e7507e0e7"
    },
    {
        "_id": {
            "$oid": "6a1804b0493d911bc905d612"
        },
        "points": 227.5,
        "scorer": {
            "name": "ספרד",
            "img": "data/images/1779620432924.png",
            "ratio": 30,
            "tid": "186a12cb3425ae4",
            "isChampion": false,
            "nominated": true,
            "code": "3003"
        },
        "champion": {
            "name": "ספרד",
            "img": "data/images/1779620432924.png",
            "ratio": 30,
            "tid": "186a12cb3425ae4",
            "isChampion": false,
            "nominated": true,
            "code": "3003"
        },
        "name": "דוד",
        "image": null,
        "pointsFromScrorer": 12,
        "pointsFromScrorerKing": 0,
        "id": "6a1804b0493d911bc905d612"
    },
    {
        "_id": {
            "$oid": "6a1fe012213cce92cf0cf3d2"
        },
        "points": 227.5,
        "scorer": {
            "name": "צרפת",
            "img": "data/images/1779616594735.png",
            "ratio": 30,
            "tid": "196a12cb4992382",
            "isChampion": false,
            "nominated": true,
            "code": "3006"
        },
        "champion": {
            "name": "צרפת",
            "img": "data/images/1779616594735.png",
            "ratio": 30,
            "tid": "196a12cb4992382",
            "isChampion": false,
            "nominated": true,
            "code": "3006"
        },
        "name": "Asaf Leiba",
        "image": null,
        "pointsFromScrorer": 14,
        "pointsFromScrorerKing": 0,
        "id": "6a1fe012213cce92cf0cf3d2"
    },
    {
        "_id": {
            "$oid": "6a20781a65457f3c4b01a7d5"
        },
        "points": 227,
        "scorer": {
            "name": "ספרד",
            "img": "data/images/1779620432924.png",
            "ratio": 30,
            "tid": "186a12cb3425ae4",
            "isChampion": false,
            "nominated": true,
            "code": "3003"
        },
        "champion": {
            "name": "ספרד",
            "img": "data/images/1779620432924.png",
            "ratio": 30,
            "tid": "186a12cb3425ae4",
            "isChampion": false,
            "nominated": true,
            "code": "3003"
        },
        "name": "Eliran Shatner",
        "image": null,
        "pointsFromScrorer": 12,
        "pointsFromScrorerKing": 0,
        "id": "6a20781a65457f3c4b01a7d5"
    },
    {
        "_id": {
            "$oid": "6a17c6801fe93ca6830c9b42"
        },
        "points": 227,
        "scorer": {
            "name": "צרפת",
            "img": "data/images/1779616594735.png",
            "ratio": 30,
            "tid": "196a12cb4992382",
            "isChampion": false,
            "nominated": true,
            "code": "3006"
        },
        "champion": {
            "name": "צרפת",
            "img": "data/images/1779616594735.png",
            "ratio": 30,
            "tid": "196a12cb4992382",
            "isChampion": false,
            "nominated": true,
            "code": "3006"
        },
        "name": "קילי האן",
        "image": null,
        "pointsFromScrorer": 14,
        "pointsFromScrorerKing": 0,
        "id": "6a17c6801fe93ca6830c9b42"
    },
    {
        "_id": {
            "$oid": "6a1447814ed7a918150e89e2"
        },
        "points": 227,
        "scorer": {
            "name": "ספרד",
            "img": "data/images/1779620432924.png",
            "ratio": 30,
            "tid": "186a12cb3425ae4",
            "isChampion": false,
            "nominated": true,
            "code": "3003"
        },
        "champion": {
            "name": "ספרד",
            "img": "data/images/1779620432924.png",
            "ratio": 30,
            "tid": "186a12cb3425ae4",
            "isChampion": false,
            "nominated": true,
            "code": "3003"
        },
        "name": "Matan Shiloah",
        "image": null,
        "pointsFromScrorer": 11,
        "pointsFromScrorerKing": 0,
        "id": "6a1447814ed7a918150e89e2"
    },
    {
        "_id": {
            "$oid": "6a20998a44438ef764043db3"
        },
        "points": 227,
        "scorer": {
            "name": "ספרד",
            "img": "data/images/1779620432924.png",
            "ratio": 30,
            "tid": "186a12cb3425ae4",
            "isChampion": false,
            "nominated": true,
            "code": "3003"
        },
        "champion": {
            "name": "ספרד",
            "img": "data/images/1779620432924.png",
            "ratio": 30,
            "tid": "186a12cb3425ae4",
            "isChampion": false,
            "nominated": true,
            "code": "3003"
        },
        "name": "עידן",
        "image": null,
        "pointsFromScrorer": 14,
        "pointsFromScrorerKing": 0,
        "id": "6a20998a44438ef764043db3"
    },
    {
        "_id": {
            "$oid": "6a2960ad2c59640cee097072"
        },
        "points": 227,
        "scorer": {
            "name": "ארגנטינה",
            "img": "data/images/1779617451408.png",
            "ratio": 50,
            "tid": "396a12ceae1254d",
            "isChampion": false,
            "nominated": true,
            "code": "2989"
        },
        "champion": {
            "name": "ארגנטינה",
            "img": "data/images/1779617451408.png",
            "ratio": 50,
            "tid": "396a12ceae1254d",
            "isChampion": false,
            "nominated": true,
            "code": "2989"
        },
        "name": "Asher Gabay",
        "image": null,
        "pointsFromScrorer": 14,
        "pointsFromScrorerKing": 0,
        "id": "6a2960ad2c59640cee097072"
    }
]