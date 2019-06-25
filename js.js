            var glagol, objekat, likovi, arhiva, deprapridev, depraglagol, predlog, deprapridev2, depraobjekat, depraglagol2;
            
            glagol = ["sadim", "pecem", "berem", "cistim", "plevim", "kuvam", "farbam", "gledam", "kupim", "natocim", "sipam", "iseckam", "citam", "pevam", 
            "kujem", "stemujem", "avanzujem", "liferujem", "slusam", "stimungujem", "nastimam", "cepam", "jedem", "usisam", "premazem", "namazem", "peglam", 
            "krecim", "bacim", "oplevim", "busim", "operem", "ribam", "skinem", "zapakujem", "zakacim", "pomazim", "nastelujem", "sarmiram", "ziherujem", 
            "kibicujem", "isfeniram", "gepekujem", "dizajniram", "svercujem", "prodam", "gletujem"];
             
            objekat = ["repu", "travu", "cigle", "sudove", "ogradu", "kelerabu", "televizor", "auto", "cvece", "kera", "drva", "ajvar", "kuplung", 
            "caksire", "duvan", "emigrante", "farmu", "kantar", "vaser vagu", "krompir", "kravu", "pidzamu", "lampu", "knjigu", "ulje", "krov", 
            "mistriju", "noge", "dupe", "kokoske", "petla", "stepenice"];
            
            
            likovi = ["mamom i tatom", "mamom", "tatom", "babom", "Dart Vejderom", "Aleksandrom Vucicem", "bratom", "Djokom", "Ozrenom", "kolegom",
            "Bokijem", "Binom", "Korovom", "Divnom Ljubojevic", "Evom Ras", "komsijom", "komsinicom", "putnicima iz Futoskog busa"];
            
            arhiva = ["Ne mogu moram sutra sa mamom i tatom na planinarenje.", "Ne mogu moram da idem sa babom na bus.", "Ne mogu stize mi kamion sutra.", 
            "Ne mogu slabo sam spavao zbog Ozrenovog petla.", "Ne mogu moram sutra na basket sa bratom.", "Ne mogu radije bih istrco.",
            "Tanka prica.", "Ne mogu nosim cigle sutra.", "Ne mogu, moram da idem, kasno je.", "Necu u grad bucno je.", "Ne mogu moram sa bratom da gledam seriju.",
             "Ne mogu moram sa komsinicom da cepam drva.", "Ne mogu da dolazim do grada moram da jedem kuvano.", "Ne mogu na trening mokre su mi noge.",
             "Ne mogu moram da farbam ogradu.", "Ne mogu moram da radim stepenice sutra.", "Ne mogu moram da usisam.", "Ne mogu na fudbal dolazi mi elektricar.", 
             "Ne mogu na koncert kasno pocinje.", "Ne mogu moram da cistim sprat.", "Ne mogu moram da nosim snimke ct-a u kamenicu.", "Ne mogu moram da zalijem cvece.",
             "Ne mogu moram da setam kera.", "Ne mogu moram da gledam plocice.", "Ne mogu moram sa Korovom da gledam odela.", "Ne mogu moram da idem na Divnu Ljubojevic.",
             "Ne mogu moram da premazem terasu firnajzom.", "Ne mogu na Novu Godinu moram da setam  kera sa bratom", "Ne mogu verio mi se drugar.", "Ne mogu moram da pecem jagnje."  ];
             
             
             deprapridev = ["besciljno", "razocarano", "dubokoumno", "filozofski", "esencijalno", "egzistencijalno", "pesimisticno", "tuzno", "bedno", "entropijski",
              "beskonacno", "hipoteticki", "metafizicki", "transcendentalno", "empirijski", "bezgranicno", "fundamentalno", "neizmerno", "depresivno"];
             depraglagol = ["buljim", "tonem", "propadam", "nestanem", "gledam"];
             predlog = ["u"];
             deprapridev2 = ["besciljnu", "razocaranu", "dubokoumnu", "filozofsku", "esencijalnu", "egzistencijalnu", "pesimisticnu", "entropijsku",
              "beskonacnu", "hipoteticku", "metafizicku", "transcendentalnu", "empirijsku", "bezgranicnu", "fundamentalnu", "neizmernu", "depresivnu"];
             depraobjekat = ["entropiju", "depresiju", "rupu", "jamu", "planinu", "prepreku", "ogromnost", "gigantizam", "neizmernost", "velicanstvenost", "opseznost", "prostranost"];
             depraglagol2 = ["postojanja", "entropije", "egzistencije", "egzistencijalizma", "bespuca", "stvarnosti", "propadanja", "destrukcije", "beznadeznosti", 
             "beskonacnosti", "razuma", "duha", "tela", "introspekcije"];
            

            function randGen() {
              return Math.floor(Math.random() * 5);
            }

            function sentence() {
              var rand1 = Math.floor(Math.random() * glagol.length);
              var rand2 = Math.floor(Math.random() * objekat.length);
              var rand3 = Math.floor(Math.random() * likovi.length);
              var rand4 = Math.floor(Math.random() * arhiva.length);
              var rand5 = Math.floor(Math.random() * 5);
              var rand6 = Math.floor(Math.random() * deprapridev.length);
              var rand7 = Math.floor(Math.random() * depraglagol.length);
              var rand8 = Math.floor(Math.random() * predlog.length);
              var rand9 = Math.floor(Math.random() * deprapridev2.length);
              var rand10 = Math.floor(Math.random() * depraobjekat.length);
              var rand11 = Math.floor(Math.random() * depraglagol2.length);

              //                var randCol = [rand1,rand2,rand3];
              //                var i = randGen();
              var content = "Ne mogu moram da " + glagol[rand1] + " " + objekat[rand2] + " sa " + likovi[rand3] + ".";
              var arhivski = arhiva[rand4];
              var depra = "Ne mogu moram da " + deprapridev[rand6] + " " + depraglagol[rand7] + " " + predlog[rand8] + " " + deprapridev2[rand9] + " " + depraobjekat[rand10] + " " + depraglagol2[rand11] + ".";
              
              			if (rand5 === 0) {
              								document.getElementById('sentence').innerHTML = "&quot;" + content  + "&quot;";
            									}
            	else if (	rand5 === 1){
            									document.getElementById('sentence').innerHTML = "&quot;" + depra  + "&quot;";
            		}
                        
              else if (	rand5 === 2){
            									document.getElementById('sentence').innerHTML = "&quot;" + content  + "&quot;";
            		}
            		
             else if (	rand5 === 3){
            									document.getElementById('sentence').innerHTML = "&quot;" + content  + "&quot;";
            		}
         									
            	else {
              			document.getElementById('sentence').innerHTML = "&quot;" + arhivski  + "&quot;";
            				}
            };
            sentence();
