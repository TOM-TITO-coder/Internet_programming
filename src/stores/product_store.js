import { defineStore } from 'pinia'

export const useProductStore = defineStore("product", {
    state: () => ({
        groups: ["Milks & Diaries", "Coffes & Teas", "Pet Foods", "Meats", "Vegetables", "Fruits", "Bakery", "Frozen Foods", "Snacks", "Canned Foods", "Beverages", "Cleaning", "Health & Beauty", "Baby", "Others"],
        promotions: [
          { 
            id: 1,
            bgColor: "#F0E8D5",
            heanding: "Everyday Fresh & Clean with Our Products",
            textBtn: "Show Now",
            colorBtn: "#3BB77E",
            Img: "https://s3-alpha-sig.figma.com/img/4161/319a/43897a24803e9e70f7a3c07a150bdd8b?Expires=1699833600&Signature=aQp-BxBbHWxaU3ueu34fYtcxKNQDm9ITgJNIyRU0aN0RLNUW5cunXtEBr1Puo-L1zgvH1IbSdWUjZNQiPkcYp4y~sTRkTnsftwrPyInaWhaYZTTdsMNMuHPGVlRZLQePWnXHnnsbgX3xl9MqS8qLyAAgu1kT4KSPE5~DG7aGxZJgS7IlqtizYkYP~B7lag~v4Cp~z4CfdEJweIRdl5GD9FtgdvAsC4v30WyaP16r-~Kt4e6ZMLprQhK3~2GJZpW7eaaAbzVphcQgwrhP9HLCwdV3KI3VeSDb3DQ7oWhtg4HnKnNZiRqimenVtb3b8WYqMgVIvpRUKXz14qnPNoI12A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
          },
          {
            id: 2,
            bgColor: "#F3E8E8",
            heanding: "Make your Breakfast Healthy and Easy",
            textBtn: "Show Now",
            colorBtn: "#3BB77E",
            Img: "https://s3-alpha-sig.figma.com/img/2738/f29f/1c4542246febe8c91ddb74ce42b81c5d?Expires=1699833600&Signature=JNM~Pf22QsnaqWM9RZvWG64rjJo-lwfl9CDQ92UKMr6C28gHlbdnOOztzCIiPSRH0g5qkVqbTgGQdrEMyPelGVWQddeCtybMyNUd65D4~cPXAB07xITVuyQVMRet1JACTy8dCeWb8T9iQmnqVt0YR2uHQWVulaiHJnCwld~CzjbFEs1IyFxhYvreRlGm2iD0vuqOAHgHTfEy0EIUnd1CjWkmc8EZtD4X2HlZsQ2~jLP4m~D6OfzE7ep1TEnDlV6DY-dV1rLk2K1XVxF13VbfgrM-Bpo10mw0Dsf2eLV-7UlbFfJhzRPEBW7ZKd23-YWQ-pglVOnpWEJtXuTNrvYUFA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
          },
          {
            id: 3,
            bgColor: "#E7EAF3",
            heanding: "Make your Breakfast Healthy and Easy",
            textBtn: "Show Now",
            colorBtn: "#FDC040",
            Img: "https://s3-alpha-sig.figma.com/img/2054/d943/5d3d3db99819f3269bcfad856332b12c?Expires=1699833600&Signature=JgamAf6Jjl7NbN1sqEgZGbhVKWu-VxmbFLKANhp9paUWWMvZfBcvnqPFD2ZQpVJM8jGipHP7~fMbHSPwQZ1A5dEWnX8FdLB1QdPlnteL7yy57EzGTc7ky4PagPGtUHf9OrNsA3WbBseuwBmjByiG38wqOBAef77azTkQxess0PSp4phzfEcn4cx16CI0Kev-0ojWLCPsZJ~LeNh1bpvxHxy-gXrURc8Bz5otDvoYd-1R2ZbERCVwLvqARPXtNzbSgUGpJDhHhMhAJcyrZ-ug9dXZlJqUTaK9CQH4sKDFkhZaUrra~erAq2vuxSD8XKRS5eIbIk7hB1z4T3WltFooow__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
          }
        ],
        categories: [
            {   
                id: 1,
                bgColor: "#F2FCE4",
                Img: "https://s3-alpha-sig.figma.com/img/8370/e915/8a586f746c0b10b70cd405c8aa1f2038?Expires=1699833600&Signature=TQRrNFrsGB3Wl0DWirVW8C5sZqpXz-oM5D8vyvcnGdXMnkCj-mvjJW9iGpGlcYIWiZCjrGeCSjLGTjXB73l-WsNy6B4LR3gGyBckdaFv7DzWCc0LMbcDJpMUh0PwGOxymQEQrxNvah6qoDYYdPGhi3MCkCb-rZq5U1Nw6BvGrn58zCEcyPtqRljbLM~vztpm33OdUi6XBzUpscXCplwlwecgIT6-F5EK1W2Wyiit3JheygBbDFPe60mys~b3WwthjTU52fDJUssK-KT7Mnj6PqVe0JC3j7AoPnRWcaQC7di~~tfy8p8~8UHJ8o2g31Je0mDSqnbg9YHTHBGrLAFRuA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
                Title: "Milk & Diaries",
                Item: "14 items"
              },
              {
                id: 2,
                bgColor: "#FFFCEB",
                Img: "https://s3-alpha-sig.figma.com/img/fa19/6bce/6720167ebdfcf5d3f8a2d76053176f9a?Expires=1699833600&Signature=ReB-ACp4ZHwx-KnKawaftMI0r-4wHOzgkuQNvDz4gKr3pbU1DOV9wPzqVzD5xoIQky3NmxOgpyvHqgOf30GqOVYVTGqZ-fCf-GpU3a~qX6WyKTMC~J203nZHFVOPIlOKLkMv4p5uvu8GDKuiykrSKXm1pvM9gpltD6Rqi2-cv5qr3lFjfEPv4jy~5N8YXifYLUysVejDLfchKgSV8XqmwM4kBy2dYX97IbiXpXLKFd0meAuo41mKtF2zlnclc2I8boDAHrCvYz6SjNSr4GQgaXUeJVGX52NaqJ-5a6fQYDj6jVc7hPmNaryj7S4cwYB-tl2zT41u6sThXxLx-AsS1g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
                Title: "Peach",
                Item: "17 items"
              },
              {
                id: 3,
                bgColor: "#ECFFEC",
                Img: "https://s3-alpha-sig.figma.com/img/eb0a/46d6/bf3d30616b8cd69f4b03064fe254350c?Expires=1699833600&Signature=SVfj1ycsGcreHWOHTDYE7MakOwpk5lkKmu8TeP5AllFZB~RXeF3wduHLgtaBGjhQk~czlgDCh4yMXzttdFfSL19X0CDpGrMghsOsQd1cSUPSTwjcOh1BQgQF6qX7cj7wNsU4FYeQ8so92HtjVdm1mVcHvtxfjYntQlds7TB9eW9ZQJoKag~TWM6ocQBITJLLyKCivxYp2wgPSFCkriZnXiMXSUzSP2pTU3ynv4a9T7c6tgwax3s5tiXKx-gRKAkl3mdPpHa0qmxx8Gb-K0ksLWvzS4GRMfFnZw5SVCAiumSjvPfjPIhr3V~X6uzbw2qNyEaHuwM~4hXmEbZDneXykw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
                Title: "Oganic Kiwi",
                Item: "21 items"
              },
              {
                id: 4,
                bgColor: "#FEEFEA",
                Img: "https://s3-alpha-sig.figma.com/img/21b6/3a1e/f2a493eea176934bcab372692ab59a29?Expires=1699833600&Signature=FXFbsYqphIe1ipmFbHzTdjwe6oAZguBImTgw3rut6pjQxCr~gU~UdJYlygCK5Qh56~R38QKQxELvFkZW4tEvDcHH99ugN7vqkTTSnRqHi6YnsOGXCb01GQJHNqlwgC7P90-6VapunM6IlmDdcyMfh5LmOLdEDHyKx0nZct89zq1WlsOzSrxWqwWrhAvo3R5nQimGDSmCg5C7hdzeIYzGnYv9sQhZ4EF0HePgUbeoj8fNMiWbRX~h655bMFr8cVIXdVrJ7BEwE6B~EvVjYtrYC6T0sRaoGJGFcgpFY92t164x-LR6lVWmXPyU5cm7UgT425rOlQhe~vn20wdtZIRc4w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
                Title: "Red Apple",
                Item: "68 items"
              },
              {
                id: 5,  
                bgColor: "#FFF3EB",
                Img: "https://s3-alpha-sig.figma.com/img/488c/b40d/98f6efd89c2347f8ab7f23b7757a7e2f?Expires=1699833600&Signature=RRKQtVEpA~7vCDr5cobXciLHTNELEC9v-hZDzZEj0rivcS~pgZaCrvu1lo-UJtaNgCqenuo-Fi7ZzxvFgNlUMAMdgeAT1eIkdyjO6aT-gV7wk-HV-b1TAf7XrcJE1aCiTp9gY8bz3pEnf6XKkqM6oSovCP4I~jBeCRJnRSrF49RpJBwhnfR5r-ixEwybyIxKc2WZ0ExyqatE-MpsfRMLXdh8jqmxwb64b1rRpH4GOlPvg0u2dgZlOud2DgBhKl1y6lW6i6sQ2UxtN2~m2Cf0aHvwuGHJ7anev1jDsIFLnDQg4w5iPTXnWRM7tTp1KpU0-3weVligqoHLjmAGV1kJBg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
                Title: "Snack",
                Item: "34 items"
              },
              {
                id: 6,
                bgColor: "#FFF3FF",
                Img: "https://s3-alpha-sig.figma.com/img/13f9/afc8/02816b515e817bcd88800c49b947f860?Expires=1699833600&Signature=YL1P41RPODYUqlRbRpFI7l5JafECERaPx7-jTsgY8LM-c-9bolTqwRx1J54YiYXXPlutJdIpZF4Nu~LKICq8khhHghdVH3unGdqcrj35Gny2QdsJC78L8UAZRHJ3eKzOJL-vopTA72V6FXAcf9PJLneQ78KPP72R~HywsPeLTlwxFzj5pZjTI-yeU1zDM~XwO9pTOebx5YDaLH9lQnGXR7PFw5CB79R9JqOzFpriNecpgrQNBIHGbtqo~XF8ENarO5s3~RJlXIUDuAEQkcPky-zwRsrngemqWzf1juegho4RXk3DcvOxhQFH7yQ~spK1El71NtKcAdzV0cSiZjlBEQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
                Title: "Black plum",
                Item: "25 items"
              },
              {
                id: 7,
                bgColor: "#F2FCE4",
                Img: "https://s3-alpha-sig.figma.com/img/5e6d/35bc/cc6f73e5412576546dca6b013f4fc9c7?Expires=1699833600&Signature=J5bhwwHy-8EhZxf~pW2L9qcDo4RLXcvYDPCdDmOyBY~C3BUWWIc5Wn4KUAtXk2biIeJaZj~Dt0epPcSGz4Rgwcg2AkDQ65CYDztMsj9NKscS40nQVqoIQwIhYSufQdv8zkHFQYJ5htdr3ceMLGwdDyH~qe83FC40J~TtkcPJxjPfAQE8XnbrUox5ER0gS5ndWF02rxHBhdgKz~~HKAxzqmL-oRc1iDDD6VZj3ZFTnamSfk5PdeuhnAFCPRy6uvzZr2xiRSRyGjYsxbqv9gJS0UoUhfgfp3HCZ~smR-dQhoA2Ide4gpWwkzKAJdyb8gUg3ER7yj0joHqU7sklQzrWUg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
                Title: "Vegetable",
                Item: "65 items"
              },
              {
                id: 8,
                bgColor: "#FFFCEB",
                Img: "https://s3-alpha-sig.figma.com/img/0ed9/44fa/3bcccc269ae2cadb2fb25ac9b02ea29e?Expires=1699833600&Signature=JpBVjKtSL-91DazsiQO3MgkyvztdmXjSbYG51BReJcHZnW4KQ-BvsNH0KbpvM2K5KrpTPStIe~tLSVmAsmTKQqceGy4tMDiI8~tdkYHulh5vJmOgLLa3IAq~YB-ZffrX-0Wc2cI1twiQzjVGVhik5Hz1EYRuE4xAbzUdW5CFeiK9qN3NtJ9xpuAmJXOsUmUjgTtFYWcorjfpCKmVUkI-g7fwheaQZf8egCO8eaedzshVmprQw2D9KZWpvikTvkOeKg8zZezcDsCxbQ~K~AICT-Xp9dtb8-sTXzkHV0ckb~fEvd6QxbhYBYoVqU9Zs9aO-vdpwiG0QpmZZZLCkpAtDQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
                Title: "Headphone",
                Item: "33 items"
              },
              {
                id: 9,
                bgColor: "#F2FCE4",
                Img: "https://s3-alpha-sig.figma.com/img/78c4/8886/688817c7c490b88407c4904743141184?Expires=1699833600&Signature=pg4YVVgnJVPU82pFrb5TZqIW86nanB5A2pL2q9iEpqZ8b99ZlW7MxslUGQ0DlGXb-7zRkzEbXgCj-~d-tTYqx5-QqQmg3iXAwjEv5ckj25lnw~mpt2k3X7eFwGUQo42XHSWKNeE1X3hCZOXH0BZAoxIz-Ks8lAJeZ7cLBZEH6xyVYxfQBxoR88F2A8c0BBLPjFgDzZxV0Rsbl4GMm8MYReGby0Z6MJFTHZqNhI4Y0o8cC0fUvN8RuWpvxdPr~mPMufJwPb4U9MeQusBPxo7tiExuix-HvpMNP7fzIAqtJzMIFKqF32trLoWTXFW99G0k-TuVIdRJdJehZIb9ISBbtQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
                Title: "Cake & Milk",
                Item: "54 items"
              },
              {
                id: 10,
                bgColor: "#FFF3FF",
                Img: "https://s3-alpha-sig.figma.com/img/aadc/a20d/2ca905cbdfec3bf306fbe70e1ca34a8a?Expires=1699833600&Signature=UdhxWsqWNaFPVYRQR2BywbacMhq8bf1IKHxb9JMgBGKERxpzcPVzDRfozFq2CHgeR62jUwhPApqUiNlRxTrK-p9xFYxLUJEnCBUK~KZefSygBebL~AU-~BJ7njpLqN4UAmwIN~sCH5ugWqUUfP2HRdENjAEFzCqdG9XfWyGCwinAoSs4Nlky8wPdWo2YFTgw~H0jKvF4axGlNJvj2awW4-7t2F6OMUaoo3bNdmnlJvOmNVChiXOPrx1x7W~46GwXlUGsrsHYdW4JWrpLRuwKOC1gFW72hPaj~yITFMn5k3GGsDRBEpo5Uc9KKRwm2IilvuJ-Eo-uok4WmwouNwxPuw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
                Title: "Orange",
                Item: "63 items"
              },  
        ],
        products: [ 
            {
                id: 1,
                tag: "-17%",
                image: "https://s3-alpha-sig.figma.com/img/17d8/db7f/3d627d5dff7a21f5589732970e0ecc60?Expires=1701043200&Signature=T1ym21wgpOMeSHRpW04M4XROxNTB4KIcR~YzLbvHDTE0OGWDHWjF15cDB4oGQLmPIsU7JQ7ygIjU9zfxEhaxc0Chx8W3uRdvT0rbujS~XDsYwXMCV0TKtn054r-9WQHlVZRZ0wTEpbsuGOKD9~6G35aN1Bhsr2Qb4CwwrUDiFwmjkrRDETfHCkdGqKpEk7nOd4i3Sw3IB1ln1LQa-Z6K3eW4PRHE1SE63TCGLFNpZay1dx-QFrDhbTkxjkd8ZsKgR11PCnrHTpvR43MhF7CRYWpTtNHOe8hmb6SnpvlkRgkoBGywJgVfMZ6DG0rXzJYLWoPEfeU4rk56xK4r2HaPCQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
                category: "Hodo Foods",
                name: "Seeds of Change Organic Quinoa, Brown, & Red Rice",
                rate: 2,
                description: "500 gram",
                sellPrice: "$11.4",
                discountPercentage: 17,
                discountPrice: "$2.03",
                tag_color: "#3BB77E"
            },
            {
                id: 2,
                tag: "Hot",
                image: "https://s3-alpha-sig.figma.com/img/2460/9b48/1186872b4c861e65b3ad6f46536a194f?Expires=1701043200&Signature=f814fBBaAMJJOpsj9xsQ-65vcDX97-1lbh8eeQ4JeOCo301NaKiYHKzFofe6GiDfc6PuVHlQirbIbPhnrZS6D3nPECClhsnTUCJxQYNkx9prtoXmn62K~T9iZusgp3u3NAqaLf456oXV4HrroYBz908bSnrr5bQUxTwRM0UQzPV8cCQnm9QnrY0e6f~B7cWRO5ZBEg4JQYxLOQCZknJwSsxZSbX1a4cNFSemBRayaS1d~SDJqil4RK05gq0OSMJZcGU-Fh96kiVwl~FIHZNJdHJN6vDG0roHnFArw05hO9AVNlJcHqgusLetr8HQFeO~~bu4Y3TfOsf3WxaUjJxtQw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
                category: "Hodo Foods",
                name: "Seeds of Change Organic Quinoa, Brown, & Red Rice",
                rate: 5,
                description: "500 gram",
                sellPrice: "$11.4",
                discountPercentage: 17,
                discountPrice: "$2.03",
                tag_color: "#FD6E6E"
            },
            {
                id: 3,
                tag: "Sale",
                image: "https://s3-alpha-sig.figma.com/img/8b45/4a65/7d09e0d193461fe0cf5fe4d9cba8cad9?Expires=1701043200&Signature=Kx31v92EQ~bnZT7F8SJTmgOFGmNs5J3Kr7WO29HBgCejDmmsWFI88Qr8O7ziP2iwqCRqmS6FyGNJK9wm5bEG2bc1T16Uop4HlbhIAXNQo69XLUTCn8D-Mu7Y~bjuIYgd6R1851rXj0foz2p1La5aFjkTTE9af1lusumskfhPyRHsmD~mOx79B1zV27vIll02jbI2dOhUE5~~ZVXWOH5HPmoW~lDDoi8-iWgQqeylto6W-~~MyxtNLqR0Cc~HQBRm67MFNNgJWNdoo5sm2CHdP02Wf0pVPosTXaeR-55Vkviwqub5-Vuj6OW~E4~RsoSVGp1xCB-L5-oibjs2QyPvWw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
                category: "Hodo Foods",
                name: "Seeds of Change Organic Quinoa, Brown, & Red Rice",
                rate: 1,
                description: "500 gram",
                sellPrice: "$11.4",
                discountPercentage: 17,
                discountPrice: "$2.03",
                tag_color: "#FDC040"
            },
            {
                id: 4,
                tag: "-17%",
                image: "https://s3-alpha-sig.figma.com/img/40ab/8386/1edbcb39cf2b176a6b5084a096d0c9a4?Expires=1701043200&Signature=Knm6W0jRSjH4u~GuBqK1OAsJSUdFPg9tUubRmCHPHJuSzEdyVDhPw6k3NCHI7h98w13RpnUaorS~V~wJ0QJoa3XhtEBMgteFY2PvgOkdzLZlFiYxzPAPgcijiE29-9WCR7Y1cNBFMkLesy2WkeJFyz84PM~~QIiwKM3Y2PBX-7VRpN51RRd3A2FS6iL3e-CbR24YDJY9REsu0nq9jZ0PaLjtRcnAxogsZHfGRDANFUUYze4D85FVofOAjyojIg4lk7zKOdB6E~zUOuSr8t-kJqH1h-UuZqcWeIzyIW7r3uHNG9wDx1sEKG6W02T8-WeSfpVkjhJd-OzEAJq~dBqQow__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
                category: "Hodo Foods",
                name: "Seeds of Change Organic Quinoa, Brown, & Red Rice",
                rate: 4,
                description: "500 gram",
                sellPrice: "$11.4",
                discountPercentage: 17,
                discountPrice: "$2.03",
                tag_color: ""
            },
            {
                id: 5,
                tag: "-17%",
                image: "https://s3-alpha-sig.figma.com/img/2d48/0a8f/210cdb0f5871f9d6dc633450452ab720?Expires=1701043200&Signature=Y-Xa7bKLU0IyQZiqTrMOO9iP0j~eJOobiFVPDyxYfERbEVnIfaA3y79oqp~CV1oWQlRXrSV6qzbNaoTCu-hEYXQRMxVx03xWav7C~DCworY3-Sb7e9k6HpmCSUUN64gMhlQK~QLUOIpPYqrGsZZBuyvKb2ZVsXmZ~pzk8v939KB4bWSOSXPj1zPzmgsKFd8Vexpn85maR-7~dizEAnZzoHst1-2W~D2YrbpYzofCbov7pggl2GxL67wgdOXz19qasroArL54gnkujBQhqo4bT3f5ADmR9v7gn2jkrWNRXzs9M63N8RAJ6iFpKGjiS~fqpfiq4AR6wrtEQd4lE2VNxg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
                category: "Hodo Foods",
                name: "Seeds of Change Organic Quinoa, Brown, & Red Rice",
                rate: 4,
                description: "500 gram",
                sellPrice: "$11.4",
                discountPercentage: 17,
                discountPrice: "$2.03",
                tag_color: ""

            },
            {
                id: 6,
                tag: "-17%",
                image: "https://s3-alpha-sig.figma.com/img/4c35/37e0/b383c32aa0cf53ae7651240f5bb90bbf?Expires=1701043200&Signature=C-3ptHV7JoSsQriJ~pFDNEjSXWgsvAtQYCOJ1c5tnU-y-ETuN6UNNCR6qpw1RWsd4lAt~3obGs4b3cU4tuE~7bmolGDoHh8Q0OsWe6asWRsuc7GPyxVCS02MR8o2fH5ZwAl2Fid-Qj8VynGU~CCYJQYPrmL-J4Sk6OJ5WY8hiVsvIQj9MnMIJVF08SxgJ4sW7owMdavpzsxgW1E7qEKSBrwhatLgs78dnmBdL0Lb1f3Bu4kxAfrEIO8M08L-l-kvdCc7Q4iKRONdZgiOQwn~IH-yGwUqwWoh9R5nyUH7l3sxulVLkXYL2ih20A9mLbcX8Qif0JJp~ait4NuCLhHcHQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
                category: "Hodo Foods",
                name: "Seeds of Change Organic Quinoa, Brown, & Red Rice",
                rate: 3,
                description: "500 gram",
                sellPrice: "$2.51",
                discountPercentage: 17,
                discountPrice: "$3.03",
                tag_color: ""
            },
            {
                id: 7,
                tag: "Sale",
                image: "https://s3-alpha-sig.figma.com/img/2190/48fe/84dbf34790f69cce601604ba8d38d582?Expires=1701043200&Signature=o5X9yt98el2lRZhztDj5z5ns0T3DzDR~hvqPD8I470y9NtQC8pZ75v13IZYjFzpXLTdZa48hGHejBIUBVsKrHSzL0PVokj-TqbSYxd4nsW8y4Jxvm8yPoQXXULrGMTUSgQJbwi0tpRFW7pyAosxl61SYUz~lJNy1~7pS97emEUYOmd3Ii9rcYOgXJNdVr2l4NSAYelL~lm8x7Mvt~iMuqgozLnVUTH9SeCV5ErZHcbqo0YqGPb8-qVN~t-C7kMn74TYikTA2eTzB-CTLBJIpDnnMrbTb2doMrzsGczBKhEtBbaJ0-1WHM3hPUSEjBxZZfu3n94JkWdpyQOQOlddx2A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
                category: "Hodo Foods",
                name: "Seeds of Change Organic Quinoa, Brown, & Red Rice",
                rate: 4,
                description: "500 gram",
                sellPrice: "$11.4",
                discountPercentage: 17,
                discountPrice: "$2.03",
                tag_color: "#FDC040"
            },
            {
                id: 8,
                tag: "-17%",
                image: "https://s3-alpha-sig.figma.com/img/b276/d8b7/833567cc5ca946f1cf51704fd32be2e4?Expires=1701043200&Signature=ERqWLKNHMp0WwDP-rxyY6qR3h1jePgcdbOh3Pmoi5VE3KeKsyGvSNAzIdBiquAtTHKqi~E3Bj~p4Xb2iWLnF9jApQ1n-aYMz~fKqPB07pnN4fNlviYYZUBeAWH6Y8IsIwZI4a6E8qpaCas9TzXsTFim8icqAUFTSmxbfrrL3IwImR3vT-9EwTo6pq8w5NWb2B3C8Scbsc55UWxW817ekP4U0SWCMdfbK8tLcYj~7fdLwJCdAuB1be8b~vg9KLXAEz2CGTCe-VDTtvPZsauuwXtWT5h1H8c-YAZ-V6kPpe4Ln-SuuXyHNsMwRAwtIUkJ0FRaIuCXZaZCKx5go-IAUJA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
                category: "Hodo Foods",
                name: "Seeds of Change Organic Quinoa, Brown, & Red Rice",
                rate: 2,
                description: "500 gram",
                sellPrice: "$11.4",
                discountPercentage: 17,
                discountPrice: '$2.03',
                tag_color: ""
            },
            {
                id: 9,
                tag: "-17%",
                image: "https://s3-alpha-sig.figma.com/img/53b7/049c/d4d87292c3766771cdc858ab456c1e20?Expires=1701043200&Signature=YubvKHwfLNrmQC9wDoEaWWnmFyZTFtmwws4tJ0aHyh4pUOg8mfvzUv1xfvWiFq-GTm0cbN03wX04z2DQxBQTzVGaVHufDFRd3A3AAySDA2c7ZB3tzOkh6QvHJ5UWLxg8weeJaetbq1cTEUevQVCFafkJ~kCs2nWzBVkN5LiiWfCX-CWWhhixgba2ziB9qkzLbi6bGdOhwt~ro6JHnsnSJEt6LJ1T7yBux4k8eE1Rw6WSBHp8Vp3I3Pn8DSJM5T6sWBNfl6C8~MzaAl4MX7zvyWW4imI79M1a0XYJ7jDFm8NLuFFtbAcvtlKQ5gcUwG3V9EummukXrvJw4PgeMrqnEg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
                category: "Hodo Foods",
                name: "Seeds of Change Organic Quinoa, Brown, & Red Rice",
                rate: 5,
                description: "500 gram",
                sellPrice: "$11.4",
                discountPercentage: 17,
                discountPrice: '$2.03',
                tag_color: ""
            },
            {
                id: 10,
                tag: "Hot",
                image: "https://s3-alpha-sig.figma.com/img/6667/38db/f36fd0ac0722f68e84acd3769588855f?Expires=1701043200&Signature=WYS38HUC9aElWvB8guaqQFjGEukX32x8hm4Ub13tpQPphMIBxpkKFQ5NthQc45CriUsWO-MdmQloVgYLO~~Fz3PEEwCQmrxIUGGjCE-qk~YPrzXFC3DdL3MzX8gBBdSKK-O2RuA5cW6kPRNM-60i9SP54JIc7KwSzm9SBfV5Z98FD5Y1ot9UQLt2k3YmSlsTk0fmWORG3kdf113N0NPJ2q8QHYIkNqjuKmITuAZg5FzTvGqFB5JREB6jgrNGSFuwubYYywzI-gVILv9gOc2urmN2MfP5k3AZf-7w6AA0mpx6mqSoWUvgWQA6glFlAVuW9l7Y~XinyPGLlFqf5wFDgA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
                category: "Hodo Foods",
                name: "Seeds of Change Organic Quinoa, Brown, & Red Rice",
                rate: 3,
                description: "500 gram",
                sellPrice: "$11.4",
                discountPercentage: 17,
                discountPrice: '$2.03',
                tag_color: "#FD6E6E"
            },
        ],   
    }),
    getters: {
        
    },
    actions: {
        
    },
} )
