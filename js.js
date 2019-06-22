            var glagol, objekat, likovi, arhiva;
            
            glagol = ["sadim", "pečem", "berem", "čistim", "plevim", "kuvam", "farbam", "gledam", "kupim", "natočim", "sipam", "iseckam", "čitam", "pevam", 
            "kujem", "štemujem", "avanzujem", "liferujem", "slušam", "štimungujem", "naštimam", "cepam", "jedem", "usisam", "premazem", "namazem", "peglam", 
            "krečim", "bacim", "oplevim", "bušim", "operem", "ribam", "skinem", "zapakujem", "zakačim", "pomazim", "naštelujem", "šarmiram", "ziherujem", 
            "kibicujem", "isfeniram", "gepekujem", "dizajniram", "švercujem", "prodam", "gletujem"];
             
            objekat = ["repu", "travu", "cigle", "sudove", "ogradu", "kelerabu", "televizor", "auto", "cveće", "kera", "drva", "ajvar", "kuplung", 
            "čakšire", "duvan", "emigrante", "farmu", "kantar", "vaser vagu", "krompir", "kravu", "pidzamu", "lampu", "knjigu", "ulje", "krov", 
            "mistriju", "noge", "dupe", "kokoške", "petla", "stepenice"];
            
            
            likovi = ["mamom i tatom", "mamom", "tatom", "babom", "Dart Vejderom", "Aleksandrom Vučićem", "bratom", "Djokom", "Ozrenom", "kolegom",
            "Bokijem", "Binom", "Korovom", "Divnom Ljubojević", "Evom Ras", "komšijom", "komšinicom"];
            
            arhiva = ["Ne mogu moram sutra sa mamom i tatom na planinarenje.", "Ne mogu moram da idem sa babom na bus.", "Ne mogu stize mi kamion sutra.", 
            "Ne mogu slabo sam spavao zbog Ozrenovog petla.", "Ne mogu moram sutra na basket sa bratom.", "Ne mogu radije bih istrco.",
            "Tanka prica.", "Ne mogu nosim cigle sutra", "Ne mogu, moram da idem, kasno je.", "Necu u grad bucno je", "Ne mogu moram sa bratom da gledam seriju",
             "Ne mogu moram sa komsinicom da cepam drva", "Ne mogu da dolazim do grada moram da jedem kuvano", "Ne mogu na trening mokre su mi noge",
             "Ne mogu moram da farbam ogradu", "Ne mogu moram da radim stepenice sutra", "Ne mogu moram da usisam", "Ne mogu na fudbal dolazi mi elektricar", 
             "Ne mogu na koncert kasno pocinje", "Ne mogu moram da cistim sprat", "Ne mogu moram da nosim snimke ct-a u kamenicu", "Ne mogu moram da zalijem cvece",
             "Ne mogu moram da setam kera", "Ne mogu moram da gledam plocice", "Ne mogu moram sa Korovom da gledam odela", "Ne mogu moram da idem na Divnu Ljubojevic",
             "Ne mogu moram da premazem terasu firnajzom", "Ne mogu na ng moram da setam  kera sa bratom", "Ne mogu verio mi se drugar", "Ne mogu moram da pecem jagnje "  ]

            function randGen() {
              return Math.floor(Math.random() * 5);
            }

            function sentence() {
              var rand1 = Math.floor(Math.random() * glagol.length);
              var rand2 = Math.floor(Math.random() * objekat.length);
              var rand3 = Math.floor(Math.random() * likovi.length);
              var rand4 = Math.floor(Math.random() * arhiva.length);
              var rand5 = Math.floor(Math.random() * 2);
              //                var randCol = [rand1,rand2,rand3];
              //                var i = randGen();
              var content = "Ne mogu moram da " + glagol[rand1] + " " + objekat[rand2] + " sa " + likovi[rand3] + ".";
              var arhivski = arhiva[rand4]
              
              
							if (rand5 == 0) {
              								document.getElementById('sentence').innerHTML = "&quot;" + content  + "&quot;";
            									}
            	else {
              			document.getElementById('sentence').innerHTML = "&quot;" + arhivski  + "&quot;";
            				}
            };
            sentence();
