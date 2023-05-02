// Shout out to The Pudding https://pudding.cool/process/flexbox-layout/
const csvData = `refID,Loc1Country,continent,country_abbr,years_dataviz,years_work,pay_annual,pay_hourly,country,remote_or_what,secret_weapon,lang_two_or_more,gender,dvs_member,inspired_by
1,United States,Americas,USA,4,8,"$100,000 - $119,999",,United States,On site,,0,Man,No,"Jonathan Drummey, Steve Wexler, Ann Jackson, Ellen Blackburn, Irene Diomi, Chris DiMartini"
2,United States,Americas,USA,25,27,"$100,000 - $119,999",$150 - $174,United States,Hybrid,,0,Woman,No,"Cole Knaff, Stephanie Evergreen, Ann K. Emory, Shelia B. Robinson"
3,Thailand,Asia,THA,6,10,"$60,000 - $79,999",I am not compensated on an hourly or project basis,Thailand,Remote,,1,Woman,Yes,"Simon Beaumont, Neil Richard, Flerage Twin"
4,United States,Americas,USA,10,20,"$40,000 - $59,999",$60 - $74,United States,Remote,,0,Woman,Yes,Stephanie Evergreen
5,United Kingdom,Europe,GBR,15,17,"$60,000 - $79,999",$225 - $249,United Kingdom,Hybrid,,0,Man,Yes,"Marie and Otto Neurath, Andy Kirk, Nadieh Bremner, David McCandless, Jason Forrest, Moritz Stefaner, Jan Willem Tulp"
6,United States,Americas,USA,2,9,"$60,000 - $79,999",$60 - $74,United States,Remote,,0,Woman,Yes,"Mona Chalabi, Giorgia Lupi, Amy Cesal, Francesco Muzzi, Duke Riley"
7,Uganda,Africa,UGA,5,20,"Less than $10,000",Less than $15,Uganda,On site,,0,Woman,,https://datavizproject.com/
8,Portugal,Europe,PRT,10,27,"$20,000 - $39,999",I am not compensated on an hourly or project basis,Portugal,Remote,,0,Man,Yes,People who share content in sites such as Linkedin
9,United States,Americas,USA,15,18,"$80,000 - $99,999",I am not compensated on an hourly or project basis,United States,Hybrid,Argos,0,Woman,No,Steve Wexler
10,United States,Americas,USA,9,9,"$120,000 - $139,999",$60 - $74,United States,Remote,,0,Woman,Yes,"Nancy Durante, Ellen Lupton,"
11,United States,Americas,USA,17,8,"$160,000 - $179,999",I am not compensated on an hourly or project basis,United States,Remote,,0,Man,Yes,"Jacques Bertin, Tamara Munzner, Nadieh Bremer, Mike Bostock"
12,United States,Americas,USA,5,28,"$100,000 - $119,999",$45 - $59,United States,Hybrid,,0,Man,Yes,"Amanda Cox, Moritz Stefaner, Enrico Bertini, Nathan Yau, Ali Torbin, Lindsay Betzendahl"
13,India,Asia,IND,3,3,"Less than $10,000",Less than $15,India,On site,,1,Man,Yes,Internet
14,Singapore,Asia,SGP,20,31,"$40,000 - $59,999",I am not compensated on an hourly or project basis,Singapore,Hybrid,,0,Self-described or Prefer not to say,,
15,United States,Americas,USA,5,5,"$80,000 - $99,999",I am not compensated on an hourly or project basis,United States,Hybrid,,0,Woman,Yes,"Evergreen Data, Cairo, Tufte"
16,United States,Americas,USA,7,15,"$120,000 - $139,999",I am not compensated on an hourly or project basis,United States,Remote,,0,Woman,,Stephanie Evergreen
17,United States,Americas,USA,4,24,"$100,000 - $119,999",I am not compensated on an hourly or project basis,United States,Remote,,0,Man,No,
18,United States,Americas,USA,2,7,"$40,000 - $59,999",I am not compensated on an hourly or project basis,United States,Remote,,0,Man,Yes,Nadieh Bremer
19,Brazil,Americas,BRA,4,16,"$20,000 - $39,999",I am not compensated on an hourly or project basis,Brazil,Remote,,0,Woman,No,"Giorgia Lupi, Rodrigo Medeiros, Giulia Gianella, Leandro Amorim"
20,Chile,Americas,CHL,3,15,"$40,000 - $59,999",I am not compensated on an hourly or project basis,Chile,On site,,0,Man,Yes,"Cole Nussbaumer Knaflic, Hans Rosling"
21,India,Asia,IND,0,3,"Less than $10,000",I am not compensated on an hourly or project basis,India,Hybrid,,1,Woman,No,"alberto cairo, giorgia lupi"
22,United States,Americas,USA,1,5,"$60,000 - $79,999",$30 - $44,United States,Remote,,0,Woman,Yes,"Steve Wexler, Eleanor Lutz"
23,United States,Americas,USA,5,6,"$80,000 - $99,999",I am not compensated on an hourly or project basis,United States,Remote,,0,Woman,Yes,"Federica Fragapane, Nadieh Bremer, Cole Nussbaumer Knaflic, Alberto Cairo, Edward Tufte"
24,United States,Americas,USA,12,25,"$80,000 - $99,999",I am not compensated on an hourly or project basis,United States,Remote,,0,Man,Yes,"Emery, Evergreen, Schwabish, Cairo, Nussbaumer-Knafflic"
25,India,Asia,IND,0,0,"$10,000 - $19,999",I am not compensated on an hourly or project basis,India,Hybrid,Sketch,1,Woman,No,"Axios Visuals, NY Times, Washington Post, Kontinentalist, Sam Learner, Sarah Slobin, Julia Ledur, Amy O Kruk, Krisztina Szucs, Mark Belan, Marco Hernandez, Karim Douieb, Marcelo Duhlade, Andy Kirk, Mona Chalabi, Shirley Wu, Nadieh Bremer, Yan Holtz, Sonja Kuijpers"
26,Poland,Europe,POL,3,4,I am not compensated on a yearly basis,Less than $15,Poland,Remote,Think-cell,1,Man,No,hard to say
27,United States,Americas,USA,6,12,"$120,000 - $139,999",$125 - $149,United States,Remote,,0,Woman,Yes,"Ellen Blackburn, Autumn Battani, Steve Wexler, Kelly Martin, Chimdi Nwosu"
28,United States,Americas,USA,3,9,"$60,000 - $79,999",I am not compensated on an hourly or project basis,United States,Hybrid,,0,Man,No,"Steve Wexler, Jeffrey Shaffer, Amanda Makulec, Andy Cotgreave, Chantilly Jaggernauth"
29,United States,Americas,USA,6,8,"$80,000 - $99,999",$75 - $99,United States,On site,Qualtrics,1,Woman,No,Ann K. Emery (Depict Data Studio) & Stephanie Evergreen (Evergreen Data)
30,United States,Americas,USA,13,31,"$120,000 - $139,999",I am not compensated on an hourly or project basis,United States,Hybrid,,0,Man,Yes,"Nadieh Bremer, Moritz Stefaner, Maarten Lambrechts"
31,Australia,Oceania,AUS,10,20,"$80,000 - $99,999",I am not compensated on an hourly or project basis,Australia,Hybrid,Datorama,0,Man,,"No-one specifically, I tend to explore data visualisation galleries and blogs for inspiration."
32,United States,Americas,USA,7,31,"$60,000 - $79,999",$30 - $44,United States,Remote,,0,Woman,No,Tableau Public (general)
33,United States,Americas,USA,18,24,"$240,000 or more",$225 - $249,United States,Hybrid,,0,Man,Yes,"Friends, Social Media, Conferences."
34,United States,Americas,USA,9,9,"$80,000 - $99,999",$45 - $59,United States,Hybrid,Whiteboard and markers,1,Man,Yes,"Andy Kriebel, Jen Christiansen, John Burn-Murdoch, Chimdi Nwosu, Stephanie Evergreen, Cole Knaflic, Ali Troban"
35,Portugal,Europe,PRT,10,31,"$20,000 - $39,999",Less than $15,Portugal,Hybrid,,0,Woman,Yes,"NYT, WP, SCMP, Finantial Times, The pudding, Guardian..."
36,Germany,Europe,DEU,2,10,"$40,000 - $59,999",$125 - $149,Germany,Hybrid,SAP Analytics Cloud,1,Man,Yes,
37,United States,Americas,USA,10,31,"$120,000 - $139,999",I am not compensated on an hourly or project basis,United States,Remote,,0,Man,No,big book of dashboards
38,Netherlands,Europe,NLD,16,16,"$60,000 - $79,999",I am not compensated on an hourly or project basis,Netherlands,Hybrid,,1,Man,Yes,"Topi Tjukanov, Michelle Rial, Stefanie Posavec"
39,United States,Americas,USA,7,7,"$140,000 - $159,999",I am not compensated on an hourly or project basis,United States,Remote,,0,Woman,Yes,"Diana Yoo, Chris Hoffman, Sarah Fawson, Mike Bostock"
40,United States,Americas,USA,6,17,"$140,000 - $159,999",I am not compensated on an hourly or project basis,United States,Remote,,0,Woman,Yes,"Scott Galloway, Mona Chalabi, Nadieh Bremer, Kirk Borne,"
41,United States,Americas,USA,15,30,I am not compensated on a yearly basis,$30 - $44,United States,Hybrid,,0,Woman,No,Submitters to Reddit group: data is beautiful. Stephen Wexler
42,South Korea,Asia,PRK,20,20,"$80,000 - $99,999",$45 - $59,South Korea,Hybrid,,0,Man,Yes,otto neurath
43,Russia,Europe,RUS,1,10,"Less than $10,000",$15 - $29,Russia,Remote,,0,Man,Yes,Federica Fragapane
44,Poland,Europe,POL,5,8,I am not compensated on a yearly basis,$30 - $44,Poland,Remote,,1,Woman,Yes,"Andy Kirk, Edward Tufte, Alberto Cairo"
45,United States,Americas,USA,5,10,"$80,000 - $99,999",$45 - $59,United States,Hybrid,,0,Man,No,Enterprise DNA
46,Netherlands,Europe,NLD,11,11,I am not compensated on a yearly basis,$125 - $149,Netherlands,Hybrid,,1,Woman,Yes,"Federica Fragapane, Nadieh Bremer, Sonja Terp, Stephanie Posavec, Giorgia Lupi, Etc."
47,Spain,Europe,ESP,10,15,I am not compensated on a yearly basis,$15 - $29,Spain,Hybrid,,1,Woman,No,Mario Tascón
48,Portugal,Europe,PRT,3,7,I am not compensated on a yearly basis,$30 - $44,Portugal,On site,,1,Woman,No,"Alberto Cairo, Murray Dick, Stephanie Evergreen, Lisa Charlotte Muth, Sandra Rendgen"
49,Singapore,Asia,SGP,4,25,"$120,000 - $139,999",$225 - $249,Singapore,On site,,1,Man,Yes,"Stephanie Evergreen, Cole Nussbaumer Knaflic,"
50,Canada,Americas,CAN,3,13,"$40,000 - $59,999",I am not compensated on an hourly or project basis,Canada,On site,,0,Man,,
51,United States,Americas,USA,15,15,I am not compensated on a yearly basis,$75 - $99,United States,Remote,After Effects,0,Man,Yes,There are many great people doing work and its hard to pick a few that stand out above others.
52,Denmark,Europe,DNK,18,18,"$100,000 - $119,999",I am not compensated on an hourly or project basis,Denmark,On site,LibreCalc,1,Man,Yes,Nadieh Bremer
53,Australia,Oceania,AUS,3,20,"$80,000 - $99,999",$30 - $44,Australia,Hybrid,,0,Woman,Yes,"Daniel Huffman, Vanessa Knopke-Wessel, Sarah Bell, John Nelson"
54,United States,Americas,USA,3,6,"$60,000 - $79,999",$75 - $99,United States,Remote,Piktochart,1,Man,Yes,"Steve Wexler, Marc Soares"
55,Brazil,Americas,BRA,3,0,"Less than $10,000",Less than $15,Brazil,On site,,1,Woman,Yes,"Alberto Cairo, Café Information Design, Cédric Schérer, Federica Fragapane"
56,United States,Americas,USA,5,20,"$100,000 - $119,999",I am not compensated on an hourly or project basis,United States,Remote,,0,Woman,Yes,Alberto Cairo; Giorgia Lupi
57,United States,Americas,USA,4,3,"$60,000 - $79,999",$30 - $44,United States,Hybrid,,0,Man,Yes,A friend who is a graphic designer or other people that I have in a circle of friends that are either designers or data people
58,Brazil,Americas,BRA,4,4,"$20,000 - $39,999",$15 - $29,Brazil,Remote,,1,Woman,No,
59,Bangladesh,Asia,BGD,3,8,"$20,000 - $39,999",$30 - $44,Bangladesh,Hybrid,,0,Man,No,Nazat Chowdhury
60,Australia,Oceania,AUS,6,8,"$60,000 - $79,999",,Australia,Hybrid,Notion / ClickUp / AirTable / Coda / Miro / Canva,0,Man,No,"Sketchplanations, Visual Capitalist, The New Happy"
61,United States,Americas,USA,8,8,"$160,000 - $179,999",I am not compensated on an hourly or project basis,United States,Hybrid,,0,Man,Yes,Kevin and Ken Flerlage
62,Mexico,Americas,MEX,4,10,I am not compensated on a yearly basis,I am not compensated on an hourly or project basis,Mexico,Remote,,1,Woman,Yes,Fernando Baptista
63,Germany,Europe,DEU,3,5,"$60,000 - $79,999",$75 - $99,Germany,Remote,,0,Man,Yes,Design
64,Canada,Americas,CAN,3,27,"$80,000 - $99,999",$60 - $74,Canada,Remote,SAP WEbi,1,Man,No,"Nael Shiab, Cole Knaflic"
65,United States,Americas,USA,10,25,"$140,000 - $159,999",$75 - $99,United States,Remote,,1,Man,Yes,
66,Spain,Europe,ESP,10,12,"$60,000 - $79,999",$100 - $124,Spain,Remote,,1,Woman,Yes,"Nadir Bremer, Alberto Cairo, Tizz Alocci"
67,France,Europe,FRA,10,16,"$40,000 - $59,999",$60 - $74,France,Remote,,0,Man,Yes,Behance
68,United States,Americas,USA,8,10,"$80,000 - $99,999",,United States,Remote,,0,Woman,Yes,"The Pudding (blog), Cole Knaflic"
69,Mexico,Americas,MEX,2,3,"$40,000 - $59,999",I am not compensated on an hourly or project basis,Mexico,Remote,,1,Man,No,"Cole Knaflick, Stephen Few"
70,United States,Americas,USA,18,20,I am not compensated on a yearly basis,$175 - $199,United States,Remote,"Seaborn, Matplotlib, Threejs, Keynote",0,Man,Yes,"Jessica Hullman, Steven Franconeri, Cindy Xiong, Alli Torban, Jon Schwabish, Nadieh Bremer, Federica Fragapane"
71,Mexico,Americas,MEX,12,5,"$20,000 - $39,999",,Mexico,Remote,"Bokeh, matplotlib",0,Man,Yes,"Giorgia Lupi, Alberto Cairo, Enrico Bertini, Nadieh Bremer, Federica Fragapane, Jaime Serra. Ali Torban, Elijah Meeks"
72,United States,Americas,USA,2,25,"$140,000 - $159,999",,United States,Remote,,0,Woman,Yes,"Stephanie Evergreen, Nathan Yau, Jonathan Schwabish"
73,United States,Americas,USA,4,8,"$60,000 - $79,999",I am not compensated on an hourly or project basis,United States,Hybrid,,0,Woman,No,"Stephanie Evergreen, Ann Emery, John Schwabish"
74,United States,Americas,USA,3,8,"$60,000 - $79,999",I am not compensated on an hourly or project basis,United States,On site,,0,Woman,Yes,Stephanie Evergreen
75,United States,Americas,USA,13,13,"$120,000 - $139,999",,United States,On site,,0,Man,Yes,"Cairo, Andy Kirk, Cole Knaflic, Schwabbish, Lisa Charlotte Muth, Frederica Fragapane, nathan yau"
76,United States,Americas,USA,5,25,"$100,000 - $119,999",I am not compensated on an hourly or project basis,United States,On site,,0,Woman,Yes,"Federica Fragapane, Sonja Kuijpers, Stefanie Posavec"
77,United States,Americas,USA,10,20,I am not compensated on a yearly basis,$45 - $59,United States,Remote,Unity,0,Woman,Yes,"Mike Pell, Ray Vella, Jonathon Schwabish, Cole Nussbaumer Knaflic, Toan Hoang"
78,United States,Americas,USA,5,31,"$100,000 - $119,999",,United States,Remote,,0,Man,,whoever google pulls up for the need of the day
79,United States,Americas,USA,3,10,"$60,000 - $79,999",I am not compensated on an hourly or project basis,United States,Remote,Ceros,0,Man,Yes,
80,United States,Americas,USA,3,2,"$60,000 - $79,999",,United States,Remote,,1,Woman,Yes,Federica Fragapane
81,United States,Americas,USA,5,13,"$140,000 - $159,999",,United States,Hybrid,inkscape,0,Woman,Yes,"Nadieh Bremer, Nathan Yau, Tony Yu"
82,United States,Americas,USA,8,31,"$100,000 - $119,999",,United States,Remote,,0,Man,No,Chart Chat hosts
83,United States,Americas,USA,0,0,"$60,000 - $79,999",$30 - $44,United States,Remote,SlicerDicer,0,Woman,Yes,
84,France,Europe,FRA,15,22,"$120,000 - $139,999",,France,Hybrid,,1,Man,No,"Chart Chat, Tableau Hall of Fame, Steve W's books, Visual Capitalist, The Economist, tableau conferences"
85,United States,Americas,USA,5,20,"$80,000 - $99,999",,United States,Remote,,1,Woman,Yes,"Stephanie Evergreen, Cole Nussbaumer Knaflic, Stefanie Posavec, Giorgia Lupi, Steve Wexler, Randy Krum, Ben Jones, Ryan Sleepr"
86,Australia,Oceania,AUS,4,19,"$100,000 - $119,999",,Australia,Remote,,1,Man,Yes,"Kerry Kolosko, Daniel Marsh Patrick, Cole Klafnic, 3 authors of the big book of dashboards (the tableau guys I forgot their name)"
87,India,Asia,IND,3,3,I am not compensated on a yearly basis,$45 - $59,India,Remote,,0,Woman,Yes,"Hans Rosling, Aaron Koblin, Alvaro Valino"
88,Brazil,Americas,BRA,4,16,"$20,000 - $39,999",I am not compensated on an hourly or project basis,Brazil,Hybrid,Zoho Analytics,1,Woman,Yes,"Hans Rosling, Cole Knaflic"
89,United States,Americas,USA,10,20,"$100,000 - $119,999",I am not compensated on an hourly or project basis,United States,On site,piktochart,0,Woman,Yes,"Stephanie Evergreen, Ann Emery, David Keyes, Jon Schwabish"
90,United States,Americas,USA,5,14,"$80,000 - $99,999",,United States,Remote,everviz,0,Woman,Yes,Lisa Charlotte Muth; my manager
91,Norway,Europe,NOR,1,6,"$40,000 - $59,999",I am not compensated on an hourly or project basis,Norway,Hybrid,,1,Woman,No,"Bill Shander, Jonathan Schwabish, Severino Ribecca, Guyinacube"
92,United States,Americas,USA,5,8,"$80,000 - $99,999",I am not compensated on an hourly or project basis,United States,Remote,,0,Woman,,"Giorgia Lupi, Georgios Karamanis, Andrew Mollica, Nami Sumida, Andrew Ba Tran, John Nelson, Daniel P. Huffman, Amelia Wattenberger, Alberto Cairo"
93,Canada,Americas,CAN,6,12,"$60,000 - $79,999",,Canada,Hybrid,,1,Woman,No,"Cole Nussbaumer Knaflic, Kevin and Ken Flerlage, Andy Kriebel, Chimdi Nwoso, Nadieh Bremer"
94,United States,Americas,USA,4,6,"$80,000 - $99,999",,United States,Hybrid,,0,Woman,Yes,Nathan Yau
95,United States,Americas,USA,4,20,"$40,000 - $59,999",,United States,Hybrid,,0,Woman,Yes,"You, Storytelling in Data Viz, several zoo annual reports, etc."
96,United States,Americas,USA,1,15,"$140,000 - $159,999",,United States,Remote,,0,Woman,Yes,Amelia wattenberger
97,Canada,Americas,CAN,4,6,"$40,000 - $59,999",,Canada,Remote,,1,Man,Yes,"other government organizations, non-profits, UN"
98,Romania,Europe,ROU,3,9,"$20,000 - $39,999",,Romania,Hybrid,Recharts library (React),1,Man,Yes,
99,Germany,Europe,DEU,12,12,"$80,000 - $99,999",,Germany,Remote,,1,Woman,Yes,"Moritz Stefaner, Giorgia Lupi"
100,Finland,Europe,FIN,4,6,"$40,000 - $59,999",,Finland,Hybrid,,1,Man,Yes,"Flerlage twins, Andy Kriebel, Jonathan Drummey, Keith Helfrich"
101,Austria,Europe,AUT,10,15,"$60,000 - $79,999",$30 - $44,Austria,Hybrid,SAP _Analytics Cloud,1,Man,Yes,"Cole Nussbaumer Knafflic, Stephen Few, Edward Tuftee, Alberto Cairo, Rolf Hichert"
102,France,Europe,FRA,2,17,"$40,000 - $59,999",,France,Remote,,1,Woman,Yes,"Nadieh Bremer, Mona Chalabi, Shirley Wu, Eva Murray, Kevin Wee, CJ Mayes, Mike Bostock, Jacques Bertin, Cole Nussbaumer-Knaflic"
103,Germany,Europe,DEU,2,9,"$80,000 - $99,999",,Germany,Hybrid,,0,Man,Yes,"Moritz stefaner, schwabisch, scherer"
104,United States,Americas,USA,12,27,"$140,000 - $159,999",,United States,Hybrid,,0,Man,No,"Will Perkins, Dawn Harrington, Andy Cotgreave, Larry Silverstein"
105,United Kingdom,Europe,GBR,7,7,"$60,000 - $79,999",,United Kingdom,Hybrid,,1,Man,Yes,"Andy Kriebel, Tableau Public, LinkedIn"
106,United States,Americas,USA,10,15,"$100,000 - $119,999",I am not compensated on an hourly or project basis,United States,Remote,,0,Woman,No,"Stephanie Evergreen, Ann K. Emery, Cole Knaflic, Nick Visscher, Jon Schwabish"
107,Lithuania,Europe,LTU,5,12,"$20,000 - $39,999",,Lithuania,Hybrid,,0,Woman,Yes,"Books, visuals at internet"
108,Panama,Americas,PAN,1,1,"$10,000 - $19,999",Less than $15,Panama,On site,,0,Man,No,webpages and blogs
109,United States,Americas,USA,5,10,"$120,000 - $139,999",I am not compensated on an hourly or project basis,United States,On site,,0,Man,No,Cole Nussbaumer Knaflic
110,United States,Americas,USA,10,18,"$100,000 - $119,999",,United States,Hybrid,,0,Man,No,Stephanie Evergreen and Edward Tufte
111,United Kingdom,Europe,GBR,11,11,"$60,000 - $79,999",I am not compensated on an hourly or project basis,United Kingdom,Hybrid,,0,Woman,No,"Alberto Cairo, David mccandless, Andy kirk"
112,United States,Americas,USA,5,5,"$100,000 - $119,999",I am not compensated on an hourly or project basis,United States,Remote,,0,Woman,No,"Steve Wexler, The Flerlage Twins"
113,India,Asia,IND,2,14,"$20,000 - $39,999",$100 - $124,India,Remote,,0,Man,Yes,"Curran Keller, Mike Bostock, Fil @ Observable"
114,Australia,Oceania,AUS,8,5,"$60,000 - $79,999",$45 - $59,Australia,Remote,,0,Man,Yes,Scrollytelling articles
115,United States,Americas,USA,11,17,"$100,000 - $119,999",,United States,Hybrid,,1,Woman,Yes,"STEVE WEXLER (he is my Madona), Tableau Community and Various Groups, DVS, Youtube-various trainings, InterWorks trainings"
116,United States,Americas,USA,14,26,"$240,000 or more",I am not compensated on an hourly or project basis,United States,Remote,,0,Man,,"Tom McWright, Topi Tjukanov, Jeff Heer"
117,Kenya,Africa,KEN,8,13,"$10,000 - $19,999",I am not compensated on an hourly or project basis,Kenya,Remote,,0,Woman,Yes,"Mona Chalabi, Outlier"
118,United States,Americas,USA,7,8,"$100,000 - $119,999",I am not compensated on an hourly or project basis,United States,Remote,CARTO (built on kepler.gl and deck.gl),0,Woman,Yes,
119,United States,Americas,USA,8,13,"$120,000 - $139,999",$100 - $124,United States,On site,,0,Man,Yes,"Mike Bostock, Edward Tufte, Philippe Riviere"
120,United States,Americas,USA,5,6,"$100,000 - $119,999",I am not compensated on an hourly or project basis,United States,Remote,,0,Woman,No,Storytelling with Data blog
121,Philippines,Asia,PHL,4,10,"Less than $10,000",I am not compensated on an hourly or project basis,Philippines,Remote,,0,Woman,Yes,"Cole Knaflic, Leila Gharani"
122,United Kingdom,Europe,GBR,2,3,"$40,000 - $59,999",,United Kingdom,Hybrid,Qlik Sense/SaaS / Astrato,0,Man,Yes,example : https://www.visualcapitalist.com/category/technology/
123,Canada,Americas,CAN,10,20,"$80,000 - $99,999",,Canada,Remote,,0,Man,Yes,"Susie Lu, Frank Elavsky"
124,United States,Americas,USA,5,5,"$120,000 - $139,999",,United States,Remote,Hex,0,Woman,Yes,Cole Nussbaumer Knaflic
125,China,Asia,CHN,7,15,"$100,000 - $119,999",I am not compensated on an hourly or project basis,China,On site,,1,Man,No,Lisa Charlotte Muth
126,United States,Americas,USA,10,15,"$120,000 - $139,999",,United States,Hybrid,,0,Man,No,"Wexler, Cotgreave, Coworkers"
127,United States,Americas,USA,20,31,"$100,000 - $119,999",,United States,Remote,,0,Man,,Cole
128,United States,Americas,USA,22,31,"$100,000 - $119,999",$45 - $59,United States,Hybrid,"SAS, JMP and viya",0,Woman,Yes,
129,United States,Americas,USA,5,7,"$120,000 - $139,999",I am not compensated on an hourly or project basis,United States,Hybrid,,0,Woman,,Alberto Cairo
130,United States,Americas,USA,6,7,"$100,000 - $119,999",I am not compensated on an hourly or project basis,United States,Hybrid,R shiny,1,Woman,Yes,
131,United States,Americas,USA,20,25,"$140,000 - $159,999",,United States,Remote,,0,Man,No,"Nathan Yau, Georgia Lupi"
132,United States,Americas,USA,30,30,"$240,000 or more",,United States,Remote,,0,Man,Yes,"Steve Wexler, Cole"
133,United States,Americas,USA,7,13,"$100,000 - $119,999",,United States,Hybrid,,0,Man,Yes,"Nadia Bremer, Laurie Frick, Andy Kirk"
134,Indonesia,Asia,IDN,7,16,"$20,000 - $39,999",,Indonesia,Hybrid,,0,Man,Yes,"Federica Fragapane, Shirley Wu, Frank Elavsky, Shannon Mattern, Andy Kirk,"
135,United States,Americas,USA,10,30,"$240,000 or more",$125 - $149,United States,Hybrid,,0,Man,Yes,"Off-hand cause he has a newsletter, Nathan Yau, Author of Visual Cinnamon ... but many other other...just don't remember names."
136,United States,Americas,USA,10,31,"$120,000 - $139,999",,United States,Hybrid,,0,Woman,Yes,"Andy Kriebel, Flerlage Twins, Joshua Smith, Steve Wexler, Andy Cotgreave"
137,United Kingdom,Europe,GBR,6,7,"$60,000 - $79,999",,United Kingdom,Hybrid,,0,Woman,No,Flerlage twins
138,Brazil,Americas,BRA,8,10,"$60,000 - $79,999",I am not compensated on an hourly or project basis,Brazil,Remote,Matter.js and “Vanilla” JavaScript,1,Man,No,"Alberto Cairo, Gurman Bhatia, Federica Fragapane, Rodrigo Menegat, Ikene Ijeoma, Fernanda Didini, Rodrigo Medeiros, Olga Lopes, Giorgia Lupi, etc"
139,United States,Americas,USA,15,18,"$100,000 - $119,999",,United States,Remote,,0,Man,No,"Stephen Few, Edward Tufte, Christopher Wagner"
140,United States,Americas,USA,16,24,"$80,000 - $99,999",,United States,Hybrid,,0,Man,No,sqlbelle
141,United States,Americas,USA,8,20,"$120,000 - $139,999",$60 - $74,United States,Remote,Flourish,0,Man,No,Bill Shander.
142,United States,Americas,USA,7,7,"$80,000 - $99,999",I am not compensated on an hourly or project basis,United States,Remote,,0,Woman,Yes,Stephanie Evergreen
143,Canada,Americas,CAN,7,20,"$80,000 - $99,999",$30 - $44,Canada,Remote,Streamlit,1,Man,Yes,"Alli Torban, Jennifer Rash, the Flerlage Twins, Alberto Cairo"
144,Norway,Europe,NOR,8,8,"$60,000 - $79,999",,Norway,Hybrid,,0,Man,Yes,"Alberto Cairo, Nadieh Bremer, John Burn-Murdoch, Sondre Nilsen, Torstein Ringnes, Lisa Charlotte Muth"
145,Spain,Europe,ESP,10,12,"$10,000 - $19,999",$15 - $29,Spain,Remote,,0,Woman,Yes,"I don't have a specific name, for me I obtain the inspiration while nature, textures, shapes, organic shape. Abstract artist or digital art."
146,Germany,Europe,DEU,5,10,"$60,000 - $79,999",$45 - $59,Germany,Remote,,1,Woman,Yes,"Federica Fragapagne, Nadieh Bremer, Tim Rodenbröker, Patrik Hübner,"
147,Canada,Americas,CAN,2,20,I am not compensated on a yearly basis,$15 - $29,Canada,Hybrid,,0,Self-described or Prefer not to say,Yes,
148,United States,Americas,USA,3,0,I am not compensated on a yearly basis,,United States,Other (please specify),,0,Man,Yes,"Tamara Munzner, Alberto Cairo, Shirley Wu, Connor Rothschild, Peter Beshai, Susie Lu, Halden Lin, Dominik Moritz, Alexander Lex, John Stasko, Chris Johnson, Cameron Yick, Amelia Wattenberger, Joe Hellerstein, Neal Agarwal"
149,Chile,Americas,CHL,5,18,I am not compensated on a yearly basis,I am not compensated on an hourly or project basis,Chile,Hybrid,,0,Man,No,"books, gov info, studies from mktg, behance, web"
150,Mexico,Americas,MEX,2,8,I am not compensated on a yearly basis,I am not compensated on an hourly or project basis,Mexico,Remote,Keynote,1,Woman,Yes,"Giorgia Lupi, Stefanie Posavec, DataCitron, Gabrielle Meritte, Alberto Cairo"
151,Canada,Americas,CAN,3,25,I am not compensated on a yearly basis,$100 - $124,Canada,Remote,,1,Woman,No,"Ann Emery, Stephanie Evergreen, Duarte"
152,Finland,Europe,FIN,5,8,"$20,000 - $39,999",I am not compensated on an hourly or project basis,Finland,Remote,XD,1,Woman,Yes,
153,United States,Americas,USA,31,31,I am not compensated on a yearly basis,I am not compensated on an hourly or project basis,United States,Remote,,0,Man,Yes,otto and marie; gerd; eadweard; alberto
154,Denmark,Europe,DNK,24,26,I am not compensated on a yearly basis,$45 - $59,Denmark,Remote,,1,Man,Yes,"Valerio Pellegrini, Giuseppe Sollazzo, Gaia Russo @EEA"
155,New Zealand,Oceania,NZL,8,20,,$60 - $74,New Zealand,Remote,,0,Man,Yes,"Chris McDowall, James Murdoch"
156,Canada,Americas,CAN,10,31,,$100 - $124,Canada,Remote,,0,Woman,No,"You, Stephanie Evergreen"
157,United States,Americas,USA,7,30,"$10,000 - $19,999",$200 - $224,United States,Remote,,0,Woman,Yes,Nathan Yau
158,United Kingdom,Europe,GBR,24,24,,$60 - $74,United Kingdom,Remote,,0,Man,Yes,"Andy Kriebel (Tableau Tip Tuesday & Makeover Monday), Lorna Brown (Tableau Tip Tuesday)"
159,United Kingdom,Europe,GBR,13,22,I am not compensated on a yearly basis,$75 - $99,United Kingdom,Remote,,0,Woman,No,McCandless
160,United Kingdom,Europe,GBR,6,25,"$80,000 - $99,999",,United Kingdom,Hybrid,Domo,0,Man,No,"W.E Dubois, Valentina D'Efilippo, David McCandless, Giorigia Lupi"
161,Canada,Americas,CAN,25,30,I am not compensated on a yearly basis,I am not compensated on an hourly or project basis,Canada,Remote,,1,Man,Yes,"Alberto Cairo, Lisa Muth, Xan Gregg, Brent Dykes, Steve Wexler, Ben Jones"
162,United States,Americas,USA,31,31,,$300 or more,United States,Remote,,0,Man,Yes,Andy Kreibel
163,Mexico,Americas,MEX,5,10,"Less than $10,000",Less than $15,Mexico,On site,,0,Man,No,
164,Russia,Europe,RUS,6,3,"Less than $10,000",,Russia,Remote,,0,Woman,No,"Alexander Bogachev, Artem Ivolgin, Anton Mizinov"
165,India,Asia,IND,6,31,"$20,000 - $39,999",,India,On site,,1,Man,No,Cedric Scherer; Thomas Lin Pedersen; Danielle Navarro; Martijn Tennekes; Tim Appelhans; Allison Hill; Robin Lovelace; Jakub Nowosad; Andrew Heiss; Emi Tanaka;
166,United Kingdom,Europe,GBR,10,20,"$100,000 - $119,999",,United Kingdom,Hybrid,Jamovi,1,Man,Yes,
167,United States,Americas,USA,19,15,"$60,000 - $79,999",I am not compensated on an hourly or project basis,United States,Hybrid,Matlab,0,Woman,No,NASA
168,United States,Americas,USA,9,15,"$100,000 - $119,999",,United States,On site,"GeoDa, CARTO",1,Man,Yes,"Lauren F. Klein, Catherine D'Ignazio, Mona Chalabi, Stefanie Posavec, Giorgia Lupi, Alberto Cairo, WEB Du Bois, Florence Nightingale, John Snow, Charles Minard, Mark Lombardi, Linda Vallejo, Omar Ureta, Yoh Kawano, Ben Welsh, so many more!"
169,Spain,Europe,ESP,8,25,"$20,000 - $39,999",I am not compensated on an hourly or project basis,Spain,On site,,0,Man,No,cheomei Chen
170,United States,Americas,USA,10,14,"$40,000 - $59,999",,United States,On site,,0,Man,Yes,"John Nelson (ESRI), Nathan Yau (Flowing Data)"
171,Russia,Europe,RUS,4,17,"$10,000 - $19,999",$15 - $29,Russia,Remote,,1,Woman,Yes,"Alexander Bogachev, Alex Kolokolov, Alberto Cairo, Federica Fragapane, Giorgia Lupi, Cole Knaflik, Kirell Benzi"
172,Switzerland,Europe,CHE,3,6,"$100,000 - $119,999",$45 - $59,Switzerland,Remote,Inkscape,1,Man,Yes,"Alli Torban, Cedric Scherer, Tobias Stalder, Yan Holtz"
173,India,Asia,IND,6,6,"$10,000 - $19,999",I am not compensated on an hourly or project basis,India,Hybrid,,1,Man,Yes,RStats and DVS communities across mediums
174,United States,Americas,USA,4,13,"$140,000 - $159,999",I am not compensated on an hourly or project basis,United States,Hybrid,,0,Man,Yes,"Mike Bostock, Nadie Bremer"
175,United States,Americas,USA,3,9,"$60,000 - $79,999",I am not compensated on an hourly or project basis,United States,Remote,,0,Woman,No,"Ann Emory, Statistica"
176,United Kingdom,Europe,GBR,15,25,"$40,000 - $59,999",I am not compensated on an hourly or project basis,United Kingdom,Hybrid,,1,Woman,No,
177,United States,Americas,USA,5,10,"$100,000 - $119,999",,United States,Other (please specify),,0,Woman,,"Stephanie Evergreen, Flerlage Twins, Chart Chat (Jeffrey Shaffer, Steve Wexler, Amanda Makulec, Andy Cotgreave) and Tableau Public in general"
178,United States,Americas,USA,5,10,"$60,000 - $79,999",,United States,Remote,,0,Woman,Yes,"Newsletters, magazines, others sharing their work on LinkedIn"
179,United States,Americas,USA,6,11,"$60,000 - $79,999",I am not compensated on an hourly or project basis,United States,Hybrid,Lucidchart,0,Woman,No,"Stephanie Evergreen, Amelia Kohm"
180,Sweden,Europe,SWE,16,20,"$60,000 - $79,999",$125 - $149,Sweden,Hybrid,,1,Woman,No,
181,United States,Americas,USA,4,2,"$60,000 - $79,999",$100 - $124,United States,Hybrid,,1,Man,,Tufte
182,United States,Americas,USA,8,10,"$160,000 - $179,999",,United States,Remote,,0,Woman,Yes,"Lisa Charlotte Muth, Cole Knafflic, Judit Bekker, Ivett Kovacs, Tamas Varga, Rody Zachovich, Samo Drole"
183,New Zealand,Oceania,NZL,11,17,,$75 - $99,New Zealand,Remote,,1,Woman,Yes,"Alli Torban, Alberto Cairo, Ben Jones, Stephanie Posavec, Giorgia Lupi, Tableau Iron Viz authors, SQLBi (for powerbi stuff)"
184,United States,Americas,USA,3,15,"$40,000 - $59,999",,United States,Remote,InDesign,1,Self-described or Prefer not to say,Yes,Ann Emory. Sometimes Stephanie Evergreen but less so.
185,United States,Americas,USA,3,26,"$100,000 - $119,999",I am not compensated on an hourly or project basis,United States,Remote,,0,Woman,Yes,"Kevin Flerlage, Ken Flerlage, Nathan Yau"
186,United States,Americas,USA,3,3,"$100,000 - $119,999",I am not compensated on an hourly or project basis,United States,Remote,,1,Woman,Yes,"Olivia Vane, Florent Lavergne etc."
187,Brazil,Americas,BRA,4,15,"$20,000 - $39,999",I am not compensated on an hourly or project basis,Brazil,Hybrid,,1,Man,Yes,"Giorgia Lupi, Rodolfo Almeida, Kanit Ham"
188,United States,Americas,USA,9,20,"$80,000 - $99,999",$150 - $174,United States,Hybrid,,0,Man,Yes,"Ali Torbin, Stephanie Evergreen, Ann K Emery, Storytelling w Data, Nolan Haims, Echo Rivera"
189,Canada,Americas,CAN,10,19,"$60,000 - $79,999",,Canada,Hybrid,,0,Woman,Yes,
190,United States,Americas,USA,6,11,"$60,000 - $79,999",$45 - $59,United States,Remote,,1,Man,Yes,Tufte
191,United States,Americas,USA,2,6,"$80,000 - $99,999",,United States,Remote,,0,Woman,Yes,"Alli Torban, Maggie Shi, Giorgi Lupi"
192,United States,Americas,USA,9,12,,$200 - $224,United States,Remote,,0,Woman,Yes,"Alberto Cairo, Alyssa Fowers, Jess Fong, Giorgia Luipi, Stephanie Evergreen"
193,United States,Americas,USA,24,20,"$200,000 - $219,999",I am not compensated on an hourly or project basis,United States,Remote,"SAS, Stata",0,Man,Yes,
194,Canada,Americas,CAN,4,6,"$20,000 - $39,999",$15 - $29,Canada,Remote,,0,Man,Yes,"Looking at other people's designs, learning from experts, taking ideas from imagination"
195,Australia,Oceania,AUS,14,14,"$60,000 - $79,999",,Australia,Hybrid,,0,Woman,No,"Storytelling with Data on LinkedIn, Stephanie Evergreen"
196,United States,Americas,USA,4,8,"$60,000 - $79,999",,United States,Remote,,0,Man,Yes,
197,United States,Americas,USA,8,10,I am not compensated on a yearly basis,$45 - $59,United States,Remote,,0,Man,Yes,
198,United States,Americas,USA,6,22,"$180,000 - $199,999",$150 - $174,United States,Remote,,0,Woman,Yes,"Sara Soueidan, Curran Keller, David Bumbeishvili, Amelia Wattenberger, Shirley Wu"
199,United Kingdom,Europe,GBR,5,5,"$60,000 - $79,999",,United Kingdom,Hybrid,,0,Man,Yes,"Information is beautiful, nightingale"
200,United States,Americas,USA,23,27,"$140,000 - $159,999",,United States,Remote,,0,Man,Yes,"Edward Tufte, Allen Hillery, WEB duBois, Brent Dykes, Florence Nightingale"
201,United States,Americas,USA,8,12,"$160,000 - $179,999",$100 - $124,United States,Remote,proprietary web data visualization platform,0,Man,Yes,
202,Uruguay,Americas,URY,4,20,"$40,000 - $59,999",,Uruguay,Remote,Databricks,1,Man,Yes,"Tufte, Few, Meeks..."
203,Mexico,Americas,MEX,6,8,"$140,000 - $159,999",I am not compensated on an hourly or project basis,Mexico,On site,,0,Man,,
204,Ireland,Europe,IRL,3,19,"$80,000 - $99,999",,Ireland,Hybrid,,0,Woman,Yes,Andy Kirk
205,United States,Americas,USA,5,8,"$220,000 - $239,999",,United States,Hybrid,,0,Man,,"Tufte, Wilkinson, Cairo, knaflic, munzer"
206,United States,Americas,USA,3,16,"$40,000 - $59,999",,United States,Hybrid,,0,Woman,,"Stephanie Posavec, Giorgia Lupi, David McCandless, Mona Chalabi"
207,United Kingdom,Europe,GBR,2,1,"$20,000 - $39,999",,United Kingdom,Hybrid,,1,Woman,Yes,"Allie Turbin, Andy Kirk, Nightingale writers"
208,United States,Americas,USA,5,10,"$160,000 - $179,999",,United States,Remote,Inkscape,0,Man,No,"Kevin Flerlage, Ken Flerlage"
209,China,Asia,CHN,3,11,"$40,000 - $59,999",,China,Hybrid,,1,Woman,No,
210,Austria,Europe,AUT,2,5,"$10,000 - $19,999",,Austria,On site,,1,Man,No,"Deepak Kumar, Mike Bostock"
211,United States,Americas,USA,4,10,"$40,000 - $59,999",,United States,Remote,Canva,1,Woman,No,"Steve Wexler, Ann Emery, Stephanie Evergreen"
212,United States,Americas,USA,9,13,"$80,000 - $99,999",,United States,Remote,,0,Woman,Yes,"Stephanie Evergreen, Bill Shander"
213,Canada,Americas,CAN,3,4,"$60,000 - $79,999",,Canada,Remote,Hex,0,Woman,Yes,"Projects + behind the scenes of projects, discussions on though processes"
214,Australia,Oceania,AUS,10,27,"$120,000 - $139,999",,Australia,Hybrid,,0,Woman,Yes,Relying less on individuals it seems this year. I see things on twitter that are interesting but no one individual stands out
215,United States,Americas,USA,4,10,"$80,000 - $99,999",,United States,Remote,,0,Woman,Yes,"Federica Fragapane, Alberto Cairo, The Tableau Twins, Toan Hoang"
216,United Kingdom,Europe,GBR,10,25,"$80,000 - $99,999",,United Kingdom,Remote,,0,Man,No,I follow a lot of Tableau people on Twitter.
217,United States,Americas,USA,4,6,"$60,000 - $79,999",,United States,Remote,,0,Woman,No,Ann emery
218,United States,Americas,USA,6,7,"$60,000 - $79,999",,United States,Remote,,0,Woman,No,"Ann K Emery, Stephanie Evergreen"
219,South Africa,Africa,ZAF,20,25,"$60,000 - $79,999",,South Africa,Hybrid,,0,Woman,Yes,"Google, online forums, free training webinars"
220,United States,Americas,USA,5,30,"$100,000 - $119,999",,United States,Hybrid,,0,Man,Yes,I love the DVS community and try to visit Slack every day to be inspired.
221,United States,Americas,USA,5,23,"$120,000 - $139,999",,United States,Remote,Alteryx,0,Man,Yes,Coworkers
222,United States,Americas,USA,2,18,"$40,000 - $59,999",,United States,On site,IBM Cognos,0,Man,No,Cole Knaflic
223,United States,Americas,USA,5,5,"$60,000 - $79,999",,United States,Remote,,0,Self-described or Prefer not to say,Yes,"Giorgia Lupi, Matt Daniels"
224,South Korea,Asia,PRK,5,7,"$60,000 - $79,999",,South Korea,Hybrid,"SVG, deck.gl",1,Woman,No,
225,Brazil,Americas,BRA,22,31,"$20,000 - $39,999",,Brazil,Hybrid,minitab,0,Woman,Yes,Bill Shander
226,Brazil,Americas,BRA,3,7,"$10,000 - $19,999",,Brazil,Hybrid,,1,Man,No,"Mathew Daniels, Giorgia Lupi, Letícia Pozza"
227,Canada,Americas,CAN,20,10,"$80,000 - $99,999",,Canada,Remote,,0,Woman,,examples whereever i can find them
228,United States,Americas,USA,0,10,"$60,000 - $79,999",,United States,On site,,0,Woman,Yes,
229,United States,Americas,USA,3,19,"$60,000 - $79,999",,United States,Remote,,0,Man,Yes,"No specific names stick out, but I have a professional twitter where I follow a ton of folks, including journalists, working in dataviz"
230,New Zealand,Oceania,NZL,7,14,"$40,000 - $59,999",,New Zealand,Remote,,0,Man,Yes,"Stephanie Evergreen, Harkanwal Singh, Tanya Shapiro"
231,United States,Americas,USA,8,21,"$240,000 or more",,United States,Remote,,0,Man,Yes,"Stephanie Evergreen, Richard Brath, Robert Kosara, Cole Nussbaumer Knaflic"
232,United States,Americas,USA,2,10,"$60,000 - $79,999",I am not compensated on an hourly or project basis,United States,Hybrid,,1,Woman,,Steve Wexler
233,United States,Americas,USA,0,16,"$40,000 - $59,999",,United States,Hybrid,,0,Woman,No,Ann Emery
234,Germany,Europe,DEU,3,3,"$60,000 - $79,999",,Germany,Remote,,1,Man,Yes,"Enrico Bertini, Nathan Yau, Edward Tufte, Yan Holtz"
235,United States,Americas,USA,3,5,"$60,000 - $79,999",,United States,Remote,,0,Self-described or Prefer not to say,Yes,"DVS, datastorytelling, Ann Emery - depict data studios, Steve Wexler - data revelations, CTData"
236,United States,Americas,USA,1,30,"$80,000 - $99,999",,United States,Remote,,0,Woman,Yes,Stephanie Evergreen & Stefanie Posavec
237,United States,Americas,USA,5,13,"$80,000 - $99,999",,United States,Remote,,0,Man,Yes,Liz Fosslien
238,United States,Americas,USA,4,17,"$120,000 - $139,999",,United States,Remote,,1,Woman,No,"Ann Emery, Stephanie Evergreen, Nicole Bowman (on indigenous data gathering and presenting), NYTimes, The Economist Magazine"
239,United States,Americas,USA,7,8,"$160,000 - $179,999",,United States,Remote,,1,Woman,Yes,"Nathan Yau, Fathom Design, Nick Rougeux, Moritz Stephaner"
240,United Kingdom,Europe,GBR,3,2,"$40,000 - $59,999",,United Kingdom,Hybrid,,1,Woman,Yes,"Alberto Cairo, Giorgia Lupi, Federica Fragapane"
241,United Kingdom,Europe,GBR,0,10,"$40,000 - $59,999",I am not compensated on an hourly or project basis,United Kingdom,Hybrid,,1,Woman,No,"Twitter, portfolios, newsletters etc..."
242,United Kingdom,Europe,GBR,25,31,"$40,000 - $59,999",,United Kingdom,On site,,0,Woman,No,"ann k emery, mynda treacy, leila gharani"
243,United Kingdom,Europe,GBR,5,12,"$20,000 - $39,999",,United Kingdom,Remote,,0,Man,Yes,"I have 0 inspiration, my work situation is not at all positive"
244,United Kingdom,Europe,GBR,3,31,"$60,000 - $79,999",,United Kingdom,Remote,,1,Woman,No,Many people I follow in LinkedIn
245,France,Europe,FRA,2,3,"$40,000 - $59,999",,France,On site,,0,Woman,No,geogia lupi
246,United States,Americas,USA,14,17,"$140,000 - $159,999",,United States,Remote,,0,Woman,Yes,"The Flerlage Twins, Lindsay Betzendahl, Rody Zachovich"
247,United States,Americas,USA,6,23,"$80,000 - $99,999",,United States,Remote,Sanketmatic,0,Woman,No,Evergreen Academy
248,Bosnia and Herzegovina,Europe,BIH,10,12,"Less than $10,000",Less than $15,Bosnia and Herzegovina,On site,,1,Man,No,
249,New Zealand,Oceania,NZL,3,20,"$60,000 - $79,999",,New Zealand,Remote,Shiny,0,Woman,Yes,Bill Shander
250,United States,Americas,USA,12,20,"$140,000 - $159,999",I am not compensated on an hourly or project basis,United States,Hybrid,,0,Man,No,"Tim Meko, Alyssa Fowers"
251,United States,Americas,USA,5,9,"$60,000 - $79,999",,United States,Remote,,0,Man,No,"Authors at SWD,"
252,Ecuador,Americas,ECU,8,15,"$20,000 - $39,999",,Ecuador,On site,,1,Man,No,Federica fragapane
253,Australia,Oceania,AUS,4,10,"$80,000 - $99,999",,Australia,Hybrid,,0,Man,No,Julia Silge
254,United States,Americas,USA,10,30,"$100,000 - $119,999",,United States,Remote,,0,Woman,No,Evergreen Academy
255,United States,Americas,USA,8,22,"$80,000 - $99,999",,United States,Remote,Sql server reporting services,0,Man,Yes,
256,United States,Americas,USA,12,14,"$80,000 - $99,999",,United States,Remote,SAS,0,Woman,No,"Stephanie Evergreen, Tableau Viz of the da"
257,Ireland,Europe,IRL,20,30,"$60,000 - $79,999",,Ireland,On site,,0,Man,No,"I wouldn't necessarily know the name of the people who provide inspiration. Nearly everything I listen to or watch is an influence. For example the opening sequence to TV shows are often filled with new interesting graphics e.g The Good Lord Bird ; Game of Thrones; White Lotus ; Severance etc. Most books I pick up has some interesting graphic, typeface or just the composition of the front & back cover."
258,United States,Americas,USA,9,10,"$60,000 - $79,999",,United States,Hybrid,,0,Woman,No,"Andy Cotgreave, Andy Kriebel, Jeff Shaffer, Eva Murray"
259,United States,Americas,USA,10,12,"$60,000 - $79,999",I am not compensated on an hourly or project basis,United States,Hybrid,,0,Woman,,Steve Wexler and Stephanie Evergreen
260,United States,Americas,USA,5,19,"$100,000 - $119,999",,United States,Hybrid,,0,Woman,No,"Steve wexler, cole knasser, guy in a cube"
261,China,Asia,CHN,2,7,"$60,000 - $79,999",I am not compensated on an hourly or project basis,China,Hybrid,,1,Woman,Yes,"Cole Nussbaumer Knaflic, Stephanie Evergreen,Nancy Duarte,"
262,South Africa,Africa,ZAF,3,14,"$60,000 - $79,999",,South Africa,Remote,,0,Man,Yes,"Bas (datatraining.io), Hellen Wall (LinkedIn), Ruth Pozuelo Martinez (YouTuber - Curbal), Adam Saxton and Patrick LeBlanc (YouTubers - Guy in a Cube)"
263,United States,Americas,USA,6,13,"$60,000 - $79,999",,United States,Remote,,1,Woman,No,Ann K. Emery
264,Sri Lanka,Asia,LKA,2,2,"Less than $10,000",I am not compensated on an hourly or project basis,Sri Lanka,Remote,"Echarts, G2.js",1,Man,Yes,
265,United States,Americas,USA,7,19,"$120,000 - $139,999",,United States,On site,,0,Woman,Yes,"The Chart Chat crew (Steve, Amanda, Andy, Jeff)"
266,United States,Americas,USA,3,4,"$80,000 - $99,999",$60 - $74,United States,Hybrid,,0,Man,Yes,
267,United States,Americas,USA,15,18,"$100,000 - $119,999",,United States,Remote,,0,Man,Yes,google
268,United States,Americas,USA,4,2,"$100,000 - $119,999",,United States,Remote,,0,Man,Yes,Andy Kriebel
269,United States,Americas,USA,5,20,"$140,000 - $159,999",,United States,Remote,,0,Woman,Yes,
270,Netherlands,Europe,NLD,17,8,"$60,000 - $79,999",$100 - $124,Netherlands,Hybrid,,0,Man,No,"Andy Kirk, Alberto Cairo, Brent Dykes, Michel Dekker, Stephn Few, Nadieh Bremer"
271,France,Europe,FRA,10,31,"$160,000 - $179,999",,France,Hybrid,,1,Man,No,Steve Adams
272,United States,Americas,USA,31,31,"$40,000 - $59,999",,United States,On site,,0,Man,No,No specific person
273,United States,Americas,USA,12,15,"$60,000 - $79,999",,United States,On site,,0,Man,Yes,"Axios Visuals (Will Chase, et al); Stephanie Evergreen; Alberto Cairo; Amanda Makulec; Georgios Karamanis; Abdoul Madjid; Lee Olney; Cedric Scherer"
274,United States,Americas,USA,2,4,"$100,000 - $119,999",I am not compensated on an hourly or project basis,United States,Remote,,0,Woman,No,
275,United States,Americas,USA,8,3,"$100,000 - $119,999",I am not compensated on an hourly or project basis,United States,Remote,,0,Man,No,John Nelson
276,United States,Americas,USA,6,6,,$45 - $59,United States,Remote,,0,Self-described or Prefer not to say,Yes,Edward tufte
277,United States,Americas,USA,25,25,,,United States,Remote,,0,Man,No,Carrie Harrison
278,United States,Americas,USA,6,8,"$80,000 - $99,999",,United States,On site,,1,Man,Yes,"Cole Knafflic, Amanda Cox"
279,Kenya,Africa,KEN,6,9,"$40,000 - $59,999",,Kenya,Hybrid,,1,Man,Yes,"Andy Kriebel, Edureka, Free code camp"
280,United States,Americas,USA,3,12,"$60,000 - $79,999",$30 - $44,United States,Hybrid,,0,Woman,No,
281,Finland,Europe,FIN,6,10,"$60,000 - $79,999",,Finland,Remote,,1,Man,Yes,"Kirell Benzi, Nadieh Bremer, Shirley Wu, Nicolas Belmonte"
282,United Kingdom,Europe,GBR,5,25,"$40,000 - $59,999",I am not compensated on an hourly or project basis,United Kingdom,Hybrid,"Infogram, Indesign",0,Woman,Yes,"David McCandless, Rob Orchard"
283,Canada,Americas,CAN,8,23,"$80,000 - $99,999",I am not compensated on an hourly or project basis,Canada,Hybrid,,0,Man,Yes,
284,United States,Americas,USA,11,12,"$60,000 - $79,999",,United States,Hybrid,,0,Man,Yes,Evergreen
285,Canada,Americas,CAN,5,22,"$40,000 - $59,999",,Canada,Hybrid,,1,Woman,No,
286,United States,Americas,USA,12,12,"$120,000 - $139,999",,United States,Remote,,0,Man,Yes,"Bridget Conley, Vidya Setlur, Andy Cotgreve"
287,United States,Americas,USA,10,17,"$120,000 - $139,999",I am not compensated on an hourly or project basis,United States,Remote,,0,Woman,No,"Steve Wexler, Jeffery Schaffer, Eric Parker"
288,United States,Americas,USA,7,11,"$60,000 - $79,999",I am not compensated on an hourly or project basis,United States,Remote,,0,Woman,No,
289,Slovenia,Europe,SVN,7,15,I am not compensated on a yearly basis,$75 - $99,Slovenia,Remote,,1,Woman,,"Juuso Koponen, Federica Fragapane"
290,India,Asia,IND,1,4,I am not compensated on a yearly basis,I am not compensated on an hourly or project basis,India,Hybrid,,0,Man,,"Artists, especially Modern art"
291,Thailand,Asia,THA,3,7,"$10,000 - $19,999",,Thailand,Hybrid,,0,Woman,Yes,"pudding team, nytimes team"
292,United States,Americas,USA,31,25,"$120,000 - $139,999",,United States,On site,SAS-Graph SAS; ODS Statitical Graphs,0,Man,Yes,Stephen Few; Edward Tufte; Robert Alison; Jonathan Schwabish;
293,United States,Americas,USA,6,13,"$80,000 - $99,999",,United States,Hybrid,,1,Woman,No,"Alberto Cairo, Nathan Yau"
294,United States,Americas,USA,3,3,"$40,000 - $59,999",$15 - $29,United States,Hybrid,,0,Man,Yes,Mostly coworkers
295,United States,Americas,USA,7,20,"$80,000 - $99,999",,United States,Remote,,0,Woman,No,"Stephanie Evergreen, Ann Emry"
296,United States,Americas,USA,10,12,"$200,000 - $219,999",,United States,Remote,,0,Woman,Yes,
297,United States,Americas,USA,6,8,"$100,000 - $119,999",,United States,Remote,,0,Woman,Yes,
298,United States,Americas,USA,5,17,"$140,000 - $159,999",,United States,Remote,,0,Man,Yes,Andy Kriebel
299,United States,Americas,USA,12,27,,$30 - $44,United States,Remote,,0,Woman,No,"Stephanie Evergreen, Cole Nussbaumer Knaflic, Stephen Few"
300,Canada,Americas,CAN,10,5,"$40,000 - $59,999",,Canada,Remote,Adobe Analytics,0,Man,Yes,"Stephanie Evergreen, Chris Tauber"
301,United States,Americas,USA,4,6,"$80,000 - $99,999",I am not compensated on an hourly or project basis,United States,Remote,,0,Woman,Yes,
302,United States,Americas,USA,10,21,"$120,000 - $139,999",,United States,Remote,,0,Man,,The Big Book of Dashboards book.
303,United States,Americas,USA,14,14,"$80,000 - $99,999",,United States,Remote,,0,Woman,No,Stephanie Evergreen; Amy Balliet
304,United States,Americas,USA,6,4,"$200,000 - $219,999",I am not compensated on an hourly or project basis,United States,Remote,"Angular, ag-grid-charts",1,Man,Yes,None. Most of them are just stupid and incompetent.
305,United States,Americas,USA,10,31,"$80,000 - $99,999",,United States,Remote,,0,Man,Yes,"Jon schwabish, Naomi Robbins, nathan yau"
306,France,Europe,FRA,7,23,"$120,000 - $139,999",,France,On site,,1,Man,Yes,"No one in particular, I pin nice examples while browsing the web."
307,United Kingdom,Europe,GBR,2,30,"$40,000 - $59,999",,United Kingdom,Remote,,0,Man,Yes,Not sure
308,United States,Americas,USA,10,9,"$140,000 - $159,999",,United States,Hybrid,Matlab (how is this not included in the list?),0,Man,,No one in particular
309,United Kingdom,Europe,GBR,7,20,"$40,000 - $59,999",,United Kingdom,Remote,,0,Woman,Yes,"Frederika Fragapane, Georgia Lupi"
310,Spain,Europe,ESP,6,10,"$60,000 - $79,999",I am not compensated on an hourly or project basis,Spain,Remote,,1,Man,Yes,
311,United Kingdom,Europe,GBR,4,20,"$40,000 - $59,999",,United Kingdom,Remote,MicroStrategy,0,Man,Yes,"Matthias Stahl, Andy Kirk, Alli Torban"
312,Austria,Europe,AUT,8,12,"$60,000 - $79,999",$100 - $124,Austria,On site,,0,Woman,Yes,
313,Denmark,Europe,DNK,8,16,"$80,000 - $99,999",,Denmark,On site,,1,Woman,Yes,"Chris Tauber, Andy Kriebel - many others"
314,Germany,Europe,DEU,8,4,"$40,000 - $59,999",I am not compensated on an hourly or project basis,Germany,Hybrid,,1,Woman,Yes,"Lisa Charlotte Muth, Matthias Stahl, Federica Fragapane, Julius Tröger, Nadieh Brehmer"
315,United States,Americas,USA,8,10,"$120,000 - $139,999",,United States,Hybrid,,0,Woman,Yes,"Jeffrey Shaffer, Steve Wexler, Andy Cotgreave, Amanda Makulec, , Stephanie Evergreen, Ann Emery"
316,United States,Americas,USA,31,31,"$180,000 - $199,999",,United States,On site,,0,Man,Yes,Bas Dohmen
317,Canada,Americas,CAN,7,31,,,Canada,Remote,,0,Woman,No,Chart Chat team
318,United States,Americas,USA,13,24,"$160,000 - $179,999",,United States,Remote,Grafana,1,Woman,,"Kelly Martin, Chimdi Nwosu, John Burn Murdoch"
319,United Kingdom,Europe,GBR,9,9,"$100,000 - $119,999",I am not compensated on an hourly or project basis,United Kingdom,Hybrid,,0,Man,Yes,
320,Chile,Americas,CHL,9,11,"$160,000 - $179,999",,Chile,Remote,,0,Man,Yes,Ludovic Tavernier
321,Brazil,Americas,BRA,9,21,"$120,000 - $139,999",$100 - $124,Brazil,Remote,,1,Man,Yes,"I tend to look at non-dataviz things for inspiration but when I do look at dataviz stuff it's usually from Gabrielle Merite, Francesca Fragapane, Moritz Stefaner, Clever Franke, Accurat, ODD.Studio and DataDot."
322,United States,Americas,USA,8,22,"$120,000 - $139,999",I am not compensated on an hourly or project basis,United States,Hybrid,"IBM Cognos Analytics - List Reports, but also their Dashboarding feature",0,Man,Yes,"Podcasts like The PolicyViz Podcast, Data Viz Today, and Raw Data by P3 Adaptive. They may not be easy to communicate technical skills on products, but they are great for inspiration. When a stakeholder a work poses a question they need answering via data and/or data viz, I'm inspired."
323,United States,Americas,USA,10,8,"$100,000 - $119,999",,United States,Remote,,0,Woman,No,Amelia Wattenberger
324,United States,Americas,USA,9,12,"$100,000 - $119,999",,United States,Hybrid,,0,Woman,Yes,My brain if I'm allowed.... But I'm a girl and we live in a patriarchy.
325,United States,Americas,USA,7,5,"$200,000 - $219,999",,United States,Remote,Figjam,0,Man,Yes,"Edward Tufte, Elijah Meeks, Ian Johnson, Shirley Wu, Curran Kelleher, Dominik Moritz + the Vega-Lite team"
326,United States,Americas,USA,12,11,"$120,000 - $139,999",,United States,On site,,0,Self-described or Prefer not to say,Yes,Flerledge Twins
327,United Kingdom,Europe,GBR,20,25,"$80,000 - $99,999",I am not compensated on an hourly or project basis,United Kingdom,Remote,Birst,0,Man,,"Kevin Flerlage, Andy Kriebel, David Mcandless"
328,United Kingdom,Europe,GBR,8,25,"$80,000 - $99,999",,United Kingdom,Hybrid,,0,Man,Yes,"John Burn-Murdoch, Stephanie Evergreen, Kevin Flerlage"
329,United Kingdom,Europe,GBR,2,2,"$40,000 - $59,999",,United Kingdom,Remote,,0,Self-described or Prefer not to say,Yes,"Valentina D'Efillipo, Tanya Shapiro, Georgios Karamanis, Gabrielle Merite"
330,Australia,Oceania,AUS,23,31,"$240,000 or more",,Australia,Remote,,0,Man,No,"flerlage twins, Cole Nussbaumer Knaflic,"
331,Australia,Oceania,AUS,2,12,"$10,000 - $19,999",$45 - $59,Australia,Remote,,0,Woman,,
332,United States,Americas,USA,5,25,"$120,000 - $139,999",,United States,Remote,,0,Woman,No,Ann Emery and Stephanie Evergreen
333,Italy,Europe,ITA,2,5,,$15 - $29,Italy,Remote,,1,Woman,Yes,"Edward Tufte, Alberto Cairo"
334,Brazil,Americas,BRA,4,15,,$30 - $44,Brazil,Remote,,1,Man,Yes,"Shirley Wu, Nadieh Bremer, Giorgia Lupi"
335,Australia,Oceania,AUS,4,20,"$80,000 - $99,999",,Australia,Hybrid,,0,Man,No,Pinterest
336,Italy,Europe,ITA,4,5,"$20,000 - $39,999",,Italy,Hybrid,,1,Woman,Yes,"go to tableau public, following expert on data viz, be curious always"
337,United States,Americas,USA,1,25,"$40,000 - $59,999",I am not compensated on an hourly or project basis,United States,Other (please specify),,0,Woman,Yes,
338,Italy,Europe,ITA,3,2,"$40,000 - $59,999",,Italy,Hybrid,,0,Woman,Yes,"Gabrielle Merite, Federica Fragapane, Giorgia Lupi, Domestic Data Streamers"
339,United States,Americas,USA,2,13,I am not compensated on a yearly basis,$75 - $99,United States,Remote,,0,Woman,,"Ann Emery, Stephanie evergreen,"
340,United States,Americas,USA,31,31,,$150 - $174,United States,Remote,,0,Woman,No,Ann Emery and Stephanie Evergreen
341,United States,Americas,USA,30,31,I am not compensated on a yearly basis,$75 - $99,United States,Remote,netdraw,0,Woman,Yes,"Tufte, then I search on google"
342,Italy,Europe,ITA,16,16,"$60,000 - $79,999",$45 - $59,Italy,Remote,,1,Man,Yes,Albert Cairo
343,Colombia,Americas,COL,6,8,"$10,000 - $19,999",$15 - $29,Colombia,Remote,,1,Woman,,
344,Netherlands,Europe,NLD,3,7,,$45 - $59,Netherlands,Remote,,0,Woman,Yes,"Alli Torban, Federica Fragapane, Duncan Geere,"
345,Canada,Americas,CAN,0,31,,$150 - $174,Canada,Remote,,0,Man,Yes,Edward Tufte
346,Germany,Europe,DEU,25,25,,$60 - $74,Germany,Remote,,1,Man,Yes,Books and online resources
347,United States,Americas,USA,7,20,I am not compensated on a yearly basis,$100 - $124,United States,Remote,After Effects,0,Man,Yes,
348,Germany,Europe,DEU,5,0,"$20,000 - $39,999",,Germany,On site,"Inkscape, draw.io",1,Woman,No,Alberto Cairo
349,France,Europe,FRA,10,22,,$75 - $99,France,Remote,,1,Woman,,"michelle real, instachaaz, information is beautiful, datavizproject.com"
350,Colombia,Americas,COL,20,31,"$20,000 - $39,999",$100 - $124,Colombia,Remote,,1,Man,Yes,"Jeffrey heer, schneiderman"
351,United States,Americas,USA,20,20,"$60,000 - $79,999",,United States,Hybrid,,0,Woman,Yes,
352,United States,Americas,USA,6,20,"$80,000 - $99,999",,United States,On site,,0,Woman,No,"Wexler, Tufte"
353,India,Asia,IND,2,6,"$20,000 - $39,999",I am not compensated on an hourly or project basis,India,Remote,"Fusioncharts, Figma",1,Man,Yes,
354,United States,Americas,USA,12,25,"$120,000 - $139,999",,United States,Remote,,0,Woman,Yes,Blogs
355,Switzerland,Europe,CHE,10,10,"$80,000 - $99,999",$100 - $124,Switzerland,Hybrid,"Matplotlib, Seaborn",1,Woman,Yes,DVS Slack community
356,United States,Americas,USA,22,20,"$80,000 - $99,999",$125 - $149,United States,Hybrid,,0,Woman,,External consultants & trainers
357,India,Asia,IND,3,0,"Less than $10,000",Less than $15,India,Remote,,1,Man,Yes,Robert Kasara
358,United States,Americas,USA,4,20,"$120,000 - $139,999",I am not compensated on an hourly or project basis,United States,Hybrid,Inkscape,0,Man,Yes,"Lisa Muth, Tamara Munzner"
359,United States,Americas,USA,3,5,"$100,000 - $119,999",,United States,Hybrid,,0,Woman,Yes,"Giorgia Lupi, Nathan Yau, Stephanie Posavec, Gabrielle Merite, Lisa Charlotte Muth, Alli Torban"
360,United States,Americas,USA,3,13,"$80,000 - $99,999",,United States,Remote,,1,Woman,Yes,"Nathan Yau, Todd Whitehead, Jon Schwabish, Owen Phillips"
361,Australia,Oceania,AUS,3,7,"$60,000 - $79,999",,Australia,Hybrid,,1,Woman,Yes,Giorgio Lupi & Those I am discovering through your podcast 😉
362,India,Asia,IND,5,8,"$20,000 - $39,999",,India,Remote,,1,Man,No,"Topi Tjukanov, Danielle Navarro, Cedric Scherer"
363,India,Asia,IND,1,5,I am not compensated on a yearly basis,I am not compensated on an hourly or project basis,India,Remote,,1,Man,,"Nadieh Bremer, David McCandless"
364,United States,Americas,USA,8,25,"$100,000 - $119,999",,United States,Remote,,0,Self-described or Prefer not to say,Yes,
365,United States,Americas,USA,10,7,"$120,000 - $139,999",,United States,Remote,Canva,0,Woman,Yes,"Nadieh Bremer, Giorgia Lupi"
366,United States,Americas,USA,20,30,"$140,000 - $159,999",,United States,Hybrid,,0,Woman,Yes,Jon Schwabish (PolicyViz)
367,United Kingdom,Europe,GBR,5,26,"$100,000 - $119,999",,United Kingdom,Remote,,0,Man,No,"Mike Bostock, Robin Lovelace, Tom Ford, Geof Boeing"
368,Brazil,Americas,BRA,1,6,"Less than $10,000",I am not compensated on an hourly or project basis,Brazil,Remote,Datylon,0,Woman,,
369,Switzerland,Europe,CHE,10,20,"$140,000 - $159,999",$125 - $149,Switzerland,Hybrid,,1,Man,Yes,
370,Germany,Europe,DEU,7,5,"$40,000 - $59,999",,Germany,On site,,1,Man,Yes,"Dominik Moritz, Leilani Battle"
371,India,Asia,IND,8,18,,$30 - $44,India,On site,,0,Man,No,"Ryan sleeper, Steve Wexler (chart chat), Andy Kribel (makeovermonday)"
372,United Kingdom,Europe,GBR,15,20,"$60,000 - $79,999",,United Kingdom,Remote,,0,Man,Yes,"Andy Kriebel, Ryan Playfair, Stephanie Evergreen"
373,United States,Americas,USA,5,7,"$140,000 - $159,999",$100 - $124,United States,Remote,Photoshop,1,Woman,No,Non-datavisualization designers
374,United States,Americas,USA,11,16,"$180,000 - $199,999",$75 - $99,United States,Remote,EverViz,0,Woman,Yes,
375,India,Asia,IND,3,3,"Less than $10,000",I am not compensated on an hourly or project basis,India,Hybrid,,1,Man,No,
376,Saudi Arabia,Asia,SAU,7,19,"$40,000 - $59,999",$45 - $59,Saudi Arabia,Hybrid,truOI,0,Man,Yes,
377,Croatia,Europe,HRV,3,10,"$10,000 - $19,999",I am not compensated on an hourly or project basis,Croatia,On site,"Statistica, XLStat",1,Woman,Yes,"There are too many and again it depends on the task. I like to check Behance, Twitter, Medium, Pinterest and my Newsletters."
378,Sweden,Europe,SWE,7,20,"$60,000 - $79,999",,Sweden,Remote,,1,Man,No,"Twitter, scmp, reuters"
379,United States,Americas,USA,7,12,"$100,000 - $119,999",,United States,Remote,Canva,0,Woman,Yes,
380,United States,Americas,USA,3,8,"$60,000 - $79,999",,United States,Remote,,0,Self-described or Prefer not to say,,
381,United States,Americas,USA,10,15,"$120,000 - $139,999",$125 - $149,United States,Remote,MicroStrategy,0,Man,No,
382,United States,Americas,USA,10,15,"$140,000 - $159,999",I am not compensated on an hourly or project basis,United States,Hybrid,,0,Man,Yes,
383,United States,Americas,USA,8,10,"$80,000 - $99,999",$30 - $44,United States,Remote,,0,Woman,,flerage twins!
384,United States,Americas,USA,9,11,"$60,000 - $79,999",,United States,Remote,,0,Woman,No,
385,Germany,Europe,DEU,1,5,"$40,000 - $59,999",,Germany,Hybrid,,1,Woman,No,Andy Kriebel
386,United States,Americas,USA,8,31,"$80,000 - $99,999",,United States,Remote,,0,Woman,No,"Kevin Flerlage, Playfair Data, Andy Kreibel, Eva Murray, Cole Nussbaumer Knaflic"
387,United States,Americas,USA,3,30,,,United States,Remote,,0,Man,No,"Anne K. Emery, Edward Tufte, Alberto Cairo,"
388,United Kingdom,Europe,GBR,3,17,"$40,000 - $59,999",,United Kingdom,Remote,Infogram,1,Woman,No,
389,United States,Americas,USA,2,27,"$100,000 - $119,999",,United States,Remote,,0,Woman,Yes,
390,Argentina,Americas,ARG,6,3,"$10,000 - $19,999",I am not compensated on an hourly or project basis,Argentina,Hybrid,,0,Woman,No,
391,India,Asia,IND,4,4,"$10,000 - $19,999",$15 - $29,India,On site,OBIEE,0,Woman,Yes,
392,United States,Americas,USA,5,15,"$80,000 - $99,999",,United States,On site,,0,Man,Yes,
393,Germany,Europe,DEU,2,5,"$100,000 - $119,999",I am not compensated on an hourly or project basis,Germany,Hybrid,Celonis,1,Woman,Yes,
394,France,Europe,FRA,11,15,"$80,000 - $99,999",,France,On site,,1,Man,No,"Mathieu Jacomy, Lynn Cherny"
395,Canada,Americas,CAN,0,2,I am not compensated on a yearly basis,I am not compensated on an hourly or project basis,Canada,Remote,,0,Woman,Yes,"Shirley Wu, Nadia Brenmer"
396,United States,Americas,USA,10,10,"$140,000 - $159,999",,United States,Remote,,0,Woman,No,
397,United Kingdom,Europe,GBR,4,31,"$60,000 - $79,999",,United Kingdom,Remote,,0,Man,No,Data Visualisation Society; Storytelling With Data; David McCandless and LinkedIn
398,Norway,Europe,NOR,10,20,"$80,000 - $99,999",I am not compensated on an hourly or project basis,Norway,On site,,1,Woman,No,
399,United States,Americas,USA,6,10,"$100,000 - $119,999",,United States,Remote,,0,Woman,No,Steve Wexler
400,United States,Americas,USA,2,10,"$60,000 - $79,999",,United States,Remote,,0,Woman,Yes,Andy Kriebel; Michelle Frayman; Bridget Cogley; Lindsay Betzendahl;
401,United States,Americas,USA,2,7,,$30 - $44,United States,Remote,,0,Man,Yes,Tufte
402,United States,Americas,USA,3,14,"$100,000 - $119,999",I am not compensated on an hourly or project basis,United States,Remote,,1,Man,Yes,
403,United States,Americas,USA,3,23,"$120,000 - $139,999",,United States,Remote,,0,Woman,No,
404,United States,Americas,USA,8,30,"$120,000 - $139,999",,United States,Hybrid,,0,Woman,,
405,Canada,Americas,CAN,5,15,"$60,000 - $79,999",,Canada,Hybrid,,0,Woman,Yes,"other reports, websites"
406,United States,Americas,USA,5,31,"$20,000 - $39,999",,United States,On site,,0,Woman,No,Ann K. Emery
407,United States,Americas,USA,5,6,,$15 - $29,United States,On site,,0,Woman,No,Ann K Emery & Stephanie Evergreen! :)
408,United States,Americas,USA,7,7,"$100,000 - $119,999",$45 - $59,United States,Remote,,0,Woman,No,Mike bostock
409,Mexico,Americas,MEX,3,9,"$20,000 - $39,999",,Mexico,Remote,,1,Man,Yes,Ryan Sleeper
410,United States,Americas,USA,2,7,"$80,000 - $99,999",,United States,Remote,,0,Woman,No,Stephanie Evergreen
411,United States,Americas,USA,5,15,"$40,000 - $59,999",I am not compensated on an hourly or project basis,United States,Hybrid,,0,Woman,No,
412,United States,Americas,USA,0,23,"$60,000 - $79,999",,United States,Hybrid,,0,Woman,,"Ann Emory, Stephanie Evergreen, Shelley Engelman, Nancy Duarte"
413,Germany,Europe,DEU,8,25,"$100,000 - $119,999",I am not compensated on an hourly or project basis,Germany,On site,Kumu,1,Man,Yes,"Alberto Cairo, Andy Kriebel, Jonathan Schwabish, Nathan Yau, Alexander Bogachov"
414,United States,Americas,USA,4,10,"$100,000 - $119,999",,United States,Remote,,0,Woman,Yes,"Cole Nussbaumer Knaflic, Stephanie Evergreen, Ann K Emery"
415,United States,Americas,USA,10,26,"$140,000 - $159,999",I am not compensated on an hourly or project basis,United States,Remote,SAS,0,Woman,No,
416,India,Asia,IND,1,1,"Less than $10,000",,India,Remote,,1,Woman,No,
417,United States,Americas,USA,7,7,"$60,000 - $79,999",,United States,On site,Sisense,0,Woman,No,
418,United States,Americas,USA,5,8,"$60,000 - $79,999",,United States,Remote,,0,Man,Yes,"Twitter, seeing examples, books with examples, examples with code on how they were made"
419,United States,Americas,USA,3,6,"$60,000 - $79,999",$15 - $29,United States,Remote,,0,Woman,Yes,
420,United States,Americas,USA,5,10,"$140,000 - $159,999",I am not compensated on an hourly or project basis,United States,Remote,Angular,0,Woman,Yes,
421,United Kingdom,Europe,GBR,5,15,"$40,000 - $59,999",,United Kingdom,Hybrid,,1,Man,Yes,
422,Netherlands,Europe,NLD,0,4,"$40,000 - $59,999",I am not compensated on an hourly or project basis,Netherlands,Hybrid,,1,Man,Yes,"Nadieh Bremer, Shirley wu"
423,Ireland,Europe,IRL,10,17,"$60,000 - $79,999",,Ireland,Remote,Incorta,0,Man,Yes,"Martin Heinz, Alberto Cairo, Mona Chalabi, David McCandless"
424,United Kingdom,Europe,GBR,5,5,"$120,000 - $139,999",,United Kingdom,Hybrid,,0,Man,Yes,Makeovers
425,United Kingdom,Europe,GBR,9,13,"$60,000 - $79,999",,United Kingdom,Remote,Metabase,0,Woman,Yes,
426,France,Europe,FRA,4,10,"$40,000 - $59,999",,France,Remote,,1,Woman,Yes,"Federica Fragapane, Alli Torban, Ludovic Tavernier, Florent Lavergne"
427,United States,Americas,USA,10,15,"$80,000 - $99,999",,United States,Remote,,0,Woman,Yes,"Ann Emery, Cole Nussbaumer Knaflic, Bill Shander"
428,United States,Americas,USA,9,11,"$100,000 - $119,999",I am not compensated on an hourly or project basis,United States,Remote,,0,Self-described or Prefer not to say,Yes,
429,United States,Americas,USA,20,31,"$240,000 or more",,United States,Hybrid,,0,Man,,
430,Ghana,Africa,GHA,3,3,"Less than $10,000",I am not compensated on an hourly or project basis,Ghana,On site,Google slides,0,Man,No,
431,United States,Americas,USA,10,25,"$100,000 - $119,999",,United States,Remote,,0,Man,No,
432,United States,Americas,USA,17,17,"$140,000 - $159,999",,United States,Remote,,0,Man,No,Keith McNulty
433,United States,Americas,USA,10,20,"$120,000 - $139,999",I am not compensated on an hourly or project basis,United States,Remote,,0,Man,No,
434,United States,Americas,USA,2,1,"$80,000 - $99,999",,United States,Remote,,0,Woman,Yes,"Alli Torban, Amanda Makulec, Giorgia Lupi, Erin Davis, Nathan Yau, Lisa Muth, Rachael Dottle, Shirley Wu, Aaron Williams, Sisi Wei, Anna Wiederkehr, Elena Mejía, Mira Rojanasakul, Pablo Robles"
435,United States,Americas,USA,7,7,"$140,000 - $159,999",,United States,Remote,,0,Woman,No,
436,United States,Americas,USA,10,22,"$180,000 - $199,999",I am not compensated on an hourly or project basis,United States,Remote,,0,Man,Yes,
437,United States,Americas,USA,12,14,"$40,000 - $59,999",$15 - $29,United States,Hybrid,Piktochart,0,Woman,,
438,Australia,Oceania,AUS,4,15,"$40,000 - $59,999",,Australia,Hybrid,,0,Woman,Yes,Kimly Scott; Steve Wexler; The Flerlaage Twins
439,United States,Americas,USA,4,12,"$140,000 - $159,999",,United States,Remote,,0,Woman,Yes,"Flerlage Twins, Cole Nussbaumer Knaflic, W.E.B. DuBois"
440,Netherlands,Europe,NLD,10,15,"$60,000 - $79,999",I am not compensated on an hourly or project basis,Netherlands,Hybrid,,1,Woman,Yes,
441,United States,Americas,USA,9,12,"$80,000 - $99,999",,United States,Hybrid,,0,Self-described or Prefer not to say,No,"Stephanie Evergreen, Anne K Emery, Nick Visscher, Mary Jackson"
442,United Kingdom,Europe,GBR,13,23,"$20,000 - $39,999",$15 - $29,United Kingdom,Remote,,1,Man,No,
443,United States,Americas,USA,16,31,,,United States,Remote,Oracle Data Visualizer,0,Man,Yes,See next question
444,United States,Americas,USA,2,6,"$60,000 - $79,999",,United States,Remote,CRM Analytics (formerly Tableau CRM),0,Man,Yes,"Alli Torban, Andy Kreibel, Cole Knafflic, and my coworkers"
445,United States,Americas,USA,10,5,"$240,000 or more",,United States,Hybrid,,0,Man,No,
446,Australia,Oceania,AUS,1,26,"$80,000 - $99,999",,Australia,Remote,,0,Man,Yes,"All the guest speakers on Bill Shander's course on LinkedIn Learning ""Data Visualization - A Lesson and Listen Series"""
447,United States,Americas,USA,8,13,"$180,000 - $199,999",,United States,Remote,Folium,0,Woman,No,
448,United States,Americas,USA,20,25,"$140,000 - $159,999",,United States,Remote,,0,Woman,Yes,web search
449,United States,Americas,USA,6,12,"$80,000 - $99,999",,United States,Remote,,0,Man,Yes,
450,Brazil,Americas,BRA,7,10,"$20,000 - $39,999",,Brazil,Hybrid,,0,Man,Yes,Cole Nussbaumer Knaflic
451,France,Europe,FRA,15,25,"$60,000 - $79,999",,France,Remote,Internal tools,1,Man,Yes,DVS slack
452,United States,Americas,USA,31,31,"$160,000 - $179,999",,United States,Hybrid,,0,Man,,The Data Stories Podcast and the Datacamp Course Offering
453,Canada,Americas,CAN,10,20,,,Canada,Remote,,1,Man,Yes,"Alberto Cairo, Giogia Lupi, Stefanie Posavec, Jonathan Schwabish, Andy Kirk, Jorge Camoes, Jonathan Corum, Mona Chalabi, Jessica Hullman"
454,United States,Americas,USA,5,20,"$60,000 - $79,999",,United States,Remote,,0,Woman,Yes,"Ann Emery, Stephanie Evergreen"
455,United States,Americas,USA,1,25,"$120,000 - $139,999",I am not compensated on an hourly or project basis,United States,Hybrid,,0,Woman,No,
456,United Kingdom,Europe,GBR,3,18,"$20,000 - $39,999",,United Kingdom,On site,,1,Woman,Yes,"Andy Kriebel, Flerlage Twins"
457,Greece,Europe,GRC,6,7,,,Greece,Hybrid,,1,Man,Yes,Data visualization society
458,United States,Americas,USA,8,12,"$80,000 - $99,999",,United States,Remote,,0,Woman,No,
459,United States,Americas,USA,26,26,"$120,000 - $139,999",,United States,Remote,,0,Man,No,"John Nelson, Ken Field, Sarah Bell"
460,United States,Americas,USA,7,7,"$240,000 or more",,United States,Hybrid,,0,Man,Yes,
461,United States,Americas,USA,2,3,"$60,000 - $79,999",,United States,Remote,,0,Man,No,Jocelyn Rivera on LinkedIn. Kavita Behera on LinkedIn.
462,United States,Americas,USA,3,3,"$80,000 - $99,999",I am not compensated on an hourly or project basis,United States,Hybrid,,0,Man,No,Marc Reid
463,Canada,Americas,CAN,4,14,,,Canada,Hybrid,,0,Woman,No,"Ann K. Emery, Stephanie Evergreen, Sheila Robinson"
464,United States,Americas,USA,10,31,"$120,000 - $139,999",,United States,Remote,,0,Man,Yes,Jim denhert. Steve wexler.
465,United States,Americas,USA,13,14,"$100,000 - $119,999",,United States,Remote,,0,Man,Yes,"J Schwabish, S Evergreen"
466,United States,Americas,USA,7,16,"$120,000 - $139,999",,United States,Remote,,0,Woman,Yes,"Schwabish, DIB, nightingale"
467,United States,Americas,USA,10,16,"$80,000 - $99,999",,United States,Hybrid,Canva,0,Woman,Yes,"Ann Emery, Stephanie Evergreen"
468,Germany,Europe,DEU,9,8,"$80,000 - $99,999",,Germany,Remote,,1,Woman,Yes,"Andy Kirk, Jon Burn-Murdoch, Lisa Muth"
469,Spain,Europe,ESP,15,12,"$80,000 - $99,999",,Spain,Remote,,1,Man,Yes,Mike Bostock
470,Switzerland,Europe,CHE,3,10,"$60,000 - $79,999",I am not compensated on an hourly or project basis,Switzerland,Hybrid,Flutter/Dart,0,Man,No,"Alberto Cairo, Steve Wexler, Shirley Wu, Nadieh Bremer"
471,Canada,Americas,CAN,7,12,"$60,000 - $79,999",I am not compensated on an hourly or project basis,Canada,Hybrid,,0,Man,No,Enterprise DNA
472,Russia,Europe,RUS,3,9,"$10,000 - $19,999",,Russia,Remote,,0,Woman,No,"Polina Uzvak, Tatiana Tsvirova, Yulia Alykova, Nadieh Bremer, Neil Halloran, Mohamad Waked, Nicholas Rougeux, Shirley Wu, Surgery Redcow, Surgery Redcow, Alexey Smagin"
473,United States,Americas,USA,10,31,"$120,000 - $139,999",,United States,Remote,,0,Man,No,
474,Greece,Europe,GRC,7,10,"$60,000 - $79,999",,Greece,Remote,Count,1,Woman,Yes,
475,United States,Americas,USA,13,15,"$120,000 - $139,999",,United States,Remote,Juicebox,0,Man,,
476,United Kingdom,Europe,GBR,1,26,"$80,000 - $99,999",,United Kingdom,Remote,,0,Man,Yes,"Alberto Cairo, David McCandless, Daniel Marsh-Patrick, Mike Bostock, Kerry Kolosko"
477,United Kingdom,Europe,GBR,10,23,"$60,000 - $79,999",,United Kingdom,Hybrid,,0,Man,Yes,"Alberto Cairo, Andy Kirk, Stefanie Posavek, Lisa Charlotte Muth, Alex Selby-Boothroyd"
478,United States,Americas,USA,7,9,"$100,000 - $119,999",,United States,On site,,0,Man,No,
479,India,Asia,IND,7,10,"Less than $10,000",$45 - $59,India,Remote,,1,Man,Yes,"NYtimes, Guardian, Mona Chalabi, ObservableHQ community, Jason, Vox Videos"
480,United States,Americas,USA,9,24,"$80,000 - $99,999",,United States,Remote,,0,Man,Yes,
481,United States,Americas,USA,6,12,"$200,000 - $219,999",$200 - $224,United States,Remote,,0,Woman,No,
482,United States,Americas,USA,7,10,"$160,000 - $179,999",I am not compensated on an hourly or project basis,United States,Remote,,0,Man,No,
483,United States,Americas,USA,10,17,"$140,000 - $159,999",,United States,Remote,,0,Man,Yes,
484,United States,Americas,USA,10,12,"$200,000 - $219,999",I am not compensated on an hourly or project basis,United States,Hybrid,,0,Man,Yes,"Ben Fry, Kim Rees"
485,Austria,Europe,AUT,19,22,"$140,000 - $159,999",,Austria,Remote,Kibana,1,Man,,"Alberto Cairo, Mike Bostock"
486,United Kingdom,Europe,GBR,7,22,"$40,000 - $59,999",,United Kingdom,Remote,,0,Man,,Books of dataviz examples
487,United States,Americas,USA,13,21,"$240,000 or more",I am not compensated on an hourly or project basis,United States,Hybrid,"Miro, Adobe Xd",0,Man,Yes,
488,United States,Americas,USA,8,12,"$140,000 - $159,999",,United States,Remote,Lucidchart,0,Woman,No,
489,Canada,Americas,CAN,7,3,"$40,000 - $59,999",I am not compensated on an hourly or project basis,Canada,Hybrid,,0,Man,,
490,Netherlands,Europe,NLD,5,15,"$20,000 - $39,999",$60 - $74,Netherlands,Remote,,1,Man,No,
491,United States,Americas,USA,5,0,"$20,000 - $39,999",I am not compensated on an hourly or project basis,United States,Hybrid,,0,Woman,Yes,"Matthias Stahl, Gabrielle Merite"
492,United States,Americas,USA,5,9,"$60,000 - $79,999",I am not compensated on an hourly or project basis,United States,Remote,,0,Woman,,
493,United States,Americas,USA,10,12,"$120,000 - $139,999",,United States,Remote,,0,Man,No,
494,United States,Americas,USA,4,5,"$80,000 - $99,999",,United States,Remote,,0,Woman,Yes,"Amelia Wattenberger, Nadieh Bremer, Shirley Wu"
495,United Kingdom,Europe,GBR,5,5,"$60,000 - $79,999",,United Kingdom,Hybrid,,0,Woman,Yes,
496,United States,Americas,USA,16,31,,$300 or more,United States,Remote,,0,Man,Yes,Daniel Zvinca. Steve Wexler. Jeffrey Shaffer. Dorian Banitiou. Alberto Cairo.
497,Romania,Europe,ROU,7,7,,$45 - $59,Romania,Remote,Domo,1,Man,No,
498,United Kingdom,Europe,GBR,7,2,"$10,000 - $19,999",,United Kingdom,Remote,,0,Man,No,Others work
499,United States,Americas,USA,8,8,,$100 - $124,United States,Remote,Observable Notebooks,0,Man,,"Amelia Wattenberger, Matthias Stahl"
500,United States,Americas,USA,6,0,"$20,000 - $39,999",I am not compensated on an hourly or project basis,United States,Remote,,0,Woman,Yes,
501,Mexico,Americas,MEX,0,9,"$20,000 - $39,999",I am not compensated on an hourly or project basis,Mexico,On site,,1,Man,Yes,
502,United States,Americas,USA,0,8,"$40,000 - $59,999",,United States,Remote,,1,Woman,Yes,
503,Canada,Americas,CAN,15,20,I am not compensated on a yearly basis,$100 - $124,Canada,Remote,,0,Woman,Yes,
504,Canada,Americas,CAN,5,3,I am not compensated on a yearly basis,$75 - $99,Canada,Remote,,1,Man,Yes,
505,United States,Americas,USA,11,16,"$120,000 - $139,999",,United States,Remote,,0,Woman,Yes,
506,United States,Americas,USA,10,31,,$100 - $124,United States,Remote,,0,Woman,Yes,"Stephanie Evergreen, Ann Emery, Cole Knaflic, Andy Kirk, Alberto Cairo"
507,Spain,Europe,ESP,4,12,I am not compensated on a yearly basis,$15 - $29,Spain,Remote,,1,Woman,Yes,"Nathan Yau, Giorgia Lupi, Mike Brondbjerg, Zach Lieberman"
508,United Kingdom,Europe,GBR,2,9,"$140,000 - $159,999",$75 - $99,United Kingdom,Remote,,0,Man,Yes,
509,United States,Americas,USA,8,18,"$60,000 - $79,999",$150 - $174,United States,Remote,,0,Man,No,"Cédric Scherer, Georgios Karamanis, John Burn-Murdoch, Will Chase"
510,United States,Americas,USA,5,22,I am not compensated on a yearly basis,$100 - $124,United States,Remote,,0,Woman,,shirley wu
511,United States,Americas,USA,10,24,I am not compensated on a yearly basis,$200 - $224,United States,Remote,,0,Woman,No,
512,Pakistan,Asia,PAK,2,0,I am not compensated on a yearly basis,I am not compensated on an hourly or project basis,Pakistan,Remote,,0,Woman,No,
513,Netherlands,Europe,NLD,22,25,"$40,000 - $59,999",$75 - $99,Netherlands,Hybrid,,1,Man,Yes,
514,United States,Americas,USA,6,30,,$60 - $74,United States,Remote,,0,Woman,,
515,New Zealand,Oceania,NZL,6,20,"$180,000 - $199,999",,New Zealand,On site,,0,Man,,
516,Italy,Europe,ITA,24,20,"$40,000 - $59,999",I am not compensated on an hourly or project basis,Italy,On site,ELK,1,Man,Yes,
517,Australia,Oceania,AUS,10,22,"$80,000 - $99,999",,Australia,Remote,,0,Woman,Yes,Giorgio Lupi
518,United States,Americas,USA,24,15,"$80,000 - $99,999",,United States,On site,,1,Woman,Yes,
519,Thailand,Asia,THA,10,31,,$125 - $149,Thailand,Hybrid,,0,Man,No,"Newspapers, journals, Twitter, facebook"
520,United States,Americas,USA,18,22,"$100,000 - $119,999",,United States,On site,,0,Man,Yes,"Moritz Stefaner, Shirley Wu, Nadieh Bremer, Jeff Heer, Bongshin Lee"
521,Canada,Americas,CAN,7,11,"$60,000 - $79,999",,Canada,On site,,1,Man,Yes,
522,France,Europe,FRA,27,28,,,France,Hybrid,OmniGraffle,0,Man,No,"Alberto Cairo, Andy Kirk, Robert Kosara, Cole Knaflic, Xemartin Laborde"
523,United States,Americas,USA,7,5,"$60,000 - $79,999",I am not compensated on an hourly or project basis,United States,Remote,SAS,0,Man,Yes,
524,Russia,Europe,RUS,2,3,"Less than $10,000",Less than $15,Russia,Remote,,1,Man,No,"Daniel Huffman, Lisa Charlotte Muth"
525,United States,Americas,USA,4,2,"$120,000 - $139,999",I am not compensated on an hourly or project basis,United States,Remote,,0,Woman,Yes,Teneika Askew; Mikayla Edwards
526,Brazil,Americas,BRA,4,3,"$10,000 - $19,999",Less than $15,Brazil,Remote,,1,Man,Yes,"Giorgia Lupi, Nadieh Bremer, Alberto Cairo"
527,Switzerland,Europe,CHE,3,6,"$80,000 - $99,999",,Switzerland,On site,,0,Woman,Yes,Twitter folk
528,United States,Americas,USA,3,5,"$60,000 - $79,999",,United States,Remote,,0,Woman,Yes,
529,Canada,Americas,CAN,2,10,"$40,000 - $59,999",,Canada,Hybrid,Qualtrics,1,Self-described or Prefer not to say,Yes,
530,United States,Americas,USA,5,4,"$80,000 - $99,999",$30 - $44,United States,Remote,,0,Woman,Yes,
531,United Kingdom,Europe,GBR,5,22,"$60,000 - $79,999",,United Kingdom,Hybrid,Infogram,1,Man,Yes,Pinterest
532,United States,Americas,USA,7,12,"$180,000 - $199,999",,United States,Remote,,0,Woman,Yes,
533,United States,Americas,USA,8,30,"$140,000 - $159,999",,United States,Remote,,0,Woman,Yes,
534,United States,Americas,USA,2,1,"$80,000 - $99,999",I am not compensated on an hourly or project basis,United States,Remote,,0,Woman,No,"Tanya Shapiro, Jonathan Schwabish, Cedric Scherer"
535,United States,Americas,USA,6,16,"$80,000 - $99,999",I am not compensated on an hourly or project basis,United States,Hybrid,,0,Man,Yes,
536,United States,Americas,USA,1,3,"$60,000 - $79,999",,United States,On site,,0,Man,Yes,
537,Portugal,Europe,PRT,2,9,,$45 - $59,Portugal,Remote,,1,Woman,Yes,Meetup talks like from DataVis Lisboa
538,Peru,Americas,PER,10,15,"$20,000 - $39,999",Less than $15,Peru,Remote,,0,Man,No,
539,United States,Americas,USA,8,11,"$60,000 - $79,999",,United States,On site,,0,Man,No,"My data viz work is primarily in Tableau, so I tend to follow members of that community primarily."
540,United States,Americas,USA,20,17,"$160,000 - $179,999",I am not compensated on an hourly or project basis,United States,Remote,,0,Man,Yes,Economist Daily Graphic and Intel unit always great!
541,United States,Americas,USA,3,11,,$75 - $99,United States,Remote,,0,Woman,Yes,Nadieh Bremer
542,United States,Americas,USA,3,0,"$80,000 - $99,999",,United States,Hybrid,,1,Man,Yes,Cole Knaflic; Curran Kelleher; Raeedah Wahid; John Muyskens
543,United States,Americas,USA,4,6,"$180,000 - $199,999",I am not compensated on an hourly or project basis,United States,Remote,,0,Man,,
544,United Kingdom,Europe,GBR,2,20,"$20,000 - $39,999",,United Kingdom,Hybrid,,0,Man,Yes,
545,United States,Americas,USA,6,8,"$60,000 - $79,999",$75 - $99,United States,Hybrid,,0,Woman,,Ann K Emery; Steve Wexler; Jon Swabish; Stephanie Evergreen; Flerlage Twins
546,United States,Americas,USA,8,10,"$60,000 - $79,999",,United States,Remote,,1,Woman,Yes,
547,United States,Americas,USA,10,12,"$60,000 - $79,999",$60 - $74,United States,Hybrid,,0,Man,No,
548,United States,Americas,USA,10,10,"$80,000 - $99,999",,United States,Remote,,0,Man,No,
549,United States,Americas,USA,15,22,"$60,000 - $79,999",$100 - $124,United States,Hybrid,,0,Woman,No,"Ann Emery, Cole Nussbaum"
550,United States,Americas,USA,6,10,"$100,000 - $119,999",$100 - $124,United States,Remote,,0,Woman,Yes,
551,United States,Americas,USA,4,9,"$80,000 - $99,999",I am not compensated on an hourly or project basis,United States,Hybrid,,0,Self-described or Prefer not to say,No,Stephanie Evergreen
552,Germany,Europe,DEU,5,4,"$20,000 - $39,999",,Germany,Hybrid,Inkscape (free alternative to Illustrator),1,Man,Yes,"Moritz Stefaner, Russel Goldenberg, Matthias Stahl"
553,India,Asia,IND,2,3,"$40,000 - $59,999",,India,Remote,Snowflake.io,1,Man,Yes,
554,United States,Americas,USA,5,10,"$160,000 - $179,999",,United States,Hybrid,,1,Man,Yes,
555,United States,Americas,USA,5,7,"$100,000 - $119,999",,United States,Hybrid,,0,Woman,Yes,
556,Italy,Europe,ITA,8,5,"$20,000 - $39,999",,Italy,On site,,1,Man,Yes,
557,United States,Americas,USA,8,18,"$180,000 - $199,999",,United States,Remote,,0,Man,Yes,
558,United States,Americas,USA,5,14,"$120,000 - $139,999",,United States,Hybrid,,0,Woman,Yes,
559,United States,Americas,USA,5,10,,$75 - $99,United States,,,0,Woman,Yes,"Andy Kirk, Steve Few, Alberto Cairo"
560,United States,Americas,USA,4,15,"$120,000 - $139,999",I am not compensated on an hourly or project basis,United States,Remote,Mixpanel,0,Woman,No,
561,Germany,Europe,DEU,5,9,"$80,000 - $99,999",,Germany,Hybrid,,1,Man,,"Andy Kriebel, d3.js, Tableau public"
562,Hungary,Europe,HUN,3,9,"$20,000 - $39,999",,Hungary,Hybrid,,0,Man,Yes,Judit Bekker
563,Denmark,Europe,DNK,4,6,"$60,000 - $79,999",I am not compensated on an hourly or project basis,Denmark,Hybrid,,1,Woman,Yes,
564,United States,Americas,USA,5,12,"$120,000 - $139,999",$75 - $99,United States,Remote,Miro,1,Woman,,
565,United States,Americas,USA,4,13,"$80,000 - $99,999",,United States,Hybrid,,0,Woman,No,"Stephanie Evergreen, Amelia Kohm"
566,Canada,Americas,CAN,4,3,"$60,000 - $79,999",,Canada,Remote,,0,Man,No,"ced scherer, hadley wickham, julia silge, david robinson"
567,Brazil,Americas,BRA,5,15,"$40,000 - $59,999",,Brazil,Hybrid,,0,Man,No,
568,United States,Americas,USA,20,12,"$180,000 - $199,999",,United States,Remote,,0,Man,No,
569,Switzerland,Europe,CHE,5,8,"$100,000 - $119,999",,Switzerland,Hybrid,,1,Woman,No,
570,United States,Americas,USA,5,12,"$100,000 - $119,999",,United States,Remote,Agency Analytics,0,Woman,,
571,Ireland,Europe,IRL,5,15,"$60,000 - $79,999",,Ireland,Remote,,0,Woman,Yes,Lyndsey Poulter/Rody Zakovich/Andy Kriebel/Chantilly Jaegernauth/Albero Cairo/Amanda Makulec/Nadie Brehmer
572,United Kingdom,Europe,GBR,5,8,"$40,000 - $59,999",I am not compensated on an hourly or project basis,United Kingdom,Remote,,0,Woman,No,google
573,United Kingdom,Europe,GBR,8,8,"$40,000 - $59,999",$15 - $29,United Kingdom,Hybrid,,0,Woman,Yes,
574,United States,Americas,USA,3,7,"$60,000 - $79,999",,United States,Hybrid,,0,Woman,No,
575,Germany,Europe,DEU,3,20,"$60,000 - $79,999",,Germany,Hybrid,,1,Man,,"Cédric Scherer, Lisa Charlotte Muth, Richard Brath, Helena Jambor"
576,Canada,Americas,CAN,4,10,,,Canada,Remote,,0,Woman,No,Lots of examples with survey data
577,United States,Americas,USA,4,5,"$40,000 - $59,999",,United States,Remote,,0,Woman,No,
578,United States,Americas,USA,5,9,"$80,000 - $99,999",,United States,Remote,,1,Woman,Yes,
579,United States,Americas,USA,1,3,"$60,000 - $79,999",$30 - $44,United States,Hybrid,,1,Man,Yes,"Expert guided videos, blogs and books"
580,United Kingdom,Europe,GBR,5,7,"$40,000 - $59,999",I am not compensated on an hourly or project basis,United Kingdom,Hybrid,,0,Man,No,
581,Bangladesh,Asia,BGD,12,25,"$40,000 - $59,999",I am not compensated on an hourly or project basis,Bangladesh,On site,,1,Man,,
582,New Zealand,Oceania,NZL,6,20,"$40,000 - $59,999",$15 - $29,New Zealand,Hybrid,,0,Man,,
583,United States,Americas,USA,1,5,"$40,000 - $59,999",,United States,Remote,,0,Woman,No,Ann Emery and Stephanie Evergreen
584,United States,Americas,USA,5,12,"$100,000 - $119,999",$45 - $59,United States,Remote,,0,Woman,Yes,
585,India,Asia,IND,2,9,,,India,Hybrid,,0,Woman,No,"David Keyes, Cédric Scherer, anyone who makes their codes/courses publicly available"
586,Canada,Americas,CAN,10,10,"$60,000 - $79,999",$45 - $59,Canada,Remote,,0,Man,No,
587,Chile,Americas,CHL,3,13,"$10,000 - $19,999",,Chile,On site,Ex Libris' Alma Data Visualization,1,Man,Yes,
588,United Kingdom,Europe,GBR,7,23,"$80,000 - $99,999",,United Kingdom,Hybrid,,1,Woman,Yes,
589,United States,Americas,USA,4,18,"$60,000 - $79,999",,United States,Remote,,0,Woman,No,"Stephanie Evergreen, Ann Emery, Alberto Cairo"
590,India,Asia,IND,6,10,,,India,Hybrid,Spotfire,1,Man,Yes,
591,United States,Americas,USA,4,18,"$100,000 - $119,999",I am not compensated on an hourly or project basis,United States,Remote,Alteryx,0,Woman,Yes,
592,United States,Americas,USA,20,25,"$100,000 - $119,999",,United States,Hybrid,,0,Man,Yes,"Steve Wexler, Nathan Yau, @SeattleDataGuy"
593,United States,Americas,USA,4,17,"$100,000 - $119,999",,United States,Hybrid,procreate,1,Woman,Yes,"stephanie evergreen, ann emery, David McCandless"
594,Brazil,Americas,BRA,3,5,"$20,000 - $39,999",,Brazil,Remote,,1,Man,Yes,
595,United States,Americas,USA,3,12,"$80,000 - $99,999",,United States,On site,,0,Woman,Yes,
596,United States,Americas,USA,4,7,"$120,000 - $139,999",,United States,Hybrid,,0,Woman,No,
597,United States,Americas,USA,10,4,"$100,000 - $119,999",,United States,Hybrid,,1,Woman,Yes,
598,United States,Americas,USA,4,7,"$80,000 - $99,999",I am not compensated on an hourly or project basis,United States,Remote,,0,Woman,,"Georgia Lupi. Heather Krause, We All Count. Cole Nussbaumer Knaflic."
599,United States,Americas,USA,5,6,"$100,000 - $119,999",,United States,Remote,"InDesign, Xd",0,Self-described or Prefer not to say,No,
600,Canada,Americas,CAN,4,12,"$120,000 - $139,999",,Canada,Remote,,1,Woman,No,
601,India,Asia,IND,5,6,"Less than $10,000",Less than $15,India,Remote,,0,Woman,Yes,
602,United States,Americas,USA,2,5,I am not compensated on a yearly basis,I am not compensated on an hourly or project basis,United States,Remote,,0,Woman,Yes,
603,United States,Americas,USA,7,8,"$140,000 - $159,999",I am not compensated on an hourly or project basis,United States,Hybrid,,1,Woman,Yes,
604,United States,Americas,USA,2,10,"$40,000 - $59,999",,United States,Hybrid,,0,Man,No,Ann Emery :)
605,United States,Americas,USA,5,4,"$120,000 - $139,999",I am not compensated on an hourly or project basis,United States,On site,,0,Man,Yes,
606,United States,Americas,USA,25,25,"$100,000 - $119,999",,United States,Remote,,0,Woman,Yes,
607,United States,Americas,USA,5,10,"$100,000 - $119,999",,United States,Remote,,0,Woman,,"Ann Emery, Stephanie Evergreen, Jon Schwabish"
608,United States,Americas,USA,7,8,,,United States,Remote,,0,Woman,Yes,
609,United States,Americas,USA,2,10,"$40,000 - $59,999",,United States,Remote,,0,Woman,Yes,
610,United States,Americas,USA,2,4,"$100,000 - $119,999",,United States,Remote,,0,Woman,Yes,"Mike Bostock, Nadine Brehmer"
611,Germany,Europe,DEU,3,3,"$40,000 - $59,999",,Germany,Remote,,1,Woman,Yes,Moritz Stefaner
612,Norway,Europe,NOR,3,9,"$80,000 - $99,999",,Norway,Hybrid,,1,Man,Yes,
613,Sweden,Europe,SWE,6,6,"$60,000 - $79,999",,Sweden,Hybrid,,1,Woman,Yes,"Alli Torban, Andy Kirk, Evelina Judeikyte, Duncan Geere"
614,United States,Americas,USA,3,8,"$60,000 - $79,999",,United States,Remote,Stata,0,Woman,Yes,
615,United States,Americas,USA,16,18,"$80,000 - $99,999",,United States,Remote,,0,Woman,No,
616,United States,Americas,USA,4,12,,,United States,Remote,DataDog,0,Man,Yes,Tufte opened my eyes. I also like the playfulness of Nicky Case
617,Canada,Americas,CAN,15,20,"$120,000 - $139,999",,Canada,Remote,,0,Woman,Yes,
618,United States,Americas,USA,27,30,"$120,000 - $139,999",,United States,On site,,0,Woman,No,
619,United States,Americas,USA,4,9,"$120,000 - $139,999",I am not compensated on an hourly or project basis,United States,Remote,,0,Woman,,
620,United Kingdom,Europe,GBR,10,19,"$80,000 - $99,999",,United Kingdom,Remote,,0,Man,Yes,"Andy Kirk, Stephen Few, Andy Kreibel"
621,United Kingdom,Europe,GBR,20,20,"$60,000 - $79,999",,United Kingdom,Remote,,0,Man,No,John Burn-Murdoch
622,India,Asia,IND,0,3,I am not compensated on a yearly basis,I am not compensated on an hourly or project basis,India,Remote,,0,Man,No,
623,United States,Americas,USA,5,3,"$180,000 - $199,999",,United States,Remote,,0,Man,Yes,
624,United States,Americas,USA,8,13,"$120,000 - $139,999",,United States,Remote,,0,Woman,No,
625,United States,Americas,USA,2,0,"$60,000 - $79,999",,United States,Remote,,0,Man,Yes,
626,Spain,Europe,ESP,6,6,"$20,000 - $39,999",I am not compensated on an hourly or project basis,Spain,On site,,0,Man,No,
627,United States,Americas,USA,5,14,"$60,000 - $79,999",,United States,Remote,,0,Man,Yes,
628,Spain,Europe,ESP,8,15,"$20,000 - $39,999",$30 - $44,Spain,Remote,Inkscape,1,Man,No,
629,United States,Americas,USA,16,16,"$160,000 - $179,999",,United States,Remote,,0,Woman,Yes,
630,United States,Americas,USA,1,7,"$20,000 - $39,999",,United States,,,0,Man,Yes,
631,United States,Americas,USA,10,31,"$100,000 - $119,999",,United States,Remote,,0,Woman,No,
632,United States,Americas,USA,10,20,"$100,000 - $119,999",,United States,Remote,,0,Woman,No,
633,United States,Americas,USA,6,6,"$100,000 - $119,999",,United States,On site,,0,Woman,Yes,
634,Bangladesh,Asia,BGD,3,4,"$10,000 - $19,999",,Bangladesh,Hybrid,,1,Man,No,User-friendly tools and availability of resources
635,United States,Americas,USA,4,20,"$80,000 - $99,999",,United States,Hybrid,,0,Woman,,"Andy Kreibel,"
636,Uganda,Africa,UGA,5,11,,,Uganda,On site,,0,Man,Yes,Flerlage twins
637,United States,Americas,USA,5,30,"$200,000 - $219,999",,United States,Remote,,0,Man,Yes,"Shirley Wu, Nigel Holmes, RJ Andrews, Nadieh Bremmer, NYT team, SCMP team, Marcelo Duhalde, Aldofo Arranz, Alberto Cairo"
638,United States,Americas,USA,29,31,"$180,000 - $199,999",,United States,Remote,,0,Man,Yes,
639,Canada,Americas,CAN,10,25,"$140,000 - $159,999",,Canada,Remote,,0,Man,Yes,
640,Australia,Oceania,AUS,0,6,"$60,000 - $79,999",,Australia,Hybrid,,0,Man,No,
641,United Kingdom,Europe,GBR,4,4,"$20,000 - $39,999",I am not compensated on an hourly or project basis,United Kingdom,Hybrid,,0,Woman,Yes,
642,United States,Americas,USA,6,8,"$100,000 - $119,999",,United States,Hybrid,,0,Woman,Yes,
643,United States,Americas,USA,15,31,"$160,000 - $179,999",$75 - $99,United States,Hybrid,Cameo Enterprise Architecture,0,Woman,Yes,Other engineers
644,United States,Americas,USA,6,10,"$60,000 - $79,999",,United States,Remote,,1,Self-described or Prefer not to say,No,
645,United States,Americas,USA,5,4,"$40,000 - $59,999",,United States,Hybrid,"Canva, eSpatial, Microsoft Word",0,Woman,No,Ann K. Emery (Depict Data Studio)
646,United Kingdom,Europe,GBR,12,22,"$140,000 - $159,999",,United Kingdom,Hybrid,,0,Man,No,
647,United States,Americas,USA,8,15,"$80,000 - $99,999",,United States,Hybrid,,0,Woman,,
648,United States,Americas,USA,21,21,"$100,000 - $119,999",,United States,On site,,0,Woman,Yes,
649,Canada,Americas,CAN,13,13,"$100,000 - $119,999",,Canada,Hybrid,,1,Man,Yes,
650,United States,Americas,USA,10,23,"$80,000 - $99,999",,United States,On site,SAS,0,Woman,No,
651,Argentina,Americas,ARG,11,15,"$40,000 - $59,999",I am not compensated on an hourly or project basis,Argentina,Remote,,1,Woman,Yes,
652,United States,Americas,USA,6,10,"$60,000 - $79,999",,United States,Hybrid,Canva,0,Self-described or Prefer not to say,No,
653,United States,Americas,USA,8,15,"$80,000 - $99,999",I am not compensated on an hourly or project basis,United States,Remote,,0,Woman,No,
654,Canada,Americas,CAN,10,20,"$40,000 - $59,999",,Canada,Remote,,1,Man,,
655,United States,Americas,USA,10,31,"$120,000 - $139,999",,United States,Hybrid,,0,Woman,Yes,
656,Japan,Asia,JPN,6,5,"$60,000 - $79,999",,Japan,On site,,0,Man,Yes,
657,United States,Americas,USA,10,18,"$80,000 - $99,999",,United States,On site,,0,Woman,No,
658,United States,Americas,USA,8,9,"$160,000 - $179,999",,United States,Remote,,0,Woman,Yes,"So many! Bloomberg business week, Data Sketches book (Shirley Wu + Nadieh Bremer)"
659,United States,Americas,USA,5,4,"$120,000 - $139,999",,United States,Remote,,0,Man,,
660,United States,Americas,USA,7,11,"$60,000 - $79,999",,United States,Hybrid,Infogram,0,Woman,No,
661,United States,Americas,USA,12,12,"$240,000 or more",,United States,Remote,,0,Man,Yes,
662,United States,Americas,USA,8,19,,,United States,Remote,,0,Man,No,"The OGs - Tufte, Few, Cairo"
663,United States,Americas,USA,7,15,"$120,000 - $139,999",,United States,Remote,,0,Man,Yes,
664,United States,Americas,USA,3,12,"$120,000 - $139,999",I am not compensated on an hourly or project basis,United States,Remote,"SVG, HTML/CSS",0,Man,Yes,
665,United States,Americas,USA,8,10,"$140,000 - $159,999",,United States,Remote,,0,Man,Yes,Ken Flerlage
666,United Kingdom,Europe,GBR,1,22,,,United Kingdom,Remote,,0,Woman,Yes,monachalabi; informationisbeautiful founder
667,United States,Americas,USA,3,22,"$100,000 - $119,999",,United States,Remote,,0,Man,,
668,United States,Americas,USA,8,11,"$200,000 - $219,999",,United States,Remote,,0,Woman,Yes,
669,United States,Americas,USA,14,31,"$220,000 - $239,999",,United States,Remote,,0,Man,No,
670,United States,Americas,USA,15,14,"$120,000 - $139,999",I am not compensated on an hourly or project basis,United States,Other (please specify),,0,Man,No,
671,United States,Americas,USA,12,19,"$100,000 - $119,999",,United States,Remote,Canva [NOT Canvas],0,Man,Yes,
672,Hungary,Europe,HUN,8,15,,$45 - $59,Hungary,Remote,,1,Man,Yes,
673,United States,Americas,USA,10,10,"$80,000 - $99,999",I am not compensated on an hourly or project basis,United States,Hybrid,Pentaho,0,Woman,No,
674,United States,Americas,USA,9,27,,,United States,Remote,,0,Man,Yes,"Andy Kriebel, Steve Wexler, Stephen Few, Cole Nussbaumer Knaflic"
675,United States,Americas,USA,10,25,,$100 - $124,United States,Hybrid,,0,Man,Yes,Tufte
676,United Kingdom,Europe,GBR,10,31,I am not compensated on a yearly basis,I am not compensated on an hourly or project basis,United Kingdom,Remote,,1,Self-described or Prefer not to say,Yes,
677,United States,Americas,USA,8,14,,$300 or more,United States,Remote,Word,0,Woman,Yes,"Brent Dykes, Ann K. Emery, Kate Strachnyi, Alli Torban, Flerlage Twins, Zach Bowders, Christina Gorga"
678,United States,Americas,USA,18,26,"$60,000 - $79,999",,United States,Remote,,0,Woman,Yes,
679,United States,Americas,USA,8,6,,,United States,Remote,,0,Man,Yes,
680,Canada,Americas,CAN,10,13,"$80,000 - $99,999",,Canada,Remote,Miro,0,Woman,,
681,Canada,Americas,CAN,7,25,"$160,000 - $179,999",$100 - $124,Canada,Remote,,0,Man,,
682,Colombia,Americas,COL,15,30,"$60,000 - $79,999",$100 - $124,Colombia,Remote,,1,Man,Yes,interactivity and proprioceptive behavior
683,United States,Americas,USA,8,17,"$60,000 - $79,999",,United States,Hybrid,,0,Woman,No,Stephanie Evergreen
684,Australia,Oceania,AUS,14,20,"$60,000 - $79,999",,Australia,Hybrid,,0,Man,No,
685,Italy,Europe,ITA,9,14,"$100,000 - $119,999",,Italy,Remote,We have built our own javascript data visualization library,1,Man,Yes,Robert Monfera
686,United States,Americas,USA,9,12,"$140,000 - $159,999",,United States,Remote,,1,Woman,Yes,
687,United States,Americas,USA,7,11,"$140,000 - $159,999",,United States,Remote,Sigma,0,Woman,,"Alberto Cairo, Cole Nussbaumer Knaflic, Giorgia Lupi"
688,Lithuania,Europe,LTU,0,0,"Less than $10,000",Less than $15,Lithuania,Remote,,1,Man,No,
689,United Kingdom,Europe,GBR,24,24,"$140,000 - $159,999",I am not compensated on an hourly or project basis,United Kingdom,Hybrid,Domo,0,Man,Yes,
690,United Kingdom,Europe,GBR,10,24,"$120,000 - $139,999",,United Kingdom,Remote,,0,Man,Yes,Steve Wexler
691,Italy,Europe,ITA,6,10,I am not compensated on a yearly basis,$45 - $59,Italy,Remote,Drawbot,1,Man,Yes,
692,United States,Americas,USA,17,24,"$160,000 - $179,999",,United States,Remote,,0,Man,Yes,
693,United States,Americas,USA,5,13,"$80,000 - $99,999",$45 - $59,United States,Remote,Open-source image editing software,1,Woman,Yes,"Chimdi Nwosu, Mike Cisneros, Steve Wexler, Eli Holder, Erica Gunn"
694,Netherlands,Europe,NLD,2,5,"$60,000 - $79,999",,Netherlands,Remote,Visier,1,Woman,Yes,
695,United States,Americas,USA,24,24,,$100 - $124,United States,Remote,,0,Woman,No,Anne Emery
696,India,Asia,IND,0,3,"Less than $10,000",I am not compensated on an hourly or project basis,India,Hybrid,,1,Man,No,"David McCandless, Scott Reinhard, Nadieh Bremer"
697,United States,Americas,USA,0,9,,$100 - $124,United States,Remote,Canva,0,Woman,Yes,"Sheila B. Robinson, Stephanie Evergreen"
698,United States,Americas,USA,15,31,"$240,000 or more",,United States,Hybrid,,0,Man,Yes,
699,Germany,Europe,DEU,3,6,,$75 - $99,Germany,Remote,,1,Man,Yes,Nathan Yau; Jonathan Schwabisch; Sandra Redgen; Sonja Kuijpers; Nadieh Bremer; Florent Lavergne
700,Italy,Europe,ITA,2,11,"$60,000 - $79,999",,Italy,Hybrid,,1,Woman,No,
701,United States,Americas,USA,10,10,"$100,000 - $119,999",$30 - $44,United States,Remote,,1,Woman,Yes,"nadieh Bremer, zan Armstrong, Lisa Charlotte muth"
702,Portugal,Europe,PRT,6,11,,$30 - $44,Portugal,Hybrid,,0,Man,,
703,United States,Americas,USA,15,15,I am not compensated on a yearly basis,$175 - $199,United States,Remote,,0,Woman,No,"Stephanie Evergreen, Ann Emory, Chris Lysy, Ama Nyame-Mensah, Heather Krause/We All Count"
704,India,Asia,IND,3,3,I am not compensated on a yearly basis,$45 - $59,India,Remote,,1,Man,Yes,
705,United States,Americas,USA,1,4,"$10,000 - $19,999",,United States,Remote,,1,Man,Yes,Stack Overflow and anything on Tableau Public
706,United States,Americas,USA,8,10,"$20,000 - $39,999",,United States,Hybrid,,0,Woman,Yes,
707,United States,Americas,USA,4,4,"Less than $10,000",,United States,Hybrid,,0,Man,Yes,
708,Philippines,Asia,PHL,5,10,,$45 - $59,Philippines,Remote,,1,Woman,Yes,Georgia lupi
709,Netherlands,Europe,NLD,7,10,,$200 - $224,Netherlands,Remote,,1,Woman,Yes,
710,Australia,Oceania,AUS,10,18,,$150 - $174,Australia,Remote,,0,Man,Yes,
711,Brazil,Americas,BRA,12,14,"$10,000 - $19,999",$15 - $29,Brazil,Remote,,0,Man,No,
712,United Kingdom,Europe,GBR,5,6,"$40,000 - $59,999",,United Kingdom,Remote,,0,Woman,No,General public / posts I see online
713,Nepal,Asia,NPL,4,5,"Less than $10,000",,Nepal,Remote,,1,Man,Yes,"Tableau Public Viz of the day, #DataFam"
714,Finland,Europe,FIN,10,30,,$60 - $74,Finland,Remote,,1,Woman,Yes,
715,United Kingdom,Europe,GBR,7,9,I am not compensated on a yearly basis,$100 - $124,United Kingdom,Remote,,1,Woman,Yes,
716,Canada,Americas,CAN,10,14,"$80,000 - $99,999",$100 - $124,Canada,Remote,,0,Man,,
717,United States,Americas,USA,29,30,,$300 or more,United States,Remote,,0,Man,Yes,
718,United States,Americas,USA,8,25,,,United States,Remote,Word,0,Woman,,"Ann Emery, Stephanie Evergreen"
719,United States,Americas,USA,10,20,I am not compensated on a yearly basis,$75 - $99,United States,Remote,,0,Man,No,
720,United States,Americas,USA,10,10,"$100,000 - $119,999",$150 - $174,United States,Remote,,0,Woman,Yes,
721,United States,Americas,USA,2,3,,,United States,,,0,Woman,Yes,allie torban
722,Switzerland,Europe,CHE,31,31,"$140,000 - $159,999",,Switzerland,Remote,,1,Man,Yes,Walking around with open eyes
723,United States,Americas,USA,25,30,,$100 - $124,United States,Remote,,0,Woman,Yes,"Alberto Cairo, Cole Nussbaumer Knaflic, Sarah Bell, Stephanie Evergreen, Nathan Yau, Stephen Few, Kenneth Field, John Nelson ... the list goes on!"
724,United States,Americas,USA,5,26,"$60,000 - $79,999",$30 - $44,United States,Remote,,0,Woman,Yes,Stephanie Evergreen
725,United States,Americas,USA,8,15,,$75 - $99,United States,Remote,,0,Woman,No,
726,Germany,Europe,DEU,5,2,"$40,000 - $59,999",,Germany,Hybrid,,1,Man,No,"Jürgen Bernard, Moritz Stefaner, Alice Thudt, Tamara Munzner, Sheelagh Carpendale, Mike Bostock, Lisa Charlotte Muth"
727,Canada,Americas,CAN,6,2,"$10,000 - $19,999",,Canada,Hybrid,,0,Man,Yes,
728,Germany,Europe,DEU,5,5,"$20,000 - $39,999",I am not compensated on an hourly or project basis,Germany,Hybrid,,1,Man,No,"Cedric Scherer, Georgios Karamanis, Lisa Charlotte Muth"
729,Germany,Europe,DEU,3,5,,,Germany,Hybrid,"Tablet: e.g., procreate",1,Woman,No,"giorgia lupi, stephanie posavec"
730,United States,Americas,USA,4,17,"$60,000 - $79,999",,United States,On site,,1,Woman,No,
731,Slovenia,Europe,SVN,3,13,"$20,000 - $39,999",,Slovenia,Hybrid,,1,Woman,Yes,"Cedric Scherer, Mona Chabi, Georgia Lupi, Georgios K, Nadieh Bremer"
732,United States,Americas,USA,12,25,"$100,000 - $119,999",$100 - $124,United States,Remote,,0,Man,Yes,
733,United States,Americas,USA,8,8,"$60,000 - $79,999",$300 or more,United States,On site,,0,Man,Yes,
734,United States,Americas,USA,16,20,"$160,000 - $179,999",,United States,Hybrid,,1,Man,No,
735,United States,Americas,USA,31,31,,,United States,Remote,,0,Man,Yes,
736,Germany,Europe,DEU,10,20,"$100,000 - $119,999",I am not compensated on an hourly or project basis,Germany,On site,,1,Woman,Yes,
737,United States,Americas,USA,11,11,"$60,000 - $79,999",$125 - $149,United States,Hybrid,,0,Man,Yes,Amy Cesal
738,Norway,Europe,NOR,10,22,"$100,000 - $119,999",$150 - $174,Norway,Hybrid,After Effects,0,Man,,
739,United States,Americas,USA,2,2,I am not compensated on a yearly basis,$60 - $74,United States,Remote,,0,Woman,Yes,
740,Italy,Europe,ITA,6,3,"$40,000 - $59,999",,Italy,Remote,,1,Woman,Yes,"Giorgia Lupi, Federica Fragapane"
741,United States,Americas,USA,3,10,"$80,000 - $99,999",$100 - $124,United States,Remote,,0,Man,,
742,India,Asia,IND,1,1,"Less than $10,000",Less than $15,India,Hybrid,,0,Man,No,
743,Australia,Oceania,AUS,7,10,"$60,000 - $79,999",,Australia,Hybrid,,0,Man,No,
744,United States,Americas,USA,10,10,"$80,000 - $99,999",$200 - $224,United States,Remote,Oracle Analytics Server,0,Woman,Yes,
745,Brazil,Americas,BRA,10,18,,Less than $15,Brazil,Remote,Adobe XD,1,Woman,,
746,Pakistan,Asia,PAK,4,4,"Less than $10,000",Less than $15,Pakistan,On site,,0,Man,No,
747,Netherlands,Europe,NLD,8,12,"$80,000 - $99,999",$75 - $99,Netherlands,Hybrid,,1,Man,Yes,
748,Canada,Americas,CAN,3,9,"$60,000 - $79,999",$60 - $74,Canada,Remote,,0,Man,Yes,"Frederica Fragapane, Nadieh Bremer, Tableau #datafam"
749,United States,Americas,USA,0,31,,$45 - $59,United States,Remote,Knime,0,Man,,"Ryan Burge, Andy Kriebel"
750,Canada,Americas,CAN,10,25,"$40,000 - $59,999",,Canada,Remote,,0,Man,Yes,
751,United States,Americas,USA,26,30,"$100,000 - $119,999",$60 - $74,United States,Remote,,0,Woman,No,
752,United States,Americas,USA,10,6,"$120,000 - $139,999",,United States,Hybrid,,0,Man,Yes,
753,Ethiopia,Africa,ETH,20,26,"$10,000 - $19,999",,Ethiopia,On site,,1,Man,Yes,"Experts working in Datacamp; Simplilearn, Linkedin etc"
754,Latvia,Europe,LVA,4,20,"$20,000 - $39,999",I am not compensated on an hourly or project basis,Latvia,Remote,,1,Woman,,
755,United States,Americas,USA,8,13,"$140,000 - $159,999",$150 - $174,United States,Remote,,0,Woman,Yes,"Lisa Charlotte Muth, Jessica Hullman, Amanda Makulec, Gabrielle Merite, Alyssa Fowers, Stephanie Evergreen"
756,United States,Americas,USA,4,19,"$160,000 - $179,999",,United States,Remote,,0,Woman,Yes,
757,United States,Americas,USA,4,10,"$160,000 - $179,999",I am not compensated on an hourly or project basis,United States,Hybrid,,0,Woman,No,
758,United States,Americas,USA,5,11,"$60,000 - $79,999",,United States,On site,Visme,0,Woman,No,
759,United Kingdom,Europe,GBR,3,16,"$40,000 - $59,999",,United Kingdom,Remote,,1,Man,Yes,"Federica Fragapane, Nathan Yau, Nadieh Bremer, Shirley Wu, Alberto Cairo, John Nelson (ESRI), Kenneth Field, Moritz Stefaner, Andy Kirk"
760,United Kingdom,Europe,GBR,4,15,"$60,000 - $79,999",,United Kingdom,Hybrid,,0,Woman,No,
761,Denmark,Europe,DNK,2,2,"$60,000 - $79,999",$30 - $44,Denmark,Hybrid,,0,Woman,,
762,Portugal,Europe,PRT,17,27,"$40,000 - $59,999",$60 - $74,Portugal,Remote,,1,Man,,
763,Australia,Oceania,AUS,5,20,"$120,000 - $139,999",,Australia,Hybrid,,0,Man,Yes,
764,Mexico,Americas,MEX,8,13,"$10,000 - $19,999",I am not compensated on an hourly or project basis,Mexico,Remote,,1,Woman,No,
765,France,Europe,FRA,8,5,"$60,000 - $79,999",,France,Remote,Echarts,1,Woman,,
766,Turkey,Asia,TUR,1,30,"Less than $10,000",$15 - $29,Turkey,On site,,0,Man,Yes,
767,Russia,Europe,RUS,1,27,I am not compensated on a yearly basis,$30 - $44,Russia,Remote,,0,Self-described or Prefer not to say,Yes,
768,South Korea,Asia,PRK,3,1,,,South Korea,Remote,,0,Woman,Yes,"Shirley Wu, Giorgia Lupi, Moksha Data Studio"
769,Germany,Europe,DEU,1,14,,,Germany,Remote,,0,Woman,Yes,"Sonja Kujipers, Stefanie Posavec"
770,United States,Americas,USA,5,25,"$160,000 - $179,999",,United States,Remote,,0,Woman,,"Chartr, visual capitalist, information is beautiful, Pinterest, d3"
771,United States,Americas,USA,6,17,"$60,000 - $79,999",,United States,On site,,0,Woman,Yes,
772,United States,Americas,USA,4,12,"$60,000 - $79,999",,United States,Hybrid,,0,Woman,Yes,
773,United States,Americas,USA,1,3,"$40,000 - $59,999",,United States,Remote,,0,Woman,No,Multiple examples using data from a similar field.
774,Ireland,Europe,IRL,4,3,"$40,000 - $59,999",,Ireland,Hybrid,,0,Man,No,
775,United States,Americas,USA,5,10,"$100,000 - $119,999",,United States,Hybrid,,1,Woman,No,Stephanie Evergreen
776,United States,Americas,USA,5,4,"$60,000 - $79,999",I am not compensated on an hourly or project basis,United States,Hybrid,,0,Woman,,
777,United States,Americas,USA,4,11,"$60,000 - $79,999",I am not compensated on an hourly or project basis,United States,Hybrid,JMP,1,Man,Yes,
778,United States,Americas,USA,2,10,"$140,000 - $159,999",,United States,Remote,Report Builder 3.0,0,Woman,Yes,
779,Mexico,Americas,MEX,4,12,"$40,000 - $59,999",,Mexico,On site,,0,Man,Yes,
780,United States,Americas,USA,3,26,"$100,000 - $119,999",,United States,Remote,"SQL Server Reporting Services, Pyramid Analytics",0,Woman,Yes,
781,United States,Americas,USA,8,10,"$100,000 - $119,999",,United States,Hybrid,,0,Woman,Yes,
782,United States,Americas,USA,4,31,"$120,000 - $139,999",,United States,Remote,,0,Woman,Yes,
783,Canada,Americas,CAN,8,8,"$60,000 - $79,999",,Canada,Hybrid,,0,Woman,Yes,
784,Taiwan,Asia,TWN,3,4,"$80,000 - $99,999",,Taiwan,Remote,,1,Man,No,"Alberto Cairo, Jonathan Shwabish,"
785,New Zealand,Oceania,NZL,4,21,"$120,000 - $139,999",$200 - $224,New Zealand,Hybrid,,0,Woman,Yes,
786,United States,Americas,USA,4,4,"$80,000 - $99,999",I am not compensated on an hourly or project basis,United States,Hybrid,,0,Woman,Yes,
787,United States,Americas,USA,10,17,"$140,000 - $159,999",,United States,Hybrid,,0,Man,Yes,
788,United States,Americas,USA,5,17,I am not compensated on a yearly basis,I am not compensated on an hourly or project basis,United States,On site,,0,Self-described or Prefer not to say,Yes,
789,United States,Americas,USA,5,17,"$100,000 - $119,999",I am not compensated on an hourly or project basis,United States,Remote,,0,Woman,No,
790,United States,Americas,USA,2,3,"$60,000 - $79,999",,United States,On site,,0,Man,No,
791,United States,Americas,USA,6,12,"$60,000 - $79,999",,United States,On site,,0,Man,Yes,
792,United States,Americas,USA,4,6,"$220,000 - $239,999",,United States,Hybrid,Superblocks,0,Man,Yes,
793,United Kingdom,Europe,GBR,2,4,"$20,000 - $39,999",,United Kingdom,Remote,,0,Woman,Yes,
794,United States,Americas,USA,5,10,"$80,000 - $99,999",I am not compensated on an hourly or project basis,United States,Hybrid,,0,Man,Yes,
795,United States,Americas,USA,0,7,"$60,000 - $79,999",$30 - $44,United States,Hybrid,,0,Woman,No,
796,Brazil,Americas,BRA,3,4,"$10,000 - $19,999",I am not compensated on an hourly or project basis,Brazil,Hybrid,,1,Man,Yes,
797,United States,Americas,USA,6,17,"$180,000 - $199,999",,United States,Remote,,0,Man,Yes,
798,United States,Americas,USA,10,12,"$180,000 - $199,999",,United States,Remote,,0,Man,Yes,
799,Spain,Europe,ESP,6,8,"$40,000 - $59,999",,Spain,Remote,,1,Man,No,
800,United States,Americas,USA,10,15,"$140,000 - $159,999",,United States,Remote,,0,Man,Yes,
801,Canada,Americas,CAN,6,7,"$100,000 - $119,999",,Canada,Remote,,0,Man,Yes,
802,United States,Americas,USA,8,18,"$100,000 - $119,999",,United States,Hybrid,Canva,0,Woman,No,
803,Hungary,Europe,HUN,7,12,"$10,000 - $19,999",,Hungary,Remote,,1,Man,No,
804,Argentina,Americas,ARG,2,5,"$10,000 - $19,999",$15 - $29,Argentina,Remote,,0,Man,No,
805,Poland,Europe,POL,1,1,"$10,000 - $19,999",Less than $15,Poland,Remote,,0,Woman,No,
806,Russia,Europe,RUS,9,21,"$20,000 - $39,999",$45 - $59,Russia,Hybrid,,0,Man,,"Fernando Baptista, Antonio Farach, Nadieh Bremer, Scott Reinhard, Nadya Andrianova, John Grimwade, Alberto Cairo, David McCandless"
807,United States,Americas,USA,20,21,"$220,000 - $239,999",,United States,Hybrid,,0,Man,No,Alberto Cairo
808,India,Asia,IND,8,14,"$80,000 - $99,999",,India,Hybrid,,0,Man,Yes,
809,United States,Americas,USA,5,22,"$120,000 - $139,999",,United States,Remote,,0,Woman,No,
810,United States,Americas,USA,10,10,,,United States,Hybrid,,0,Man,No,"steve wexler, Juice Analytics"
811,United Kingdom,Europe,GBR,10,10,"$60,000 - $79,999",,United Kingdom,Remote,,0,Man,Yes,
812,United Kingdom,Europe,GBR,7,7,"$60,000 - $79,999",,United Kingdom,Hybrid,,1,Man,No,
813,United States,Americas,USA,7,9,"$80,000 - $99,999",,United States,Remote,,0,Woman,No,
814,Germany,Europe,DEU,12,19,"$80,000 - $99,999",,Germany,Remote,,1,Man,No,
815,Mongolia,Asia,MNG,2,1,I am not compensated on a yearly basis,I am not compensated on an hourly or project basis,Mongolia,Remote,,0,Man,Yes,
816,United States,Americas,USA,15,19,"$120,000 - $139,999",,United States,Remote,,0,Man,Yes,
817,United States,Americas,USA,4,8,"$100,000 - $119,999",,United States,Remote,,0,Woman,Yes,
818,United States,Americas,USA,6,16,"$80,000 - $99,999",,United States,On site,,0,Woman,No,
819,India,Asia,IND,1,3,"$10,000 - $19,999",I am not compensated on an hourly or project basis,India,Remote,,1,Woman,No,"giorgialupi, stephanie posavec, dear data,Beyond data"
820,Chile,Americas,CHL,5,30,"$20,000 - $39,999",$60 - $74,Chile,Hybrid,,0,Man,No,
821,South Africa,Africa,ZAF,8,20,"$120,000 - $139,999",,South Africa,On site,,0,Man,Yes,Wide range of Data Visualisation Practitioners
822,United States,Americas,USA,9,12,"$220,000 - $239,999",,United States,Remote,,1,Man,Yes,
823,United States,Americas,USA,10,12,"$100,000 - $119,999",$75 - $99,United States,Remote,Affinity Suite,0,Man,Yes,
824,United States,Americas,USA,5,20,"$140,000 - $159,999",,United States,Hybrid,,0,Man,Yes,"Jeffrey Shaffer, Ken Flerlage, Steve Wexler"
825,Norway,Europe,NOR,9,6,"$80,000 - $99,999",,Norway,Hybrid,,1,Woman,Yes,
826,Spain,Europe,ESP,31,31,"$120,000 - $139,999",,Spain,Hybrid,Graphery,1,Man,Yes,
827,United Kingdom,Europe,GBR,16,16,"$40,000 - $59,999",I am not compensated on an hourly or project basis,United Kingdom,On site,,0,Man,Yes,
828,Brazil,Americas,BRA,5,20,"$10,000 - $19,999",,Brazil,Hybrid,,1,Woman,No,"Federica Fragapanni, Alberto Cairo, Andy Kirk, Georgia Lupi"
829,United States,Americas,USA,7,11,"$100,000 - $119,999",I am not compensated on an hourly or project basis,United States,Hybrid,,0,Man,,
830,United States,Americas,USA,7,12,"$60,000 - $79,999",,United States,Remote,,0,Woman,Yes,
831,Nigeria,Africa,NGA,10,25,"$140,000 - $159,999",,Nigeria,Hybrid,,0,Man,No,
832,India,Asia,IND,6,6,,,India,Hybrid,,0,Man,Yes,"Andy Kribel , Flerage Twin"
833,United States,Americas,USA,3,3,"$40,000 - $59,999",$15 - $29,United States,Hybrid,,1,Self-described or Prefer not to say,Yes,
834,United States,Americas,USA,24,25,"$160,000 - $179,999",,United States,Remote,Astro tools,0,Woman,Yes,
835,United States,Americas,USA,3,20,"$60,000 - $79,999",,United States,Hybrid,,0,Woman,No,
836,United States,Americas,USA,10,16,"$40,000 - $59,999",,United States,Remote,SAS,0,Woman,No,"Stephanie Evergreen, Ann Emery"
837,United States,Americas,USA,8,10,,$150 - $174,United States,Hybrid,,0,Woman,,
838,United States,Americas,USA,8,12,"$100,000 - $119,999",,United States,Remote,Apache Superset,0,Man,Yes,"Charles Minard, Nadieh Bremer, Thomas Lin Pedersen, David Robinson"
839,Spain,Europe,ESP,10,28,"$80,000 - $99,999",,Spain,Remote,,0,Man,Yes,
840,Netherlands,Europe,NLD,10,17,"$100,000 - $119,999",,Netherlands,Remote,,0,Man,Yes,
841,Germany,Europe,DEU,12,12,"$80,000 - $99,999",,Germany,Hybrid,,1,Man,Yes,
842,Italy,Europe,ITA,5,20,,,Italy,On site,,1,Man,No,Mike Bostock
843,Russia,Europe,RUS,2,3,"$10,000 - $19,999",I am not compensated on an hourly or project basis,Russia,Remote,,0,Woman,No,
844,United States,Americas,USA,12,12,"$120,000 - $139,999",,United States,Remote,,0,Woman,Yes,
845,United States,Americas,USA,8,7,"$120,000 - $139,999",,United States,Remote,,0,Woman,No,
847,United Kingdom,Europe,GBR,18,21,"$60,000 - $79,999",I am not compensated on an hourly or project basis,United Kingdom,Hybrid,,0,Man,Yes,
848,Serbia,Europe,SRB,6,20,"$40,000 - $59,999",,Serbia,Remote,,1,Man,Yes,"Other people work, good practice examples"
849,United Kingdom,Europe,GBR,8,8,"$40,000 - $59,999",,United Kingdom,Remote,Amazon Quicksight,0,Man,Yes,
850,United States,Americas,USA,9,9,"$140,000 - $159,999",I am not compensated on an hourly or project basis,United States,Remote,,0,Woman,Yes,
851,United States,Americas,USA,12,28,"$180,000 - $199,999",,United States,Remote,,0,Man,Yes,
852,United States,Americas,USA,9,25,"$100,000 - $119,999",,United States,Remote,,0,Man,Yes,
853,United Kingdom,Europe,GBR,6,13,"$40,000 - $59,999",,United Kingdom,Remote,,0,Woman,Yes,
854,United States,Americas,USA,6,20,,$30 - $44,United States,Remote,,0,Woman,Yes,"Stephanie Evergreen, Cole Nussbaumer, Alberto Cairo, Info Is Beautiful site, Tufte when I'm really stuck"
855,Brazil,Americas,BRA,6,6,"$100,000 - $119,999",,Brazil,On site,,1,Woman,No,
856,Russia,Europe,RUS,15,22,"$40,000 - $59,999",$15 - $29,Russia,Hybrid,,0,Man,No,
857,United States,Americas,USA,14,30,"$160,000 - $179,999",I am not compensated on an hourly or project basis,United States,Remote,,0,Woman,Yes,
858,United States,Americas,USA,8,16,"$100,000 - $119,999",,United States,Remote,,0,Woman,,"Kevin & Ken Flerlage, Andy Kriebel, Jeffrey Schaeffer"
859,United States,Americas,USA,6,6,"$80,000 - $99,999",,United States,Remote,,0,Man,Yes,
860,United States,Americas,USA,12,18,"$80,000 - $99,999",,United States,Remote,,0,Man,Yes,
861,United States,Americas,USA,10,16,"$180,000 - $199,999",,United States,Hybrid,,1,Man,Yes,
862,United States,Americas,USA,18,22,,$300 or more,United States,Remote,,0,Man,Yes,
863,Malaysia,Asia,MYS,2,15,,,Malaysia,Hybrid,,0,Man,Yes,Not familiar with anyone yet
864,Germany,Europe,DEU,5,10,,$45 - $59,Germany,Remote,unity,1,Woman,Yes,
865,Australia,Oceania,AUS,1,7,,,Australia,Hybrid,,1,Woman,Yes,
866,Brazil,Americas,BRA,2,0,I am not compensated on a yearly basis,I am not compensated on an hourly or project basis,Brazil,Remote,,1,Man,,
867,Netherlands,Europe,NLD,5,13,"$40,000 - $59,999",$75 - $99,Netherlands,Remote,,1,Woman,No,
868,United States,Americas,USA,1,3,,,United States,Remote,,0,Self-described or Prefer not to say,Yes,"Giorgia Lupi, Federica Fragapane"
869,Israel,Asia,ISR,2,8,"$100,000 - $119,999",$45 - $59,Israel,Remote,,1,Woman,Yes,
870,France,Europe,FRA,4,10,"$60,000 - $79,999",I am not compensated on an hourly or project basis,France,Remote,,1,Woman,Yes,
871,United States,Americas,USA,4,25,,$75 - $99,United States,Remote,,0,Woman,Yes,"Meghan HarrisGabrielle Merite, Wendy Shijia, Sofia Martynovich, Will Chase, Alli Torban, Lace Padilla, Frank, Elavsky, Cedric Scherer, Alex Selby-Booth, Jon Schwabish, Steve Wexler, Nadieh Bremer, Shirley Wu, Fredrica Fragapane, Lisa Charlotte Muth, John Burn-Murdoch, Alberto Cairo, Amanda Makulec, Kenneth Field, Maarten Lambrechts, Manuel Lima, Moritz Stefaner"
872,Russia,Europe,RUS,9,19,"$40,000 - $59,999",$30 - $44,Russia,Hybrid,,0,Woman,Yes,"Nadir Bremer, Giorgia Lupi, Alexander Bogachev, Alexey Novichkov, Datavis Society, Laury Frick,"
873,Germany,Europe,DEU,8,5,I am not compensated on a yearly basis,$100 - $124,Germany,Remote,,1,Man,No,
874,South Africa,Africa,ZAF,2,10,"$40,000 - $59,999",I am not compensated on an hourly or project basis,South Africa,Remote,,1,Man,No,
875,Denmark,Europe,DNK,8,11,,$100 - $124,Denmark,Remote,,1,Man,No,
876,United States,Americas,USA,5,14,,$150 - $174,United States,Remote,,0,Woman,Yes,
877,Spain,Europe,ESP,6,15,,$45 - $59,Spain,Remote,,0,Man,,"Francesco Franchi, Accurat"
878,United Kingdom,Europe,GBR,10,12,,$100 - $124,United Kingdom,Remote,,0,Woman,Yes,
879,United States,Americas,USA,6,25,"$120,000 - $139,999",,United States,On site,,0,Man,No,
880,United States,Americas,USA,2,25,"$60,000 - $79,999",,United States,Remote,Adobe InDesign,0,Woman,Yes,
881,United States,Americas,USA,8,3,"$140,000 - $159,999",,United States,Remote,,0,Man,No,
882,Russia,Europe,RUS,5,11,"$40,000 - $59,999",,Russia,On site,,1,Man,No,
883,United States,Americas,USA,5,10,,,United States,On site,,0,Man,Yes,Tanya Shapiro
884,United States,Americas,USA,15,30,"$80,000 - $99,999",$150 - $174,United States,Remote,,0,Woman,Yes,
885,Russia,Europe,RUS,5,12,"$10,000 - $19,999",I am not compensated on an hourly or project basis,Russia,On site,,1,Man,,
886,India,Asia,IND,9,12,,$60 - $74,India,Remote,,0,Man,Yes,
887,Spain,Europe,ESP,10,16,,$125 - $149,Spain,Remote,,1,Man,,
888,United States,Americas,USA,5,9,"$80,000 - $99,999",,United States,On site,,0,Woman,,
889,India,Asia,IND,10,25,"$120,000 - $139,999",$45 - $59,India,Hybrid,,0,Man,Yes,
890,United Kingdom,Europe,GBR,5,17,"$40,000 - $59,999",,United Kingdom,On site,,0,Man,,
891,United Kingdom,Europe,GBR,10,31,,$125 - $149,United Kingdom,Remote,DataGraph ; Jamovi,0,Man,Yes,Pamela Schultz at DataGraph
892,Singapore,Asia,SGP,4,4,"$20,000 - $39,999",,Singapore,Hybrid,Procreate,1,Woman,No,"Georgio Karamanis, Cedric Scherer, Hadley Wickham"
893,Germany,Europe,DEU,8,10,"$60,000 - $79,999",,Germany,Hybrid,,1,Man,No,
894,South Korea,Asia,PRK,14,9,"$60,000 - $79,999",,South Korea,On site,,0,Woman,No,
895,United States,Americas,USA,7,10,"$120,000 - $139,999",,United States,Remote,,0,Man,Yes,
896,Mexico,Americas,MEX,10,25,"Less than $10,000",,Mexico,On site,,0,Woman,No,
897,United States,Americas,USA,10,24,"$120,000 - $139,999",,United States,Hybrid,,1,Woman,Yes,
898,United States,Americas,USA,25,25,"$200,000 - $219,999",,United States,Hybrid,,0,Man,No,
899,United States,Americas,USA,8,2,"$80,000 - $99,999",I am not compensated on an hourly or project basis,United States,Hybrid,,0,Man,Yes,
900,Australia,Oceania,AUS,4,2,"$140,000 - $159,999",,Australia,Hybrid,,1,Man,Yes,
901,United States,Americas,USA,4,10,"$40,000 - $59,999",$100 - $124,United States,,,0,Woman,No,Ann K Emery
902,United States,Americas,USA,3,10,"$100,000 - $119,999",,United States,Remote,,0,Woman,Yes,
903,Netherlands,Europe,NLD,3,8,,$150 - $174,Netherlands,Remote,"Houdini, Unity",1,Man,No,
904,United States,Americas,USA,1,5,"$80,000 - $99,999",,United States,Remote,,0,Woman,Yes,
905,Switzerland,Europe,CHE,7,17,,$175 - $199,Switzerland,Remote,,0,Man,No,
906,India,Asia,IND,6,13,"$40,000 - $59,999",,India,Hybrid,"Seaborn, altair, matplotlib, tableau public",1,Man,Yes,
907,United States,Americas,USA,2,7,,$30 - $44,United States,Remote,,0,Man,Yes,"Amy O'Kruk, Frank Elavsky, Krisztina Szucs, Federica Fragapane"
908,Czech Republic (Czechia),Europe,CZE,5,7,,$15 - $29,Czech Republic (Czechia),On site,,0,Man,Yes,
909,Canada,Americas,CAN,5,1,"$40,000 - $59,999",,Canada,Remote,,1,Woman,Yes,
910,United States,Americas,USA,3,4,"$60,000 - $79,999",I am not compensated on an hourly or project basis,United States,Hybrid,,1,Woman,Yes,
911,United States,Americas,USA,4,12,"$80,000 - $99,999",,United States,Remote,,0,Woman,Yes,
912,Germany,Europe,DEU,10,25,"$100,000 - $119,999",,Germany,Hybrid,,0,Man,Yes,
913,United States,Americas,USA,4,5,"$60,000 - $79,999",,United States,Hybrid,,0,Woman,,
914,United Kingdom,Europe,GBR,5,5,"$80,000 - $99,999",,United Kingdom,Remote,,0,Man,Yes,
915,United States,Americas,USA,5,10,"$120,000 - $139,999",,United States,Remote,,0,Woman,No,
916,Finland,Europe,FIN,4,10,"$40,000 - $59,999",,Finland,Hybrid,,1,Woman,,
917,Denmark,Europe,DNK,3,2,"$80,000 - $99,999",,Denmark,On site,SAS,1,Woman,Yes,
918,United States,Americas,USA,2,15,"$60,000 - $79,999",,United States,On site,,0,Woman,No,
919,United Kingdom,Europe,GBR,1,12,"$60,000 - $79,999",,United Kingdom,Hybrid,,0,Woman,Yes,"Anyone and everyone, I learn and get ideas from seeing other work"
920,United States,Americas,USA,5,6,"$240,000 or more",,United States,Hybrid,,1,Woman,Yes,
921,United States,Americas,USA,4,12,"$60,000 - $79,999",,United States,Hybrid,,1,Woman,,"Ann K Emery, Stephanie Evergreen"
922,United States,Americas,USA,0,3,"$60,000 - $79,999",,United States,Remote,,0,Woman,No,
923,United States,Americas,USA,5,15,"$100,000 - $119,999",I am not compensated on an hourly or project basis,United States,Remote,,0,Woman,Yes,
924,United States,Americas,USA,5,8,"$80,000 - $99,999",,United States,Hybrid,,0,Man,No,
925,France,Europe,FRA,2,6,"$40,000 - $59,999",,France,Hybrid,,0,Man,,
926,United Kingdom,Europe,GBR,8,15,"$80,000 - $99,999",,United Kingdom,Hybrid,,0,Man,No,
927,United States,Americas,USA,4,12,"$60,000 - $79,999",,United States,On site,,0,Woman,No,
928,United Kingdom,Europe,GBR,4,4,"$60,000 - $79,999",,United Kingdom,Hybrid,,0,Man,No,
929,United States,Americas,USA,12,25,"$160,000 - $179,999",,United States,Hybrid,,0,Man,Yes,
930,United States,Americas,USA,5,10,"$80,000 - $99,999",,United States,Remote,,0,Woman,No,
931,Italy,Europe,ITA,12,12,"$20,000 - $39,999",,Italy,Remote,,1,Man,,
932,United States,Americas,USA,4,8,"$80,000 - $99,999",,United States,Hybrid,,0,Self-described or Prefer not to say,Yes,
933,United States,Americas,USA,2,5,I am not compensated on a yearly basis,I am not compensated on an hourly or project basis,United States,Remote,,0,Man,Yes,
934,United States,Americas,USA,2,16,"$100,000 - $119,999",,United States,Hybrid,,1,Woman,Yes,
935,Ecuador,Americas,ECU,4,10,"$20,000 - $39,999",,Ecuador,Remote,,1,Woman,Yes,
936,United States,Americas,USA,5,20,"$120,000 - $139,999",,United States,Remote,"Sketch, Axure",0,Man,Yes,
937,Canada,Americas,CAN,5,5,"$60,000 - $79,999",,Canada,Remote,,0,Woman,Yes,
938,United States,Americas,USA,5,5,"$60,000 - $79,999",,United States,Hybrid,,0,Woman,Yes,"Ann K. Emery, Heather Krause"
939,United States,Americas,USA,4,10,"$60,000 - $79,999",,United States,Remote,,0,Man,No,
940,United States,Americas,USA,2,20,,,United States,On site,,0,Woman,Yes,
941,United States,Americas,USA,5,10,"$80,000 - $99,999",,United States,Remote,,0,Woman,Yes,
942,United States,Americas,USA,2,20,I am not compensated on a yearly basis,$100 - $124,United States,Remote,,1,Woman,Yes,
943,United States,Americas,USA,3,2,"$40,000 - $59,999",,United States,Remote,,0,Man,Yes,
944,United Kingdom,Europe,GBR,5,7,"$60,000 - $79,999",,United Kingdom,Hybrid,,1,Woman,Yes,
945,United States,Americas,USA,3,25,"$80,000 - $99,999",,United States,Remote,,0,Woman,Yes,"Andy Kriebel, Chimdi Nwosu, Kevin Flerlage, Ken Flerlage, Anthony Smoak"
946,United States,Americas,USA,4,4,"$80,000 - $99,999",$45 - $59,United States,Remote,,0,Man,Yes,
947,United States,Americas,USA,5,15,"$80,000 - $99,999",,United States,Remote,,0,Man,No,Cederic Scherer
948,United States,Americas,USA,4,10,"$60,000 - $79,999",,United States,Remote,,0,Woman,,
949,United States,Americas,USA,3,20,"$80,000 - $99,999",,United States,Remote,,1,Man,Yes,
950,United States,Americas,USA,3,18,"$40,000 - $59,999",,United States,Hybrid,Salesforce,1,Woman,Yes,
951,United States,Americas,USA,5,31,"$80,000 - $99,999",,United States,Remote,,0,Woman,,Stephanie Evergreen
952,United States,Americas,USA,4,3,"$100,000 - $119,999",,United States,Remote,,0,Man,,
953,United States,Americas,USA,5,5,"$60,000 - $79,999",,United States,Remote,Spotfire,0,Man,Yes,
954,United Kingdom,Europe,GBR,5,9,"$60,000 - $79,999",,United Kingdom,Hybrid,,0,Man,,
955,United Kingdom,Europe,GBR,5,12,"$60,000 - $79,999",I am not compensated on an hourly or project basis,United Kingdom,Remote,,0,Man,,
956,Italy,Europe,ITA,2,2,"$20,000 - $39,999",,Italy,On site,,0,Man,Yes,
957,United States,Americas,USA,8,12,"$100,000 - $119,999",,United States,Hybrid,Amcharts,1,Man,Yes,
958,United States,Americas,USA,2,10,,$75 - $99,United States,Remote,,0,Man,Yes,
959,United States,Americas,USA,3,5,"$60,000 - $79,999",,United States,Remote,,0,Woman,No,
960,United States,Americas,USA,31,31,"$160,000 - $179,999",I am not compensated on an hourly or project basis,United States,Remote,,0,Woman,No,
961,Argentina,Americas,ARG,3,10,I am not compensated on a yearly basis,I am not compensated on an hourly or project basis,Argentina,Remote,Periscope Data,1,Woman,No,
962,Sweden,Europe,SWE,8,20,"$60,000 - $79,999",,Sweden,Hybrid,,1,Man,No,
963,Uganda,Africa,UGA,3,6,"$10,000 - $19,999",,Uganda,On site,Canva,0,Woman,,
964,France,Europe,FRA,14,10,"$40,000 - $59,999",,France,Hybrid,,1,Woman,No,
965,United States,Americas,USA,7,14,"$60,000 - $79,999",,United States,On site,,0,Self-described or Prefer not to say,No,
966,United States,Americas,USA,5,19,"$80,000 - $99,999",,United States,On site,,0,Woman,Yes,"Jeffrey Shaffer, Andy Cotgreave, Amanda Makulec, Cole Nussbaumer Knaflic, Flerlage twins, others I am forgetting."
967,United States,Americas,USA,8,24,"$160,000 - $179,999",,United States,Remote,,0,Man,Yes,"Tableau public, Expert blogs and newsletters"
968,India,Asia,IND,2,0,"Less than $10,000",,India,Hybrid,,1,Man,Yes,
969,United States,Americas,USA,15,20,"$100,000 - $119,999",,United States,Hybrid,,0,Woman,,
970,United States,Americas,USA,8,15,"$60,000 - $79,999",,United States,Hybrid,Qualtrics,1,,,
971,United States,Americas,USA,11,11,"$240,000 or more",,United States,Hybrid,,0,Man,No,
972,India,Asia,IND,31,31,"$100,000 - $119,999",$100 - $124,India,On site,,0,Man,Yes,
973,Finland,Europe,FIN,10,23,,,Finland,Hybrid,,1,Man,No,
974,Canada,Americas,CAN,10,20,"$140,000 - $159,999",,Canada,Hybrid,,0,Man,Yes,
975,United States,Americas,USA,10,20,"$80,000 - $99,999",,United States,Remote,SAP-WebI,0,Woman,Yes,
976,United States,Americas,USA,12,31,,,United States,Hybrid,,0,Man,Yes,
977,Hungary,Europe,HUN,15,25,,,Hungary,Hybrid,Zing charts,0,Woman,,"Stefan Few, Alberto Cairo"
978,Canada,Americas,CAN,5,6,"$40,000 - $59,999",,Canada,Remote,,1,Man,Yes,
979,Colombia,Americas,COL,5,18,"$40,000 - $59,999",,Colombia,Remote,,1,Man,,
980,United States,Americas,USA,7,21,"$220,000 - $239,999",,United States,Hybrid,,0,Man,Yes,Alli Torban
981,Canada,Americas,CAN,7,14,"$80,000 - $99,999",,Canada,Hybrid,,1,Man,No,
982,United States,Americas,USA,4,25,"$80,000 - $99,999",,United States,Hybrid,,0,Man,Yes,
983,United States,Americas,USA,4,3,"$80,000 - $99,999",,United States,Remote,,0,Man,Yes,
984,United States,Americas,USA,3,30,"$80,000 - $99,999",,United States,Remote,,0,Woman,No,Ann Emery
985,United States,Americas,USA,2,1,"$60,000 - $79,999",,United States,Remote,,0,Woman,No,
986,Italy,Europe,ITA,18,26,"$20,000 - $39,999",,Italy,Hybrid,,0,Man,No,
987,United States,Americas,USA,20,20,"$80,000 - $99,999",,United States,On site,,0,Man,Yes,
988,United States,Americas,USA,2,8,"$60,000 - $79,999",,United States,Remote,,0,Man,Yes,
989,United States,Americas,USA,10,31,"$200,000 - $219,999",$100 - $124,United States,Remote,,0,Man,Yes,Good one on one mentors. don't learn much from groups
990,United States,Americas,USA,8,4,"$80,000 - $99,999",,United States,Remote,,0,Woman,No,
991,Latvia,Europe,LVA,6,6,"$20,000 - $39,999",,Latvia,Hybrid,,1,Woman,No,
992,Canada,Americas,CAN,6,13,"$60,000 - $79,999",,Canada,Hybrid,,0,Woman,,
993,United Kingdom,Europe,GBR,6,2,"$40,000 - $59,999",,United Kingdom,Hybrid,,0,Woman,Yes,
994,Denmark,Europe,DNK,3,2,"Less than $10,000",I am not compensated on an hourly or project basis,Denmark,On site,,0,Man,No,
995,Denmark,Europe,DNK,7,25,"$60,000 - $79,999",,Denmark,On site,,1,Man,No,
996,United States,Americas,USA,10,12,"$80,000 - $99,999",,United States,Remote,Chart.js,0,Woman,Yes,
997,United States,Americas,USA,6,10,"$60,000 - $79,999",,United States,Hybrid,,0,Woman,No,
998,United States,Americas,USA,8,8,"$20,000 - $39,999",I am not compensated on an hourly or project basis,United States,Remote,,0,Man,Yes,
999,Peru,Americas,PER,15,20,"$20,000 - $39,999",I am not compensated on an hourly or project basis,Peru,Remote,,0,Man,,
1000,United States,Americas,USA,16,26,"$120,000 - $139,999",,United States,Hybrid,,0,Man,No,
1001,United States,Americas,USA,2,1,"$80,000 - $99,999",,United States,Remote,,0,Self-described or Prefer not to say,No,
1002,United States,Americas,USA,31,31,,,United States,Remote,Delta Graph,0,Man,Yes,
1003,United States,Americas,USA,7,14,"$120,000 - $139,999",,United States,Hybrid,,0,Woman,No,
1004,United States,Americas,USA,10,10,"$80,000 - $99,999",I am not compensated on an hourly or project basis,United States,Hybrid,,0,,No,
1005,United States,Americas,USA,7,7,"$160,000 - $179,999",,United States,Remote,,0,Man,Yes,"Elijah Meeks, Shirley Wu, Nadieh Bremer, Mike Bostock, Nicholas Rougeux, Cole Nussbaumer Knaflic"
1006,Germany,Europe,DEU,8,10,"$60,000 - $79,999",$15 - $29,Germany,Hybrid,,1,Man,No,
1007,Sweden,Europe,SWE,12,18,"$20,000 - $39,999",,Sweden,Hybrid,,1,Man,Yes,
1008,United Kingdom,Europe,GBR,10,8,,,United Kingdom,Remote,,1,Woman,No,
1009,United States,Americas,USA,2,12,I am not compensated on a yearly basis,$30 - $44,United States,Remote,,0,Woman,Yes,
1010,United States,Americas,USA,4,3,"$40,000 - $59,999",,United States,Remote,,0,Woman,No,
1011,India,Asia,IND,0,0,,I am not compensated on an hourly or project basis,India,Other (please specify),,1,Woman,No,my boss
1012,Norway,Europe,NOR,2,2,"$40,000 - $59,999",,Norway,On site,"ROOT, Inkscape",1,Self-described or Prefer not to say,No,
1013,Nigeria,Africa,NGA,0,15,,,Nigeria,Remote,,0,Woman,Yes,
1014,United States,Americas,USA,3,0,"$40,000 - $59,999",,United States,Hybrid,,1,Man,Yes,
1015,Bulgaria,Europe,BGR,5,15,,$75 - $99,Bulgaria,Remote,,1,Woman,Yes,
1016,Brazil,Americas,BRA,2,1,I am not compensated on a yearly basis,$15 - $29,Brazil,Remote,,1,Man,Yes,Twitter and other scientific papers
1017,United Kingdom,Europe,GBR,5,22,,,United Kingdom,Hybrid,,0,Woman,Yes,Cole Nussbaumer Knaflic
1018,Australia,Oceania,AUS,5,15,,,Australia,Hybrid,,0,Woman,Yes,"Daniel Marsh-Patrick, Sam Parsons, Nir Smilga, Gerard Duggan, Agata Ketterick, Visual Capatalist, Makeover Monday"
1019,United States,Americas,USA,20,27,,,United States,Remote,InDesign,0,Woman,Yes,
1020,United States,Americas,USA,4,3,"$80,000 - $99,999",,United States,Remote,,0,Woman,Yes,
1021,United States,Americas,USA,2,2,"$100,000 - $119,999",,United States,Remote,,0,Man,No,
1022,United States,Americas,USA,15,21,,$150 - $174,United States,Remote,,0,Woman,Yes,
1023,Czech Republic (Czechia),Europe,CZE,7,14,,$45 - $59,Czech Republic (Czechia),Hybrid,Sketch,1,Woman,Yes,
1024,United Kingdom,Europe,GBR,12,25,"$60,000 - $79,999",,United Kingdom,Hybrid,,0,Man,Yes,
1025,United States,Americas,USA,10,20,"$60,000 - $79,999",,United States,Remote,,0,Woman,No,
1026,Netherlands,Europe,NLD,8,8,,$125 - $149,Netherlands,Remote,,0,Man,Yes,
1027,United Kingdom,Europe,GBR,6,6,"$40,000 - $59,999",,United Kingdom,Remote,,0,Woman,No,"Twitter, the economist, tidy tuesday"
1028,United Kingdom,Europe,GBR,6,21,"$100,000 - $119,999",,United Kingdom,Hybrid,,0,Man,Yes,
1030,,,,7,22,,,,Hybrid,,0,Man,Yes,Mike Bostock
1031,India,Asia,IND,4,13,"$40,000 - $59,999",,India,Hybrid,"Seaborn, altair, matplotlib,",0,Man,Yes,
1032,New Zealand,Oceania,NZL,5,31,,,New Zealand,Remote,,0,Woman,Yes,Suggest some I’m finding it hard to find contemporaries
1033,United States,Americas,USA,13,11,"$200,000 - $219,999",$200 - $224,United States,Hybrid,deck.gl,0,Woman,No,
1034,Madagascar,Africa,MDG,5,5,,,Madagascar,,,1,Woman,Yes,
1035,United States,Americas,USA,4,31,"$10,000 - $19,999",,United States,Hybrid,,0,Man,Yes,"Dan Carr, Howard Wainer, Hadley Wickham"
1036,United States,Americas,USA,4,31,"$60,000 - $79,999",,United States,On site,,0,Woman,,
1037,United States,Americas,USA,5,5,"$60,000 - $79,999",,United States,On site,,0,Man,Yes,
1038,United Kingdom,Europe,GBR,9,24,,$60 - $74,United Kingdom,Remote,,0,Man,Yes,
1039,United Kingdom,Europe,GBR,20,20,"$40,000 - $59,999",,United Kingdom,Remote,,0,Man,Yes,
1040,Canada,Americas,CAN,3,10,"$100,000 - $119,999",,Canada,Remote,,0,Woman,No,
1041,United States,Americas,USA,7,18,"$80,000 - $99,999",,United States,On site,InDesign,0,Woman,Yes,
1042,Portugal,Europe,PRT,8,25,,,Portugal,On site,,1,Man,Yes,
1043,Portugal,Europe,PRT,1,1,"$10,000 - $19,999",,Portugal,Remote,,1,Woman,,
1044,United States,Americas,USA,5,9,"$160,000 - $179,999",,United States,Remote,,0,Woman,Yes,
1045,United States,Americas,USA,3,17,"$80,000 - $99,999",,United States,Hybrid,,0,Woman,Yes,
1046,United States,Americas,USA,4,8,"$120,000 - $139,999",,United States,Remote,,0,Woman,Yes,
1047,United States,Americas,USA,5,8,"$140,000 - $159,999",,United States,Hybrid,,0,Woman,No,
1048,Brazil,Americas,BRA,4,13,"$40,000 - $59,999",,Brazil,Remote,,0,Woman,Yes,
1049,United Kingdom,Europe,GBR,3,7,"$20,000 - $39,999",,United Kingdom,Hybrid,,1,Woman,No,
1050,Spain,Europe,ESP,4,12,"$40,000 - $59,999",,Spain,Hybrid,AWS Quicksight,0,Man,Yes,
1051,Finland,Europe,FIN,2,4,"$40,000 - $59,999",,Finland,Hybrid,Infogram,0,Woman,Yes,
1052,India,Asia,IND,0,1,"Less than $10,000",Less than $15,India,Remote,,1,Man,No,
1053,Hungary,Europe,HUN,3,4,"$10,000 - $19,999",,Hungary,Hybrid,MicroStrategy,1,Man,Yes,
1054,Switzerland,Europe,CHE,3,10,"$100,000 - $119,999",,Switzerland,On site,,1,Woman,No,
1055,Spain,Europe,ESP,3,7,"$20,000 - $39,999",,Spain,Hybrid,,1,Man,No,
1056,United States,Americas,USA,4,15,"$160,000 - $179,999",,United States,Remote,,0,Woman,Yes,
1057,United States,Americas,USA,3,8,"$80,000 - $99,999",,United States,Remote,,0,Woman,No,
1058,Hungary,Europe,HUN,4,9,"$20,000 - $39,999",,Hungary,Hybrid,,1,Man,No,
1059,United States,Americas,USA,4,18,"$80,000 - $99,999",,United States,Remote,,0,Woman,,
1060,United States,Americas,USA,3,7,"$80,000 - $99,999",,United States,Remote,,0,Woman,Yes,
1061,Ireland,Europe,IRL,5,10,"$60,000 - $79,999",,Ireland,Hybrid,,0,Woman,Yes,
1062,Canada,Americas,CAN,4,,"$40,000 - $59,999",,Canada,Remote,,0,Woman,No,
1063,United States,Americas,USA,4,8,"$60,000 - $79,999",,United States,Remote,,0,Woman,,
1064,United States,Americas,USA,5,14,"$160,000 - $179,999",,United States,Remote,,0,Man,No,
1065,United States,Americas,USA,5,5,"$220,000 - $239,999",I am not compensated on an hourly or project basis,United States,Hybrid,,0,Woman,,
1066,Kazakhstan,Asia,KAZ,2,15,"Less than $10,000",,Kazakhstan,Hybrid,,0,Man,No,
1067,Germany,Europe,DEU,23,23,"$60,000 - $79,999",,Germany,Hybrid,,1,Man,No,
1068,United States,Americas,USA,5,10,,,United States,Hybrid,,0,Woman,No,
1069,United States,Americas,USA,4,4,"$100,000 - $119,999",,United States,Remote,,0,Woman,No,
1070,France,Europe,FRA,4,3,"$20,000 - $39,999",,France,Hybrid,,1,Man,Yes,
1071,Spain,Europe,ESP,3,12,"$20,000 - $39,999",,Spain,On site,Observable Plot.js,1,Woman,Yes,
1072,Portugal,Europe,PRT,0,13,,,Portugal,Remote,,1,Woman,Yes,"Mona Chalabi, Federica Fragapane, Gabrielle Mèrite, Paul Franz, Johnny Harris"
1073,United States,Americas,USA,5,20,,,United States,Other (please specify),,0,Woman,Yes,"Ken and Kevin Flerlage brothers, Tableau Tim, Enrico Bertini, Moritz Stefaner, Amy Cesal, Elijah Meeks, Albert Cairo, Lindsay Betzendahl"
1074,Canada,Americas,CAN,2,8,"$60,000 - $79,999",,Canada,Remote,Mode Analytics,0,Woman,Yes,
1076,United States,Americas,USA,3,17,,$30 - $44,United States,Hybrid,,0,Man,No,
1077,United States,Americas,USA,5,17,"$80,000 - $99,999",,United States,Hybrid,,0,Man,No,
1078,United Kingdom,Europe,GBR,9,11,"$80,000 - $99,999",,United Kingdom,Hybrid,,0,Woman,No,
1079,United States,Americas,USA,4,3,"$60,000 - $79,999",,United States,Remote,,0,Woman,Yes,
1080,United States,Americas,USA,3,19,"$120,000 - $139,999",,United States,Remote,,0,Woman,,
1081,United States,Americas,USA,19,22,,,United States,Hybrid,,0,Woman,No,
1082,Australia,Oceania,AUS,10,20,"$80,000 - $99,999",$175 - $199,Australia,Remote,,0,Woman,No,
1083,India,Asia,IND,28,25,"$40,000 - $59,999",$15 - $29,India,On site,,0,Man,Yes,
1084,France,Europe,FRA,8,26,"$140,000 - $159,999",,France,Remote,,1,Man,,"Zan Armstrong, Shirley Wu"
1085,United States,Americas,USA,2,1,,,United States,Remote,,1,Woman,Yes,
1086,United States,Americas,USA,6,12,"$60,000 - $79,999",I am not compensated on an hourly or project basis,United States,Hybrid,,0,Woman,No,Ann Emery
1087,United States,Americas,USA,8,12,"$80,000 - $99,999",I am not compensated on an hourly or project basis,United States,Remote,,0,Woman,Yes,
1088,Brazil,Americas,BRA,2,3,"$10,000 - $19,999",Less than $15,Brazil,Remote,,1,Woman,No,
1089,Belgium,Europe,BEL,13,13,,,Belgium,Hybrid,,1,Woman,Yes,"Andy Kriebel, Tableau Tom"
1090,Uganda,Africa,UGA,5,8,"$10,000 - $19,999",Less than $15,Uganda,Hybrid,,0,Man,No,
1091,United Kingdom,Europe,GBR,7,3,"$80,000 - $99,999",,United Kingdom,On site,,0,Woman,No,
1092,United States,Americas,USA,10,19,"$240,000 or more",,United States,Remote,,0,Man,No,Matthew Kay
1093,Canada,Americas,CAN,1,20,,,Canada,Remote,,0,Woman,Yes,
1094,United States,Americas,USA,12,27,"$160,000 - $179,999",,United States,Remote,"Keynote, Business Objects",0,Woman,,
1095,United States,Americas,USA,6,13,,,United States,Remote,,0,Man,No,
1096,United States,Americas,USA,9,11,"$140,000 - $159,999",,United States,Hybrid,,0,Woman,,
1097,France,Europe,FRA,8,15,"$40,000 - $59,999",$100 - $124,France,Hybrid,,0,Woman,Yes,
1098,United Kingdom,Europe,GBR,5,10,,$45 - $59,United Kingdom,Remote,,0,Woman,,
1099,United States,Americas,USA,5,23,"$60,000 - $79,999",,United States,Remote,,0,Woman,No,
1100,Finland,Europe,FIN,5,12,,,Finland,Remote,,1,Self-described or Prefer not to say,Yes,
1101,United States,Americas,USA,10,31,"$140,000 - $159,999",$75 - $99,United States,Remote,,0,Woman,No,
1102,Germany,Europe,DEU,10,31,,,Germany,Hybrid,,1,Man,,
1103,United Kingdom,Europe,GBR,7,22,"$40,000 - $59,999",,United Kingdom,Remote,Microstrategy,0,Man,Yes,
1104,South Africa,Africa,ZAF,8,31,"$40,000 - $59,999",,South Africa,Hybrid,,0,Man,Yes,
1105,United Kingdom,Europe,GBR,18,25,"$100,000 - $119,999",,United Kingdom,Remote,,0,Man,Yes,
1106,France,Europe,FRA,2,10,"$20,000 - $39,999",,France,Hybrid,,0,Man,Yes,
1107,Finland,Europe,FIN,5,12,"$60,000 - $79,999",,Finland,Hybrid,,1,Man,Yes,
1108,United Kingdom,Europe,GBR,10,12,"$80,000 - $99,999",,United Kingdom,Remote,,0,Woman,Yes,
1109,France,Europe,FRA,9,12,"$100,000 - $119,999",$150 - $174,France,Remote,Cables.gl,1,Man,Yes,
1110,United Kingdom,Europe,GBR,8,19,"$80,000 - $99,999",,United Kingdom,Hybrid,,0,Man,Yes,
1111,United States,Americas,USA,15,21,I am not compensated on a yearly basis,$250 - $274,United States,Remote,,0,Woman,,
1112,United States,Americas,USA,5,8,"$140,000 - $159,999",,United States,Remote,,0,Man,Yes,
1113,Germany,Europe,DEU,0,4,"$40,000 - $59,999",,Germany,Hybrid,,1,Man,Yes,
1114,Libya,Africa,LBY,3,14,I am not compensated on a yearly basis,I am not compensated on an hourly or project basis,Libya,Remote,,1,Man,Yes,
1115,Australia,Oceania,AUS,4,12,,,Australia,Hybrid,,0,Woman,Yes,
1116,Switzerland,Europe,CHE,4,7,I am not compensated on a yearly basis,I am not compensated on an hourly or project basis,Switzerland,Hybrid,,1,Man,Yes,"Neurath, Arntz, W.E.B. Du Bois, Giorgia Lupi"
1117,Poland,Europe,POL,2,6,"$80,000 - $99,999",,Poland,Remote,,1,Man,Yes,
1118,United States,Americas,USA,5,5,I am not compensated on a yearly basis,$45 - $59,United States,Remote,,0,Man,No,
1119,United States,Americas,USA,31,31,,$175 - $199,United States,Remote,,0,Woman,No,
1120,Canada,Americas,CAN,,25,,,Canada,,,0,Woman,No,Ann Emery/Depict Data and the students in her workshops
1121,Belgium,Europe,BEL,10,18,,$100 - $124,Belgium,Remote,,1,Man,Yes,"Matthias Stahl, Amelia Wattenberger, John Nelson, all at NYTGraphics, Lisa Muth and the Datawrapper team, John Burn Murdoch, Topi Tjukanov"
1122,Italy,Europe,ITA,0,0,,,Italy,Remote,,1,Man,Yes,
1123,Sweden,Europe,SWE,4,14,"$40,000 - $59,999",$100 - $124,Sweden,Remote,,1,Man,,"Alli Torban, Gabrielle Merite, Sonja Kuijpers, Miriam Quick, Stefanie Posavec"
1124,Germany,Europe,DEU,8,13,,$75 - $99,Germany,Remote,,1,Man,No,Stephanie Evergreen
1125,United Kingdom,Europe,GBR,2,5,"$40,000 - $59,999",,United Kingdom,Remote,,0,Woman,Yes,
1126,Germany,Europe,DEU,5,7,"$40,000 - $59,999",,Germany,Hybrid,,1,Woman,Yes,
1127,United Kingdom,Europe,GBR,14,15,,$125 - $149,United Kingdom,Remote,,0,Self-described or Prefer not to say,Yes,
1128,United States,Americas,USA,8,20,"$80,000 - $99,999",,United States,On site,,0,Man,No,
1129,United Kingdom,Europe,GBR,3,9,"$40,000 - $59,999",,United Kingdom,Hybrid,,1,Woman,Yes,
1130,United States,Americas,USA,1,5,"$60,000 - $79,999",,United States,Remote,Canva,0,Woman,,
1131,United Kingdom,Europe,GBR,4,10,"$40,000 - $59,999",,United Kingdom,On site,,0,Woman,No,
1132,United States,Americas,USA,10,20,"$140,000 - $159,999",,United States,Hybrid,,0,Man,Yes,
1133,United States,Americas,USA,5,9,"$40,000 - $59,999",,United States,Hybrid,,0,Woman,No,
1134,Brazil,Americas,BRA,2,17,"Less than $10,000",I am not compensated on an hourly or project basis,Brazil,Remote,,0,Man,No,
1135,United States,Americas,USA,4,2,"$60,000 - $79,999",I am not compensated on an hourly or project basis,United States,Hybrid,,0,Man,No,
1136,Germany,Europe,DEU,0,20,"$100,000 - $119,999",I am not compensated on an hourly or project basis,Germany,Hybrid,,0,Woman,Yes,
1137,United Kingdom,Europe,GBR,4,19,"$20,000 - $39,999",,United Kingdom,Hybrid,,0,Man,Yes,
1138,,,,3,7,,,,On site,"Mode, Inkscape",0,Woman,Yes,
1139,United States,Americas,USA,5,14,"$60,000 - $79,999",I am not compensated on an hourly or project basis,United States,Hybrid,Service Now,0,Man,No,
1140,United States,Americas,USA,5,20,I am not compensated on a yearly basis,I am not compensated on an hourly or project basis,United States,Remote,,0,Man,No,
1141,Iran,,,7,10,"$10,000 - $19,999",,Iran,On site,,0,Man,No,
1142,United States,Americas,USA,10,10,"$180,000 - $199,999",,United States,Remote,,0,Man,No,
1143,United States,Americas,USA,7,7,"$80,000 - $99,999",,United States,Hybrid,,0,Woman,No,
1144,United States,Americas,USA,5,9,"$80,000 - $99,999",,United States,Remote,,0,Woman,Yes,
1145,United Kingdom,Europe,GBR,12,14,,,United Kingdom,Hybrid,,0,Man,Yes,
1146,United States,Americas,USA,1,31,,,United States,On site,,0,Woman,No,
1147,United Kingdom,Europe,GBR,5,16,"$40,000 - $59,999",,United Kingdom,Hybrid,,1,Man,Yes,
1148,United States,Americas,USA,5,15,,,United States,Remote,,0,Woman,Yes,
1149,United States,Americas,USA,0,30,"$60,000 - $79,999",,United States,Hybrid,,0,Self-described or Prefer not to say,No,
1150,United States,Americas,USA,4,3,"$80,000 - $99,999",,United States,Hybrid,,0,Woman,Yes,
1151,United States,Americas,USA,16,16,,,United States,Remote,,1,Man,Yes,
1152,Canada,Americas,CAN,10,20,"$40,000 - $59,999",,Canada,Remote,,0,Woman,,
1153,France,Europe,FRA,7,9,"$40,000 - $59,999",,France,Hybrid,,0,Man,,
1154,Sweden,Europe,SWE,3,17,,$75 - $99,Sweden,Remote,,1,Man,Yes,
1155,United Kingdom,Europe,GBR,3,30,,,United Kingdom,Remote,,0,Woman,No,
1156,United Kingdom,Europe,GBR,0,20,"$40,000 - $59,999",,United Kingdom,Remote,,1,Woman,Yes,
1157,United States,Americas,USA,9,9,,,United States,Hybrid,,0,Woman,No,
1158,Canada,Americas,CAN,6,12,"$100,000 - $119,999",,Canada,On site,Indesign and photoshop for publication design,0,Woman,Yes,Cole Nussbaum Knaflic; Dona Wong; many others -- I have a lot of reference books!
1159,United Kingdom,Europe,GBR,3,15,"$120,000 - $139,999",I am not compensated on an hourly or project basis,United Kingdom,Hybrid,,0,Man,No,
1160,United States,Americas,USA,10,31,"$160,000 - $179,999",,United States,Hybrid,,0,Man,Yes,
1161,United States,Americas,USA,11,11,"$120,000 - $139,999",I am not compensated on an hourly or project basis,United States,Remote,,0,,Yes,
1162,France,Europe,FRA,3,10,,$250 - $274,France,Remote,,1,Woman,No,
1163,Ireland,Europe,IRL,8,20,"$80,000 - $99,999",,Ireland,Remote,,0,Woman,,The Big Book of Dashboards people
1164,Switzerland,Europe,CHE,11,20,"$80,000 - $99,999",$125 - $149,Switzerland,On site,,1,Woman,,"Geometric Art, Swiss Graphic design in general"
1165,France,Europe,FRA,31,31,,$175 - $199,France,Remote,,1,Man,Yes,
1166,Pakistan,Asia,PAK,12,15,,$30 - $44,Pakistan,Remote,,0,Woman,Yes,
1167,United Kingdom,Europe,GBR,15,31,,,United Kingdom,Hybrid,,0,Man,Yes,
1168,United Kingdom,Europe,GBR,4,15,"$40,000 - $59,999",,United Kingdom,Hybrid,,1,Woman,Yes,
1169,,,,2,15,"$120,000 - $139,999",,,Remote,Echarts,0,Man,Yes,
1170,Germany,Europe,DEU,0,10,I am not compensated on a yearly basis,I am not compensated on an hourly or project basis,Germany,Remote,,1,Self-described or Prefer not to say,Yes,
1171,United Kingdom,Europe,GBR,0,10,,,United Kingdom,Remote,,1,Woman,No,
1173,Taiwan,Asia,TWN,0,0,"$60,000 - $79,999",,Taiwan,Hybrid,,0,Woman,No,
1174,Spain,Europe,ESP,5,8,"$40,000 - $59,999",I am not compensated on an hourly or project basis,Spain,Remote,,0,Man,No,
1175,Nepal,Asia,NPL,3,2,"Less than $10,000",$100 - $124,Nepal,Remote,AnyChart,0,,No,
1176,India,Asia,IND,0,1,,,India,Remote,,1,Man,Yes,
1177,Norway,Europe,NOR,4,4,,,Norway,Remote,,0,Woman,,
1178,United States,Americas,USA,5,16,"$80,000 - $99,999",,United States,Remote,,0,Man,,
1179,United States,Americas,USA,11,8,,,United States,Hybrid,,0,Man,Yes,"Giorgia Lupi, Nadieh Bremer, various Tableau visionaries"
1180,Tanzania,Africa,TZA,3,3,"$10,000 - $19,999",,Tanzania,Remote,,0,Woman,Yes,
1181,Spain,Europe,ESP,5,25,,$30 - $44,Spain,Hybrid,,1,Man,,
1182,United States,Americas,USA,10,9,,,United States,On site,,0,Man,,
1183,Argentina,Americas,ARG,14,14,"$60,000 - $79,999",I am not compensated on an hourly or project basis,Argentina,Remote,,1,Woman,Yes,
1184,United States,Americas,USA,2,3,"$60,000 - $79,999",,United States,Hybrid,,0,Woman,Yes,
1186,Norway,Europe,NOR,7,20,"$80,000 - $99,999",,Norway,Hybrid,everviz,0,Man,No,
1187,United States,Americas,USA,5,10,"$80,000 - $99,999",$75 - $99,United States,Remote,,0,Woman,Yes,
1188,United States,Americas,USA,2,16,,,United States,Remote,,1,Woman,Yes,
1189,Poland,Europe,POL,15,20,"$100,000 - $119,999",,Poland,Remote,,0,Self-described or Prefer not to say,Yes,
1190,United Kingdom,Europe,GBR,2,13,,$45 - $59,United Kingdom,Remote,,1,Woman,Yes,
1191,United States,Americas,USA,10,25,,$100 - $124,United States,Remote,,0,Woman,Yes,
1192,United States,Americas,USA,2,10,,,United States,Remote,,0,Woman,Yes,
1193,United States,Americas,USA,5,8,"$180,000 - $199,999",,United States,Remote,,0,Woman,,
1194,Germany,Europe,DEU,15,25,,$100 - $124,Germany,Remote,SAC,0,Man,No,Twitter
1195,Ethiopia,Africa,ETH,0,4,I am not compensated on a yearly basis,,Ethiopia,Remote,,1,Woman,No,
1196,Sweden,Europe,SWE,5,7,"$20,000 - $39,999",$15 - $29,Sweden,On site,,0,Man,No,
1197,Germany,Europe,DEU,2,8,"$80,000 - $99,999",$75 - $99,Germany,On site,,1,Man,Yes,
1198,United States,Americas,USA,6,8,"$100,000 - $119,999",,United States,Hybrid,,0,Woman,Yes,
1199,United Kingdom,Europe,GBR,31,30,,,United Kingdom,Hybrid,,1,Man,Yes,
1200,United States,Americas,USA,6,10,"$80,000 - $99,999",,United States,Hybrid,,0,Woman,Yes,
1201,United States,Americas,USA,10,10,"$140,000 - $159,999",I am not compensated on an hourly or project basis,United States,Hybrid,,0,Woman,No,"Ann K. Emery, Stephanie Evergreen, Tableau Viz of the Day, Edward Tufte"
1202,United States,Americas,USA,9,12,"$160,000 - $179,999",$60 - $74,United States,Remote,,0,Man,Yes,
1203,,,,4,0,,,,Remote,,1,Woman,Yes,
1204,India,Asia,IND,2,24,,,India,Remote,,0,Woman,Yes,Gurman Bhatia
1205,Russia,Europe,RUS,5,3,"$20,000 - $39,999",,Russia,On site,Thinkcell,1,Woman,No,
1206,Romania,Europe,ROU,1,6,,,Romania,Hybrid,Kibana,0,Man,No,Examples
1207,United States,Americas,USA,4,23,"$100,000 - $119,999",,United States,Remote,,0,Woman,No,
1208,Canada,Americas,CAN,2,3,I am not compensated on a yearly basis,I am not compensated on an hourly or project basis,Canada,Remote,,0,Woman,Yes,
1209,United Kingdom,Europe,GBR,2,5,,,United Kingdom,Hybrid,,0,Woman,Yes,
1210,United States,Americas,USA,8,31,,,United States,Remote,,1,Woman,No,
1211,United States,Americas,USA,4,5,,,United States,Remote,,0,Woman,,"Jeff Shaffer, Annabelle Rincon, Andy Cotgreave, Steve Wexler, Andy Kriebel, Lorna Brown, Lindsay Betzendahl, Andy Cotgreave, Flerlage Twins, Jim Dehner"
1212,Finland,Europe,FIN,5,20,"$60,000 - $79,999",,Finland,Hybrid,,1,Man,No,
1213,United States,Americas,USA,5,5,"$60,000 - $79,999",,United States,On site,,0,Woman,Yes,
1214,India,Asia,IND,0,1,,,India,Remote,,0,Man,,
1215,,,,10,20,,,,,,0,Man,Yes,
1216,Netherlands,Europe,NLD,0,15,"$40,000 - $59,999",I am not compensated on an hourly or project basis,Netherlands,Hybrid,,1,Man,Yes,
1217,United Kingdom,Europe,GBR,10,20,"$100,000 - $119,999",,United Kingdom,Hybrid,,0,Woman,Yes,
1218,United States,Americas,USA,4,10,"$60,000 - $79,999",,United States,Remote,,0,Woman,,
1219,United States,Americas,USA,6,10,"$80,000 - $99,999",,United States,Remote,,0,,,
1220,Australia,Oceania,AUS,6,6,"$120,000 - $139,999",,Australia,Remote,MicroStrategy QuickSight,0,,No,
1221,United States,Americas,USA,2,3,"$100,000 - $119,999",,United States,Hybrid,,0,,Yes,"Amelia Wattenberger, Cole Knaflic, Stephanie Evergreen, Shirley Wu"
1222,United States,Americas,USA,5,18,,,United States,Hybrid,,0,Man,Yes,
1224,United States,Americas,USA,0,22,,,United States,Other (please specify),,0,Woman,No,
1225,United Kingdom,Europe,GBR,12,16,"$140,000 - $159,999",I am not compensated on an hourly or project basis,United Kingdom,Remote,,0,Self-described or Prefer not to say,No,
1226,United States,Americas,USA,4,5,,,United States,On site,,0,Woman,,
1227,Russia,Europe,RUS,9,14,,$15 - $29,Russia,Remote,,1,Man,No,
1228,Belgium,Europe,BEL,30,31,,,Belgium,Remote,Datawrapper.de altair,1,Man,No,
1229,United States,Americas,USA,1,15,,,United States,Remote,,0,Woman,Yes,
1230,Canada,Americas,CAN,7,10,,,Canada,Remote,piktochart,0,Woman,No,
1231,Netherlands,Europe,NLD,9,8,,,Netherlands,Remote,,0,,Yes,
1232,Peru,Americas,PER,2,3,"$10,000 - $19,999",Less than $15,Peru,Remote,,0,,No,
1233,,,,2,10,,,,Hybrid,,0,Self-described or Prefer not to say,No,
1234,,,,15,20,,$75 - $99,,Remote,,0,Woman,Yes,
1235,France,Europe,FRA,5,20,,$45 - $59,France,Remote,,0,Woman,Yes,
1236,,,,,,,,,,,0,Woman,No,
1237,Austria,Europe,AUT,2,2,,,Austria,,Cytoscape,1,Woman,Yes,"Giorgia Lupi, Lisa Charlotte Muth, Cole Nussbaumer Knaflic, Steve Wexler, Jonathan Schwabish"
1239,,,,30,30,,,,Hybrid,,0,Self-described or Prefer not to say,Yes,
1240,United States,Americas,USA,5,4,"$100,000 - $119,999",,United States,Remote,,0,Woman,Yes,
1241,United States,Americas,USA,7,18,"$40,000 - $59,999",,United States,On site,,0,Woman,No,
1242,United States,Americas,USA,0,5,,,United States,,,0,Woman,Yes,"Cole Nussbaumer-Knaflic, Stephanie Evergreen, Tamara Munzner"
1243,Portugal,Europe,PRT,6,6,"$20,000 - $39,999",,Portugal,Hybrid,,1,Man,,
1244,Czech Republic (Czechia),Europe,CZE,5,5,"$20,000 - $39,999",,Czech Republic (Czechia),Hybrid,,1,Woman,Yes,
1245,India,Asia,IND,3,10,,,India,Remote,,0,Man,Yes,
1247,United States,Americas,USA,4,6,"$40,000 - $59,999",,United States,Remote,,0,Woman,Yes,
1248,Malta,Europe,MLT,4,10,"$40,000 - $59,999",,Malta,Remote,,1,Woman,Yes,
1249,Belarus,Europe,BLR,4,19,,,Belarus,Remote,,0,Woman,No,"Georgios Karamanis, Michael DiBenigno"
1250,United Kingdom,Europe,GBR,3,4,"$20,000 - $39,999",,United Kingdom,Hybrid,,1,Woman,Yes,
1253,United States,Americas,USA,5,31,I am not compensated on a yearly basis,,United States,Remote,Custom tool,0,Man,Yes,
1254,United States,Americas,USA,4,28,,,United States,Other (please specify),,0,Woman,Yes,
1255,Austria,Europe,AUT,14,17,,,Austria,Hybrid,Vega-Lite,1,Man,Yes,
1256,Canada,Americas,CAN,1,0,,,Canada,Remote,,0,Woman,Yes,
1257,,,,20,31,,,,Remote,,0,,No,
1258,United States,Americas,USA,9,20,,,United States,,,0,Woman,No,
1259,,,,17,31,"$60,000 - $79,999",,,On site,,0,Woman,No,
1263,,,,7,10,,,,On site,,0,Man,No,
1265,Poland,Europe,POL,10,11,"$20,000 - $39,999",$30 - $44,Poland,Remote,,1,Man,Yes,
1266,Russia,Europe,RUS,2,3,,,Russia,Remote,,0,Self-described or Prefer not to say,Yes,
1267,United States,Americas,USA,0,7,,,United States,Hybrid,,0,Woman,,
1268,Montenegro,Europe,MNE,6,17,,,Montenegro,Remote,AnyChart,1,Man,No,"Nathan Yau, Alberto Cairo"
1269,United States,Americas,USA,8,26,"$20,000 - $39,999",,United States,Hybrid,,0,Woman,No,
1270,United States,Americas,USA,16,16,"$140,000 - $159,999",,United States,Hybrid,,0,Woman,Yes,
1271,,,,1,0,,,,Remote,,0,Woman,Yes,
1272,United States,Americas,USA,10,12,"$240,000 or more",,United States,On site,ChartJS,0,Man,Yes,
1274,United Kingdom,Europe,GBR,2,17,"$40,000 - $59,999",,United Kingdom,Hybrid,,0,Woman,Yes,
1276,,,,6,4,,,,On site,,0,Woman,No,
1280,Poland,Europe,POL,4,7,"$20,000 - $39,999",I am not compensated on an hourly or project basis,Poland,Remote,,0,,Yes,
1283,Estonia,Europe,EST,,16,"$40,000 - $59,999",,Estonia,Remote,,1,Man,Yes,
1284,United States,Americas,USA,0,,,,United States,Remote,,0,Woman,,
1288,United States,Americas,USA,25,31,,$75 - $99,United States,Remote,tuvalabs.com data exploration environment,0,,Yes,
1293,United States,Americas,USA,7,10,,,United States,,,0,Man,Yes,
1295,,,,10,27,,,,Remote,,0,Man,Yes,"Cairo, Tufte, DuBois, Kieran Healy"
1300,,,,,5,,,,,,0,Self-described or Prefer not to say,No,
1305,India,Asia,IND,,,,,India,,,0,Man,Yes,
1308,Germany,Europe,DEU,2,4,"$80,000 - $99,999",,Germany,On site,,0,,Yes,
1309,Canada,Americas,CAN,3,7,,,Canada,,,0,Man,Yes,
846,United States,Americas,USA,8,5,"$60,000 - $79,999",I am not compensated on an hourly or project basis,United States,Remote,,0,Woman,,
1223,United States,Americas,USA,3,3,"$100,000 - $119,999",,United States,Hybrid,,0,Man,No,
1298,Brazil,Americas,BRA,5,3,"$40,000 - $59,999",I am not compensated on an hourly or project basis,Brazil,Remote,,0,,Yes,
1029,Uganda,Africa,UGA,2,0,I am not compensated on a yearly basis,I am not compensated on an hourly or project basis,Uganda,On site,,0,Woman,,Twitter
1075,United Kingdom,Europe,GBR,8,10,"$40,000 - $59,999",,United Kingdom,Hybrid,,0,Man,,
1172,Argentina,Americas,ARG,3,20,"$20,000 - $39,999",I am not compensated on an hourly or project basis,Argentina,Remote,,1,Man,,"Bill Shander, Scott Berinato, Ryan Sleeper"
1185,United States,Americas,USA,18,22,"$100,000 - $119,999",,United States,Hybrid,,0,Man,,
1238,Austria,Europe,AUT,4,11,"$40,000 - $59,999",,Austria,Hybrid,,1,Man,,
1246,United States,Americas,USA,4,8,"$120,000 - $139,999",,United States,Remote,,0,Woman,,
1312,Ukraine,Europe,UKR,11,15,"$40,000 - $59,999",$30 - $44,Ukraine,Remote,,0,Man,,
1252,United States,Americas,USA,7,7,"$100,000 - $119,999",,United States,Hybrid,"Paraview, Blender, Inkscape",0,,,
1251,Mauritius,Africa,MUS,4,5,"$10,000 - $19,999",,Mauritius,On site,,0,,,
1260,Italy,Europe,ITA,5,6,"$20,000 - $39,999",,Italy,Remote,SAS Visual Analytics,0,,,
1261,United States,Americas,USA,4,12,,,United States,Remote,,0,,,
1262,Russia,Europe,RUS,5,12,"$20,000 - $39,999",$15 - $29,Russia,Remote,,0,,,
1264,United States,Americas,USA,6,16,,,United States,Remote,,0,,,
1273,United States,Americas,USA,12,16,"$200,000 - $219,999",$125 - $149,United States,Remote,,0,,,
1275,Spain,Europe,ESP,2,3,"$20,000 - $39,999",I am not compensated on an hourly or project basis,Spain,Remote,,0,,,
1277,India,Asia,IND,2,4,"Less than $10,000",Less than $15,India,Remote,,0,,,
1278,United States,Americas,USA,27,14,"$100,000 - $119,999",,United States,Remote,Airtable,0,,,
1279,Spain,Europe,ESP,1,4,"$20,000 - $39,999",,Spain,Remote,,0,,,
1281,Brazil,Americas,BRA,3,0,"Less than $10,000",Less than $15,Brazil,Remote,,0,,,
1282,Mexico,Americas,MEX,4,10,I am not compensated on a yearly basis,$75 - $99,Mexico,Hybrid,,0,,,
1285,New Zealand,Oceania,NZL,7,15,"$100,000 - $119,999",,New Zealand,Hybrid,CRM Analytics (Salesforce native tool),0,,,
1286,United States,Americas,USA,6,11,"$160,000 - $179,999",I am not compensated on an hourly or project basis,United States,Remote,,0,,,
1289,Colombia,Americas,COL,3,10,"$10,000 - $19,999",$15 - $29,Colombia,On site,Apache Superset,0,,,
1291,United States,Americas,USA,3,12,"$60,000 - $79,999",I am not compensated on an hourly or project basis,United States,Hybrid,,0,,,
1294,United Kingdom,Europe,GBR,15,30,"$80,000 - $99,999",$60 - $74,United Kingdom,Hybrid,,0,,,
1296,United States,Americas,USA,5,10,"$140,000 - $159,999",,United States,Hybrid,,0,,,
1299,France,Europe,FRA,3,4,"$40,000 - $59,999",,France,Hybrid,,0,,,
1301,Nepal,Asia,NPL,1,1,"Less than $10,000",Less than $15,Nepal,On site,,0,,,
1302,United States,Americas,USA,1,6,,$15 - $29,United States,On site,,0,,,
1303,United States,Americas,USA,4,5,I am not compensated on a yearly basis,$100 - $124,United States,Remote,,0,,,
1306,Germany,Europe,DEU,11,16,,,Germany,Remote,,0,,,
1311,United States,Americas,USA,0,7,,,United States,On site,,0,,,
1287,Italy,Europe,ITA,1,6,"Less than $10,000",,Italy,Hybrid,Blender,0,,,
1290,United States,Americas,USA,7,31,"$40,000 - $59,999",,United States,Hybrid,,0,,,
1292,Nigeria,Africa,NGA,0,0,I am not compensated on a yearly basis,I am not compensated on an hourly or project basis,Nigeria,Other (please specify),,0,,,
1297,United States,Americas,USA,2,5,"$100,000 - $119,999",I am not compensated on an hourly or project basis,United States,Hybrid,,0,,,
1310,Germany,Europe,DEU,1,14,,,Germany,Remote,,0,,,
1304,United Kingdom,Europe,GBR,8,9,"$80,000 - $99,999",,United Kingdom,Hybrid,,0,,,
1307,Greece,Europe,GRC,5,5,"$20,000 - $39,999",,Greece,Hybrid,,0,,,
1313,Australia,Oceania,AUS,4,22,"$80,000 - $99,999",,Australia,On site,,0,,,
1314,Hungary,Europe,HUN,10,10,"$20,000 - $39,999",,Hungary,Hybrid,,0,,,
1316,Australia,Oceania,AUS,20,20,"$80,000 - $99,999",,Australia,Hybrid,,0,,,
1317,Singapore,Asia,SGP,7,10,"$100,000 - $119,999",,Singapore,On site,,0,,,
1318,Spain,Europe,ESP,4,10,"$60,000 - $79,999",,Spain,Remote,,0,,,
1319,Poland,Europe,POL,3,7,"$20,000 - $39,999",,Poland,Hybrid,,0,,,
1320,United States,Americas,USA,11,14,"$240,000 or more",,United States,Remote,visx,0,,,
1321,United Kingdom,Europe,GBR,15,25,"$40,000 - $59,999",,United Kingdom,Hybrid,,0,,,
1322,Canada,Americas,CAN,10,17,,,Canada,Hybrid,,0,,,
1323,United States,Americas,USA,1,6,"$60,000 - $79,999",I am not compensated on an hourly or project basis,United States,Remote,,0,,,
1333,New Zealand,Oceania,NZL,31,31,,,New Zealand,Remote,,0,,,
1334,United Kingdom,Europe,GBR,20,26,"$20,000 - $39,999",I am not compensated on an hourly or project basis,United Kingdom,Remote,"Cinema 4D, Avenza Mapublisher, Avenza Geographic Imager",0,,,
1335,France,Europe,FRA,11,14,"$80,000 - $99,999",,France,Remote,Spotfire,0,,,
1315,United States,Americas,USA,5,10,"$120,000 - $139,999",,United States,Remote,,0,,,
1328,United Kingdom,Europe,GBR,5,19,"$60,000 - $79,999",,United Kingdom,Hybrid,Aerialod,0,,,
1324,India,Asia,IND,4,4,"$10,000 - $19,999",$45 - $59,India,On site,OBIEE,0,,,
1325,United States,Americas,USA,5,7,"$80,000 - $99,999",I am not compensated on an hourly or project basis,United States,Hybrid,,0,,,
1327,United States,Americas,USA,25,25,"$100,000 - $119,999",,United States,Hybrid,,0,,,
1329,Indonesia,Asia,IDN,1,15,I am not compensated on a yearly basis,I am not compensated on an hourly or project basis,Indonesia,Hybrid,,0,,,
1330,India,Asia,IND,3,10,"$10,000 - $19,999",,India,On site,,0,,,
1331,United States,Americas,USA,5,5,"$60,000 - $79,999",,United States,Hybrid,,0,,,
1336,Australia,Oceania,AUS,5,2,"$40,000 - $59,999",I am not compensated on an hourly or project basis,Australia,Remote,,0,,,
1326,United States,Americas,USA,4,9,"$100,000 - $119,999",I am not compensated on an hourly or project basis,United States,Remote,,0,,,
1332,United States,Americas,USA,3,13,,,United States,Remote,,0,,,
1373,,,,5,1,,,,,,0,,,
1337,France,Europe,FRA,10,11,"$40,000 - $59,999",,France,Hybrid,,0,,,
1338,United States,Americas,USA,8,8,"$240,000 or more",,United States,Remote,,0,,,
1339,United Kingdom,Europe,GBR,21,31,"$40,000 - $59,999",,United Kingdom,Remote,Fusion Analytics Warehouse,0,,,
1342,United States,Americas,USA,7,19,"$60,000 - $79,999",,United States,Remote,,0,,,
1362,,,,11,31,,,,On site,,0,,,
1369,Slovenia,Europe,SVN,3,12,"$20,000 - $39,999",,Slovenia,Hybrid,,0,,,
1345,United States,Americas,USA,23,20,I am not compensated on a yearly basis,I am not compensated on an hourly or project basis,United States,Hybrid,,0,,,
1357,United States,Americas,USA,0,4,"$40,000 - $59,999",I am not compensated on an hourly or project basis,United States,Remote,,0,,,
1367,Indonesia,Asia,IDN,0,6,I am not compensated on a yearly basis,I am not compensated on an hourly or project basis,Indonesia,Remote,,0,,,
1372,Israel,Asia,ISR,1,5,,,Israel,Other (please specify),,0,,,
1358,United States,Americas,USA,1,4,I am not compensated on a yearly basis,I am not compensated on an hourly or project basis,United States,Remote,,0,,,
1368,India,Asia,IND,1,1,"$10,000 - $19,999",,India,Hybrid,,0,,,
1380,Tanzania,Africa,TZA,0,3,,,Tanzania,Remote,,0,,,
1391,United States,Americas,USA,0,24,,,United States,,,0,,,
1404,,,,2,0,,,,,,0,,,
1364,Ireland,Europe,IRL,7,7,"$10,000 - $19,999",$15 - $29,Ireland,Hybrid,,0,,,
1370,United States,Americas,USA,4,0,"$20,000 - $39,999",I am not compensated on an hourly or project basis,United States,Hybrid,,0,,,
1340,United States,Americas,USA,6,4,"$80,000 - $99,999",,United States,Remote,,0,,,
1341,New Zealand,Oceania,NZL,20,20,"$20,000 - $39,999",,New Zealand,Hybrid,,0,,,
1343,United States,Americas,USA,10,24,"$160,000 - $179,999",I am not compensated on an hourly or project basis,United States,Remote,,0,,,
1344,United States,Americas,USA,30,31,"$220,000 - $239,999",,United States,Remote,,0,,,
1346,Australia,Oceania,AUS,0,14,"$60,000 - $79,999",,Australia,Hybrid,,0,,,
1347,United States,Americas,USA,3,6,"$100,000 - $119,999",,United States,Hybrid,,0,,,
1349,Argentina,Americas,ARG,8,15,"$20,000 - $39,999",,Argentina,Hybrid,,0,,,
1350,United States,Americas,USA,10,6,"$240,000 or more",,United States,Hybrid,,0,,,
1351,United States,Americas,USA,8,18,"$120,000 - $139,999",,United States,Remote,,0,,,
1352,United Kingdom,Europe,GBR,20,20,"$100,000 - $119,999",,United Kingdom,Remote,,0,,,
1353,United States,Americas,USA,,,"$120,000 - $139,999",,United States,Remote,,0,,,
1354,United States,Americas,USA,3,10,"$60,000 - $79,999",,United States,On site,,0,,,
1378,United States,Americas,USA,22,25,"$200,000 - $219,999",,United States,Hybrid,,0,,,
1348,United States,Americas,USA,11,17,,,United States,Remote,,0,,,
1355,Singapore,Asia,SGP,8,10,"$140,000 - $159,999",I am not compensated on an hourly or project basis,Singapore,Hybrid,,0,,,
1356,United States,Americas,USA,7,10,"$140,000 - $159,999",I am not compensated on an hourly or project basis,United States,Remote,,0,,,
1360,United States,Americas,USA,7,7,"$140,000 - $159,999",,United States,Remote,,0,,,
1361,United States,Americas,USA,6,25,"$140,000 - $159,999",,United States,Remote,,0,,,
1365,China,Asia,CHN,6,10,"$80,000 - $99,999",,China,On site,,0,,,
1371,Canada,Americas,CAN,5,6,"$40,000 - $59,999",,Canada,Remote,,0,,,
1374,United States,Americas,USA,12,31,,,United States,Hybrid,,0,,,
1375,Germany,Europe,DEU,5,5,"$60,000 - $79,999",I am not compensated on an hourly or project basis,Germany,Hybrid,,0,,,
1382,United States,Americas,USA,16,22,,,United States,Remote,,0,,,
1383,Netherlands,Europe,NLD,10,10,,,Netherlands,Hybrid,,0,,,
1384,Philippines,Asia,PHL,2,4,"$10,000 - $19,999",,Philippines,On site,,0,,,
1403,,,,8,12,,,,Remote,,0,,,
1366,Australia,Oceania,AUS,5,30,"$100,000 - $119,999",I am not compensated on an hourly or project basis,Australia,Hybrid,,0,,,
1397,Italy,Europe,ITA,5,11,"$40,000 - $59,999",,Italy,,,0,,,
1359,Slovakia,Europe,SVK,2,3,I am not compensated on a yearly basis,$75 - $99,Slovakia,Remote,,0,,,
1376,Peru,Americas,PER,1,0,I am not compensated on a yearly basis,Less than $15,Peru,Remote,,0,,,
1377,Thailand,Asia,THA,10,0,"$40,000 - $59,999",$15 - $29,Thailand,Remote,,0,,,
1388,United States,Americas,USA,5,7,"$80,000 - $99,999",,United States,Hybrid,,0,,,
1363,United States,Americas,USA,9,5,"$100,000 - $119,999",$100 - $124,United States,Hybrid,,0,,,
1379,Canada,Americas,CAN,15,23,,$125 - $149,Canada,Remote,,0,,,
1381,Colombia,Americas,COL,7,10,"Less than $10,000",I am not compensated on an hourly or project basis,Colombia,Remote,,0,,,
1385,Netherlands,Europe,NLD,8,20,,,Netherlands,Hybrid,,0,,,
1389,Netherlands,Europe,NLD,3,5,I am not compensated on a yearly basis,I am not compensated on an hourly or project basis,Netherlands,Hybrid,,0,,,
1400,Canada,Americas,CAN,21,22,,,Canada,On site,,0,,,
1386,Germany,Europe,DEU,5,8,"$40,000 - $59,999",I am not compensated on an hourly or project basis,Germany,Hybrid,,0,,,
1387,Argentina,Americas,ARG,10,10,I am not compensated on a yearly basis,I am not compensated on an hourly or project basis,Argentina,Hybrid,,0,,,
1390,South Africa,Africa,ZAF,3,10,I am not compensated on a yearly basis,I am not compensated on an hourly or project basis,South Africa,Remote,,0,,,
1392,United States,Americas,USA,2,3,"$60,000 - $79,999",I am not compensated on an hourly or project basis,United States,Remote,,0,,,
1393,United States,Americas,USA,0,16,"$120,000 - $139,999",,United States,On site,,0,,,
1394,United States,Americas,USA,5,24,"$240,000 or more",,United States,Remote,,0,,,
1395,United Kingdom,Europe,GBR,5,5,,,United Kingdom,Hybrid,,0,,,
1396,United States,Americas,USA,6,21,"$100,000 - $119,999",,United States,Hybrid,,0,,,
1398,United States,Americas,USA,5,30,,,United States,Remote,,0,,,
1399,United States,Americas,USA,4,20,,,United States,Hybrid,,0,,,
1401,United States,Americas,USA,2,25,,,United States,Hybrid,,0,,,
1402,United States,Americas,USA,7,10,,,United States,Remote,,0,,,
1408,unfinished,,,0,10,I am not compensated on a yearly basis,,,,,0,,,
1405,unfinished,,,2,10,,,,,,0,,,
1406,unfinished,,,10,2,,,,,,0,,,
1407,unfinished,,,3,0,,,,,,0,,,
1409,unfinished,,,1,6,,,,,,0,,,
1410,unfinished,,,5,10,,,,,,0,,,
1411,unfinished,,,1,10,,,,,,0,,,
1412,unfinished,,,0,5,,,,,,0,,,
1413,unfinished,,,0,1,,,,,,0,,,
1414,unfinished,,,10,17,,,,,,0,,,
1415,unfinished,,,7,17,,,,,,0,,,
1416,unfinished,,,12,31,,,,,,0,,,
1417,unfinished,,,6,30,,,,,,0,,,
1418,unfinished,,,6,6,,,,,,0,,,
1419,unfinished,,,7,1,,,,,,0,,,
1420,unfinished,,,2,4,,,,,,0,,,
1421,unfinished,,,2,12,,,,,,0,,,
1422,unfinished,,,10,31,,,,,,0,,,
1423,unfinished,,,10,31,,,,,,0,,,
1424,unfinished,,,11,22,,,,,,0,,,
1425,unfinished,,,10,20,,,,,,0,,,
1426,unfinished,,,11,24,,,,,,0,,,
1427,unfinished,,,31,31,,,,,,0,,,
1428,unfinished,,,8,25,,,,,,0,,,
1429,unfinished,,,10,20,,,,,,0,,,
1430,unfinished,,,1,4,,,,,,0,,,
1431,unfinished,,,5,20,,,,,,0,,,
1432,unfinished,,,1,15,,,,,,0,,,
1433,unfinished,,,5,3,,,,,,0,,,
1434,unfinished,,,0,1,,,,,,0,,,
1435,unfinished,,,2,0,,,,,,0,,,
1436,unfinished,,,5,16,,,,,,0,,,
1437,unfinished,,,2,3,,,,,,0,,,
1438,unfinished,,,2,20,,,,,,0,,,
1439,unfinished,,,0,7,,,,,,0,,,
1440,unfinished,,,1,3,,,,,,0,,,
1441,unfinished,,,1,1,,,,,,0,,,
1442,unfinished,,,5,30,,,,,,0,,,
1443,unfinished,,,7,5,,,,,,0,,,
1444,unfinished,,,10,10,,,,,,0,,,
1445,unfinished,,,9,20,,,,,,0,,,
1446,unfinished,,,7,10,,,,,,0,,,
1447,unfinished,,,10,14,,,,,,0,,,
1448,unfinished,,,7,10,,,,,,0,,,
1449,unfinished,,,22,22,,,,,,0,,,
1450,unfinished,,,10,15,,,,,,0,,,
1451,unfinished,,,20,28,,,,,,0,,,
1452,unfinished,,,15,28,,,,,,0,,,
1453,unfinished,,,6,0,,,,,,0,,,
1454,unfinished,,,14,14,,,,,,0,,,
1455,unfinished,,,15,27,,,,,,0,,,
1456,unfinished,,,15,20,,,,,,0,,,
1457,unfinished,,,10,25,,,,,,0,,,
1458,unfinished,,,3,6,,,,,,0,,,
1459,unfinished,,,12,17,,,,,,0,,,
1460,unfinished,,,6,6,,,,,,0,,,
1461,unfinished,,,7,12,,,,,,0,,,
1462,unfinished,,,6,6,,,,,,0,,,
1463,unfinished,,,6,15,,,,,,0,,,
1464,unfinished,,,30,30,,,,,,0,,,
1465,unfinished,,,6,6,,,,,,0,,,
1466,unfinished,,,8,19,,,,,,0,,,
1467,unfinished,,,25,24,,,,,,0,,,
1468,unfinished,,,10,16,,,,,,0,,,
1469,unfinished,,,11,13,,,,,,0,,,
1470,unfinished,,,10,26,,,,,,0,,,
1471,unfinished,,,5,3,,,,,,0,,,
1472,unfinished,,,8,13,,,,,,0,,,
1473,unfinished,,,7,15,,,,,,0,,,
1474,unfinished,,,11,23,,,,,,0,,,
1475,unfinished,,,10,12,,,,,,0,,,
1476,unfinished,,,8,12,,,,,,0,,,
1477,unfinished,,,8,23,,,,,,0,,,
1478,unfinished,,,8,12,,,,,,0,,,
1479,unfinished,,,8,11,,,,,,0,,,
1480,unfinished,,,6,6,,,,,,0,,,
1481,unfinished,,,20,31,,,,,,0,,,
1482,unfinished,,,8,8,,,,,,0,,,
1483,unfinished,,,8,20,,,,,,0,,,
1484,unfinished,,,4,4,,,,,,0,,,
1485,unfinished,,,2,25,,,,,,0,,,
1486,unfinished,,,2,12,,,,,,0,,,
1487,unfinished,,,3,4,,,,,,0,,,
1488,unfinished,,,1,0,,,,,,0,,,
1489,unfinished,,,2,15,,,,,,0,,,
1490,unfinished,,,0,11,,,,,,0,,,
1491,unfinished,,,2,15,,,,,,0,,,
1492,unfinished,,,4,6,,,,,,0,,,
1493,unfinished,,,4,14,,,,,,0,,,
1494,unfinished,,,5,15,,,,,,0,,,
1495,unfinished,,,4,17,,,,,,0,,,
1496,unfinished,,,5,15,,,,,,0,,,
1497,unfinished,,,5,15,,,,,,0,,,
1498,unfinished,,,3,5,,,,,,0,,,
1499,unfinished,,,4,10,,,,,,0,,,
1500,unfinished,,,1,2,,,,,,0,,,
1501,unfinished,,,0,20,,,,,,0,,,
1502,unfinished,,,2,3,,,,,,0,,,
1503,unfinished,,,4,14,,,,,,0,,,
1504,unfinished,,,5,8,,,,,,0,,,
1505,unfinished,,,1,10,,,,,,0,,,
1506,unfinished,,,0,0,,,,,,0,,,
1507,unfinished,,,1,2,,,,,,0,,,
1508,unfinished,,,1,7,,,,,,0,,,
1509,unfinished,,,4,10,,,,,,0,,,
1510,unfinished,,,2,30,,,,,,0,,,
1511,unfinished,,,5,10,,,,,,0,,,
1512,unfinished,,,4,18,,,,,,0,,,
1513,unfinished,,,0,1,,,,,,0,,,
1514,unfinished,,,2,6,,,,,,0,,,
1515,unfinished,,,2,10,,,,,,0,,,
1516,unfinished,,,4,10,,,,,,0,,,
1517,unfinished,,,5,8,,,,,,0,,,
1518,unfinished,,,5,12,,,,,,0,,,
1519,unfinished,,,0,0,,,,,,0,,,
1520,unfinished,,,5,20,,,,,,0,,,
1521,unfinished,,,5,25,,,,,,0,,,
1522,unfinished,,,4,20,,,,,,0,,,
1523,unfinished,,,0,10,,,,,,0,,,
1524,unfinished,,,5,8,,,,,,0,,,
1525,unfinished,,,4,6,,,,,,0,,,
1526,unfinished,,,1,22,,,,,,0,,,
1527,unfinished,,,1,3,,,,,,0,,,
1528,unfinished,,,2,10,,,,,,0,,,
1529,unfinished,,,4,20,,,,,,0,,,
1530,unfinished,,,5,7,,,,,,0,,,
1531,unfinished,,,3,31,,,,,,0,,,
1532,unfinished,,,5,5,,,,,,0,,,
1533,unfinished,,,20,30,,,,,,0,,,
1534,unfinished,,,10,18,,,,,,0,,,
1535,unfinished,,,6,6,,,,,,0,,,
1536,unfinished,,,1,1,,,,,,0,,,
1537,unfinished,,,0,2,,,,,,0,,,
1538,unfinished,,,3,5,,,,,,0,,,
1539,unfinished,,,2,0,,,,,,0,,,
1540,unfinished,,,0,0,,,,,,0,,,
1541,unfinished,,,1,1,,,,,,0,,,
1542,unfinished,,,7,7,,,,,,0,,,
1543,unfinished,,,8,10,,,,,,0,,,
1544,unfinished,,,2,12,,,,,,0,,,
1545,unfinished,,,2,2,,,,,,0,,,
1546,unfinished,,,2,4,,,,,,0,,,
1547,unfinished,,,0,9,,,,,,0,,,
1548,unfinished,,,5,10,,,,,,0,,,
1549,unfinished,,,5,5,,,,,,0,,,
1550,unfinished,,,2,3,,,,,,0,,,
1551,unfinished,,,31,31,,,,,,0,,,
1552,unfinished,,,1,2,,,,,,0,,,
1553,unfinished,,,0,10,,,,,,0,,,
1554,unfinished,,,5,10,,,,,,0,,,
1555,unfinished,,,3,5,,,,,,0,,,
1556,unfinished,,,15,20,,,,,,0,,,
1557,unfinished,,,4,20,,,,,,0,,,
1558,unfinished,,,0,7,,,,,,0,,,
1559,unfinished,,,4,10,,,,,,0,,,
1560,unfinished,,,3,0,,,,,,0,,,
1561,unfinished,,,0,20,,,,,,0,,,
1562,unfinished,,,0,8,,,,,,0,,,
1563,unfinished,,,2,2,,,,,,0,,,
1564,unfinished,,,1,1,,,,,,0,,,
1565,unfinished,,,3,6,,,,,,0,,,
1566,unfinished,,,2,4,,,,,,0,,,
1567,unfinished,,,4,10,,,,,,0,,,
1568,unfinished,,,8,8,,,,,,0,,,`;

// https://github.com/d3/d3-fetch/blob/main/README.md#dsv
const data_raw = d3.csvParse(csvData, function(data){
    return data;
});
console.log(data_raw[0]);
console.log(data_raw.length);

var data = data_raw.filter(function (d) {return (d.Loc1Country != "unfinished") });
console.log(data[0]);
console.log(data.length);
//sort by years_dataviz asc

// function for mouseover. mouseout and click

// switch to fill opacity maybe? or stroke color?
const workType = {
    "Hybrid":"black",
    "On site":"black",
    "Remote":"white",
};

const genderSymbols = {
    "Man":"\\",
    "Woman":"/",
    "Self-described or Prefer not to say":"|",
    "":""
};
const regionColours = {
    "Asia": "#e5d4ba", 
    "Europe":"#7983AF", 
    "Africa":"#CE3E3C",
    "Oceania":"#37324F", //black text doesn't look good
    "Americas": "#5a735d",// previously darker green "#49574B",
    "":"#e3c1c1",
};

const waffle = d3.select('.waffle');

const tooltip = d3.select("body")
    .append("div")
    .attr("class", "tooltip")
    ;

waffle
	.selectAll('.rect-empty')
    .data(data)
	.enter()
	.append('div')
    .attr('class', 'rect-empty')
    .style('background-color', d=>(regionColours[d.continent]))
        .style('margin','0')
        .style('border',d=>(d.dvs_member == "Yes" ? "2px solid #75cbec" : "2px solid white"))
    
    .on('mouseover', function (event, d) {
        d3.select(this).style('opacity', '0.3');
        // .text("EST")
        tooltip.style("visibility", 'visible')
            .style("left", (event.pageX + 20) + "px")
            .style("top", (event.pageY - 100) + "px");
        tooltip
        .append("p").attr("class", "tooltip-title").text("Respondent No: "+ (d.refID));
        
        if (d.Loc1Country != "") {
            tooltip
            .append("p").attr("class", "tooltip-title").text("Country: ");
            tooltip
            .append("p").attr("class", "tooltip-text").text(d.Loc1Country);
        };
        if (d.secret_weapon != "") {
            tooltip
            .append("p").attr("class", "tooltip-title").text("Secret weapon: ");
            tooltip
            .append("p").attr("class", "tooltip-text").text(d.secret_weapon);
        };
        if (d.inspired_by != "") {
            tooltip
            .append("p").attr("class", "tooltip-title").text("Inspired by:")
            tooltip
            .append("p").attr("class", "tooltip-text").text(d.inspired_by)
            ;
        };
        
    })

    .on('mouseout', function (event, d) {
        d3.select(this).style('opacity', '1');
        tooltip.style("visibility", 'hidden').selectAll("p").remove()
        ;})

    .on('click', function (event, d) {
        d3.select(this)
        .attr('class', 'rect-clicked')
        .style('background-color', d=>(regionColours[d.continent]))
        .style('margin','0')
        .style('border',d=>(d.dvs_member == "Yes" ? "2px solid #75cbec" : "2px solid white"))
        .style('pointer-events', 'none');
        var svg_circle = d3.select(this)
        .append("svg")
        .attr("width", 32).attr("height", 32)
        .append("g");
        svg_circle
        .append("circle")
            .attr("class","inside-circle")
            .attr('cx', 16).attr('cy', 16).attr('r', 14)
            .style("stroke-dasharray",d=>(d.remote_or_what == "Hybrid" ? "15%" : "0"))
            .style("stroke",d=>(workType[d.remote_or_what]))
            ;
        svg_circle
        .append("text")
            .attr("class","text")
            .attr("dy",20)
            .attr("dx",5)
            .style("fill",d=>(d.continent == "Oceania" || d.continent == "Americas" ? "#d9d9d9" : "black"))
            .text(d=>(genderSymbols[d.gender] + (d.lang_two_or_more == 1 ? "ᴂ":"") + "✹"))

        ;})
;

