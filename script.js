// Shout out to The Pudding https://pudding.cool/process/flexbox-layout/
const csvData = `refID,student,Loc1Country,continent,country_abbr,years_dataviz,years_work,pay_annual,pay_hourly,country,remote_or_what,remote_preference,looking_for_job,edu_level,secret_weapon,lang_two_or_more,gender,dvs_member,inspired_by
1,0,United States,Americas,USA,4,8,"$100,000 - $119,999",,United States,On site,On site,No,Bachelor’s degree,,0,Man,No,"Jonathan Drummey, Steve Wexler, Ann Jackson, Ellen Blackburn, Irene Diomi, Chris DiMartini"
2,0,United States,Americas,USA,25,27,"$100,000 - $119,999",$150 - $174,United States,Hybrid,Hybrid,No,Doctoral degree,,0,Woman,No,"Cole Knaff, Stephanie Evergreen, Ann K. Emory, Shelia B. Robinson"
3,0,Thailand,Asia,THA,6,10,"$60,000 - $79,999",I am not compensated on an hourly or project basis,Thailand,Remote,Remote,No,Master’s degree,,1,Woman,Yes,"Simon Beaumont, Neil Richard, Flerage Twin"
4,0,United States,Americas,USA,10,20,"$40,000 - $59,999",$60 - $74,United States,Remote,Remote,Yes,Master’s degree,,0,Woman,Yes,Stephanie Evergreen
5,0,United Kingdom,Europe,GBR,15,17,"$60,000 - $79,999",$225 - $249,United Kingdom,Hybrid,Hybrid,No,Doctoral degree,,0,Man,Yes,"Marie and Otto Neurath, Andy Kirk, Nadieh Bremner, David McCandless, Jason Forrest, Moritz Stefaner, Jan Willem Tulp"
6,1,United States,Americas,USA,2,9,"$60,000 - $79,999",$60 - $74,United States,Remote,Remote,Yes,Bachelor’s degree,,0,Woman,Yes,"Mona Chalabi, Giorgia Lupi, Amy Cesal, Francesco Muzzi, Duke Riley"
7,0,Uganda,Africa,UGA,5,20,"Less than $10,000",Less than $15,Uganda,On site,On site,Yes,Master’s degree,,0,Woman,,https://datavizproject.com/
8,1,Portugal,Europe,PRT,10,27,"$20,000 - $39,999",I am not compensated on an hourly or project basis,Portugal,Remote,Hybrid,Yes,Bachelor’s degree,,0,Man,Yes,People who share content in sites such as Linkedin
9,0,United States,Americas,USA,15,18,"$80,000 - $99,999",I am not compensated on an hourly or project basis,United States,Hybrid,Hybrid,No,Doctoral degree,Argos,0,Woman,No,Steve Wexler
10,0,United States,Americas,USA,9,9,"$120,000 - $139,999",$60 - $74,United States,Remote,Remote,No,Bachelor’s degree,,0,Woman,Yes,"Nancy Durante, Ellen Lupton,"
11,0,United States,Americas,USA,17,8,"$160,000 - $179,999",I am not compensated on an hourly or project basis,United States,Remote,Remote,No,Doctoral degree,,0,Man,Yes,"Jacques Bertin, Tamara Munzner, Nadieh Bremer, Mike Bostock"
12,0,United States,Americas,USA,5,28,"$100,000 - $119,999",$45 - $59,United States,Hybrid,Remote,No,Bachelor’s degree,,0,Man,Yes,"Amanda Cox, Moritz Stefaner, Enrico Bertini, Nathan Yau, Ali Torbin, Lindsay Betzendahl"
13,0,India,Asia,IND,3,3,"Less than $10,000",Less than $15,India,On site,Hybrid,Yes,Master’s degree,,1,Man,Yes,Internet
14,0,Singapore,Asia,SGP,20,31,"$40,000 - $59,999",I am not compensated on an hourly or project basis,Singapore,Hybrid,Hybrid,Yes,Master’s degree,,0,Self-described or Prefer not to say,,
15,0,United States,Americas,USA,5,5,"$80,000 - $99,999",I am not compensated on an hourly or project basis,United States,Hybrid,Hybrid,No,Master’s degree,,0,Woman,Yes,"Evergreen Data, Cairo, Tufte"
16,0,United States,Americas,USA,7,15,"$120,000 - $139,999",I am not compensated on an hourly or project basis,United States,Remote,Hybrid,Yes,Master’s degree,,0,Woman,,Stephanie Evergreen
17,0,United States,Americas,USA,4,24,"$100,000 - $119,999",I am not compensated on an hourly or project basis,United States,Remote,Remote,No,Bachelor’s degree,,0,Man,No,
18,0,United States,Americas,USA,2,7,"$40,000 - $59,999",I am not compensated on an hourly or project basis,United States,Remote,Hybrid,Yes,Master’s degree,,0,Man,Yes,Nadieh Bremer
19,0,Brazil,Americas,BRA,4,16,"$20,000 - $39,999",I am not compensated on an hourly or project basis,Brazil,Remote,Remote,Yes,Master’s degree,,0,Woman,No,"Giorgia Lupi, Rodrigo Medeiros, Giulia Gianella, Leandro Amorim"
20,0,Chile,Americas,CHL,3,15,"$40,000 - $59,999",I am not compensated on an hourly or project basis,Chile,On site,Hybrid,Yes,Master’s degree,,0,Man,Yes,"Cole Nussbaumer Knaflic, Hans Rosling"
21,0,India,Asia,IND,0,3,"Less than $10,000",I am not compensated on an hourly or project basis,India,Hybrid,Hybrid,Yes,Master’s degree,,1,Woman,No,"alberto cairo, giorgia lupi"
22,0,United States,Americas,USA,1,5,"$60,000 - $79,999",$30 - $44,United States,Remote,Remote,No,Master’s degree,,0,Woman,Yes,"Steve Wexler, Eleanor Lutz"
23,0,United States,Americas,USA,5,6,"$80,000 - $99,999",I am not compensated on an hourly or project basis,United States,Remote,Remote,No,Bachelor’s degree,,0,Woman,Yes,"Federica Fragapane, Nadieh Bremer, Cole Nussbaumer Knaflic, Alberto Cairo, Edward Tufte"
24,0,United States,Americas,USA,12,25,"$80,000 - $99,999",I am not compensated on an hourly or project basis,United States,Remote,Hybrid,Yes,Master’s degree,,0,Man,Yes,"Emery, Evergreen, Schwabish, Cairo, Nussbaumer-Knafflic"
25,0,India,Asia,IND,0,0,"$10,000 - $19,999",I am not compensated on an hourly or project basis,India,Hybrid,Remote,Yes,Bachelor’s degree,Sketch,1,Woman,No,"Axios Visuals, NY Times, Washington Post, Kontinentalist, Sam Learner, Sarah Slobin, Julia Ledur, Amy O Kruk, Krisztina Szucs, Mark Belan, Marco Hernandez, Karim Douieb, Marcelo Duhlade, Andy Kirk, Mona Chalabi, Shirley Wu, Nadieh Bremer, Yan Holtz, Sonja Kuijpers"
26,0,Poland,Europe,POL,3,4,I am not compensated on a yearly basis,Less than $15,Poland,Remote,Remote,Yes,Bachelor’s degree,Think-cell,1,Man,No,hard to say
27,0,United States,Americas,USA,6,12,"$120,000 - $139,999",$125 - $149,United States,Remote,Remote,Yes,Master’s degree,,0,Woman,Yes,"Ellen Blackburn, Autumn Battani, Steve Wexler, Kelly Martin, Chimdi Nwosu"
28,0,United States,Americas,USA,3,9,"$60,000 - $79,999",I am not compensated on an hourly or project basis,United States,Hybrid,Remote,No,Bachelor’s degree,,0,Man,No,"Steve Wexler, Jeffrey Shaffer, Amanda Makulec, Andy Cotgreave, Chantilly Jaggernauth"
29,0,United States,Americas,USA,6,8,"$80,000 - $99,999",$75 - $99,United States,On site,Remote,Yes,Doctoral degree,Qualtrics,1,Woman,No,Ann K. Emery (Depict Data Studio) & Stephanie Evergreen (Evergreen Data)
30,0,United States,Americas,USA,13,31,"$120,000 - $139,999",I am not compensated on an hourly or project basis,United States,Hybrid,Hybrid,No,Master’s degree,,0,Man,Yes,"Nadieh Bremer, Moritz Stefaner, Maarten Lambrechts"
31,0,Australia,Oceania,AUS,10,20,"$80,000 - $99,999",I am not compensated on an hourly or project basis,Australia,Hybrid,Hybrid,No,Master’s degree,Datorama,0,Man,,"No-one specifically, I tend to explore data visualisation galleries and blogs for inspiration."
32,0,United States,Americas,USA,7,31,"$60,000 - $79,999",$30 - $44,United States,Remote,Hybrid,Yes,Master’s degree,,0,Woman,No,Tableau Public (general)
33,0,United States,Americas,USA,18,24,"$240,000 or more",$225 - $249,United States,Hybrid,Hybrid,No,Master’s degree,,0,Man,Yes,"Friends, Social Media, Conferences."
34,0,United States,Americas,USA,9,9,"$80,000 - $99,999",$45 - $59,United States,Hybrid,Remote,No,Doctoral degree,Whiteboard and markers,1,Man,Yes,"Andy Kriebel, Jen Christiansen, John Burn-Murdoch, Chimdi Nwosu, Stephanie Evergreen, Cole Knaflic, Ali Troban"
35,0,Portugal,Europe,PRT,10,31,"$20,000 - $39,999",Less than $15,Portugal,Hybrid,Hybrid,No,Master’s degree,,0,Woman,Yes,"NYT, WP, SCMP, Finantial Times, The pudding, Guardian..."
36,0,Germany,Europe,DEU,2,10,"$40,000 - $59,999",$125 - $149,Germany,Hybrid,Remote,No,Technical school,SAP Analytics Cloud,1,Man,Yes,
37,0,United States,Americas,USA,10,31,"$120,000 - $139,999",I am not compensated on an hourly or project basis,United States,Remote,Remote,No,Bachelor’s degree,,0,Man,No,big book of dashboards
38,0,Netherlands,Europe,NLD,16,16,"$60,000 - $79,999",I am not compensated on an hourly or project basis,Netherlands,Hybrid,On site,No,Bachelor’s degree,,1,Man,Yes,"Topi Tjukanov, Michelle Rial, Stefanie Posavec"
39,0,United States,Americas,USA,7,7,"$140,000 - $159,999",I am not compensated on an hourly or project basis,United States,Remote,Remote,No,Bachelor’s degree,,0,Woman,Yes,"Diana Yoo, Chris Hoffman, Sarah Fawson, Mike Bostock"
40,0,United States,Americas,USA,6,17,"$140,000 - $159,999",I am not compensated on an hourly or project basis,United States,Remote,Remote,Yes,Bachelor’s degree,,0,Woman,Yes,"Scott Galloway, Mona Chalabi, Nadieh Bremer, Kirk Borne,"
41,0,United States,Americas,USA,15,30,I am not compensated on a yearly basis,$30 - $44,United States,Hybrid,Remote,No,Master’s degree,,0,Woman,No,Submitters to Reddit group: data is beautiful. Stephen Wexler
42,0,South Korea,Asia,PRK,20,20,"$80,000 - $99,999",$45 - $59,South Korea,Hybrid,Hybrid,No,Master’s degree,,0,Man,Yes,otto neurath
43,0,Russia,Europe,RUS,1,10,"Less than $10,000",$15 - $29,Russia,Remote,Remote,Yes,Doctoral degree,,0,Man,Yes,Federica Fragapane
44,0,Poland,Europe,POL,5,8,I am not compensated on a yearly basis,$30 - $44,Poland,Remote,Remote,No,Master’s degree,,1,Woman,Yes,"Andy Kirk, Edward Tufte, Alberto Cairo"
45,0,United States,Americas,USA,5,10,"$80,000 - $99,999",$45 - $59,United States,Hybrid,Remote,Yes,Bachelor’s degree,,0,Man,No,Enterprise DNA
46,0,Netherlands,Europe,NLD,11,11,I am not compensated on a yearly basis,$125 - $149,Netherlands,Hybrid,Hybrid,No,Master’s degree,,1,Woman,Yes,"Federica Fragapane, Nadieh Bremer, Sonja Terp, Stephanie Posavec, Giorgia Lupi, Etc."
47,0,Spain,Europe,ESP,10,15,I am not compensated on a yearly basis,$15 - $29,Spain,Hybrid,Hybrid,No,Master’s degree,,1,Woman,No,Mario Tascón
48,0,Portugal,Europe,PRT,3,7,I am not compensated on a yearly basis,$30 - $44,Portugal,On site,On site,Yes,Master’s degree,,1,Woman,No,"Alberto Cairo, Murray Dick, Stephanie Evergreen, Lisa Charlotte Muth, Sandra Rendgen"
49,0,Singapore,Asia,SGP,4,25,"$120,000 - $139,999",$225 - $249,Singapore,On site,On site,No,Master’s degree,,1,Man,Yes,"Stephanie Evergreen, Cole Nussbaumer Knaflic,"
50,0,Canada,Americas,CAN,3,13,"$40,000 - $59,999",I am not compensated on an hourly or project basis,Canada,On site,Remote,Yes,Doctoral degree,,0,Man,,
51,0,United States,Americas,USA,15,15,I am not compensated on a yearly basis,$75 - $99,United States,Remote,,Yes,Bachelor’s degree,After Effects,0,Man,Yes,There are many great people doing work and its hard to pick a few that stand out above others.
52,0,Denmark,Europe,DNK,18,18,"$100,000 - $119,999",I am not compensated on an hourly or project basis,Denmark,On site,On site,Yes,Doctoral degree,LibreCalc,1,Man,Yes,Nadieh Bremer
53,1,Australia,Oceania,AUS,3,20,"$80,000 - $99,999",$30 - $44,Australia,Hybrid,Hybrid,No,Master’s degree,,0,Woman,Yes,"Daniel Huffman, Vanessa Knopke-Wessel, Sarah Bell, John Nelson"
54,0,United States,Americas,USA,3,6,"$60,000 - $79,999",$75 - $99,United States,Remote,Remote,Yes,Master’s degree,Piktochart,1,Man,Yes,"Steve Wexler, Marc Soares"
55,1,Brazil,Americas,BRA,3,0,"Less than $10,000",Less than $15,Brazil,On site,Hybrid,Yes,Some college,,1,Woman,Yes,"Alberto Cairo, Café Information Design, Cédric Schérer, Federica Fragapane"
56,0,United States,Americas,USA,5,20,"$100,000 - $119,999",I am not compensated on an hourly or project basis,United States,Remote,Remote,No,Bachelor’s degree,,0,Woman,Yes,Alberto Cairo; Giorgia Lupi
57,0,United States,Americas,USA,4,3,"$60,000 - $79,999",$30 - $44,United States,Hybrid,Hybrid,Yes,Master’s degree,,0,Man,Yes,A friend who is a graphic designer or other people that I have in a circle of friends that are either designers or data people
58,0,Brazil,Americas,BRA,4,4,"$20,000 - $39,999",$15 - $29,Brazil,Remote,Hybrid,Yes,Master’s degree,,1,Woman,No,
59,1,Bangladesh,Asia,BGD,3,8,"$20,000 - $39,999",$30 - $44,Bangladesh,Hybrid,On site,Yes,Bachelor’s degree,,0,Man,No,Nazat Chowdhury
60,0,Australia,Oceania,AUS,6,8,"$60,000 - $79,999",,Australia,Hybrid,Hybrid,Yes,Bachelor’s degree,Notion / ClickUp / AirTable / Coda / Miro / Canva,0,Man,No,"Sketchplanations, Visual Capitalist, The New Happy"
61,0,United States,Americas,USA,8,8,"$160,000 - $179,999",I am not compensated on an hourly or project basis,United States,Hybrid,Hybrid,No,Bachelor’s degree,,0,Man,Yes,Kevin and Ken Flerlage
62,0,Mexico,Americas,MEX,4,10,I am not compensated on a yearly basis,I am not compensated on an hourly or project basis,Mexico,Remote,Remote,Yes,Master’s degree,,1,Woman,Yes,Fernando Baptista
63,0,Germany,Europe,DEU,3,5,"$60,000 - $79,999",$75 - $99,Germany,Remote,Remote,Yes,Bachelor’s degree,,0,Man,Yes,Design
64,0,Canada,Americas,CAN,3,27,"$80,000 - $99,999",$60 - $74,Canada,Remote,Remote,No,Bachelor’s degree,SAP WEbi,1,Man,No,"Nael Shiab, Cole Knaflic"
65,0,United States,Americas,USA,10,25,"$140,000 - $159,999",$75 - $99,United States,Remote,Remote,Yes,Master’s degree,,1,Man,Yes,
66,0,Spain,Europe,ESP,10,12,"$60,000 - $79,999",$100 - $124,Spain,Remote,Remote,No,Master’s degree,,1,Woman,Yes,"Nadir Bremer, Alberto Cairo, Tizz Alocci"
67,0,France,Europe,FRA,10,16,"$40,000 - $59,999",$60 - $74,France,Remote,Hybrid,Yes,Master’s degree,,0,Man,Yes,Behance
68,0,United States,Americas,USA,8,10,"$80,000 - $99,999",,United States,Remote,Remote,No,Bachelor’s degree,,0,Woman,Yes,"The Pudding (blog), Cole Knaflic"
69,0,Mexico,Americas,MEX,2,3,"$40,000 - $59,999",I am not compensated on an hourly or project basis,Mexico,Remote,Remote,Yes,Master’s degree,,1,Man,No,"Cole Knaflick, Stephen Few"
70,0,United States,Americas,USA,18,20,I am not compensated on a yearly basis,$175 - $199,United States,Remote,Remote,No,Bachelor’s degree,"Seaborn, Matplotlib, Threejs, Keynote",0,Man,Yes,"Jessica Hullman, Steven Franconeri, Cindy Xiong, Alli Torban, Jon Schwabish, Nadieh Bremer, Federica Fragapane"
71,0,Mexico,Americas,MEX,12,5,"$20,000 - $39,999",,Mexico,Remote,Remote,No,Doctoral degree,"Bokeh, matplotlib",0,Man,Yes,"Giorgia Lupi, Alberto Cairo, Enrico Bertini, Nadieh Bremer, Federica Fragapane, Jaime Serra. Ali Torban, Elijah Meeks"
72,0,United States,Americas,USA,2,25,"$140,000 - $159,999",,United States,Remote,Remote,Yes,Doctoral degree,,0,Woman,Yes,"Stephanie Evergreen, Nathan Yau, Jonathan Schwabish"
73,0,United States,Americas,USA,4,8,"$60,000 - $79,999",I am not compensated on an hourly or project basis,United States,Hybrid,Hybrid,No,Master’s degree,,0,Woman,No,"Stephanie Evergreen, Ann Emery, John Schwabish"
74,0,United States,Americas,USA,3,8,"$60,000 - $79,999",I am not compensated on an hourly or project basis,United States,On site,On site,Yes,Master’s degree,,0,Woman,Yes,Stephanie Evergreen
75,0,United States,Americas,USA,13,13,"$120,000 - $139,999",,United States,On site,Hybrid,No,Bachelor’s degree,,0,Man,Yes,"Cairo, Andy Kirk, Cole Knaflic, Schwabbish, Lisa Charlotte Muth, Frederica Fragapane, nathan yau"
76,0,United States,Americas,USA,5,25,"$100,000 - $119,999",I am not compensated on an hourly or project basis,United States,On site,Hybrid,No,Master’s degree,,0,Woman,Yes,"Federica Fragapane, Sonja Kuijpers, Stefanie Posavec"
77,0,United States,Americas,USA,10,20,I am not compensated on a yearly basis,$45 - $59,United States,Remote,Remote,Yes,Master’s degree,Unity,0,Woman,Yes,"Mike Pell, Ray Vella, Jonathon Schwabish, Cole Nussbaumer Knaflic, Toan Hoang"
78,0,United States,Americas,USA,5,31,"$100,000 - $119,999",,United States,Remote,Hybrid,No,Master’s degree,,0,Man,,whoever google pulls up for the need of the day
79,0,United States,Americas,USA,3,10,"$60,000 - $79,999",I am not compensated on an hourly or project basis,United States,Remote,Remote,No,Master’s degree,Ceros,0,Man,Yes,
80,0,United States,Americas,USA,3,2,"$60,000 - $79,999",,United States,Remote,Remote,Yes,Bachelor’s degree,,1,Woman,Yes,Federica Fragapane
81,0,United States,Americas,USA,5,13,"$140,000 - $159,999",,United States,Hybrid,Hybrid,Yes,Bachelor’s degree,inkscape,0,Woman,Yes,"Nadieh Bremer, Nathan Yau, Tony Yu"
82,0,United States,Americas,USA,8,31,"$100,000 - $119,999",,United States,Remote,Hybrid,Yes,Master’s degree,,0,Man,No,Chart Chat hosts
83,0,United States,Americas,USA,0,0,"$60,000 - $79,999",$30 - $44,United States,Remote,Remote,No,Master’s degree,SlicerDicer,0,Woman,Yes,
84,0,France,Europe,FRA,15,22,"$120,000 - $139,999",,France,Hybrid,Hybrid,Yes,Master’s degree,,1,Man,No,"Chart Chat, Tableau Hall of Fame, Steve W's books, Visual Capitalist, The Economist, tableau conferences"
85,0,United States,Americas,USA,5,20,"$80,000 - $99,999",,United States,Remote,Remote,No,Master’s degree,,1,Woman,Yes,"Stephanie Evergreen, Cole Nussbaumer Knaflic, Stefanie Posavec, Giorgia Lupi, Steve Wexler, Randy Krum, Ben Jones, Ryan Sleepr"
86,0,Australia,Oceania,AUS,4,19,"$100,000 - $119,999",,Australia,Remote,Remote,No,Master’s degree,,1,Man,Yes,"Kerry Kolosko, Daniel Marsh Patrick, Cole Klafnic, 3 authors of the big book of dashboards (the tableau guys I forgot their name)"
87,0,India,Asia,IND,3,3,I am not compensated on a yearly basis,$45 - $59,India,Remote,Hybrid,Yes,Master’s degree,,0,Woman,Yes,"Hans Rosling, Aaron Koblin, Alvaro Valino"
88,0,Brazil,Americas,BRA,4,16,"$20,000 - $39,999",I am not compensated on an hourly or project basis,Brazil,Hybrid,Hybrid,No,Master’s degree,Zoho Analytics,1,Woman,Yes,"Hans Rosling, Cole Knaflic"
89,0,United States,Americas,USA,10,20,"$100,000 - $119,999",I am not compensated on an hourly or project basis,United States,On site,Hybrid,No,Doctoral degree,piktochart,0,Woman,Yes,"Stephanie Evergreen, Ann Emery, David Keyes, Jon Schwabish"
90,0,United States,Americas,USA,5,14,"$80,000 - $99,999",,United States,Remote,Remote,Yes,Bachelor’s degree,everviz,0,Woman,Yes,Lisa Charlotte Muth; my manager
91,0,Norway,Europe,NOR,1,6,"$40,000 - $59,999",I am not compensated on an hourly or project basis,Norway,Hybrid,On site,No,Master’s degree,,1,Woman,No,"Bill Shander, Jonathan Schwabish, Severino Ribecca, Guyinacube"
92,0,United States,Americas,USA,5,8,"$80,000 - $99,999",I am not compensated on an hourly or project basis,United States,Remote,Hybrid,No,Master’s degree,,0,Woman,,"Giorgia Lupi, Georgios Karamanis, Andrew Mollica, Nami Sumida, Andrew Ba Tran, John Nelson, Daniel P. Huffman, Amelia Wattenberger, Alberto Cairo"
93,0,Canada,Americas,CAN,6,12,"$60,000 - $79,999",,Canada,Hybrid,Hybrid,No,Master’s degree,,1,Woman,No,"Cole Nussbaumer Knaflic, Kevin and Ken Flerlage, Andy Kriebel, Chimdi Nwoso, Nadieh Bremer"
94,0,United States,Americas,USA,4,6,"$80,000 - $99,999",,United States,Hybrid,Hybrid,Yes,Master’s degree,,0,Woman,Yes,Nathan Yau
95,0,United States,Americas,USA,4,20,"$40,000 - $59,999",,United States,Hybrid,Hybrid,No,Master’s degree,,0,Woman,Yes,"You, Storytelling in Data Viz, several zoo annual reports, etc."
96,0,United States,Americas,USA,1,15,"$140,000 - $159,999",,United States,Remote,Remote,No,Bachelor’s degree,,0,Woman,Yes,Amelia wattenberger
97,0,Canada,Americas,CAN,4,6,"$40,000 - $59,999",,Canada,Remote,Hybrid,Yes,Master’s degree,,1,Man,Yes,"other government organizations, non-profits, UN"
98,0,Romania,Europe,ROU,3,9,"$20,000 - $39,999",,Romania,Hybrid,Hybrid,No,Master’s degree,Recharts library (React),1,Man,Yes,
99,0,Germany,Europe,DEU,12,12,"$80,000 - $99,999",,Germany,Remote,Hybrid,Yes,Master’s degree,,1,Woman,Yes,"Moritz Stefaner, Giorgia Lupi"
100,0,Finland,Europe,FIN,4,6,"$40,000 - $59,999",,Finland,Hybrid,Hybrid,No,Master’s degree,,1,Man,Yes,"Flerlage twins, Andy Kriebel, Jonathan Drummey, Keith Helfrich"
101,0,Austria,Europe,AUT,10,15,"$60,000 - $79,999",$30 - $44,Austria,Hybrid,Remote,Yes,Master’s degree,SAP _Analytics Cloud,1,Man,Yes,"Cole Nussbaumer Knafflic, Stephen Few, Edward Tuftee, Alberto Cairo, Rolf Hichert"
102,0,France,Europe,FRA,2,17,"$40,000 - $59,999",,France,Remote,Remote,No,Master’s degree,,1,Woman,Yes,"Nadieh Bremer, Mona Chalabi, Shirley Wu, Eva Murray, Kevin Wee, CJ Mayes, Mike Bostock, Jacques Bertin, Cole Nussbaumer-Knaflic"
103,0,Germany,Europe,DEU,2,9,"$80,000 - $99,999",,Germany,Hybrid,Hybrid,No,Master’s degree,,0,Man,Yes,"Moritz stefaner, schwabisch, scherer"
104,0,United States,Americas,USA,12,27,"$140,000 - $159,999",,United States,Hybrid,Hybrid,No,Doctoral degree,,0,Man,No,"Will Perkins, Dawn Harrington, Andy Cotgreave, Larry Silverstein"
105,0,United Kingdom,Europe,GBR,7,7,"$60,000 - $79,999",,United Kingdom,Hybrid,Remote,No,Master’s degree,,1,Man,Yes,"Andy Kriebel, Tableau Public, LinkedIn"
106,0,United States,Americas,USA,10,15,"$100,000 - $119,999",I am not compensated on an hourly or project basis,United States,Remote,Remote,No,Doctoral degree,,0,Woman,No,"Stephanie Evergreen, Ann K. Emery, Cole Knaflic, Nick Visscher, Jon Schwabish"
107,0,Lithuania,Europe,LTU,5,12,"$20,000 - $39,999",,Lithuania,Hybrid,Hybrid,No,Bachelor’s degree,,0,Woman,Yes,"Books, visuals at internet"
108,0,Panama,Americas,PAN,1,1,"$10,000 - $19,999",Less than $15,Panama,On site,Remote,Yes,Bachelor’s degree,,0,Man,No,webpages and blogs
109,0,United States,Americas,USA,5,10,"$120,000 - $139,999",I am not compensated on an hourly or project basis,United States,On site,Hybrid,No,Bachelor’s degree,,0,Man,No,Cole Nussbaumer Knaflic
110,0,United States,Americas,USA,10,18,"$100,000 - $119,999",,United States,Hybrid,Hybrid,No,Master’s degree,,0,Man,No,Stephanie Evergreen and Edward Tufte
111,0,United Kingdom,Europe,GBR,11,11,"$60,000 - $79,999",I am not compensated on an hourly or project basis,United Kingdom,Hybrid,Remote,No,Master’s degree,,0,Woman,No,"Alberto Cairo, David mccandless, Andy kirk"
112,0,United States,Americas,USA,5,5,"$100,000 - $119,999",I am not compensated on an hourly or project basis,United States,Remote,Remote,No,Bachelor’s degree,,0,Woman,No,"Steve Wexler, The Flerlage Twins"
113,0,India,Asia,IND,2,14,"$20,000 - $39,999",$100 - $124,India,Remote,Remote,Yes,Bachelor’s degree,,0,Man,Yes,"Curran Keller, Mike Bostock, Fil @ Observable"
114,0,Australia,Oceania,AUS,8,5,"$60,000 - $79,999",$45 - $59,Australia,Remote,Hybrid,No,Master’s degree,,0,Man,Yes,Scrollytelling articles
115,0,United States,Americas,USA,11,17,"$100,000 - $119,999",,United States,Hybrid,Remote,Yes,Master’s degree,,1,Woman,Yes,"STEVE WEXLER (he is my Madona), Tableau Community and Various Groups, DVS, Youtube-various trainings, InterWorks trainings"
116,0,United States,Americas,USA,14,26,"$240,000 or more",I am not compensated on an hourly or project basis,United States,Remote,Remote,No,Master’s degree,,0,Man,,"Tom McWright, Topi Tjukanov, Jeff Heer"
117,0,Kenya,Africa,KEN,8,13,"$10,000 - $19,999",I am not compensated on an hourly or project basis,Kenya,Remote,Remote,Yes,Master’s degree,,0,Woman,Yes,"Mona Chalabi, Outlier"
118,0,United States,Americas,USA,7,8,"$100,000 - $119,999",I am not compensated on an hourly or project basis,United States,Remote,Remote,Yes,Bachelor’s degree,CARTO (built on kepler.gl and deck.gl),0,Woman,Yes,
119,0,United States,Americas,USA,8,13,"$120,000 - $139,999",$100 - $124,United States,On site,Remote,No,Doctoral degree,,0,Man,Yes,"Mike Bostock, Edward Tufte, Philippe Riviere"
120,0,United States,Americas,USA,5,6,"$100,000 - $119,999",I am not compensated on an hourly or project basis,United States,Remote,Remote,No,Bachelor’s degree,,0,Woman,No,Storytelling with Data blog
121,0,Philippines,Asia,PHL,4,10,"Less than $10,000",I am not compensated on an hourly or project basis,Philippines,Remote,Remote,No,Bachelor’s degree,,0,Woman,Yes,"Cole Knaflic, Leila Gharani"
122,0,United Kingdom,Europe,GBR,2,3,"$40,000 - $59,999",,United Kingdom,Hybrid,Hybrid,No,Bachelor’s degree,Qlik Sense/SaaS / Astrato,0,Man,Yes,example : https://www.visualcapitalist.com/category/technology/
123,0,Canada,Americas,CAN,10,20,"$80,000 - $99,999",,Canada,Remote,Remote,Yes,Master’s degree,,0,Man,Yes,"Susie Lu, Frank Elavsky"
124,0,United States,Americas,USA,5,5,"$120,000 - $139,999",,United States,Remote,Remote,No,Bachelor’s degree,Hex,0,Woman,Yes,Cole Nussbaumer Knaflic
125,0,China,Asia,CHN,7,15,"$100,000 - $119,999",I am not compensated on an hourly or project basis,China,On site,Remote,Yes,Master’s degree,,1,Man,No,Lisa Charlotte Muth
126,0,United States,Americas,USA,10,15,"$120,000 - $139,999",,United States,Hybrid,On site,No,Master’s degree,,0,Man,No,"Wexler, Cotgreave, Coworkers"
127,0,United States,Americas,USA,20,31,"$100,000 - $119,999",,United States,Remote,Remote,No,Bachelor’s degree,,0,Man,,Cole
128,0,United States,Americas,USA,22,31,"$100,000 - $119,999",$45 - $59,United States,Hybrid,Hybrid,No,Doctoral degree,"SAS, JMP and viya",0,Woman,Yes,
129,0,United States,Americas,USA,5,7,"$120,000 - $139,999",I am not compensated on an hourly or project basis,United States,Hybrid,Hybrid,No,Bachelor’s degree,,0,Woman,,Alberto Cairo
130,0,United States,Americas,USA,6,7,"$100,000 - $119,999",I am not compensated on an hourly or project basis,United States,Hybrid,Hybrid,No,Master’s degree,R shiny,1,Woman,Yes,
131,0,United States,Americas,USA,20,25,"$140,000 - $159,999",,United States,Remote,Hybrid,No,Bachelor’s degree,,0,Man,No,"Nathan Yau, Georgia Lupi"
132,0,United States,Americas,USA,30,30,"$240,000 or more",,United States,Remote,Remote,No,Bachelor’s degree,,0,Man,Yes,"Steve Wexler, Cole"
133,0,United States,Americas,USA,7,13,"$100,000 - $119,999",,United States,Hybrid,Hybrid,No,Bachelor’s degree,,0,Man,Yes,"Nadia Bremer, Laurie Frick, Andy Kirk"
134,0,Indonesia,Asia,IDN,7,16,"$20,000 - $39,999",,Indonesia,Hybrid,Hybrid,Yes,Doctoral degree,,0,Man,Yes,"Federica Fragapane, Shirley Wu, Frank Elavsky, Shannon Mattern, Andy Kirk,"
135,0,United States,Americas,USA,10,30,"$240,000 or more",$125 - $149,United States,Hybrid,Hybrid,Yes,Bachelor’s degree,,0,Man,Yes,"Off-hand cause he has a newsletter, Nathan Yau, Author of Visual Cinnamon ... but many other other...just don't remember names."
136,0,United States,Americas,USA,10,31,"$120,000 - $139,999",,United States,Hybrid,Hybrid,No,Some college,,0,Woman,Yes,"Andy Kriebel, Flerlage Twins, Joshua Smith, Steve Wexler, Andy Cotgreave"
137,0,United Kingdom,Europe,GBR,6,7,"$60,000 - $79,999",,United Kingdom,Hybrid,Hybrid,No,Bachelor’s degree,,0,Woman,No,Flerlage twins
138,0,Brazil,Americas,BRA,8,10,"$60,000 - $79,999",I am not compensated on an hourly or project basis,Brazil,Remote,Hybrid,No,Master’s degree,Matter.js and “Vanilla” JavaScript,1,Man,No,"Alberto Cairo, Gurman Bhatia, Federica Fragapane, Rodrigo Menegat, Ikene Ijeoma, Fernanda Didini, Rodrigo Medeiros, Olga Lopes, Giorgia Lupi, etc"
139,0,United States,Americas,USA,15,18,"$100,000 - $119,999",,United States,Remote,Hybrid,No,Bachelor’s degree,,0,Man,No,"Stephen Few, Edward Tufte, Christopher Wagner"
140,0,United States,Americas,USA,16,24,"$80,000 - $99,999",,United States,Hybrid,Hybrid,No,Bachelor’s degree,,0,Man,No,sqlbelle
141,0,United States,Americas,USA,8,20,"$120,000 - $139,999",$60 - $74,United States,Remote,Remote,No,Some college,Flourish,0,Man,No,Bill Shander.
142,0,United States,Americas,USA,7,7,"$80,000 - $99,999",I am not compensated on an hourly or project basis,United States,Remote,Remote,No,Bachelor’s degree,,0,Woman,Yes,Stephanie Evergreen
143,0,Canada,Americas,CAN,7,20,"$80,000 - $99,999",$30 - $44,Canada,Remote,Remote,No,Bachelor’s degree,Streamlit,1,Man,Yes,"Alli Torban, Jennifer Rash, the Flerlage Twins, Alberto Cairo"
144,0,Norway,Europe,NOR,8,8,"$60,000 - $79,999",,Norway,Hybrid,Hybrid,Yes,Bachelor’s degree,,0,Man,Yes,"Alberto Cairo, Nadieh Bremer, John Burn-Murdoch, Sondre Nilsen, Torstein Ringnes, Lisa Charlotte Muth"
145,0,Spain,Europe,ESP,10,12,"$10,000 - $19,999",$15 - $29,Spain,Remote,Remote,Yes,Bachelor’s degree,,0,Woman,Yes,"I don't have a specific name, for me I obtain the inspiration while nature, textures, shapes, organic shape. Abstract artist or digital art."
146,0,Germany,Europe,DEU,5,10,"$60,000 - $79,999",$45 - $59,Germany,Remote,Hybrid,Yes,Master’s degree,,1,Woman,Yes,"Federica Fragapagne, Nadieh Bremer, Tim Rodenbröker, Patrik Hübner,"
147,1,Canada,Americas,CAN,2,20,I am not compensated on a yearly basis,$15 - $29,Canada,Hybrid,Hybrid,Yes,Master’s degree,,0,Self-described or Prefer not to say,Yes,
148,1,United States,Americas,USA,3,0,I am not compensated on a yearly basis,,United States,,On site,Yes,Master’s degree,,0,Man,Yes,"Tamara Munzner, Alberto Cairo, Shirley Wu, Connor Rothschild, Peter Beshai, Susie Lu, Halden Lin, Dominik Moritz, Alexander Lex, John Stasko, Chris Johnson, Cameron Yick, Amelia Wattenberger, Joe Hellerstein, Neal Agarwal"
149,0,Chile,Americas,CHL,5,18,I am not compensated on a yearly basis,I am not compensated on an hourly or project basis,Chile,Hybrid,Hybrid,No,Master’s degree,,0,Man,No,"books, gov info, studies from mktg, behance, web"
150,1,Mexico,Americas,MEX,2,8,I am not compensated on a yearly basis,I am not compensated on an hourly or project basis,Mexico,Remote,Remote,No,Master’s degree,Keynote,1,Woman,Yes,"Giorgia Lupi, Stefanie Posavec, DataCitron, Gabrielle Meritte, Alberto Cairo"
151,0,Canada,Americas,CAN,3,25,I am not compensated on a yearly basis,$100 - $124,Canada,Remote,Remote,No,Doctoral degree,,1,Woman,No,"Ann Emery, Stephanie Evergreen, Duarte"
152,0,Finland,Europe,FIN,5,8,"$20,000 - $39,999",I am not compensated on an hourly or project basis,Finland,Remote,Hybrid,Yes,Master’s degree,XD,1,Woman,Yes,
153,0,United States,Americas,USA,31,31,I am not compensated on a yearly basis,I am not compensated on an hourly or project basis,United States,Remote,Remote,No,Master’s degree,,0,Man,Yes,otto and marie; gerd; eadweard; alberto
154,0,Denmark,Europe,DNK,24,26,I am not compensated on a yearly basis,$45 - $59,Denmark,Remote,On site,Yes,Master’s degree,,1,Man,Yes,"Valerio Pellegrini, Giuseppe Sollazzo, Gaia Russo @EEA"
155,0,New Zealand,Oceania,NZL,8,20,,$60 - $74,New Zealand,Remote,Remote,No,Bachelor’s degree,,0,Man,Yes,"Chris McDowall, James Murdoch"
156,0,Canada,Americas,CAN,10,31,,$100 - $124,Canada,Remote,Hybrid,No,Master’s degree,,0,Woman,No,"You, Stephanie Evergreen"
157,0,United States,Americas,USA,7,30,"$10,000 - $19,999",$200 - $224,United States,Remote,Remote,No,Master’s degree,,0,Woman,Yes,Nathan Yau
158,0,United Kingdom,Europe,GBR,24,24,,$60 - $74,United Kingdom,Remote,Remote,Yes,Master’s degree,,0,Man,Yes,"Andy Kriebel (Tableau Tip Tuesday & Makeover Monday), Lorna Brown (Tableau Tip Tuesday)"
159,0,United Kingdom,Europe,GBR,13,22,I am not compensated on a yearly basis,$75 - $99,United Kingdom,Remote,Remote,Yes,Master’s degree,,0,Woman,No,McCandless
160,0,United Kingdom,Europe,GBR,6,25,"$80,000 - $99,999",,United Kingdom,Hybrid,Hybrid,No,Bachelor’s degree,Domo,0,Man,No,"W.E Dubois, Valentina D'Efilippo, David McCandless, Giorigia Lupi"
161,0,Canada,Americas,CAN,25,30,I am not compensated on a yearly basis,I am not compensated on an hourly or project basis,Canada,Remote,Remote,No,Some college,,1,Man,Yes,"Alberto Cairo, Lisa Muth, Xan Gregg, Brent Dykes, Steve Wexler, Ben Jones"
162,0,United States,Americas,USA,31,31,,$300 or more,United States,Remote,On site,No,Some college,,0,Man,Yes,Andy Kreibel
163,0,Mexico,Americas,MEX,5,10,"Less than $10,000",Less than $15,Mexico,On site,Remote,Yes,Some college,,0,Man,No,
164,0,Russia,Europe,RUS,6,3,"Less than $10,000",,Russia,Remote,Remote,Yes,Master’s degree,,0,Woman,No,"Alexander Bogachev, Artem Ivolgin, Anton Mizinov"
165,0,India,Asia,IND,6,31,"$20,000 - $39,999",,India,On site,Remote,Yes,Master’s degree,,1,Man,No,Cedric Scherer; Thomas Lin Pedersen; Danielle Navarro; Martijn Tennekes; Tim Appelhans; Allison Hill; Robin Lovelace; Jakub Nowosad; Andrew Heiss; Emi Tanaka;
166,0,United Kingdom,Europe,GBR,10,20,"$100,000 - $119,999",,United Kingdom,Hybrid,Remote,Yes,Doctoral degree,Jamovi,1,Man,Yes,
167,0,United States,Americas,USA,19,15,"$60,000 - $79,999",I am not compensated on an hourly or project basis,United States,Hybrid,Hybrid,No,Doctoral degree,Matlab,0,Woman,No,NASA
168,0,United States,Americas,USA,9,15,"$100,000 - $119,999",,United States,On site,On site,No,Master’s degree,"GeoDa, CARTO",1,Man,Yes,"Lauren F. Klein, Catherine D'Ignazio, Mona Chalabi, Stefanie Posavec, Giorgia Lupi, Alberto Cairo, WEB Du Bois, Florence Nightingale, John Snow, Charles Minard, Mark Lombardi, Linda Vallejo, Omar Ureta, Yoh Kawano, Ben Welsh, so many more!"
169,0,Spain,Europe,ESP,8,25,"$20,000 - $39,999",I am not compensated on an hourly or project basis,Spain,On site,On site,Yes,Doctoral degree,,0,Man,No,cheomei Chen
170,0,United States,Americas,USA,10,14,"$40,000 - $59,999",,United States,On site,Hybrid,No,Master’s degree,,0,Man,Yes,"John Nelson (ESRI), Nathan Yau (Flowing Data)"
171,0,Russia,Europe,RUS,4,17,"$10,000 - $19,999",$15 - $29,Russia,Remote,Hybrid,No,Master’s degree,,1,Woman,Yes,"Alexander Bogachev, Alex Kolokolov, Alberto Cairo, Federica Fragapane, Giorgia Lupi, Cole Knaflik, Kirell Benzi"
172,0,Switzerland,Europe,CHE,3,6,"$100,000 - $119,999",$45 - $59,Switzerland,Remote,Hybrid,No,Master’s degree,Inkscape,1,Man,Yes,"Alli Torban, Cedric Scherer, Tobias Stalder, Yan Holtz"
173,0,India,Asia,IND,6,6,"$10,000 - $19,999",I am not compensated on an hourly or project basis,India,Hybrid,Hybrid,Yes,Bachelor’s degree,,1,Man,Yes,RStats and DVS communities across mediums
174,0,United States,Americas,USA,4,13,"$140,000 - $159,999",I am not compensated on an hourly or project basis,United States,Hybrid,Hybrid,No,Master’s degree,,0,Man,Yes,"Mike Bostock, Nadie Bremer"
175,0,United States,Americas,USA,3,9,"$60,000 - $79,999",I am not compensated on an hourly or project basis,United States,Remote,Remote,Yes,Master’s degree,,0,Woman,No,"Ann Emory, Statistica"
176,0,United Kingdom,Europe,GBR,15,25,"$40,000 - $59,999",I am not compensated on an hourly or project basis,United Kingdom,Hybrid,Hybrid,Yes,Doctoral degree,,1,Woman,No,
177,0,United States,Americas,USA,5,10,"$100,000 - $119,999",,United States,,Remote,No,Doctoral degree,,0,Woman,,"Stephanie Evergreen, Flerlage Twins, Chart Chat (Jeffrey Shaffer, Steve Wexler, Amanda Makulec, Andy Cotgreave) and Tableau Public in general"
178,0,United States,Americas,USA,5,10,"$60,000 - $79,999",,United States,Remote,Hybrid,Yes,Master’s degree,,0,Woman,Yes,"Newsletters, magazines, others sharing their work on LinkedIn"
179,0,United States,Americas,USA,6,11,"$60,000 - $79,999",I am not compensated on an hourly or project basis,United States,Hybrid,Remote,Yes,Master’s degree,Lucidchart,0,Woman,No,"Stephanie Evergreen, Amelia Kohm"
180,0,Sweden,Europe,SWE,16,20,"$60,000 - $79,999",$125 - $149,Sweden,Hybrid,Hybrid,Yes,Master’s degree,,1,Woman,No,
181,0,United States,Americas,USA,4,2,"$60,000 - $79,999",$100 - $124,United States,Hybrid,Hybrid,No,Master’s degree,,1,Man,,Tufte
182,0,United States,Americas,USA,8,10,"$160,000 - $179,999",,United States,Remote,Remote,No,Master’s degree,,0,Woman,Yes,"Lisa Charlotte Muth, Cole Knafflic, Judit Bekker, Ivett Kovacs, Tamas Varga, Rody Zachovich, Samo Drole"
183,0,New Zealand,Oceania,NZL,11,17,,$75 - $99,New Zealand,Remote,Remote,Yes,Master’s degree,,1,Woman,Yes,"Alli Torban, Alberto Cairo, Ben Jones, Stephanie Posavec, Giorgia Lupi, Tableau Iron Viz authors, SQLBi (for powerbi stuff)"
184,0,United States,Americas,USA,3,15,"$40,000 - $59,999",,United States,Remote,Hybrid,No,Master’s degree,InDesign,1,Self-described or Prefer not to say,Yes,Ann Emory. Sometimes Stephanie Evergreen but less so.
185,0,United States,Americas,USA,3,26,"$100,000 - $119,999",I am not compensated on an hourly or project basis,United States,Remote,Remote,No,Master’s degree,,0,Woman,Yes,"Kevin Flerlage, Ken Flerlage, Nathan Yau"
186,0,United States,Americas,USA,3,3,"$100,000 - $119,999",I am not compensated on an hourly or project basis,United States,Remote,Hybrid,No,Master’s degree,,1,Woman,Yes,"Olivia Vane, Florent Lavergne etc."
187,0,Brazil,Americas,BRA,4,15,"$20,000 - $39,999",I am not compensated on an hourly or project basis,Brazil,Hybrid,Hybrid,No,Bachelor’s degree,,1,Man,Yes,"Giorgia Lupi, Rodolfo Almeida, Kanit Ham"
188,0,United States,Americas,USA,9,20,"$80,000 - $99,999",$150 - $174,United States,Hybrid,Hybrid,Yes,Master’s degree,,0,Man,Yes,"Ali Torbin, Stephanie Evergreen, Ann K Emery, Storytelling w Data, Nolan Haims, Echo Rivera"
189,1,Canada,Americas,CAN,10,19,"$60,000 - $79,999",,Canada,Hybrid,Hybrid,Yes,Bachelor’s degree,,0,Woman,Yes,
190,1,United States,Americas,USA,6,11,"$60,000 - $79,999",$45 - $59,United States,Remote,Remote,Yes,Master’s degree,,1,Man,Yes,Tufte
191,1,United States,Americas,USA,2,6,"$80,000 - $99,999",,United States,Remote,Hybrid,Yes,Bachelor’s degree,,0,Woman,Yes,"Alli Torban, Maggie Shi, Giorgi Lupi"
192,0,United States,Americas,USA,9,12,,$200 - $224,United States,Remote,Remote,No,Master’s degree,,0,Woman,Yes,"Alberto Cairo, Alyssa Fowers, Jess Fong, Giorgia Luipi, Stephanie Evergreen"
193,0,United States,Americas,USA,24,20,"$200,000 - $219,999",I am not compensated on an hourly or project basis,United States,Remote,Remote,Yes,Doctoral degree,"SAS, Stata",0,Man,Yes,
194,0,Canada,Americas,CAN,4,6,"$20,000 - $39,999",$15 - $29,Canada,Remote,Hybrid,Yes,Bachelor’s degree,,0,Man,Yes,"Looking at other people's designs, learning from experts, taking ideas from imagination"
195,1,Australia,Oceania,AUS,14,14,"$60,000 - $79,999",,Australia,Hybrid,Hybrid,No,Bachelor’s degree,,0,Woman,No,"Storytelling with Data on LinkedIn, Stephanie Evergreen"
196,0,United States,Americas,USA,4,8,"$60,000 - $79,999",,United States,Remote,Remote,Yes,Doctoral degree,,0,Man,Yes,
197,0,United States,Americas,USA,8,10,I am not compensated on a yearly basis,$45 - $59,United States,Remote,Hybrid,No,Associate’s degree,,0,Man,Yes,
198,0,United States,Americas,USA,6,22,"$180,000 - $199,999",$150 - $174,United States,Remote,Remote,Yes,Bachelor’s degree,,0,Woman,Yes,"Sara Soueidan, Curran Keller, David Bumbeishvili, Amelia Wattenberger, Shirley Wu"
199,0,United Kingdom,Europe,GBR,5,5,"$60,000 - $79,999",,United Kingdom,Hybrid,Hybrid,No,Master’s degree,,0,Man,Yes,"Information is beautiful, nightingale"
200,0,United States,Americas,USA,23,27,"$140,000 - $159,999",,United States,Remote,Remote,No,Master’s degree,,0,Man,Yes,"Edward Tufte, Allen Hillery, WEB duBois, Brent Dykes, Florence Nightingale"
201,0,United States,Americas,USA,8,12,"$160,000 - $179,999",$100 - $124,United States,Remote,Remote,No,Master’s degree,proprietary web data visualization platform,0,Man,Yes,
202,0,Uruguay,Americas,URY,4,20,"$40,000 - $59,999",,Uruguay,Remote,Remote,No,Bachelor’s degree,Databricks,1,Man,Yes,"Tufte, Few, Meeks..."
203,0,Mexico,Americas,MEX,6,8,"$140,000 - $159,999",I am not compensated on an hourly or project basis,Mexico,On site,Remote,Yes,Master’s degree,,0,Man,,
204,0,Ireland,Europe,IRL,3,19,"$80,000 - $99,999",,Ireland,Hybrid,Remote,Yes,Master’s degree,,0,Woman,Yes,Andy Kirk
205,0,United States,Americas,USA,5,8,"$220,000 - $239,999",,United States,Hybrid,Hybrid,Yes,Master’s degree,,0,Man,,"Tufte, Wilkinson, Cairo, knaflic, munzer"
206,0,United States,Americas,USA,3,16,"$40,000 - $59,999",,United States,Hybrid,Remote,Yes,Master’s degree,,0,Woman,,"Stephanie Posavec, Giorgia Lupi, David McCandless, Mona Chalabi"
207,0,United Kingdom,Europe,GBR,2,1,"$20,000 - $39,999",,United Kingdom,Hybrid,Remote,No,Master’s degree,,1,Woman,Yes,"Allie Turbin, Andy Kirk, Nightingale writers"
208,0,United States,Americas,USA,5,10,"$160,000 - $179,999",,United States,Remote,Remote,No,Master’s degree,Inkscape,0,Man,No,"Kevin Flerlage, Ken Flerlage"
209,0,China,Asia,CHN,3,11,"$40,000 - $59,999",,China,Hybrid,Remote,No,Bachelor’s degree,,1,Woman,No,
210,0,Austria,Europe,AUT,2,5,"$10,000 - $19,999",,Austria,On site,Remote,Yes,Master’s degree,,1,Man,No,"Deepak Kumar, Mike Bostock"
211,0,United States,Americas,USA,4,10,"$40,000 - $59,999",,United States,Remote,Remote,Yes,Master’s degree,Canva,1,Woman,No,"Steve Wexler, Ann Emery, Stephanie Evergreen"
212,0,United States,Americas,USA,9,13,"$80,000 - $99,999",,United States,Remote,Remote,No,Master’s degree,,0,Woman,Yes,"Stephanie Evergreen, Bill Shander"
213,0,Canada,Americas,CAN,3,4,"$60,000 - $79,999",,Canada,Remote,Remote,No,Master’s degree,Hex,0,Woman,Yes,"Projects + behind the scenes of projects, discussions on though processes"
214,0,Australia,Oceania,AUS,10,27,"$120,000 - $139,999",,Australia,Hybrid,Hybrid,No,Master’s degree,,0,Woman,Yes,Relying less on individuals it seems this year. I see things on twitter that are interesting but no one individual stands out
215,0,United States,Americas,USA,4,10,"$80,000 - $99,999",,United States,Remote,Remote,Yes,Master’s degree,,0,Woman,Yes,"Federica Fragapane, Alberto Cairo, The Tableau Twins, Toan Hoang"
216,0,United Kingdom,Europe,GBR,10,25,"$80,000 - $99,999",,United Kingdom,Remote,Remote,No,Doctoral degree,,0,Man,No,I follow a lot of Tableau people on Twitter.
217,0,United States,Americas,USA,4,6,"$60,000 - $79,999",,United States,Remote,Remote,Yes,Bachelor’s degree,,0,Woman,No,Ann emery
218,0,United States,Americas,USA,6,7,"$60,000 - $79,999",,United States,Remote,Remote,Yes,Master’s degree,,0,Woman,No,"Ann K Emery, Stephanie Evergreen"
219,0,South Africa,Africa,ZAF,20,25,"$60,000 - $79,999",,South Africa,Hybrid,Remote,Yes,Master’s degree,,0,Woman,Yes,"Google, online forums, free training webinars"
220,0,United States,Americas,USA,5,30,"$100,000 - $119,999",,United States,Hybrid,Remote,Yes,Bachelor’s degree,,0,Man,Yes,I love the DVS community and try to visit Slack every day to be inspired.
221,0,United States,Americas,USA,5,23,"$120,000 - $139,999",,United States,Remote,On site,No,Master’s degree,Alteryx,0,Man,Yes,Coworkers
222,0,United States,Americas,USA,2,18,"$40,000 - $59,999",,United States,On site,Hybrid,No,Associate’s degree,IBM Cognos,0,Man,No,Cole Knaflic
223,0,United States,Americas,USA,5,5,"$60,000 - $79,999",,United States,Remote,Remote,Yes,Bachelor’s degree,,0,Self-described or Prefer not to say,Yes,"Giorgia Lupi, Matt Daniels"
224,0,South Korea,Asia,PRK,5,7,"$60,000 - $79,999",,South Korea,Hybrid,Hybrid,Yes,Master’s degree,"SVG, deck.gl",1,Woman,No,
225,0,Brazil,Americas,BRA,22,31,"$20,000 - $39,999",,Brazil,Hybrid,Hybrid,Yes,Master’s degree,minitab,0,Woman,Yes,Bill Shander
226,0,Brazil,Americas,BRA,3,7,"$10,000 - $19,999",,Brazil,Hybrid,Remote,Yes,Bachelor’s degree,,1,Man,No,"Mathew Daniels, Giorgia Lupi, Letícia Pozza"
227,0,Canada,Americas,CAN,20,10,"$80,000 - $99,999",,Canada,Remote,Remote,Yes,Doctoral degree,,0,Woman,,examples whereever i can find them
228,0,United States,Americas,USA,0,10,"$60,000 - $79,999",,United States,On site,On site,No,Doctoral degree,,0,Woman,Yes,
229,0,United States,Americas,USA,3,19,"$60,000 - $79,999",,United States,Remote,Remote,No,Master’s degree,,0,Man,Yes,"No specific names stick out, but I have a professional twitter where I follow a ton of folks, including journalists, working in dataviz"
230,0,New Zealand,Oceania,NZL,7,14,"$40,000 - $59,999",,New Zealand,Remote,Remote,No,Master’s degree,,0,Man,Yes,"Stephanie Evergreen, Harkanwal Singh, Tanya Shapiro"
231,0,United States,Americas,USA,8,21,"$240,000 or more",,United States,Remote,Remote,No,Doctoral degree,,0,Man,Yes,"Stephanie Evergreen, Richard Brath, Robert Kosara, Cole Nussbaumer Knaflic"
232,0,United States,Americas,USA,2,10,"$60,000 - $79,999",I am not compensated on an hourly or project basis,United States,Hybrid,Remote,Yes,Master’s degree,,1,Woman,,Steve Wexler
233,0,United States,Americas,USA,0,16,"$40,000 - $59,999",,United States,Hybrid,Hybrid,No,Master’s degree,,0,Woman,No,Ann Emery
234,0,Germany,Europe,DEU,3,3,"$60,000 - $79,999",,Germany,Remote,Remote,No,Master’s degree,,1,Man,Yes,"Enrico Bertini, Nathan Yau, Edward Tufte, Yan Holtz"
235,0,United States,Americas,USA,3,5,"$60,000 - $79,999",,United States,Remote,Remote,No,Master’s degree,,0,Self-described or Prefer not to say,Yes,"DVS, datastorytelling, Ann Emery - depict data studios, Steve Wexler - data revelations, CTData"
236,0,United States,Americas,USA,1,30,"$80,000 - $99,999",,United States,Remote,Remote,No,Master’s degree,,0,Woman,Yes,Stephanie Evergreen & Stefanie Posavec
237,0,United States,Americas,USA,5,13,"$80,000 - $99,999",,United States,Remote,Remote,No,Master’s degree,,0,Man,Yes,Liz Fosslien
238,0,United States,Americas,USA,4,17,"$120,000 - $139,999",,United States,Remote,Remote,No,Master’s degree,,1,Woman,No,"Ann Emery, Stephanie Evergreen, Nicole Bowman (on indigenous data gathering and presenting), NYTimes, The Economist Magazine"
239,0,United States,Americas,USA,7,8,"$160,000 - $179,999",,United States,Remote,Hybrid,No,Master’s degree,,1,Woman,Yes,"Nathan Yau, Fathom Design, Nick Rougeux, Moritz Stephaner"
240,0,United Kingdom,Europe,GBR,3,2,"$40,000 - $59,999",,United Kingdom,Hybrid,On site,No,Master’s degree,,1,Woman,Yes,"Alberto Cairo, Giorgia Lupi, Federica Fragapane"
241,0,United Kingdom,Europe,GBR,0,10,"$40,000 - $59,999",I am not compensated on an hourly or project basis,United Kingdom,Hybrid,Remote,Yes,Master’s degree,,1,Woman,No,"Twitter, portfolios, newsletters etc..."
242,0,United Kingdom,Europe,GBR,25,31,"$40,000 - $59,999",,United Kingdom,On site,Hybrid,Yes,Master’s degree,,0,Woman,No,"ann k emery, mynda treacy, leila gharani"
243,0,United Kingdom,Europe,GBR,5,12,"$20,000 - $39,999",,United Kingdom,Remote,Remote,Yes,Bachelor’s degree,,0,Man,Yes,"I have 0 inspiration, my work situation is not at all positive"
244,0,United Kingdom,Europe,GBR,3,31,"$60,000 - $79,999",,United Kingdom,Remote,Remote,No,Master’s degree,,1,Woman,No,Many people I follow in LinkedIn
245,0,France,Europe,FRA,2,3,"$40,000 - $59,999",,France,On site,On site,No,Master’s degree,,0,Woman,No,geogia lupi
246,0,United States,Americas,USA,14,17,"$140,000 - $159,999",,United States,Remote,Remote,No,Master’s degree,,0,Woman,Yes,"The Flerlage Twins, Lindsay Betzendahl, Rody Zachovich"
247,0,United States,Americas,USA,6,23,"$80,000 - $99,999",,United States,Remote,Remote,No,Master’s degree,Sanketmatic,0,Woman,No,Evergreen Academy
248,0,Bosnia and Herzegovina,Europe,BIH,10,12,"Less than $10,000",Less than $15,Bosnia and Herzegovina,On site,On site,Yes,Bachelor’s degree,,1,Man,No,
249,0,New Zealand,Oceania,NZL,3,20,"$60,000 - $79,999",,New Zealand,Remote,Hybrid,No,Bachelor’s degree,Shiny,0,Woman,Yes,Bill Shander
250,0,United States,Americas,USA,12,20,"$140,000 - $159,999",I am not compensated on an hourly or project basis,United States,Hybrid,Remote,No,Master’s degree,,0,Man,No,"Tim Meko, Alyssa Fowers"
251,0,United States,Americas,USA,5,9,"$60,000 - $79,999",,United States,Remote,Hybrid,Yes,Bachelor’s degree,,0,Man,No,"Authors at SWD,"
252,0,Ecuador,Americas,ECU,8,15,"$20,000 - $39,999",,Ecuador,On site,Hybrid,No,Master’s degree,,1,Man,No,Federica fragapane
253,0,Australia,Oceania,AUS,4,10,"$80,000 - $99,999",,Australia,Hybrid,Hybrid,Yes,Bachelor’s degree,,0,Man,No,Julia Silge
254,0,United States,Americas,USA,10,30,"$100,000 - $119,999",,United States,Remote,Remote,No,Master’s degree,,0,Woman,No,Evergreen Academy
255,0,United States,Americas,USA,8,22,"$80,000 - $99,999",,United States,Remote,Hybrid,No,Master’s degree,Sql server reporting services,0,Man,Yes,
256,0,United States,Americas,USA,12,14,"$80,000 - $99,999",,United States,Remote,Remote,Yes,Master’s degree,SAS,0,Woman,No,"Stephanie Evergreen, Tableau Viz of the da"
257,0,Ireland,Europe,IRL,20,30,"$60,000 - $79,999",,Ireland,On site,On site,No,Master’s degree,,0,Man,No,"I wouldn't necessarily know the name of the people who provide inspiration. Nearly everything I listen to or watch is an influence. For example the opening sequence to TV shows are often filled with new interesting graphics e.g The Good Lord Bird ; Game of Thrones; White Lotus ; Severance etc. Most books I pick up has some interesting graphic, typeface or just the composition of the front & back cover."
258,0,United States,Americas,USA,9,10,"$60,000 - $79,999",,United States,Hybrid,Hybrid,No,Master’s degree,,0,Woman,No,"Andy Cotgreave, Andy Kriebel, Jeff Shaffer, Eva Murray"
259,0,United States,Americas,USA,10,12,"$60,000 - $79,999",I am not compensated on an hourly or project basis,United States,Hybrid,Remote,Yes,Master’s degree,,0,Woman,,Steve Wexler and Stephanie Evergreen
260,0,United States,Americas,USA,5,19,"$100,000 - $119,999",,United States,Hybrid,Hybrid,No,Bachelor’s degree,,0,Woman,No,"Steve wexler, cole knasser, guy in a cube"
261,0,China,Asia,CHN,2,7,"$60,000 - $79,999",I am not compensated on an hourly or project basis,China,Hybrid,Remote,No,Bachelor’s degree,,1,Woman,Yes,"Cole Nussbaumer Knaflic, Stephanie Evergreen,Nancy Duarte,"
262,0,South Africa,Africa,ZAF,3,14,"$60,000 - $79,999",,South Africa,Remote,Remote,Yes,Bachelor’s degree,,0,Man,Yes,"Bas (datatraining.io), Hellen Wall (LinkedIn), Ruth Pozuelo Martinez (YouTuber - Curbal), Adam Saxton and Patrick LeBlanc (YouTubers - Guy in a Cube)"
263,0,United States,Americas,USA,6,13,"$60,000 - $79,999",,United States,Remote,Remote,No,Master’s degree,,1,Woman,No,Ann K. Emery
264,0,Sri Lanka,Asia,LKA,2,2,"Less than $10,000",I am not compensated on an hourly or project basis,Sri Lanka,Remote,On site,No,Bachelor’s degree,"Echarts, G2.js",1,Man,Yes,
265,0,United States,Americas,USA,7,19,"$120,000 - $139,999",,United States,On site,Hybrid,Yes,Master’s degree,,0,Woman,Yes,"The Chart Chat crew (Steve, Amanda, Andy, Jeff)"
266,0,United States,Americas,USA,3,4,"$80,000 - $99,999",$60 - $74,United States,Hybrid,Remote,No,Bachelor’s degree,,0,Man,Yes,
267,0,United States,Americas,USA,15,18,"$100,000 - $119,999",,United States,Remote,Hybrid,No,Bachelor’s degree,,0,Man,Yes,google
268,0,United States,Americas,USA,4,2,"$100,000 - $119,999",,United States,Remote,Remote,No,Bachelor’s degree,,0,Man,Yes,Andy Kriebel
269,0,United States,Americas,USA,5,20,"$140,000 - $159,999",,United States,Remote,Remote,No,Bachelor’s degree,,0,Woman,Yes,
270,0,Netherlands,Europe,NLD,17,8,"$60,000 - $79,999",$100 - $124,Netherlands,Hybrid,Hybrid,Yes,Bachelor’s degree,,0,Man,No,"Andy Kirk, Alberto Cairo, Brent Dykes, Michel Dekker, Stephn Few, Nadieh Bremer"
271,0,France,Europe,FRA,10,31,"$160,000 - $179,999",,France,Hybrid,Hybrid,No,Master’s degree,,1,Man,No,Steve Adams
272,0,United States,Americas,USA,31,31,"$40,000 - $59,999",,United States,On site,Remote,No,Bachelor’s degree,,0,Man,No,No specific person
273,0,United States,Americas,USA,12,15,"$60,000 - $79,999",,United States,On site,Remote,No,Master’s degree,,0,Man,Yes,"Axios Visuals (Will Chase, et al); Stephanie Evergreen; Alberto Cairo; Amanda Makulec; Georgios Karamanis; Abdoul Madjid; Lee Olney; Cedric Scherer"
274,0,United States,Americas,USA,2,4,"$100,000 - $119,999",I am not compensated on an hourly or project basis,United States,Remote,Hybrid,No,Bachelor’s degree,,0,Woman,No,
275,0,United States,Americas,USA,8,3,"$100,000 - $119,999",I am not compensated on an hourly or project basis,United States,Remote,Remote,No,Master’s degree,,0,Man,No,John Nelson
276,0,United States,Americas,USA,6,6,,$45 - $59,United States,Remote,Hybrid,Yes,Bachelor’s degree,,0,Self-described or Prefer not to say,Yes,Edward tufte
277,0,United States,Americas,USA,25,25,,,United States,Remote,Remote,No,Some college,,0,Man,No,Carrie Harrison
278,0,United States,Americas,USA,6,8,"$80,000 - $99,999",,United States,On site,Hybrid,Yes,Bachelor’s degree,,1,Man,Yes,"Cole Knafflic, Amanda Cox"
279,0,Kenya,Africa,KEN,6,9,"$40,000 - $59,999",,Kenya,Hybrid,Remote,Yes,Master’s degree,,1,Man,Yes,"Andy Kriebel, Edureka, Free code camp"
280,0,United States,Americas,USA,3,12,"$60,000 - $79,999",$30 - $44,United States,Hybrid,Hybrid,Yes,Bachelor’s degree,,0,Woman,No,
281,0,Finland,Europe,FIN,6,10,"$60,000 - $79,999",,Finland,Remote,Remote,No,Master’s degree,,1,Man,Yes,"Kirell Benzi, Nadieh Bremer, Shirley Wu, Nicolas Belmonte"
282,0,United Kingdom,Europe,GBR,5,25,"$40,000 - $59,999",I am not compensated on an hourly or project basis,United Kingdom,Hybrid,Hybrid,No,Bachelor’s degree,"Infogram, Indesign",0,Woman,Yes,"David McCandless, Rob Orchard"
283,0,Canada,Americas,CAN,8,23,"$80,000 - $99,999",I am not compensated on an hourly or project basis,Canada,Hybrid,Remote,No,Master’s degree,,0,Man,Yes,
284,0,United States,Americas,USA,11,12,"$60,000 - $79,999",,United States,Hybrid,Remote,Yes,Master’s degree,,0,Man,Yes,Evergreen
285,0,Canada,Americas,CAN,5,22,"$40,000 - $59,999",,Canada,Hybrid,Hybrid,No,Some college,,1,Woman,No,
286,0,United States,Americas,USA,12,12,"$120,000 - $139,999",,United States,Remote,Remote,Yes,Master’s degree,,0,Man,Yes,"Bridget Conley, Vidya Setlur, Andy Cotgreve"
287,0,United States,Americas,USA,10,17,"$120,000 - $139,999",I am not compensated on an hourly or project basis,United States,Remote,Remote,No,Master’s degree,,0,Woman,No,"Steve Wexler, Jeffery Schaffer, Eric Parker"
288,0,United States,Americas,USA,7,11,"$60,000 - $79,999",I am not compensated on an hourly or project basis,United States,Remote,Remote,No,Master’s degree,,0,Woman,No,
289,0,Slovenia,Europe,SVN,7,15,I am not compensated on a yearly basis,$75 - $99,Slovenia,Remote,Remote,Yes,Master’s degree,,1,Woman,,"Juuso Koponen, Federica Fragapane"
290,0,India,Asia,IND,1,4,I am not compensated on a yearly basis,I am not compensated on an hourly or project basis,India,Hybrid,Remote,Yes,Bachelor’s degree,,0,Man,,"Artists, especially Modern art"
291,0,Thailand,Asia,THA,3,7,"$10,000 - $19,999",,Thailand,Hybrid,Hybrid,No,Bachelor’s degree,,0,Woman,Yes,"pudding team, nytimes team"
292,0,United States,Americas,USA,31,25,"$120,000 - $139,999",,United States,On site,On site,No,Master’s degree,SAS-Graph SAS; ODS Statitical Graphs,0,Man,Yes,Stephen Few; Edward Tufte; Robert Alison; Jonathan Schwabish;
293,0,United States,Americas,USA,6,13,"$80,000 - $99,999",,United States,Hybrid,Hybrid,No,Master’s degree,,1,Woman,No,"Alberto Cairo, Nathan Yau"
294,0,United States,Americas,USA,3,3,"$40,000 - $59,999",$15 - $29,United States,Hybrid,Hybrid,No,Bachelor’s degree,,0,Man,Yes,Mostly coworkers
295,0,United States,Americas,USA,7,20,"$80,000 - $99,999",,United States,Remote,Remote,No,Doctoral degree,,0,Woman,No,"Stephanie Evergreen, Ann Emry"
296,0,United States,Americas,USA,10,12,"$200,000 - $219,999",,United States,Remote,Hybrid,No,Master’s degree,,0,Woman,Yes,
297,0,United States,Americas,USA,6,8,"$100,000 - $119,999",,United States,Remote,Remote,No,Master’s degree,,0,Woman,Yes,
298,0,United States,Americas,USA,5,17,"$140,000 - $159,999",,United States,Remote,Remote,Yes,Bachelor’s degree,,0,Man,Yes,Andy Kriebel
299,0,United States,Americas,USA,12,27,,$30 - $44,United States,Remote,Hybrid,Yes,Master’s degree,,0,Woman,No,"Stephanie Evergreen, Cole Nussbaumer Knaflic, Stephen Few"
300,0,Canada,Americas,CAN,10,5,"$40,000 - $59,999",,Canada,Remote,Remote,No,Doctoral degree,Adobe Analytics,0,Man,Yes,"Stephanie Evergreen, Chris Tauber"
301,0,United States,Americas,USA,4,6,"$80,000 - $99,999",I am not compensated on an hourly or project basis,United States,Remote,Remote,No,Bachelor’s degree,,0,Woman,Yes,
302,0,United States,Americas,USA,10,21,"$120,000 - $139,999",,United States,Remote,Hybrid,No,Master’s degree,,0,Man,,The Big Book of Dashboards book.
303,0,United States,Americas,USA,14,14,"$80,000 - $99,999",,United States,Remote,Remote,No,Master’s degree,,0,Woman,No,Stephanie Evergreen; Amy Balliet
304,0,United States,Americas,USA,6,4,"$200,000 - $219,999",I am not compensated on an hourly or project basis,United States,Remote,Remote,No,Doctoral degree,"Angular, ag-grid-charts",1,Man,Yes,None. Most of them are just stupid and incompetent.
305,0,United States,Americas,USA,10,31,"$80,000 - $99,999",,United States,Remote,Remote,No,Master’s degree,,0,Man,Yes,"Jon schwabish, Naomi Robbins, nathan yau"
306,0,France,Europe,FRA,7,23,"$120,000 - $139,999",,France,On site,On site,No,Doctoral degree,,1,Man,Yes,"No one in particular, I pin nice examples while browsing the web."
307,0,United Kingdom,Europe,GBR,2,30,"$40,000 - $59,999",,United Kingdom,Remote,Remote,No,Some college,,0,Man,Yes,Not sure
308,0,United States,Americas,USA,10,9,"$140,000 - $159,999",,United States,Hybrid,Hybrid,No,Doctoral degree,Matlab (how is this not included in the list?),0,Man,,No one in particular
309,0,United Kingdom,Europe,GBR,7,20,"$40,000 - $59,999",,United Kingdom,Remote,Hybrid,Yes,Doctoral degree,,0,Woman,Yes,"Frederika Fragapane, Georgia Lupi"
310,0,Spain,Europe,ESP,6,10,"$60,000 - $79,999",I am not compensated on an hourly or project basis,Spain,Remote,Remote,No,Bachelor’s degree,,1,Man,Yes,
311,0,United Kingdom,Europe,GBR,4,20,"$40,000 - $59,999",,United Kingdom,Remote,Remote,No,Technical school,MicroStrategy,0,Man,Yes,"Matthias Stahl, Andy Kirk, Alli Torban"
312,0,Austria,Europe,AUT,8,12,"$60,000 - $79,999",$100 - $124,Austria,On site,On site,No,Doctoral degree,,0,Woman,Yes,
313,0,Denmark,Europe,DNK,8,16,"$80,000 - $99,999",,Denmark,On site,On site,Yes,Master’s degree,,1,Woman,Yes,"Chris Tauber, Andy Kriebel - many others"
314,0,Germany,Europe,DEU,8,4,"$40,000 - $59,999",I am not compensated on an hourly or project basis,Germany,Hybrid,Hybrid,No,Master’s degree,,1,Woman,Yes,"Lisa Charlotte Muth, Matthias Stahl, Federica Fragapane, Julius Tröger, Nadieh Brehmer"
315,0,United States,Americas,USA,8,10,"$120,000 - $139,999",,United States,Hybrid,Hybrid,No,Master’s degree,,0,Woman,Yes,"Jeffrey Shaffer, Steve Wexler, Andy Cotgreave, Amanda Makulec, , Stephanie Evergreen, Ann Emery"
316,0,United States,Americas,USA,31,31,"$180,000 - $199,999",,United States,On site,On site,No,Master’s degree,,0,Man,Yes,Bas Dohmen
317,0,Canada,Americas,CAN,7,31,,,Canada,Remote,Remote,Yes,Bachelor’s degree,,0,Woman,No,Chart Chat team
318,0,United States,Americas,USA,13,24,"$160,000 - $179,999",,United States,Remote,Remote,No,Associate’s degree,Grafana,1,Woman,,"Kelly Martin, Chimdi Nwosu, John Burn Murdoch"
319,0,United Kingdom,Europe,GBR,9,9,"$100,000 - $119,999",I am not compensated on an hourly or project basis,United Kingdom,Hybrid,Remote,No,Bachelor’s degree,,0,Man,Yes,
320,0,Chile,Americas,CHL,9,11,"$160,000 - $179,999",,Chile,Remote,Remote,No,Bachelor’s degree,,0,Man,Yes,Ludovic Tavernier
321,0,Brazil,Americas,BRA,9,21,"$120,000 - $139,999",$100 - $124,Brazil,Remote,Hybrid,No,Bachelor’s degree,,1,Man,Yes,"I tend to look at non-dataviz things for inspiration but when I do look at dataviz stuff it's usually from Gabrielle Merite, Francesca Fragapane, Moritz Stefaner, Clever Franke, Accurat, ODD.Studio and DataDot."
322,0,United States,Americas,USA,8,22,"$120,000 - $139,999",I am not compensated on an hourly or project basis,United States,Hybrid,Hybrid,No,Bachelor’s degree,"IBM Cognos Analytics - List Reports, but also their Dashboarding feature",0,Man,Yes,"Podcasts like The PolicyViz Podcast, Data Viz Today, and Raw Data by P3 Adaptive. They may not be easy to communicate technical skills on products, but they are great for inspiration. When a stakeholder a work poses a question they need answering via data and/or data viz, I'm inspired."
323,0,United States,Americas,USA,10,8,"$100,000 - $119,999",,United States,Remote,Remote,Yes,Bachelor’s degree,,0,Woman,No,Amelia Wattenberger
324,0,United States,Americas,USA,9,12,"$100,000 - $119,999",,United States,Hybrid,Hybrid,Yes,Bachelor’s degree,,0,Woman,Yes,My brain if I'm allowed.... But I'm a girl and we live in a patriarchy.
325,0,United States,Americas,USA,7,5,"$200,000 - $219,999",,United States,Remote,Remote,No,Bachelor’s degree,Figjam,0,Man,Yes,"Edward Tufte, Elijah Meeks, Ian Johnson, Shirley Wu, Curran Kelleher, Dominik Moritz + the Vega-Lite team"
326,0,United States,Americas,USA,12,11,"$120,000 - $139,999",,United States,On site,On site,No,Bachelor’s degree,,0,Self-described or Prefer not to say,Yes,Flerledge Twins
327,0,United Kingdom,Europe,GBR,20,25,"$80,000 - $99,999",I am not compensated on an hourly or project basis,United Kingdom,Remote,Remote,Yes,Bachelor’s degree,Birst,0,Man,,"Kevin Flerlage, Andy Kriebel, David Mcandless"
328,0,United Kingdom,Europe,GBR,8,25,"$80,000 - $99,999",,United Kingdom,Hybrid,Hybrid,No,Some college,,0,Man,Yes,"John Burn-Murdoch, Stephanie Evergreen, Kevin Flerlage"
329,0,United Kingdom,Europe,GBR,2,2,"$40,000 - $59,999",,United Kingdom,Remote,Remote,No,High school diploma,,0,Self-described or Prefer not to say,Yes,"Valentina D'Efillipo, Tanya Shapiro, Georgios Karamanis, Gabrielle Merite"
330,0,Australia,Oceania,AUS,23,31,"$240,000 or more",,Australia,Remote,Remote,No,High school diploma,,0,Man,No,"flerlage twins, Cole Nussbaumer Knaflic,"
331,0,Australia,Oceania,AUS,2,12,"$10,000 - $19,999",$45 - $59,Australia,Remote,Remote,No,Doctoral degree,,0,Woman,,
332,0,United States,Americas,USA,5,25,"$120,000 - $139,999",,United States,Remote,Remote,No,Master’s degree,,0,Woman,No,Ann Emery and Stephanie Evergreen
333,0,Italy,Europe,ITA,2,5,,$15 - $29,Italy,Remote,Remote,No,Master’s degree,,1,Woman,Yes,"Edward Tufte, Alberto Cairo"
334,0,Brazil,Americas,BRA,4,15,,$30 - $44,Brazil,Remote,Remote,Yes,Master’s degree,,1,Man,Yes,"Shirley Wu, Nadieh Bremer, Giorgia Lupi"
335,0,Australia,Oceania,AUS,4,20,"$80,000 - $99,999",,Australia,Hybrid,Remote,Yes,Master’s degree,,0,Man,No,Pinterest
336,0,Italy,Europe,ITA,4,5,"$20,000 - $39,999",,Italy,Hybrid,Hybrid,Yes,Master’s degree,,1,Woman,Yes,"go to tableau public, following expert on data viz, be curious always"
337,1,United States,Americas,USA,1,25,"$40,000 - $59,999",I am not compensated on an hourly or project basis,United States,,Hybrid,Yes,Master’s degree,,0,Woman,Yes,
338,0,Italy,Europe,ITA,3,2,"$40,000 - $59,999",,Italy,Hybrid,Hybrid,No,Master’s degree,,0,Woman,Yes,"Gabrielle Merite, Federica Fragapane, Giorgia Lupi, Domestic Data Streamers"
339,0,United States,Americas,USA,2,13,I am not compensated on a yearly basis,$75 - $99,United States,Remote,Remote,Yes,Master’s degree,,0,Woman,,"Ann Emery, Stephanie evergreen,"
340,0,United States,Americas,USA,31,31,,$150 - $174,United States,Remote,Remote,No,Doctoral degree,,0,Woman,No,Ann Emery and Stephanie Evergreen
341,0,United States,Americas,USA,30,31,I am not compensated on a yearly basis,$75 - $99,United States,Remote,Remote,Yes,Doctoral degree,netdraw,0,Woman,Yes,"Tufte, then I search on google"
342,0,Italy,Europe,ITA,16,16,"$60,000 - $79,999",$45 - $59,Italy,Remote,Remote,Yes,Master’s degree,,1,Man,Yes,Albert Cairo
343,0,Colombia,Americas,COL,6,8,"$10,000 - $19,999",$15 - $29,Colombia,Remote,Remote,No,Master’s degree,,1,Woman,,
344,0,Netherlands,Europe,NLD,3,7,,$45 - $59,Netherlands,Remote,Hybrid,No,Bachelor’s degree,,0,Woman,Yes,"Alli Torban, Federica Fragapane, Duncan Geere,"
345,0,Canada,Americas,CAN,0,31,,$150 - $174,Canada,Remote,Remote,No,Bachelor’s degree,,0,Man,Yes,Edward Tufte
346,0,Germany,Europe,DEU,25,25,,$60 - $74,Germany,Remote,Hybrid,Yes,Bachelor’s degree,,1,Man,Yes,Books and online resources
347,0,United States,Americas,USA,7,20,I am not compensated on a yearly basis,$100 - $124,United States,Remote,Remote,Yes,Bachelor’s degree,After Effects,0,Man,Yes,
348,0,Germany,Europe,DEU,5,0,"$20,000 - $39,999",,Germany,On site,Remote,No,Master’s degree,"Inkscape, draw.io",1,Woman,No,Alberto Cairo
349,0,France,Europe,FRA,10,22,,$75 - $99,France,Remote,Remote,No,Bachelor’s degree,,1,Woman,,"michelle real, instachaaz, information is beautiful, datavizproject.com"
350,0,Colombia,Americas,COL,20,31,"$20,000 - $39,999",$100 - $124,Colombia,Remote,Hybrid,No,Doctoral degree,,1,Man,Yes,"Jeffrey heer, schneiderman"
351,0,United States,Americas,USA,20,20,"$60,000 - $79,999",,United States,Hybrid,Hybrid,No,Doctoral degree,,0,Woman,Yes,
352,0,United States,Americas,USA,6,20,"$80,000 - $99,999",,United States,On site,Remote,Yes,Bachelor’s degree,,0,Woman,No,"Wexler, Tufte"
353,0,India,Asia,IND,2,6,"$20,000 - $39,999",I am not compensated on an hourly or project basis,India,Remote,Hybrid,Yes,Bachelor’s degree,"Fusioncharts, Figma",1,Man,Yes,
354,0,United States,Americas,USA,12,25,"$120,000 - $139,999",,United States,Remote,Remote,No,Bachelor’s degree,,0,Woman,Yes,Blogs
355,0,Switzerland,Europe,CHE,10,10,"$80,000 - $99,999",$100 - $124,Switzerland,Hybrid,Hybrid,No,Doctoral degree,"Matplotlib, Seaborn",1,Woman,Yes,DVS Slack community
356,0,United States,Americas,USA,22,20,"$80,000 - $99,999",$125 - $149,United States,Hybrid,Hybrid,No,Doctoral degree,,0,Woman,,External consultants & trainers
357,1,India,Asia,IND,3,0,"Less than $10,000",Less than $15,India,Remote,Remote,Yes,Master’s degree,,1,Man,Yes,Robert Kasara
358,0,United States,Americas,USA,4,20,"$120,000 - $139,999",I am not compensated on an hourly or project basis,United States,Hybrid,Hybrid,No,Bachelor’s degree,Inkscape,0,Man,Yes,"Lisa Muth, Tamara Munzner"
359,0,United States,Americas,USA,3,5,"$100,000 - $119,999",,United States,Hybrid,Hybrid,Yes,Master’s degree,,0,Woman,Yes,"Giorgia Lupi, Nathan Yau, Stephanie Posavec, Gabrielle Merite, Lisa Charlotte Muth, Alli Torban"
360,0,United States,Americas,USA,3,13,"$80,000 - $99,999",,United States,Remote,Hybrid,No,Master’s degree,,1,Woman,Yes,"Nathan Yau, Todd Whitehead, Jon Schwabish, Owen Phillips"
361,0,Australia,Oceania,AUS,3,7,"$60,000 - $79,999",,Australia,Hybrid,Hybrid,Yes,Master’s degree,,1,Woman,Yes,Giorgio Lupi & Those I am discovering through your podcast 😉
362,0,India,Asia,IND,5,8,"$20,000 - $39,999",,India,Remote,Remote,Yes,Master’s degree,,1,Man,No,"Topi Tjukanov, Danielle Navarro, Cedric Scherer"
363,0,India,Asia,IND,1,5,I am not compensated on a yearly basis,I am not compensated on an hourly or project basis,India,Remote,Remote,No,Master’s degree,,1,Man,,"Nadieh Bremer, David McCandless"
364,0,United States,Americas,USA,8,25,"$100,000 - $119,999",,United States,Remote,Remote,Yes,Master’s degree,,0,Self-described or Prefer not to say,Yes,
365,0,United States,Americas,USA,10,7,"$120,000 - $139,999",,United States,Remote,Remote,No,Doctoral degree,Canva,0,Woman,Yes,"Nadieh Bremer, Giorgia Lupi"
366,0,United States,Americas,USA,20,30,"$140,000 - $159,999",,United States,Hybrid,Hybrid,No,Master’s degree,,0,Woman,Yes,Jon Schwabish (PolicyViz)
367,0,United Kingdom,Europe,GBR,5,26,"$100,000 - $119,999",,United Kingdom,Remote,Remote,No,Master’s degree,,0,Man,No,"Mike Bostock, Robin Lovelace, Tom Ford, Geof Boeing"
368,0,Brazil,Americas,BRA,1,6,"Less than $10,000",I am not compensated on an hourly or project basis,Brazil,Remote,Hybrid,Yes,Bachelor’s degree,Datylon,0,Woman,,
369,0,Switzerland,Europe,CHE,10,20,"$140,000 - $159,999",$125 - $149,Switzerland,Hybrid,Hybrid,Yes,Doctoral degree,,1,Man,Yes,
370,1,Germany,Europe,DEU,7,5,"$40,000 - $59,999",,Germany,On site,Hybrid,No,Master’s degree,,1,Man,Yes,"Dominik Moritz, Leilani Battle"
371,0,India,Asia,IND,8,18,,$30 - $44,India,On site,Hybrid,No,Bachelor’s degree,,0,Man,No,"Ryan sleeper, Steve Wexler (chart chat), Andy Kribel (makeovermonday)"
372,0,United Kingdom,Europe,GBR,15,20,"$60,000 - $79,999",,United Kingdom,Remote,Remote,Yes,Bachelor’s degree,,0,Man,Yes,"Andy Kriebel, Ryan Playfair, Stephanie Evergreen"
373,0,United States,Americas,USA,5,7,"$140,000 - $159,999",$100 - $124,United States,Remote,Remote,No,Master’s degree,Photoshop,1,Woman,No,Non-datavisualization designers
374,0,United States,Americas,USA,11,16,"$180,000 - $199,999",$75 - $99,United States,Remote,Remote,No,Bachelor’s degree,EverViz,0,Woman,Yes,
375,0,India,Asia,IND,3,3,"Less than $10,000",I am not compensated on an hourly or project basis,India,Hybrid,Remote,Yes,Master’s degree,,1,Man,No,
376,0,Saudi Arabia,Asia,SAU,7,19,"$40,000 - $59,999",$45 - $59,Saudi Arabia,Hybrid,On site,Yes,Master’s degree,truOI,0,Man,Yes,
377,1,Croatia,Europe,HRV,3,10,"$10,000 - $19,999",I am not compensated on an hourly or project basis,Croatia,On site,Remote,Yes,Master’s degree,"Statistica, XLStat",1,Woman,Yes,"There are too many and again it depends on the task. I like to check Behance, Twitter, Medium, Pinterest and my Newsletters."
378,0,Sweden,Europe,SWE,7,20,"$60,000 - $79,999",,Sweden,Remote,Remote,No,Master’s degree,,1,Man,No,"Twitter, scmp, reuters"
379,0,United States,Americas,USA,7,12,"$100,000 - $119,999",,United States,Remote,Remote,Yes,Bachelor’s degree,Canva,0,Woman,Yes,
380,1,United States,Americas,USA,3,8,"$60,000 - $79,999",,United States,Remote,Remote,No,Bachelor’s degree,,0,Self-described or Prefer not to say,,
381,0,United States,Americas,USA,10,15,"$120,000 - $139,999",$125 - $149,United States,Remote,Remote,Yes,Bachelor’s degree,MicroStrategy,0,Man,No,
382,1,United States,Americas,USA,10,15,"$140,000 - $159,999",I am not compensated on an hourly or project basis,United States,Hybrid,Hybrid,Yes,Bachelor’s degree,,0,Man,Yes,
383,0,United States,Americas,USA,8,10,"$80,000 - $99,999",$30 - $44,United States,Remote,Remote,No,Master’s degree,,0,Woman,,flerage twins!
384,0,United States,Americas,USA,9,11,"$60,000 - $79,999",,United States,Remote,Remote,No,Master’s degree,,0,Woman,No,
385,0,Germany,Europe,DEU,1,5,"$40,000 - $59,999",,Germany,Hybrid,Hybrid,Yes,Doctoral degree,,1,Woman,No,Andy Kriebel
386,0,United States,Americas,USA,8,31,"$80,000 - $99,999",,United States,Remote,Remote,No,Master’s degree,,0,Woman,No,"Kevin Flerlage, Playfair Data, Andy Kreibel, Eva Murray, Cole Nussbaumer Knaflic"
387,0,United States,Americas,USA,3,30,,,United States,Remote,Remote,No,Master’s degree,,0,Man,No,"Anne K. Emery, Edward Tufte, Alberto Cairo,"
388,0,United Kingdom,Europe,GBR,3,17,"$40,000 - $59,999",,United Kingdom,Remote,Remote,Yes,Master’s degree,Infogram,1,Woman,No,
389,0,United States,Americas,USA,2,27,"$100,000 - $119,999",,United States,Remote,Hybrid,Yes,Master’s degree,,0,Woman,Yes,
390,0,Argentina,Americas,ARG,6,3,"$10,000 - $19,999",I am not compensated on an hourly or project basis,Argentina,Hybrid,Hybrid,No,Doctoral degree,,0,Woman,No,
391,0,India,Asia,IND,4,4,"$10,000 - $19,999",$15 - $29,India,On site,Hybrid,Yes,Master’s degree,OBIEE,0,Woman,Yes,
392,0,United States,Americas,USA,5,15,"$80,000 - $99,999",,United States,On site,Hybrid,Yes,Master’s degree,,0,Man,Yes,
393,0,Germany,Europe,DEU,2,5,"$100,000 - $119,999",I am not compensated on an hourly or project basis,Germany,Hybrid,Hybrid,No,Master’s degree,Celonis,1,Woman,Yes,
394,0,France,Europe,FRA,11,15,"$80,000 - $99,999",,France,On site,On site,No,Doctoral degree,,1,Man,No,"Mathieu Jacomy, Lynn Cherny"
395,1,Canada,Americas,CAN,0,2,I am not compensated on a yearly basis,I am not compensated on an hourly or project basis,Canada,Remote,Remote,Yes,Master’s degree,,0,Woman,Yes,"Shirley Wu, Nadia Brenmer"
396,0,United States,Americas,USA,10,10,"$140,000 - $159,999",,United States,Remote,Remote,No,Master’s degree,,0,Woman,No,
397,0,United Kingdom,Europe,GBR,4,31,"$60,000 - $79,999",,United Kingdom,Remote,Remote,No,Associate’s degree,,0,Man,No,Data Visualisation Society; Storytelling With Data; David McCandless and LinkedIn
398,0,Norway,Europe,NOR,10,20,"$80,000 - $99,999",I am not compensated on an hourly or project basis,Norway,On site,Hybrid,No,Master’s degree,,1,Woman,No,
399,0,United States,Americas,USA,6,10,"$100,000 - $119,999",,United States,Remote,Remote,No,Master’s degree,,0,Woman,No,Steve Wexler
400,0,United States,Americas,USA,2,10,"$60,000 - $79,999",,United States,Remote,Remote,No,Master’s degree,,0,Woman,Yes,Andy Kriebel; Michelle Frayman; Bridget Cogley; Lindsay Betzendahl;
401,0,United States,Americas,USA,2,7,,$30 - $44,United States,Remote,Remote,No,Master’s degree,,0,Man,Yes,Tufte
402,0,United States,Americas,USA,3,14,"$100,000 - $119,999",I am not compensated on an hourly or project basis,United States,Remote,Remote,Yes,Bachelor’s degree,,1,Man,Yes,
403,0,United States,Americas,USA,3,23,"$120,000 - $139,999",,United States,Remote,Remote,No,Master’s degree,,0,Woman,No,
404,0,United States,Americas,USA,8,30,"$120,000 - $139,999",,United States,Hybrid,Hybrid,No,Master’s degree,,0,Woman,,
405,0,Canada,Americas,CAN,5,15,"$60,000 - $79,999",,Canada,Hybrid,Hybrid,No,Master’s degree,,0,Woman,Yes,"other reports, websites"
406,0,United States,Americas,USA,5,31,"$20,000 - $39,999",,United States,On site,Hybrid,Yes,Bachelor’s degree,,0,Woman,No,Ann K. Emery
407,0,United States,Americas,USA,5,6,,$15 - $29,United States,On site,Remote,Yes,Master’s degree,,0,Woman,No,Ann K Emery & Stephanie Evergreen! :)
408,0,United States,Americas,USA,7,7,"$100,000 - $119,999",$45 - $59,United States,Remote,Hybrid,No,Master’s degree,,0,Woman,No,Mike bostock
409,0,Mexico,Americas,MEX,3,9,"$20,000 - $39,999",,Mexico,Remote,Hybrid,Yes,Master’s degree,,1,Man,Yes,Ryan Sleeper
410,0,United States,Americas,USA,2,7,"$80,000 - $99,999",,United States,Remote,Hybrid,No,Master’s degree,,0,Woman,No,Stephanie Evergreen
411,0,United States,Americas,USA,5,15,"$40,000 - $59,999",I am not compensated on an hourly or project basis,United States,Hybrid,Hybrid,Yes,Master’s degree,,0,Woman,No,
412,0,United States,Americas,USA,0,23,"$60,000 - $79,999",,United States,Hybrid,Hybrid,No,Master’s degree,,0,Woman,,"Ann Emory, Stephanie Evergreen, Shelley Engelman, Nancy Duarte"
413,0,Germany,Europe,DEU,8,25,"$100,000 - $119,999",I am not compensated on an hourly or project basis,Germany,On site,Hybrid,Yes,Master’s degree,Kumu,1,Man,Yes,"Alberto Cairo, Andy Kriebel, Jonathan Schwabish, Nathan Yau, Alexander Bogachov"
414,0,United States,Americas,USA,4,10,"$100,000 - $119,999",,United States,Remote,Remote,No,Master’s degree,,0,Woman,Yes,"Cole Nussbaumer Knaflic, Stephanie Evergreen, Ann K Emery"
415,0,United States,Americas,USA,10,26,"$140,000 - $159,999",I am not compensated on an hourly or project basis,United States,Remote,Remote,No,Master’s degree,SAS,0,Woman,No,
416,1,India,Asia,IND,1,1,"Less than $10,000",,India,Remote,Remote,Yes,Bachelor’s degree,,1,Woman,No,
417,0,United States,Americas,USA,7,7,"$60,000 - $79,999",,United States,On site,On site,No,Master’s degree,Sisense,0,Woman,No,
418,0,United States,Americas,USA,5,8,"$60,000 - $79,999",,United States,Remote,Remote,No,Master’s degree,,0,Man,Yes,"Twitter, seeing examples, books with examples, examples with code on how they were made"
419,0,United States,Americas,USA,3,6,"$60,000 - $79,999",$15 - $29,United States,Remote,Remote,Yes,Master’s degree,,0,Woman,Yes,
420,0,United States,Americas,USA,5,10,"$140,000 - $159,999",I am not compensated on an hourly or project basis,United States,Remote,Remote,No,Doctoral degree,Angular,0,Woman,Yes,
421,0,United Kingdom,Europe,GBR,5,15,"$40,000 - $59,999",,United Kingdom,Hybrid,Hybrid,No,Master’s degree,,1,Man,Yes,
422,0,Netherlands,Europe,NLD,0,4,"$40,000 - $59,999",I am not compensated on an hourly or project basis,Netherlands,Hybrid,Hybrid,No,Doctoral degree,,1,Man,Yes,"Nadieh Bremer, Shirley wu"
423,0,Ireland,Europe,IRL,10,17,"$60,000 - $79,999",,Ireland,Remote,Remote,Yes,Master’s degree,Incorta,0,Man,Yes,"Martin Heinz, Alberto Cairo, Mona Chalabi, David McCandless"
424,0,United Kingdom,Europe,GBR,5,5,"$120,000 - $139,999",,United Kingdom,Hybrid,Hybrid,Yes,Doctoral degree,,0,Man,Yes,Makeovers
425,0,United Kingdom,Europe,GBR,9,13,"$60,000 - $79,999",,United Kingdom,Remote,Hybrid,No,Master’s degree,Metabase,0,Woman,Yes,
426,0,France,Europe,FRA,4,10,"$40,000 - $59,999",,France,Remote,Remote,Yes,Master’s degree,,1,Woman,Yes,"Federica Fragapane, Alli Torban, Ludovic Tavernier, Florent Lavergne"
427,0,United States,Americas,USA,10,15,"$80,000 - $99,999",,United States,Remote,Remote,No,Doctoral degree,,0,Woman,Yes,"Ann Emery, Cole Nussbaumer Knaflic, Bill Shander"
428,0,United States,Americas,USA,9,11,"$100,000 - $119,999",I am not compensated on an hourly or project basis,United States,Remote,Remote,No,Master’s degree,,0,Self-described or Prefer not to say,Yes,
429,0,United States,Americas,USA,20,31,"$240,000 or more",,United States,Hybrid,Hybrid,No,Master’s degree,,0,Man,,
430,0,Ghana,Africa,GHA,3,3,"Less than $10,000",I am not compensated on an hourly or project basis,Ghana,On site,Hybrid,Yes,High school diploma,Google slides,0,Man,No,
431,0,United States,Americas,USA,10,25,"$100,000 - $119,999",,United States,Remote,Remote,No,Bachelor’s degree,,0,Man,No,
432,0,United States,Americas,USA,17,17,"$140,000 - $159,999",,United States,Remote,Remote,Yes,Master’s degree,,0,Man,No,Keith McNulty
433,0,United States,Americas,USA,10,20,"$120,000 - $139,999",I am not compensated on an hourly or project basis,United States,Remote,Remote,Yes,Bachelor’s degree,,0,Man,No,
434,0,United States,Americas,USA,2,1,"$80,000 - $99,999",,United States,Remote,Hybrid,No,Bachelor’s degree,,0,Woman,Yes,"Alli Torban, Amanda Makulec, Giorgia Lupi, Erin Davis, Nathan Yau, Lisa Muth, Rachael Dottle, Shirley Wu, Aaron Williams, Sisi Wei, Anna Wiederkehr, Elena Mejía, Mira Rojanasakul, Pablo Robles"
435,0,United States,Americas,USA,7,7,"$140,000 - $159,999",,United States,Remote,Hybrid,No,Bachelor’s degree,,0,Woman,No,
436,0,United States,Americas,USA,10,22,"$180,000 - $199,999",I am not compensated on an hourly or project basis,United States,Remote,Remote,Yes,Some college,,0,Man,Yes,
437,0,United States,Americas,USA,12,14,"$40,000 - $59,999",$15 - $29,United States,Hybrid,Remote,Yes,Doctoral degree,Piktochart,0,Woman,,
438,0,Australia,Oceania,AUS,4,15,"$40,000 - $59,999",,Australia,Hybrid,Hybrid,No,Bachelor’s degree,,0,Woman,Yes,Kimly Scott; Steve Wexler; The Flerlaage Twins
439,0,United States,Americas,USA,4,12,"$140,000 - $159,999",,United States,Remote,Remote,No,Bachelor’s degree,,0,Woman,Yes,"Flerlage Twins, Cole Nussbaumer Knaflic, W.E.B. DuBois"
440,0,Netherlands,Europe,NLD,10,15,"$60,000 - $79,999",I am not compensated on an hourly or project basis,Netherlands,Hybrid,Hybrid,Yes,Master’s degree,,1,Woman,Yes,
441,0,United States,Americas,USA,9,12,"$80,000 - $99,999",,United States,Hybrid,Hybrid,No,Master’s degree,,0,Self-described or Prefer not to say,No,"Stephanie Evergreen, Anne K Emery, Nick Visscher, Mary Jackson"
442,0,United Kingdom,Europe,GBR,13,23,"$20,000 - $39,999",$15 - $29,United Kingdom,Remote,Remote,Yes,Doctoral degree,,1,Man,No,
443,0,United States,Americas,USA,16,31,,,United States,Remote,Remote,No,Bachelor’s degree,Oracle Data Visualizer,0,Man,Yes,See next question
444,0,United States,Americas,USA,2,6,"$60,000 - $79,999",,United States,Remote,Hybrid,No,Bachelor’s degree,CRM Analytics (formerly Tableau CRM),0,Man,Yes,"Alli Torban, Andy Kreibel, Cole Knafflic, and my coworkers"
445,0,United States,Americas,USA,10,5,"$240,000 or more",,United States,Hybrid,Hybrid,No,Doctoral degree,,0,Man,No,
446,0,Australia,Oceania,AUS,1,26,"$80,000 - $99,999",,Australia,Remote,Remote,No,Bachelor’s degree,,0,Man,Yes,"All the guest speakers on Bill Shander's course on LinkedIn Learning ""Data Visualization - A Lesson and Listen Series"""
447,0,United States,Americas,USA,8,13,"$180,000 - $199,999",,United States,Remote,Remote,No,Master’s degree,Folium,0,Woman,No,
448,0,United States,Americas,USA,20,25,"$140,000 - $159,999",,United States,Remote,Remote,No,Master’s degree,,0,Woman,Yes,web search
449,0,United States,Americas,USA,6,12,"$80,000 - $99,999",,United States,Remote,Hybrid,Yes,Master’s degree,,0,Man,Yes,
450,0,Brazil,Americas,BRA,7,10,"$20,000 - $39,999",,Brazil,Hybrid,Hybrid,No,Master’s degree,,0,Man,Yes,Cole Nussbaumer Knaflic
451,0,France,Europe,FRA,15,25,"$60,000 - $79,999",,France,Remote,Remote,No,Master’s degree,Internal tools,1,Man,Yes,DVS slack
452,0,United States,Americas,USA,31,31,"$160,000 - $179,999",,United States,Hybrid,Remote,Yes,Master’s degree,,0,Man,,The Data Stories Podcast and the Datacamp Course Offering
453,0,Canada,Americas,CAN,10,20,,,Canada,Remote,On site,No,Master’s degree,,1,Man,Yes,"Alberto Cairo, Giogia Lupi, Stefanie Posavec, Jonathan Schwabish, Andy Kirk, Jorge Camoes, Jonathan Corum, Mona Chalabi, Jessica Hullman"
454,0,United States,Americas,USA,5,20,"$60,000 - $79,999",,United States,Remote,Hybrid,No,Bachelor’s degree,,0,Woman,Yes,"Ann Emery, Stephanie Evergreen"
455,0,United States,Americas,USA,1,25,"$120,000 - $139,999",I am not compensated on an hourly or project basis,United States,Hybrid,Hybrid,No,Bachelor’s degree,,0,Woman,No,
456,0,United Kingdom,Europe,GBR,3,18,"$20,000 - $39,999",,United Kingdom,On site,Hybrid,No,Bachelor’s degree,,1,Woman,Yes,"Andy Kriebel, Flerlage Twins"
457,0,Greece,Europe,GRC,6,7,,,Greece,Hybrid,Hybrid,No,Master’s degree,,1,Man,Yes,Data visualization society
458,0,United States,Americas,USA,8,12,"$80,000 - $99,999",,United States,Remote,Remote,No,Master’s degree,,0,Woman,No,
459,0,United States,Americas,USA,26,26,"$120,000 - $139,999",,United States,Remote,Remote,No,Master’s degree,,0,Man,No,"John Nelson, Ken Field, Sarah Bell"
460,0,United States,Americas,USA,7,7,"$240,000 or more",,United States,Hybrid,Hybrid,No,Doctoral degree,,0,Man,Yes,
461,0,United States,Americas,USA,2,3,"$60,000 - $79,999",,United States,Remote,Remote,No,Bachelor’s degree,,0,Man,No,Jocelyn Rivera on LinkedIn. Kavita Behera on LinkedIn.
462,0,United States,Americas,USA,3,3,"$80,000 - $99,999",I am not compensated on an hourly or project basis,United States,Hybrid,Remote,No,Bachelor’s degree,,0,Man,No,Marc Reid
463,0,Canada,Americas,CAN,4,14,,,Canada,Hybrid,Hybrid,No,Bachelor’s degree,,0,Woman,No,"Ann K. Emery, Stephanie Evergreen, Sheila Robinson"
464,0,United States,Americas,USA,10,31,"$120,000 - $139,999",,United States,Remote,Hybrid,Yes,Master’s degree,,0,Man,Yes,Jim denhert. Steve wexler.
465,0,United States,Americas,USA,13,14,"$100,000 - $119,999",,United States,Remote,Remote,No,Master’s degree,,0,Man,Yes,"J Schwabish, S Evergreen"
466,0,United States,Americas,USA,7,16,"$120,000 - $139,999",,United States,Remote,Remote,No,Master’s degree,,0,Woman,Yes,"Schwabish, DIB, nightingale"
467,0,United States,Americas,USA,10,16,"$80,000 - $99,999",,United States,Hybrid,Hybrid,No,Master’s degree,Canva,0,Woman,Yes,"Ann Emery, Stephanie Evergreen"
468,0,Germany,Europe,DEU,9,8,"$80,000 - $99,999",,Germany,Remote,Remote,No,Master’s degree,,1,Woman,Yes,"Andy Kirk, Jon Burn-Murdoch, Lisa Muth"
469,0,Spain,Europe,ESP,15,12,"$80,000 - $99,999",,Spain,Remote,Remote,No,Doctoral degree,,1,Man,Yes,Mike Bostock
470,0,Switzerland,Europe,CHE,3,10,"$60,000 - $79,999",I am not compensated on an hourly or project basis,Switzerland,Hybrid,Hybrid,Yes,Bachelor’s degree,Flutter/Dart,0,Man,No,"Alberto Cairo, Steve Wexler, Shirley Wu, Nadieh Bremer"
471,0,Canada,Americas,CAN,7,12,"$60,000 - $79,999",I am not compensated on an hourly or project basis,Canada,Hybrid,Hybrid,No,Bachelor’s degree,,0,Man,No,Enterprise DNA
472,1,Russia,Europe,RUS,3,9,"$10,000 - $19,999",,Russia,Remote,Remote,Yes,Master’s degree,,0,Woman,No,"Polina Uzvak, Tatiana Tsvirova, Yulia Alykova, Nadieh Bremer, Neil Halloran, Mohamad Waked, Nicholas Rougeux, Shirley Wu, Surgery Redcow, Surgery Redcow, Alexey Smagin"
473,0,United States,Americas,USA,10,31,"$120,000 - $139,999",,United States,Remote,Remote,No,Some college,,0,Man,No,
474,0,Greece,Europe,GRC,7,10,"$60,000 - $79,999",,Greece,Remote,Remote,No,Bachelor’s degree,Count,1,Woman,Yes,
475,0,United States,Americas,USA,13,15,"$120,000 - $139,999",,United States,Remote,Hybrid,Yes,Bachelor’s degree,Juicebox,0,Man,,
476,0,United Kingdom,Europe,GBR,1,26,"$80,000 - $99,999",,United Kingdom,Remote,Remote,No,Technical school,,0,Man,Yes,"Alberto Cairo, David McCandless, Daniel Marsh-Patrick, Mike Bostock, Kerry Kolosko"
477,0,United Kingdom,Europe,GBR,10,23,"$60,000 - $79,999",,United Kingdom,Hybrid,Hybrid,No,Bachelor’s degree,,0,Man,Yes,"Alberto Cairo, Andy Kirk, Stefanie Posavek, Lisa Charlotte Muth, Alex Selby-Boothroyd"
478,0,United States,Americas,USA,7,9,"$100,000 - $119,999",,United States,On site,Hybrid,No,Bachelor’s degree,,0,Man,No,
479,0,India,Asia,IND,7,10,"Less than $10,000",$45 - $59,India,Remote,Remote,Yes,Bachelor’s degree,,1,Man,Yes,"NYtimes, Guardian, Mona Chalabi, ObservableHQ community, Jason, Vox Videos"
480,0,United States,Americas,USA,9,24,"$80,000 - $99,999",,United States,Remote,Remote,Yes,Technical school,,0,Man,Yes,
481,0,United States,Americas,USA,6,12,"$200,000 - $219,999",$200 - $224,United States,Remote,Remote,No,Bachelor’s degree,,0,Woman,No,
482,0,United States,Americas,USA,7,10,"$160,000 - $179,999",I am not compensated on an hourly or project basis,United States,Remote,Remote,No,Bachelor’s degree,,0,Man,No,
483,0,United States,Americas,USA,10,17,"$140,000 - $159,999",,United States,Remote,Remote,No,High school diploma,,0,Man,Yes,
484,0,United States,Americas,USA,10,12,"$200,000 - $219,999",I am not compensated on an hourly or project basis,United States,Hybrid,Remote,No,Bachelor’s degree,,0,Man,Yes,"Ben Fry, Kim Rees"
485,0,Austria,Europe,AUT,19,22,"$140,000 - $159,999",,Austria,Remote,Remote,No,Bachelor’s degree,Kibana,1,Man,,"Alberto Cairo, Mike Bostock"
486,0,United Kingdom,Europe,GBR,7,22,"$40,000 - $59,999",,United Kingdom,Remote,Remote,No,Bachelor’s degree,,0,Man,,Books of dataviz examples
487,0,United States,Americas,USA,13,21,"$240,000 or more",I am not compensated on an hourly or project basis,United States,Hybrid,Hybrid,Yes,Bachelor’s degree,"Miro, Adobe Xd",0,Man,Yes,
488,0,United States,Americas,USA,8,12,"$140,000 - $159,999",,United States,Remote,Remote,No,Bachelor’s degree,Lucidchart,0,Woman,No,
489,0,Canada,Americas,CAN,7,3,"$40,000 - $59,999",I am not compensated on an hourly or project basis,Canada,Hybrid,Hybrid,No,Bachelor’s degree,,0,Man,,
490,0,Netherlands,Europe,NLD,5,15,"$20,000 - $39,999",$60 - $74,Netherlands,Remote,Remote,Yes,Master’s degree,,1,Man,No,
491,1,United States,Americas,USA,5,0,"$20,000 - $39,999",I am not compensated on an hourly or project basis,United States,Hybrid,Hybrid,No,Doctoral degree,,0,Woman,Yes,"Matthias Stahl, Gabrielle Merite"
492,0,United States,Americas,USA,5,9,"$60,000 - $79,999",I am not compensated on an hourly or project basis,United States,Remote,Remote,No,Master’s degree,,0,Woman,,
493,0,United States,Americas,USA,10,12,"$120,000 - $139,999",,United States,Remote,Remote,Yes,Master’s degree,,0,Man,No,
494,1,United States,Americas,USA,4,5,"$80,000 - $99,999",,United States,Remote,Remote,Yes,Master’s degree,,0,Woman,Yes,"Amelia Wattenberger, Nadieh Bremer, Shirley Wu"
495,0,United Kingdom,Europe,GBR,5,5,"$60,000 - $79,999",,United Kingdom,Hybrid,Hybrid,No,Master’s degree,,0,Woman,Yes,
496,0,United States,Americas,USA,16,31,,$300 or more,United States,Remote,Remote,No,Master’s degree,,0,Man,Yes,Daniel Zvinca. Steve Wexler. Jeffrey Shaffer. Dorian Banitiou. Alberto Cairo.
497,0,Romania,Europe,ROU,7,7,,$45 - $59,Romania,Remote,Remote,No,Master’s degree,Domo,1,Man,No,
498,1,United Kingdom,Europe,GBR,7,2,"$10,000 - $19,999",,United Kingdom,Remote,Remote,Yes,Master’s degree,,0,Man,No,Others work
499,0,United States,Americas,USA,8,8,,$100 - $124,United States,Remote,Remote,Yes,Master’s degree,Observable Notebooks,0,Man,,"Amelia Wattenberger, Matthias Stahl"
500,1,United States,Americas,USA,6,0,"$20,000 - $39,999",I am not compensated on an hourly or project basis,United States,Remote,Hybrid,Yes,Master’s degree,,0,Woman,Yes,
501,1,Mexico,Americas,MEX,0,9,"$20,000 - $39,999",I am not compensated on an hourly or project basis,Mexico,On site,Remote,Yes,Bachelor’s degree,,1,Man,Yes,
502,1,United States,Americas,USA,0,8,"$40,000 - $59,999",,United States,Remote,Hybrid,Yes,Bachelor’s degree,,1,Woman,Yes,
503,0,Canada,Americas,CAN,15,20,I am not compensated on a yearly basis,$100 - $124,Canada,Remote,Remote,No,Master’s degree,,0,Woman,Yes,
504,0,Canada,Americas,CAN,5,3,I am not compensated on a yearly basis,$75 - $99,Canada,Remote,Remote,No,Bachelor’s degree,,1,Man,Yes,
505,0,United States,Americas,USA,11,16,"$120,000 - $139,999",,United States,Remote,Remote,No,Bachelor’s degree,,0,Woman,Yes,
506,0,United States,Americas,USA,10,31,,$100 - $124,United States,Remote,Remote,No,Doctoral degree,,0,Woman,Yes,"Stephanie Evergreen, Ann Emery, Cole Knaflic, Andy Kirk, Alberto Cairo"
507,0,Spain,Europe,ESP,4,12,I am not compensated on a yearly basis,$15 - $29,Spain,Remote,Remote,Yes,Bachelor’s degree,,1,Woman,Yes,"Nathan Yau, Giorgia Lupi, Mike Brondbjerg, Zach Lieberman"
508,0,United Kingdom,Europe,GBR,2,9,"$140,000 - $159,999",$75 - $99,United Kingdom,Remote,Hybrid,Yes,Bachelor’s degree,,0,Man,Yes,
509,0,United States,Americas,USA,8,18,"$60,000 - $79,999",$150 - $174,United States,Remote,Remote,No,Doctoral degree,,0,Man,No,"Cédric Scherer, Georgios Karamanis, John Burn-Murdoch, Will Chase"
510,0,United States,Americas,USA,5,22,I am not compensated on a yearly basis,$100 - $124,United States,Remote,Remote,No,Bachelor’s degree,,0,Woman,,shirley wu
511,0,United States,Americas,USA,10,24,I am not compensated on a yearly basis,$200 - $224,United States,Remote,Remote,No,Bachelor’s degree,,0,Woman,No,
512,1,Pakistan,Asia,PAK,2,0,I am not compensated on a yearly basis,I am not compensated on an hourly or project basis,Pakistan,Remote,Remote,Yes,High school diploma,,0,Woman,No,
513,0,Netherlands,Europe,NLD,22,25,"$40,000 - $59,999",$75 - $99,Netherlands,Hybrid,Hybrid,No,Bachelor’s degree,,1,Man,Yes,
514,0,United States,Americas,USA,6,30,,$60 - $74,United States,Remote,Remote,Yes,Bachelor’s degree,,0,Woman,,
515,0,New Zealand,Oceania,NZL,6,20,"$180,000 - $199,999",,New Zealand,On site,Hybrid,No,Master’s degree,,0,Man,,
516,0,Italy,Europe,ITA,24,20,"$40,000 - $59,999",I am not compensated on an hourly or project basis,Italy,On site,On site,No,Doctoral degree,ELK,1,Man,Yes,
517,0,Australia,Oceania,AUS,10,22,"$80,000 - $99,999",,Australia,Remote,Hybrid,No,Doctoral degree,,0,Woman,Yes,Giorgio Lupi
518,0,United States,Americas,USA,24,15,"$80,000 - $99,999",,United States,On site,Hybrid,Yes,Doctoral degree,,1,Woman,Yes,
519,0,Thailand,Asia,THA,10,31,,$125 - $149,Thailand,Hybrid,On site,No,Master’s degree,,0,Man,No,"Newspapers, journals, Twitter, facebook"
520,0,United States,Americas,USA,18,22,"$100,000 - $119,999",,United States,On site,Hybrid,No,Doctoral degree,,0,Man,Yes,"Moritz Stefaner, Shirley Wu, Nadieh Bremer, Jeff Heer, Bongshin Lee"
521,0,Canada,Americas,CAN,7,11,"$60,000 - $79,999",,Canada,On site,On site,No,Doctoral degree,,1,Man,Yes,
522,0,France,Europe,FRA,27,28,,,France,Hybrid,Hybrid,No,Doctoral degree,OmniGraffle,0,Man,No,"Alberto Cairo, Andy Kirk, Robert Kosara, Cole Knaflic, Xemartin Laborde"
523,0,United States,Americas,USA,7,5,"$60,000 - $79,999",I am not compensated on an hourly or project basis,United States,Remote,Hybrid,Yes,Master’s degree,SAS,0,Man,Yes,
524,0,Russia,Europe,RUS,2,3,"Less than $10,000",Less than $15,Russia,Remote,Remote,Yes,Master’s degree,,1,Man,No,"Daniel Huffman, Lisa Charlotte Muth"
525,1,United States,Americas,USA,4,2,"$120,000 - $139,999",I am not compensated on an hourly or project basis,United States,Remote,Remote,Yes,Bachelor’s degree,,0,Woman,Yes,Teneika Askew; Mikayla Edwards
526,1,Brazil,Americas,BRA,4,3,"$10,000 - $19,999",Less than $15,Brazil,Remote,Remote,Yes,Bachelor’s degree,,1,Man,Yes,"Giorgia Lupi, Nadieh Bremer, Alberto Cairo"
527,0,Switzerland,Europe,CHE,3,6,"$80,000 - $99,999",,Switzerland,On site,Hybrid,No,Doctoral degree,,0,Woman,Yes,Twitter folk
528,0,United States,Americas,USA,3,5,"$60,000 - $79,999",,United States,Remote,Remote,Yes,Master’s degree,,0,Woman,Yes,
529,0,Canada,Americas,CAN,2,10,"$40,000 - $59,999",,Canada,Hybrid,Hybrid,No,Master’s degree,Qualtrics,1,Self-described or Prefer not to say,Yes,
530,1,United States,Americas,USA,5,4,"$80,000 - $99,999",$30 - $44,United States,Remote,Hybrid,Yes,Bachelor’s degree,,0,Woman,Yes,
531,0,United Kingdom,Europe,GBR,5,22,"$60,000 - $79,999",,United Kingdom,Hybrid,Hybrid,Yes,Bachelor’s degree,Infogram,1,Man,Yes,Pinterest
532,0,United States,Americas,USA,7,12,"$180,000 - $199,999",,United States,Remote,Remote,No,Master’s degree,,0,Woman,Yes,
533,0,United States,Americas,USA,8,30,"$140,000 - $159,999",,United States,Remote,Remote,Yes,Bachelor’s degree,,0,Woman,Yes,
534,0,United States,Americas,USA,2,1,"$80,000 - $99,999",I am not compensated on an hourly or project basis,United States,Remote,Remote,No,Bachelor’s degree,,0,Woman,No,"Tanya Shapiro, Jonathan Schwabish, Cedric Scherer"
535,0,United States,Americas,USA,6,16,"$80,000 - $99,999",I am not compensated on an hourly or project basis,United States,Hybrid,Hybrid,Yes,Bachelor’s degree,,0,Man,Yes,
536,1,United States,Americas,USA,1,3,"$60,000 - $79,999",,United States,On site,Hybrid,Yes,Master’s degree,,0,Man,Yes,
537,0,Portugal,Europe,PRT,2,9,,$45 - $59,Portugal,Remote,Hybrid,Yes,Master’s degree,,1,Woman,Yes,Meetup talks like from DataVis Lisboa
538,0,Peru,Americas,PER,10,15,"$20,000 - $39,999",Less than $15,Peru,Remote,Remote,No,Master’s degree,,0,Man,No,
539,0,United States,Americas,USA,8,11,"$60,000 - $79,999",,United States,On site,On site,Yes,Bachelor’s degree,,0,Man,No,"My data viz work is primarily in Tableau, so I tend to follow members of that community primarily."
540,0,United States,Americas,USA,20,17,"$160,000 - $179,999",I am not compensated on an hourly or project basis,United States,Remote,Remote,No,Bachelor’s degree,,0,Man,Yes,Economist Daily Graphic and Intel unit always great!
541,0,United States,Americas,USA,3,11,,$75 - $99,United States,Remote,Remote,Yes,Master’s degree,,0,Woman,Yes,Nadieh Bremer
542,1,United States,Americas,USA,3,0,"$80,000 - $99,999",,United States,Hybrid,Hybrid,No,Master’s degree,,1,Man,Yes,Cole Knaflic; Curran Kelleher; Raeedah Wahid; John Muyskens
543,1,United States,Americas,USA,4,6,"$180,000 - $199,999",I am not compensated on an hourly or project basis,United States,Remote,Remote,No,Master’s degree,,0,Man,,
544,1,United Kingdom,Europe,GBR,2,20,"$20,000 - $39,999",,United Kingdom,Hybrid,Hybrid,No,Master’s degree,,0,Man,Yes,
545,0,United States,Americas,USA,6,8,"$60,000 - $79,999",$75 - $99,United States,Hybrid,Hybrid,No,Master’s degree,,0,Woman,,Ann K Emery; Steve Wexler; Jon Swabish; Stephanie Evergreen; Flerlage Twins
546,1,United States,Americas,USA,8,10,"$60,000 - $79,999",,United States,Remote,Remote,Yes,Master’s degree,,1,Woman,Yes,
547,0,United States,Americas,USA,10,12,"$60,000 - $79,999",$60 - $74,United States,Hybrid,Remote,Yes,Master’s degree,,0,Man,No,
548,0,United States,Americas,USA,10,10,"$80,000 - $99,999",,United States,Remote,Remote,No,Doctoral degree,,0,Man,No,
549,0,United States,Americas,USA,15,22,"$60,000 - $79,999",$100 - $124,United States,Hybrid,Hybrid,No,Doctoral degree,,0,Woman,No,"Ann Emery, Cole Nussbaum"
550,0,United States,Americas,USA,6,10,"$100,000 - $119,999",$100 - $124,United States,Remote,Remote,No,Master’s degree,,0,Woman,Yes,
551,0,United States,Americas,USA,4,9,"$80,000 - $99,999",I am not compensated on an hourly or project basis,United States,Hybrid,Remote,No,Bachelor’s degree,,0,Self-described or Prefer not to say,No,Stephanie Evergreen
552,0,Germany,Europe,DEU,5,4,"$20,000 - $39,999",,Germany,Hybrid,Hybrid,No,Master’s degree,Inkscape (free alternative to Illustrator),1,Man,Yes,"Moritz Stefaner, Russel Goldenberg, Matthias Stahl"
553,0,India,Asia,IND,2,3,"$40,000 - $59,999",,India,Remote,Remote,Yes,Master’s degree,Snowflake.io,1,Man,Yes,
554,0,United States,Americas,USA,5,10,"$160,000 - $179,999",,United States,Hybrid,Hybrid,No,Master’s degree,,1,Man,Yes,
555,0,United States,Americas,USA,5,7,"$100,000 - $119,999",,United States,Hybrid,Remote,Yes,Doctoral degree,,0,Woman,Yes,
556,0,Italy,Europe,ITA,8,5,"$20,000 - $39,999",,Italy,On site,Remote,No,Master’s degree,,1,Man,Yes,
557,0,United States,Americas,USA,8,18,"$180,000 - $199,999",,United States,Remote,Remote,Yes,Bachelor’s degree,,0,Man,Yes,
558,0,United States,Americas,USA,5,14,"$120,000 - $139,999",,United States,Hybrid,Hybrid,Yes,Master’s degree,,0,Woman,Yes,
559,1,United States,Americas,USA,5,10,,$75 - $99,United States,,Remote,No,Master’s degree,,0,Woman,Yes,"Andy Kirk, Steve Few, Alberto Cairo"
560,0,United States,Americas,USA,4,15,"$120,000 - $139,999",I am not compensated on an hourly or project basis,United States,Remote,Remote,No,Master’s degree,Mixpanel,0,Woman,No,
561,0,Germany,Europe,DEU,5,9,"$80,000 - $99,999",,Germany,Hybrid,Remote,Yes,Doctoral degree,,1,Man,,"Andy Kriebel, d3.js, Tableau public"
562,0,Hungary,Europe,HUN,3,9,"$20,000 - $39,999",,Hungary,Hybrid,Hybrid,Yes,Master’s degree,,0,Man,Yes,Judit Bekker
563,0,Denmark,Europe,DNK,4,6,"$60,000 - $79,999",I am not compensated on an hourly or project basis,Denmark,Hybrid,Remote,Yes,Master’s degree,,1,Woman,Yes,
564,0,United States,Americas,USA,5,12,"$120,000 - $139,999",$75 - $99,United States,Remote,Remote,Yes,Master’s degree,Miro,1,Woman,,
565,0,United States,Americas,USA,4,13,"$80,000 - $99,999",,United States,Hybrid,Remote,Yes,Master’s degree,,0,Woman,No,"Stephanie Evergreen, Amelia Kohm"
566,0,Canada,Americas,CAN,4,3,"$60,000 - $79,999",,Canada,Remote,Hybrid,Yes,Bachelor’s degree,,0,Man,No,"ced scherer, hadley wickham, julia silge, david robinson"
567,0,Brazil,Americas,BRA,5,15,"$40,000 - $59,999",,Brazil,Hybrid,Hybrid,No,Master’s degree,,0,Man,No,
568,0,United States,Americas,USA,20,12,"$180,000 - $199,999",,United States,Remote,Remote,Yes,Master’s degree,,0,Man,No,
569,0,Switzerland,Europe,CHE,5,8,"$100,000 - $119,999",,Switzerland,Hybrid,Hybrid,Yes,Master’s degree,,1,Woman,No,
570,0,United States,Americas,USA,5,12,"$100,000 - $119,999",,United States,Remote,Hybrid,Yes,Master’s degree,Agency Analytics,0,Woman,,
571,0,Ireland,Europe,IRL,5,15,"$60,000 - $79,999",,Ireland,Remote,Remote,No,Master’s degree,,0,Woman,Yes,Lyndsey Poulter/Rody Zakovich/Andy Kriebel/Chantilly Jaegernauth/Albero Cairo/Amanda Makulec/Nadie Brehmer
572,0,United Kingdom,Europe,GBR,5,8,"$40,000 - $59,999",I am not compensated on an hourly or project basis,United Kingdom,Remote,Remote,Yes,Master’s degree,,0,Woman,No,google
573,0,United Kingdom,Europe,GBR,8,8,"$40,000 - $59,999",$15 - $29,United Kingdom,Hybrid,Hybrid,No,Master’s degree,,0,Woman,Yes,
574,0,United States,Americas,USA,3,7,"$60,000 - $79,999",,United States,Hybrid,Remote,No,Bachelor’s degree,,0,Woman,No,
575,0,Germany,Europe,DEU,3,20,"$60,000 - $79,999",,Germany,Hybrid,Hybrid,No,Master’s degree,,1,Man,,"Cédric Scherer, Lisa Charlotte Muth, Richard Brath, Helena Jambor"
576,0,Canada,Americas,CAN,4,10,,,Canada,Remote,Remote,No,Master’s degree,,0,Woman,No,Lots of examples with survey data
577,0,United States,Americas,USA,4,5,"$40,000 - $59,999",,United States,Remote,Remote,No,Master’s degree,,0,Woman,No,
578,0,United States,Americas,USA,5,9,"$80,000 - $99,999",,United States,Remote,Remote,No,Bachelor’s degree,,1,Woman,Yes,
579,0,United States,Americas,USA,1,3,"$60,000 - $79,999",$30 - $44,United States,Hybrid,On site,No,Master’s degree,,1,Man,Yes,"Expert guided videos, blogs and books"
580,0,United Kingdom,Europe,GBR,5,7,"$40,000 - $59,999",I am not compensated on an hourly or project basis,United Kingdom,Hybrid,Hybrid,No,Master’s degree,,0,Man,No,
581,0,Bangladesh,Asia,BGD,12,25,"$40,000 - $59,999",I am not compensated on an hourly or project basis,Bangladesh,On site,Hybrid,Yes,Master’s degree,,1,Man,,
582,0,New Zealand,Oceania,NZL,6,20,"$40,000 - $59,999",$15 - $29,New Zealand,Hybrid,Hybrid,Yes,Master’s degree,,0,Man,,
583,0,United States,Americas,USA,1,5,"$40,000 - $59,999",,United States,Remote,Remote,No,Master’s degree,,0,Woman,No,Ann Emery and Stephanie Evergreen
584,0,United States,Americas,USA,5,12,"$100,000 - $119,999",$45 - $59,United States,Remote,Hybrid,Yes,Master’s degree,,0,Woman,Yes,
585,0,India,Asia,IND,2,9,,,India,Hybrid,Remote,Yes,Doctoral degree,,0,Woman,No,"David Keyes, Cédric Scherer, anyone who makes their codes/courses publicly available"
586,0,Canada,Americas,CAN,10,10,"$60,000 - $79,999",$45 - $59,Canada,Remote,Remote,No,Master’s degree,,0,Man,No,
587,0,Chile,Americas,CHL,3,13,"$10,000 - $19,999",,Chile,On site,On site,No,Bachelor’s degree,Ex Libris' Alma Data Visualization,1,Man,Yes,
588,0,United Kingdom,Europe,GBR,7,23,"$80,000 - $99,999",,United Kingdom,Hybrid,Hybrid,No,Master’s degree,,1,Woman,Yes,
589,0,United States,Americas,USA,4,18,"$60,000 - $79,999",,United States,Remote,Hybrid,No,Master’s degree,,0,Woman,No,"Stephanie Evergreen, Ann Emery, Alberto Cairo"
590,0,India,Asia,IND,6,10,,,India,Hybrid,Hybrid,No,Master’s degree,Spotfire,1,Man,Yes,
591,0,United States,Americas,USA,4,18,"$100,000 - $119,999",I am not compensated on an hourly or project basis,United States,Remote,Remote,Yes,Bachelor’s degree,Alteryx,0,Woman,Yes,
592,0,United States,Americas,USA,20,25,"$100,000 - $119,999",,United States,Hybrid,On site,No,Master’s degree,,0,Man,Yes,"Steve Wexler, Nathan Yau, @SeattleDataGuy"
593,0,United States,Americas,USA,4,17,"$100,000 - $119,999",,United States,Hybrid,Hybrid,No,Doctoral degree,procreate,1,Woman,Yes,"stephanie evergreen, ann emery, David McCandless"
594,0,Brazil,Americas,BRA,3,5,"$20,000 - $39,999",,Brazil,Remote,Remote,Yes,Master’s degree,,1,Man,Yes,
595,0,United States,Americas,USA,3,12,"$80,000 - $99,999",,United States,On site,Remote,Yes,Master’s degree,,0,Woman,Yes,
596,0,United States,Americas,USA,4,7,"$120,000 - $139,999",,United States,Hybrid,Hybrid,No,Master’s degree,,0,Woman,No,
597,0,United States,Americas,USA,10,4,"$100,000 - $119,999",,United States,Hybrid,Hybrid,No,Doctoral degree,,1,Woman,Yes,
598,0,United States,Americas,USA,4,7,"$80,000 - $99,999",I am not compensated on an hourly or project basis,United States,Remote,Remote,Yes,Bachelor’s degree,,0,Woman,,"Georgia Lupi. Heather Krause, We All Count. Cole Nussbaumer Knaflic."
599,0,United States,Americas,USA,5,6,"$100,000 - $119,999",,United States,Remote,Remote,No,Bachelor’s degree,"InDesign, Xd",0,Self-described or Prefer not to say,No,
600,0,Canada,Americas,CAN,4,12,"$120,000 - $139,999",,Canada,Remote,On site,No,Master’s degree,,1,Woman,No,
601,0,India,Asia,IND,5,6,"Less than $10,000",Less than $15,India,Remote,Remote,Yes,Master’s degree,,0,Woman,Yes,
602,0,United States,Americas,USA,2,5,I am not compensated on a yearly basis,I am not compensated on an hourly or project basis,United States,Remote,Hybrid,No,Master’s degree,,0,Woman,Yes,
603,0,United States,Americas,USA,7,8,"$140,000 - $159,999",I am not compensated on an hourly or project basis,United States,Hybrid,Remote,No,Master’s degree,,1,Woman,Yes,
604,0,United States,Americas,USA,2,10,"$40,000 - $59,999",,United States,Hybrid,Hybrid,Yes,Bachelor’s degree,,0,Man,No,Ann Emery :)
605,0,United States,Americas,USA,5,4,"$120,000 - $139,999",I am not compensated on an hourly or project basis,United States,On site,On site,Yes,Master’s degree,,0,Man,Yes,
606,0,United States,Americas,USA,25,25,"$100,000 - $119,999",,United States,Remote,Remote,No,Master’s degree,,0,Woman,Yes,
607,0,United States,Americas,USA,5,10,"$100,000 - $119,999",,United States,Remote,Hybrid,No,Master’s degree,,0,Woman,,"Ann Emery, Stephanie Evergreen, Jon Schwabish"
608,0,United States,Americas,USA,7,8,,,United States,Remote,Remote,No,Master’s degree,,0,Woman,Yes,
609,0,United States,Americas,USA,2,10,"$40,000 - $59,999",,United States,Remote,Remote,Yes,Master’s degree,,0,Woman,Yes,
610,0,United States,Americas,USA,2,4,"$100,000 - $119,999",,United States,Remote,Remote,No,Master’s degree,,0,Woman,Yes,"Mike Bostock, Nadine Brehmer"
611,0,Germany,Europe,DEU,3,3,"$40,000 - $59,999",,Germany,Remote,Remote,No,Master’s degree,,1,Woman,Yes,Moritz Stefaner
612,0,Norway,Europe,NOR,3,9,"$80,000 - $99,999",,Norway,Hybrid,Hybrid,Yes,Master’s degree,,1,Man,Yes,
613,0,Sweden,Europe,SWE,6,6,"$60,000 - $79,999",,Sweden,Hybrid,Hybrid,Yes,Master’s degree,,1,Woman,Yes,"Alli Torban, Andy Kirk, Evelina Judeikyte, Duncan Geere"
614,0,United States,Americas,USA,3,8,"$60,000 - $79,999",,United States,Remote,Remote,Yes,Master’s degree,Stata,0,Woman,Yes,
615,0,United States,Americas,USA,16,18,"$80,000 - $99,999",,United States,Remote,Remote,No,Doctoral degree,,0,Woman,No,
616,0,United States,Americas,USA,4,12,,,United States,Remote,Remote,No,Master’s degree,DataDog,0,Man,Yes,Tufte opened my eyes. I also like the playfulness of Nicky Case
617,0,Canada,Americas,CAN,15,20,"$120,000 - $139,999",,Canada,Remote,Remote,No,Master’s degree,,0,Woman,Yes,
618,0,United States,Americas,USA,27,30,"$120,000 - $139,999",,United States,On site,Hybrid,Yes,Bachelor’s degree,,0,Woman,No,
619,0,United States,Americas,USA,4,9,"$120,000 - $139,999",I am not compensated on an hourly or project basis,United States,Remote,Remote,Yes,Bachelor’s degree,,0,Woman,,
620,0,United Kingdom,Europe,GBR,10,19,"$80,000 - $99,999",,United Kingdom,Remote,Remote,Yes,Master’s degree,,0,Man,Yes,"Andy Kirk, Stephen Few, Andy Kreibel"
621,0,United Kingdom,Europe,GBR,20,20,"$60,000 - $79,999",,United Kingdom,Remote,Hybrid,No,Master’s degree,,0,Man,No,John Burn-Murdoch
622,0,India,Asia,IND,0,3,I am not compensated on a yearly basis,I am not compensated on an hourly or project basis,India,Remote,Remote,No,Bachelor’s degree,,0,Man,No,
623,0,United States,Americas,USA,5,3,"$180,000 - $199,999",,United States,Remote,Remote,No,Bachelor’s degree,,0,Man,Yes,
624,0,United States,Americas,USA,8,13,"$120,000 - $139,999",,United States,Remote,Remote,Yes,Master’s degree,,0,Woman,No,
625,0,United States,Americas,USA,2,0,"$60,000 - $79,999",,United States,Remote,Remote,No,Bachelor’s degree,,0,Man,Yes,
626,0,Spain,Europe,ESP,6,6,"$20,000 - $39,999",I am not compensated on an hourly or project basis,Spain,On site,Hybrid,No,Master’s degree,,0,Man,No,
627,0,United States,Americas,USA,5,14,"$60,000 - $79,999",,United States,Remote,Remote,No,Bachelor’s degree,,0,Man,Yes,
628,0,Spain,Europe,ESP,8,15,"$20,000 - $39,999",$30 - $44,Spain,Remote,Remote,Yes,Master’s degree,Inkscape,1,Man,No,
629,0,United States,Americas,USA,16,16,"$160,000 - $179,999",,United States,Remote,Remote,No,Doctoral degree,,0,Woman,Yes,
630,0,United States,Americas,USA,1,7,"$20,000 - $39,999",,United States,,Remote,No,Bachelor’s degree,,0,Man,Yes,
631,0,United States,Americas,USA,10,31,"$100,000 - $119,999",,United States,Remote,Remote,No,Bachelor’s degree,,0,Woman,No,
632,0,United States,Americas,USA,10,20,"$100,000 - $119,999",,United States,Remote,Hybrid,No,Master’s degree,,0,Woman,No,
633,0,United States,Americas,USA,6,6,"$100,000 - $119,999",,United States,On site,Hybrid,No,Master’s degree,,0,Woman,Yes,
634,0,Bangladesh,Asia,BGD,3,4,"$10,000 - $19,999",,Bangladesh,Hybrid,Remote,Yes,Bachelor’s degree,,1,Man,No,User-friendly tools and availability of resources
635,0,United States,Americas,USA,4,20,"$80,000 - $99,999",,United States,Hybrid,Hybrid,No,Bachelor’s degree,,0,Woman,,"Andy Kreibel,"
636,0,Uganda,Africa,UGA,5,11,,,Uganda,On site,Hybrid,Yes,Bachelor’s degree,,0,Man,Yes,Flerlage twins
637,0,United States,Americas,USA,5,30,"$200,000 - $219,999",,United States,Remote,Hybrid,Yes,Bachelor’s degree,,0,Man,Yes,"Shirley Wu, Nigel Holmes, RJ Andrews, Nadieh Bremmer, NYT team, SCMP team, Marcelo Duhalde, Aldofo Arranz, Alberto Cairo"
638,0,United States,Americas,USA,29,31,"$180,000 - $199,999",,United States,Remote,Remote,No,Doctoral degree,,0,Man,Yes,
639,0,Canada,Americas,CAN,10,25,"$140,000 - $159,999",,Canada,Remote,Remote,Yes,Doctoral degree,,0,Man,Yes,
640,0,Australia,Oceania,AUS,0,6,"$60,000 - $79,999",,Australia,Hybrid,Hybrid,No,Bachelor’s degree,,0,Man,No,
641,0,United Kingdom,Europe,GBR,4,4,"$20,000 - $39,999",I am not compensated on an hourly or project basis,United Kingdom,Hybrid,Hybrid,No,Bachelor’s degree,,0,Woman,Yes,
642,0,United States,Americas,USA,6,8,"$100,000 - $119,999",,United States,Hybrid,Hybrid,Yes,Master’s degree,,0,Woman,Yes,
643,0,United States,Americas,USA,15,31,"$160,000 - $179,999",$75 - $99,United States,Hybrid,Hybrid,No,Master’s degree,Cameo Enterprise Architecture,0,Woman,Yes,Other engineers
644,0,United States,Americas,USA,6,10,"$60,000 - $79,999",,United States,Remote,Remote,Yes,Master’s degree,,1,Self-described or Prefer not to say,No,
645,0,United States,Americas,USA,5,4,"$40,000 - $59,999",,United States,Hybrid,Hybrid,No,Bachelor’s degree,"Canva, eSpatial, Microsoft Word",0,Woman,No,Ann K. Emery (Depict Data Studio)
646,0,United Kingdom,Europe,GBR,12,22,"$140,000 - $159,999",,United Kingdom,Hybrid,Hybrid,Yes,Master’s degree,,0,Man,No,
647,0,United States,Americas,USA,8,15,"$80,000 - $99,999",,United States,Hybrid,Hybrid,No,Master’s degree,,0,Woman,,
648,0,United States,Americas,USA,21,21,"$100,000 - $119,999",,United States,On site,Hybrid,No,Master’s degree,,0,Woman,Yes,
649,0,Canada,Americas,CAN,13,13,"$100,000 - $119,999",,Canada,Hybrid,Remote,Yes,Master’s degree,,1,Man,Yes,
650,0,United States,Americas,USA,10,23,"$80,000 - $99,999",,United States,On site,On site,Yes,Master’s degree,SAS,0,Woman,No,
651,0,Argentina,Americas,ARG,11,15,"$40,000 - $59,999",I am not compensated on an hourly or project basis,Argentina,Remote,Remote,No,Master’s degree,,1,Woman,Yes,
652,0,United States,Americas,USA,6,10,"$60,000 - $79,999",,United States,Hybrid,Hybrid,No,Master’s degree,Canva,0,Self-described or Prefer not to say,No,
653,0,United States,Americas,USA,8,15,"$80,000 - $99,999",I am not compensated on an hourly or project basis,United States,Remote,Remote,No,Master’s degree,,0,Woman,No,
654,0,Canada,Americas,CAN,10,20,"$40,000 - $59,999",,Canada,Remote,Hybrid,Yes,Master’s degree,,1,Man,,
655,0,United States,Americas,USA,10,31,"$120,000 - $139,999",,United States,Hybrid,Hybrid,No,Bachelor’s degree,,0,Woman,Yes,
656,0,Japan,Asia,JPN,6,5,"$60,000 - $79,999",,Japan,On site,Remote,Yes,Master’s degree,,0,Man,Yes,
657,0,United States,Americas,USA,10,18,"$80,000 - $99,999",,United States,On site,Hybrid,No,Master’s degree,,0,Woman,No,
658,0,United States,Americas,USA,8,9,"$160,000 - $179,999",,United States,Remote,Remote,Yes,Bachelor’s degree,,0,Woman,Yes,"So many! Bloomberg business week, Data Sketches book (Shirley Wu + Nadieh Bremer)"
659,0,United States,Americas,USA,5,4,"$120,000 - $139,999",,United States,Remote,Hybrid,No,Bachelor’s degree,,0,Man,,
660,0,United States,Americas,USA,7,11,"$60,000 - $79,999",,United States,Hybrid,Hybrid,No,Bachelor’s degree,Infogram,0,Woman,No,
661,0,United States,Americas,USA,12,12,"$240,000 or more",,United States,Remote,Remote,No,Master’s degree,,0,Man,Yes,
662,0,United States,Americas,USA,8,19,,,United States,Remote,Remote,No,Doctoral degree,,0,Man,No,"The OGs - Tufte, Few, Cairo"
663,0,United States,Americas,USA,7,15,"$120,000 - $139,999",,United States,Remote,Hybrid,No,Master’s degree,,0,Man,Yes,
664,0,United States,Americas,USA,3,12,"$120,000 - $139,999",I am not compensated on an hourly or project basis,United States,Remote,Remote,No,Bachelor’s degree,"SVG, HTML/CSS",0,Man,Yes,
665,0,United States,Americas,USA,8,10,"$140,000 - $159,999",,United States,Remote,Remote,Yes,Master’s degree,,0,Man,Yes,Ken Flerlage
666,0,United Kingdom,Europe,GBR,1,22,,,United Kingdom,Remote,On site,Yes,Bachelor’s degree,,0,Woman,Yes,monachalabi; informationisbeautiful founder
667,0,United States,Americas,USA,3,22,"$100,000 - $119,999",,United States,Remote,Remote,No,Bachelor’s degree,,0,Man,,
668,0,United States,Americas,USA,8,11,"$200,000 - $219,999",,United States,Remote,Remote,No,Master’s degree,,0,Woman,Yes,
669,0,United States,Americas,USA,14,31,"$220,000 - $239,999",,United States,Remote,Remote,No,Master’s degree,,0,Man,No,
670,0,United States,Americas,USA,15,14,"$120,000 - $139,999",I am not compensated on an hourly or project basis,United States,,,Yes,Bachelor’s degree,,0,Man,No,
671,0,United States,Americas,USA,12,19,"$100,000 - $119,999",,United States,Remote,Remote,No,Master’s degree,Canva [NOT Canvas],0,Man,Yes,
672,0,Hungary,Europe,HUN,8,15,,$45 - $59,Hungary,Remote,Remote,No,Master’s degree,,1,Man,Yes,
673,0,United States,Americas,USA,10,10,"$80,000 - $99,999",I am not compensated on an hourly or project basis,United States,Hybrid,,No,Bachelor’s degree,Pentaho,0,Woman,No,
674,0,United States,Americas,USA,9,27,,,United States,Remote,Remote,No,Bachelor’s degree,,0,Man,Yes,"Andy Kriebel, Steve Wexler, Stephen Few, Cole Nussbaumer Knaflic"
675,0,United States,Americas,USA,10,25,,$100 - $124,United States,Hybrid,Hybrid,No,Bachelor’s degree,,0,Man,Yes,Tufte
676,0,United Kingdom,Europe,GBR,10,31,I am not compensated on a yearly basis,I am not compensated on an hourly or project basis,United Kingdom,Remote,Hybrid,No,Some college,,1,Self-described or Prefer not to say,Yes,
677,0,United States,Americas,USA,8,14,,$300 or more,United States,Remote,Remote,No,Master’s degree,Word,0,Woman,Yes,"Brent Dykes, Ann K. Emery, Kate Strachnyi, Alli Torban, Flerlage Twins, Zach Bowders, Christina Gorga"
678,0,United States,Americas,USA,18,26,"$60,000 - $79,999",,United States,Remote,Remote,No,Bachelor’s degree,,0,Woman,Yes,
679,0,United States,Americas,USA,8,6,,,United States,Remote,Hybrid,Yes,Bachelor’s degree,,0,Man,Yes,
680,0,Canada,Americas,CAN,10,13,"$80,000 - $99,999",,Canada,Remote,Hybrid,No,Bachelor’s degree,Miro,0,Woman,,
681,0,Canada,Americas,CAN,7,25,"$160,000 - $179,999",$100 - $124,Canada,Remote,Remote,No,Bachelor’s degree,,0,Man,,
682,0,Colombia,Americas,COL,15,30,"$60,000 - $79,999",$100 - $124,Colombia,Remote,Hybrid,No,Doctoral degree,,1,Man,Yes,interactivity and proprioceptive behavior
683,0,United States,Americas,USA,8,17,"$60,000 - $79,999",,United States,Hybrid,Hybrid,No,Bachelor’s degree,,0,Woman,No,Stephanie Evergreen
684,0,Australia,Oceania,AUS,14,20,"$60,000 - $79,999",,Australia,Hybrid,Hybrid,Yes,Bachelor’s degree,,0,Man,No,
685,0,Italy,Europe,ITA,9,14,"$100,000 - $119,999",,Italy,Remote,Remote,No,Bachelor’s degree,We have built our own javascript data visualization library,1,Man,Yes,Robert Monfera
686,0,United States,Americas,USA,9,12,"$140,000 - $159,999",,United States,Remote,Remote,No,Bachelor’s degree,,1,Woman,Yes,
687,0,United States,Americas,USA,7,11,"$140,000 - $159,999",,United States,Remote,Remote,Yes,Bachelor’s degree,Sigma,0,Woman,,"Alberto Cairo, Cole Nussbaumer Knaflic, Giorgia Lupi"
688,0,Lithuania,Europe,LTU,0,0,"Less than $10,000",Less than $15,Lithuania,Remote,Remote,Yes,High school diploma,,1,Man,No,
689,0,United Kingdom,Europe,GBR,24,24,"$140,000 - $159,999",I am not compensated on an hourly or project basis,United Kingdom,Hybrid,Hybrid,No,Bachelor’s degree,Domo,0,Man,Yes,
690,0,United Kingdom,Europe,GBR,10,24,"$120,000 - $139,999",,United Kingdom,Remote,Remote,No,Bachelor’s degree,,0,Man,Yes,Steve Wexler
691,0,Italy,Europe,ITA,6,10,I am not compensated on a yearly basis,$45 - $59,Italy,Remote,Hybrid,Yes,Master’s degree,Drawbot,1,Man,Yes,
692,0,United States,Americas,USA,17,24,"$160,000 - $179,999",,United States,Remote,Remote,No,Bachelor’s degree,,0,Man,Yes,
693,0,United States,Americas,USA,5,13,"$80,000 - $99,999",$45 - $59,United States,Remote,Hybrid,Yes,Doctoral degree,Open-source image editing software,1,Woman,Yes,"Chimdi Nwosu, Mike Cisneros, Steve Wexler, Eli Holder, Erica Gunn"
694,0,Netherlands,Europe,NLD,2,5,"$60,000 - $79,999",,Netherlands,Remote,Remote,No,Master’s degree,Visier,1,Woman,Yes,
695,0,United States,Americas,USA,24,24,,$100 - $124,United States,Remote,Remote,Yes,Master’s degree,,0,Woman,No,Anne Emery
696,1,India,Asia,IND,0,3,"Less than $10,000",I am not compensated on an hourly or project basis,India,Hybrid,Remote,Yes,Master’s degree,,1,Man,No,"David McCandless, Scott Reinhard, Nadieh Bremer"
697,0,United States,Americas,USA,0,9,,$100 - $124,United States,Remote,Remote,No,Doctoral degree,Canva,0,Woman,Yes,"Sheila B. Robinson, Stephanie Evergreen"
698,0,United States,Americas,USA,15,31,"$240,000 or more",,United States,Hybrid,Remote,No,High school diploma,,0,Man,Yes,
699,0,Germany,Europe,DEU,3,6,,$75 - $99,Germany,Remote,Remote,No,Doctoral degree,,1,Man,Yes,Nathan Yau; Jonathan Schwabisch; Sandra Redgen; Sonja Kuijpers; Nadieh Bremer; Florent Lavergne
700,0,Italy,Europe,ITA,2,11,"$60,000 - $79,999",,Italy,Hybrid,Remote,Yes,Master’s degree,,1,Woman,No,
701,0,United States,Americas,USA,10,10,"$100,000 - $119,999",$30 - $44,United States,Remote,Hybrid,No,Doctoral degree,,1,Woman,Yes,"nadieh Bremer, zan Armstrong, Lisa Charlotte muth"
702,0,Portugal,Europe,PRT,6,11,,$30 - $44,Portugal,Hybrid,Remote,Yes,Master’s degree,,0,Man,,
703,0,United States,Americas,USA,15,15,I am not compensated on a yearly basis,$175 - $199,United States,Remote,Remote,Yes,Master’s degree,,0,Woman,No,"Stephanie Evergreen, Ann Emory, Chris Lysy, Ama Nyame-Mensah, Heather Krause/We All Count"
704,0,India,Asia,IND,3,3,I am not compensated on a yearly basis,$45 - $59,India,Remote,Hybrid,Yes,Bachelor’s degree,,1,Man,Yes,
705,1,United States,Americas,USA,1,4,"$10,000 - $19,999",,United States,Remote,Remote,Yes,Bachelor’s degree,,1,Man,Yes,Stack Overflow and anything on Tableau Public
706,1,United States,Americas,USA,8,10,"$20,000 - $39,999",,United States,Hybrid,Hybrid,No,Master’s degree,,0,Woman,Yes,
707,1,United States,Americas,USA,4,4,"Less than $10,000",,United States,Hybrid,Hybrid,Yes,Bachelor’s degree,,0,Man,Yes,
708,0,Philippines,Asia,PHL,5,10,,$45 - $59,Philippines,Remote,Remote,Yes,Bachelor’s degree,,1,Woman,Yes,Georgia lupi
709,0,Netherlands,Europe,NLD,7,10,,$200 - $224,Netherlands,Remote,Remote,No,Master’s degree,,1,Woman,Yes,
710,0,Australia,Oceania,AUS,10,18,,$150 - $174,Australia,Remote,Remote,No,Master’s degree,,0,Man,Yes,
711,0,Brazil,Americas,BRA,12,14,"$10,000 - $19,999",$15 - $29,Brazil,Remote,Hybrid,No,Doctoral degree,,0,Man,No,
712,0,United Kingdom,Europe,GBR,5,6,"$40,000 - $59,999",,United Kingdom,Remote,Remote,No,Bachelor’s degree,,0,Woman,No,General public / posts I see online
713,0,Nepal,Asia,NPL,4,5,"Less than $10,000",,Nepal,Remote,Hybrid,Yes,Bachelor’s degree,,1,Man,Yes,"Tableau Public Viz of the day, #DataFam"
714,0,Finland,Europe,FIN,10,30,,$60 - $74,Finland,Remote,Hybrid,Yes,Doctoral degree,,1,Woman,Yes,
715,0,United Kingdom,Europe,GBR,7,9,I am not compensated on a yearly basis,$100 - $124,United Kingdom,Remote,Remote,No,Master’s degree,,1,Woman,Yes,
716,0,Canada,Americas,CAN,10,14,"$80,000 - $99,999",$100 - $124,Canada,Remote,Hybrid,No,Master’s degree,,0,Man,,
717,0,United States,Americas,USA,29,30,,$300 or more,United States,Remote,Remote,No,Master’s degree,,0,Man,Yes,
718,0,United States,Americas,USA,8,25,,,United States,Remote,Remote,No,Master’s degree,Word,0,Woman,,"Ann Emery, Stephanie Evergreen"
719,0,United States,Americas,USA,10,20,I am not compensated on a yearly basis,$75 - $99,United States,Remote,Hybrid,No,Master’s degree,,0,Man,No,
720,0,United States,Americas,USA,10,10,"$100,000 - $119,999",$150 - $174,United States,Remote,Remote,No,Master’s degree,,0,Woman,Yes,
721,1,United States,Americas,USA,2,3,,,United States,,On site,Yes,Some college,,0,Woman,Yes,allie torban
722,0,Switzerland,Europe,CHE,31,31,"$140,000 - $159,999",,Switzerland,Remote,Remote,No,Master’s degree,,1,Man,Yes,Walking around with open eyes
723,0,United States,Americas,USA,25,30,,$100 - $124,United States,Remote,Remote,No,Master’s degree,,0,Woman,Yes,"Alberto Cairo, Cole Nussbaumer Knaflic, Sarah Bell, Stephanie Evergreen, Nathan Yau, Stephen Few, Kenneth Field, John Nelson ... the list goes on!"
724,0,United States,Americas,USA,5,26,"$60,000 - $79,999",$30 - $44,United States,Remote,Hybrid,No,Master’s degree,,0,Woman,Yes,Stephanie Evergreen
725,0,United States,Americas,USA,8,15,,$75 - $99,United States,Remote,Remote,No,Bachelor’s degree,,0,Woman,No,
726,0,Germany,Europe,DEU,5,2,"$40,000 - $59,999",,Germany,Hybrid,Hybrid,No,Master’s degree,,1,Man,No,"Jürgen Bernard, Moritz Stefaner, Alice Thudt, Tamara Munzner, Sheelagh Carpendale, Mike Bostock, Lisa Charlotte Muth"
727,1,Canada,Americas,CAN,6,2,"$10,000 - $19,999",,Canada,Hybrid,Hybrid,No,Bachelor’s degree,,0,Man,Yes,
728,0,Germany,Europe,DEU,5,5,"$20,000 - $39,999",I am not compensated on an hourly or project basis,Germany,Hybrid,Hybrid,No,Master’s degree,,1,Man,No,"Cedric Scherer, Georgios Karamanis, Lisa Charlotte Muth"
729,0,Germany,Europe,DEU,3,5,,,Germany,Hybrid,Hybrid,No,Master’s degree,"Tablet: e.g., procreate",1,Woman,No,"giorgia lupi, stephanie posavec"
730,0,United States,Americas,USA,4,17,"$60,000 - $79,999",,United States,On site,Hybrid,Yes,Master’s degree,,1,Woman,No,
731,0,Slovenia,Europe,SVN,3,13,"$20,000 - $39,999",,Slovenia,Hybrid,Hybrid,No,Doctoral degree,,1,Woman,Yes,"Cedric Scherer, Mona Chabi, Georgia Lupi, Georgios K, Nadieh Bremer"
732,0,United States,Americas,USA,12,25,"$100,000 - $119,999",$100 - $124,United States,Remote,Remote,Yes,Bachelor’s degree,,0,Man,Yes,
733,0,United States,Americas,USA,8,8,"$60,000 - $79,999",$300 or more,United States,On site,Hybrid,No,Doctoral degree,,0,Man,Yes,
734,0,United States,Americas,USA,16,20,"$160,000 - $179,999",,United States,Hybrid,Hybrid,No,Doctoral degree,,1,Man,No,
735,0,United States,Americas,USA,31,31,,,United States,Remote,Remote,No,Master’s degree,,0,Man,Yes,
736,0,Germany,Europe,DEU,10,20,"$100,000 - $119,999",I am not compensated on an hourly or project basis,Germany,On site,Remote,Yes,Doctoral degree,,1,Woman,Yes,
737,0,United States,Americas,USA,11,11,"$60,000 - $79,999",$125 - $149,United States,Hybrid,Hybrid,No,Doctoral degree,,0,Man,Yes,Amy Cesal
738,0,Norway,Europe,NOR,10,22,"$100,000 - $119,999",$150 - $174,Norway,Hybrid,On site,No,Doctoral degree,After Effects,0,Man,,
739,1,United States,Americas,USA,2,2,I am not compensated on a yearly basis,$60 - $74,United States,Remote,Remote,Yes,Some college,,0,Woman,Yes,
740,0,Italy,Europe,ITA,6,3,"$40,000 - $59,999",,Italy,Remote,Hybrid,Yes,Master’s degree,,1,Woman,Yes,"Giorgia Lupi, Federica Fragapane"
741,0,United States,Americas,USA,3,10,"$80,000 - $99,999",$100 - $124,United States,Remote,Remote,No,Master’s degree,,0,Man,,
742,0,India,Asia,IND,1,1,"Less than $10,000",Less than $15,India,Hybrid,Remote,Yes,Master’s degree,,0,Man,No,
743,1,Australia,Oceania,AUS,7,10,"$60,000 - $79,999",,Australia,Hybrid,Hybrid,No,Master’s degree,,0,Man,No,
744,0,United States,Americas,USA,10,10,"$80,000 - $99,999",$200 - $224,United States,Remote,Remote,No,Master’s degree,Oracle Analytics Server,0,Woman,Yes,
745,0,Brazil,Americas,BRA,10,18,,Less than $15,Brazil,Remote,Remote,No,Doctoral degree,Adobe XD,1,Woman,,
746,0,Pakistan,Asia,PAK,4,4,"Less than $10,000",Less than $15,Pakistan,On site,Remote,Yes,Bachelor’s degree,,0,Man,No,
747,0,Netherlands,Europe,NLD,8,12,"$80,000 - $99,999",$75 - $99,Netherlands,Hybrid,Hybrid,No,Master’s degree,,1,Man,Yes,
748,0,Canada,Americas,CAN,3,9,"$60,000 - $79,999",$60 - $74,Canada,Remote,Remote,No,Bachelor’s degree,,0,Man,Yes,"Frederica Fragapane, Nadieh Bremer, Tableau #datafam"
749,0,United States,Americas,USA,0,31,,$45 - $59,United States,Remote,Hybrid,Yes,Bachelor’s degree,Knime,0,Man,,"Ryan Burge, Andy Kriebel"
750,0,Canada,Americas,CAN,10,25,"$40,000 - $59,999",,Canada,Remote,Remote,Yes,Bachelor’s degree,,0,Man,Yes,
751,0,United States,Americas,USA,26,30,"$100,000 - $119,999",$60 - $74,United States,Remote,Remote,No,Bachelor’s degree,,0,Woman,No,
752,0,United States,Americas,USA,10,6,"$120,000 - $139,999",,United States,Hybrid,Hybrid,No,Master’s degree,,0,Man,Yes,
753,0,Ethiopia,Africa,ETH,20,26,"$10,000 - $19,999",,Ethiopia,On site,Remote,Yes,Bachelor’s degree,,1,Man,Yes,"Experts working in Datacamp; Simplilearn, Linkedin etc"
754,0,Latvia,Europe,LVA,4,20,"$20,000 - $39,999",I am not compensated on an hourly or project basis,Latvia,Remote,Remote,Yes,Doctoral degree,,1,Woman,,
755,0,United States,Americas,USA,8,13,"$140,000 - $159,999",$150 - $174,United States,Remote,Remote,No,Master’s degree,,0,Woman,Yes,"Lisa Charlotte Muth, Jessica Hullman, Amanda Makulec, Gabrielle Merite, Alyssa Fowers, Stephanie Evergreen"
756,0,United States,Americas,USA,4,19,"$160,000 - $179,999",,United States,Remote,Hybrid,No,Master’s degree,,0,Woman,Yes,
757,0,United States,Americas,USA,4,10,"$160,000 - $179,999",I am not compensated on an hourly or project basis,United States,Hybrid,Hybrid,Yes,Master’s degree,,0,Woman,No,
758,0,United States,Americas,USA,5,11,"$60,000 - $79,999",,United States,On site,On site,No,Master’s degree,Visme,0,Woman,No,
759,0,United Kingdom,Europe,GBR,3,16,"$40,000 - $59,999",,United Kingdom,Remote,Remote,Yes,Master’s degree,,1,Man,Yes,"Federica Fragapane, Nathan Yau, Nadieh Bremer, Shirley Wu, Alberto Cairo, John Nelson (ESRI), Kenneth Field, Moritz Stefaner, Andy Kirk"
760,0,United Kingdom,Europe,GBR,4,15,"$60,000 - $79,999",,United Kingdom,Hybrid,Remote,Yes,Master’s degree,,0,Woman,No,
761,0,Denmark,Europe,DNK,2,2,"$60,000 - $79,999",$30 - $44,Denmark,Hybrid,Hybrid,No,Master’s degree,,0,Woman,,
762,0,Portugal,Europe,PRT,17,27,"$40,000 - $59,999",$60 - $74,Portugal,Remote,Remote,No,Master’s degree,,1,Man,,
763,0,Australia,Oceania,AUS,5,20,"$120,000 - $139,999",,Australia,Hybrid,Hybrid,No,Master’s degree,,0,Man,Yes,
764,0,Mexico,Americas,MEX,8,13,"$10,000 - $19,999",I am not compensated on an hourly or project basis,Mexico,Remote,Remote,Yes,Master’s degree,,1,Woman,No,
765,0,France,Europe,FRA,8,5,"$60,000 - $79,999",,France,Remote,Remote,Yes,Doctoral degree,Echarts,1,Woman,,
766,0,Turkey,Asia,TUR,1,30,"Less than $10,000",$15 - $29,Turkey,On site,Remote,Yes,Master’s degree,,0,Man,Yes,
767,0,Russia,Europe,RUS,1,27,I am not compensated on a yearly basis,$30 - $44,Russia,Remote,Remote,No,Master’s degree,,0,Self-described or Prefer not to say,Yes,
768,1,South Korea,Asia,PRK,3,1,,,South Korea,Remote,Remote,Yes,Bachelor’s degree,,0,Woman,Yes,"Shirley Wu, Giorgia Lupi, Moksha Data Studio"
769,0,Germany,Europe,DEU,1,14,,,Germany,Remote,Hybrid,Yes,Master’s degree,,0,Woman,Yes,"Sonja Kujipers, Stefanie Posavec"
770,0,United States,Americas,USA,5,25,"$160,000 - $179,999",,United States,Remote,Remote,No,Master’s degree,,0,Woman,,"Chartr, visual capitalist, information is beautiful, Pinterest, d3"
771,0,United States,Americas,USA,6,17,"$60,000 - $79,999",,United States,On site,On site,Yes,Master’s degree,,0,Woman,Yes,
772,0,United States,Americas,USA,4,12,"$60,000 - $79,999",,United States,Hybrid,Hybrid,No,Master’s degree,,0,Woman,Yes,
773,0,United States,Americas,USA,1,3,"$40,000 - $59,999",,United States,Remote,Remote,Yes,Master’s degree,,0,Woman,No,Multiple examples using data from a similar field.
774,0,Ireland,Europe,IRL,4,3,"$40,000 - $59,999",,Ireland,Hybrid,Hybrid,Yes,Master’s degree,,0,Man,No,
775,0,United States,Americas,USA,5,10,"$100,000 - $119,999",,United States,Hybrid,Remote,No,Master’s degree,,1,Woman,No,Stephanie Evergreen
776,0,United States,Americas,USA,5,4,"$60,000 - $79,999",I am not compensated on an hourly or project basis,United States,Hybrid,Hybrid,No,Master’s degree,,0,Woman,,
777,0,United States,Americas,USA,4,11,"$60,000 - $79,999",I am not compensated on an hourly or project basis,United States,Hybrid,Remote,Yes,Master’s degree,JMP,1,Man,Yes,
778,0,United States,Americas,USA,2,10,"$140,000 - $159,999",,United States,Remote,Remote,Yes,Master’s degree,Report Builder 3.0,0,Woman,Yes,
779,0,Mexico,Americas,MEX,4,12,"$40,000 - $59,999",,Mexico,On site,Hybrid,No,Doctoral degree,,0,Man,Yes,
780,0,United States,Americas,USA,3,26,"$100,000 - $119,999",,United States,Remote,Remote,No,Bachelor’s degree,"SQL Server Reporting Services, Pyramid Analytics",0,Woman,Yes,
781,0,United States,Americas,USA,8,10,"$100,000 - $119,999",,United States,Hybrid,Hybrid,No,Master’s degree,,0,Woman,Yes,
782,0,United States,Americas,USA,4,31,"$120,000 - $139,999",,United States,Remote,Hybrid,Yes,Master’s degree,,0,Woman,Yes,
783,0,Canada,Americas,CAN,8,8,"$60,000 - $79,999",,Canada,Hybrid,Hybrid,Yes,Master’s degree,,0,Woman,Yes,
784,0,Taiwan,Asia,TWN,3,4,"$80,000 - $99,999",,Taiwan,Remote,Remote,No,Master’s degree,,1,Man,No,"Alberto Cairo, Jonathan Shwabish,"
785,0,New Zealand,Oceania,NZL,4,21,"$120,000 - $139,999",$200 - $224,New Zealand,Hybrid,Hybrid,No,Master’s degree,,0,Woman,Yes,
786,0,United States,Americas,USA,4,4,"$80,000 - $99,999",I am not compensated on an hourly or project basis,United States,Hybrid,Hybrid,No,Master’s degree,,0,Woman,Yes,
787,0,United States,Americas,USA,10,17,"$140,000 - $159,999",,United States,Hybrid,Hybrid,No,Doctoral degree,,0,Man,Yes,
788,0,United States,Americas,USA,5,17,I am not compensated on a yearly basis,I am not compensated on an hourly or project basis,United States,On site,Hybrid,Yes,Master’s degree,,0,Self-described or Prefer not to say,Yes,
789,0,United States,Americas,USA,5,17,"$100,000 - $119,999",I am not compensated on an hourly or project basis,United States,Remote,Remote,No,Master’s degree,,0,Woman,No,
790,0,United States,Americas,USA,2,3,"$60,000 - $79,999",,United States,On site,Hybrid,No,Master’s degree,,0,Man,No,
791,0,United States,Americas,USA,6,12,"$60,000 - $79,999",,United States,On site,Hybrid,Yes,Master’s degree,,0,Man,Yes,
792,0,United States,Americas,USA,4,6,"$220,000 - $239,999",,United States,Hybrid,Hybrid,No,Bachelor’s degree,Superblocks,0,Man,Yes,
793,0,United Kingdom,Europe,GBR,2,4,"$20,000 - $39,999",,United Kingdom,Remote,Remote,No,Master’s degree,,0,Woman,Yes,
794,0,United States,Americas,USA,5,10,"$80,000 - $99,999",I am not compensated on an hourly or project basis,United States,Hybrid,Hybrid,No,Master’s degree,,0,Man,Yes,
795,0,United States,Americas,USA,0,7,"$60,000 - $79,999",$30 - $44,United States,Hybrid,Hybrid,No,Master’s degree,,0,Woman,No,
796,1,Brazil,Americas,BRA,3,4,"$10,000 - $19,999",I am not compensated on an hourly or project basis,Brazil,Hybrid,Hybrid,Yes,Master’s degree,,1,Man,Yes,
797,0,United States,Americas,USA,6,17,"$180,000 - $199,999",,United States,Remote,Hybrid,No,Master’s degree,,0,Man,Yes,
798,0,United States,Americas,USA,10,12,"$180,000 - $199,999",,United States,Remote,Remote,Yes,Master’s degree,,0,Man,Yes,
799,0,Spain,Europe,ESP,6,8,"$40,000 - $59,999",,Spain,Remote,Remote,No,Doctoral degree,,1,Man,No,
800,0,United States,Americas,USA,10,15,"$140,000 - $159,999",,United States,Remote,Remote,No,Master’s degree,,0,Man,Yes,
801,0,Canada,Americas,CAN,6,7,"$100,000 - $119,999",,Canada,Remote,Remote,No,Master’s degree,,0,Man,Yes,
802,0,United States,Americas,USA,8,18,"$100,000 - $119,999",,United States,Hybrid,Remote,Yes,Doctoral degree,Canva,0,Woman,No,
803,0,Hungary,Europe,HUN,7,12,"$10,000 - $19,999",,Hungary,Remote,Remote,No,Bachelor’s degree,,1,Man,No,
804,0,Argentina,Americas,ARG,2,5,"$10,000 - $19,999",$15 - $29,Argentina,Remote,Remote,No,Bachelor’s degree,,0,Man,No,
805,0,Poland,Europe,POL,1,1,"$10,000 - $19,999",Less than $15,Poland,Remote,Remote,Yes,Bachelor’s degree,,0,Woman,No,
806,0,Russia,Europe,RUS,9,21,"$20,000 - $39,999",$45 - $59,Russia,Hybrid,Hybrid,Yes,Master’s degree,,0,Man,,"Fernando Baptista, Antonio Farach, Nadieh Bremer, Scott Reinhard, Nadya Andrianova, John Grimwade, Alberto Cairo, David McCandless"
807,0,United States,Americas,USA,20,21,"$220,000 - $239,999",,United States,Hybrid,Hybrid,No,Master’s degree,,0,Man,No,Alberto Cairo
808,0,India,Asia,IND,8,14,"$80,000 - $99,999",,India,Hybrid,Hybrid,No,Master’s degree,,0,Man,Yes,
809,0,United States,Americas,USA,5,22,"$120,000 - $139,999",,United States,Remote,Remote,No,Bachelor’s degree,,0,Woman,No,
810,0,United States,Americas,USA,10,10,,,United States,Hybrid,Hybrid,Yes,Master’s degree,,0,Man,No,"steve wexler, Juice Analytics"
811,0,United Kingdom,Europe,GBR,10,10,"$60,000 - $79,999",,United Kingdom,Remote,Remote,No,Master’s degree,,0,Man,Yes,
812,0,United Kingdom,Europe,GBR,7,7,"$60,000 - $79,999",,United Kingdom,Hybrid,Hybrid,Yes,Bachelor’s degree,,1,Man,No,
813,0,United States,Americas,USA,7,9,"$80,000 - $99,999",,United States,Remote,Remote,No,Master’s degree,,0,Woman,No,
814,0,Germany,Europe,DEU,12,19,"$80,000 - $99,999",,Germany,Remote,Remote,Yes,Master’s degree,,1,Man,No,
815,0,Mongolia,Asia,MNG,2,1,I am not compensated on a yearly basis,I am not compensated on an hourly or project basis,Mongolia,Remote,Hybrid,Yes,Bachelor’s degree,,0,Man,Yes,
816,0,United States,Americas,USA,15,19,"$120,000 - $139,999",,United States,Remote,Remote,Yes,Master’s degree,,0,Man,Yes,
817,0,United States,Americas,USA,4,8,"$100,000 - $119,999",,United States,Remote,Remote,No,Bachelor’s degree,,0,Woman,Yes,
818,0,United States,Americas,USA,6,16,"$80,000 - $99,999",,United States,On site,Hybrid,No,Bachelor’s degree,,0,Woman,No,
819,0,India,Asia,IND,1,3,"$10,000 - $19,999",I am not compensated on an hourly or project basis,India,Remote,On site,Yes,Bachelor’s degree,,1,Woman,No,"giorgialupi, stephanie posavec, dear data,Beyond data"
820,0,Chile,Americas,CHL,5,30,"$20,000 - $39,999",$60 - $74,Chile,Hybrid,Hybrid,Yes,Bachelor’s degree,,0,Man,No,
821,0,South Africa,Africa,ZAF,8,20,"$120,000 - $139,999",,South Africa,On site,Hybrid,No,Master’s degree,,0,Man,Yes,Wide range of Data Visualisation Practitioners
822,0,United States,Americas,USA,9,12,"$220,000 - $239,999",,United States,Remote,Hybrid,Yes,Bachelor’s degree,,1,Man,Yes,
823,0,United States,Americas,USA,10,12,"$100,000 - $119,999",$75 - $99,United States,Remote,Remote,No,Master’s degree,Affinity Suite,0,Man,Yes,
824,0,United States,Americas,USA,5,20,"$140,000 - $159,999",,United States,Hybrid,Remote,No,Bachelor’s degree,,0,Man,Yes,"Jeffrey Shaffer, Ken Flerlage, Steve Wexler"
825,0,Norway,Europe,NOR,9,6,"$80,000 - $99,999",,Norway,Hybrid,Hybrid,Yes,Master’s degree,,1,Woman,Yes,
826,0,Spain,Europe,ESP,31,31,"$120,000 - $139,999",,Spain,Hybrid,Hybrid,No,Doctoral degree,Graphery,1,Man,Yes,
827,0,United Kingdom,Europe,GBR,16,16,"$40,000 - $59,999",I am not compensated on an hourly or project basis,United Kingdom,On site,On site,Yes,Master’s degree,,0,Man,Yes,
828,0,Brazil,Americas,BRA,5,20,"$10,000 - $19,999",,Brazil,Hybrid,Remote,Yes,Bachelor’s degree,,1,Woman,No,"Federica Fragapanni, Alberto Cairo, Andy Kirk, Georgia Lupi"
829,0,United States,Americas,USA,7,11,"$100,000 - $119,999",I am not compensated on an hourly or project basis,United States,Hybrid,Hybrid,Yes,Master’s degree,,0,Man,,
830,0,United States,Americas,USA,7,12,"$60,000 - $79,999",,United States,Remote,Hybrid,No,Master’s degree,,0,Woman,Yes,
831,0,Nigeria,Africa,NGA,10,25,"$140,000 - $159,999",,Nigeria,Hybrid,Hybrid,Yes,Doctoral degree,,0,Man,No,
832,0,India,Asia,IND,6,6,,,India,Hybrid,Hybrid,Yes,Master’s degree,,0,Man,Yes,"Andy Kribel , Flerage Twin"
833,0,United States,Americas,USA,3,3,"$40,000 - $59,999",$15 - $29,United States,Hybrid,Hybrid,No,Bachelor’s degree,,1,Self-described or Prefer not to say,Yes,
834,0,United States,Americas,USA,24,25,"$160,000 - $179,999",,United States,Remote,Remote,No,Doctoral degree,Astro tools,0,Woman,Yes,
835,0,United States,Americas,USA,3,20,"$60,000 - $79,999",,United States,Hybrid,Remote,No,Bachelor’s degree,,0,Woman,No,
836,0,United States,Americas,USA,10,16,"$40,000 - $59,999",,United States,Remote,Hybrid,Yes,Master’s degree,SAS,0,Woman,No,"Stephanie Evergreen, Ann Emery"
837,0,United States,Americas,USA,8,10,,$150 - $174,United States,Hybrid,Hybrid,No,Doctoral degree,,0,Woman,,
838,0,United States,Americas,USA,8,12,"$100,000 - $119,999",,United States,Remote,Hybrid,No,Master’s degree,Apache Superset,0,Man,Yes,"Charles Minard, Nadieh Bremer, Thomas Lin Pedersen, David Robinson"
839,0,Spain,Europe,ESP,10,28,"$80,000 - $99,999",,Spain,Remote,Remote,No,Master’s degree,,0,Man,Yes,
840,0,Netherlands,Europe,NLD,10,17,"$100,000 - $119,999",,Netherlands,Remote,Remote,Yes,Master’s degree,,0,Man,Yes,
841,0,Germany,Europe,DEU,12,12,"$80,000 - $99,999",,Germany,Hybrid,Hybrid,No,Doctoral degree,,1,Man,Yes,
842,0,Italy,Europe,ITA,5,20,,,Italy,On site,Hybrid,No,Bachelor’s degree,,1,Man,No,Mike Bostock
843,0,Russia,Europe,RUS,2,3,"$10,000 - $19,999",I am not compensated on an hourly or project basis,Russia,Remote,Remote,Yes,Some college,,0,Woman,No,
844,0,United States,Americas,USA,12,12,"$120,000 - $139,999",,United States,Remote,Remote,No,Master’s degree,,0,Woman,Yes,
845,0,United States,Americas,USA,8,7,"$120,000 - $139,999",,United States,Remote,Remote,No,Bachelor’s degree,,0,Woman,No,
847,0,United Kingdom,Europe,GBR,18,21,"$60,000 - $79,999",I am not compensated on an hourly or project basis,United Kingdom,Hybrid,Hybrid,No,Bachelor’s degree,,0,Man,Yes,
848,0,Serbia,Europe,SRB,6,20,"$40,000 - $59,999",,Serbia,Remote,Remote,No,Bachelor’s degree,,1,Man,Yes,"Other people work, good practice examples"
849,0,United Kingdom,Europe,GBR,8,8,"$40,000 - $59,999",,United Kingdom,Remote,Remote,No,Bachelor’s degree,Amazon Quicksight,0,Man,Yes,
850,0,United States,Americas,USA,9,9,"$140,000 - $159,999",I am not compensated on an hourly or project basis,United States,Remote,Remote,No,Bachelor’s degree,,0,Woman,Yes,
851,0,United States,Americas,USA,12,28,"$180,000 - $199,999",,United States,Remote,Remote,No,Bachelor’s degree,,0,Man,Yes,
852,0,United States,Americas,USA,9,25,"$100,000 - $119,999",,United States,Remote,Remote,Yes,Bachelor’s degree,,0,Man,Yes,
853,0,United Kingdom,Europe,GBR,6,13,"$40,000 - $59,999",,United Kingdom,Remote,Remote,Yes,Bachelor’s degree,,0,Woman,Yes,
854,0,United States,Americas,USA,6,20,,$30 - $44,United States,Remote,Remote,Yes,Bachelor’s degree,,0,Woman,Yes,"Stephanie Evergreen, Cole Nussbaumer, Alberto Cairo, Info Is Beautiful site, Tufte when I'm really stuck"
855,0,Brazil,Americas,BRA,6,6,"$100,000 - $119,999",,Brazil,On site,Remote,Yes,Bachelor’s degree,,1,Woman,No,
856,0,Russia,Europe,RUS,15,22,"$40,000 - $59,999",$15 - $29,Russia,Hybrid,Hybrid,Yes,Master’s degree,,0,Man,No,
857,0,United States,Americas,USA,14,30,"$160,000 - $179,999",I am not compensated on an hourly or project basis,United States,Remote,Hybrid,No,Bachelor’s degree,,0,Woman,Yes,
858,0,United States,Americas,USA,8,16,"$100,000 - $119,999",,United States,Remote,Remote,Yes,Bachelor’s degree,,0,Woman,,"Kevin & Ken Flerlage, Andy Kriebel, Jeffrey Schaeffer"
859,0,United States,Americas,USA,6,6,"$80,000 - $99,999",,United States,Remote,Remote,No,Bachelor’s degree,,0,Man,Yes,
860,0,United States,Americas,USA,12,18,"$80,000 - $99,999",,United States,Remote,Remote,Yes,Bachelor’s degree,,0,Man,Yes,
861,0,United States,Americas,USA,10,16,"$180,000 - $199,999",,United States,Hybrid,Remote,No,Bachelor’s degree,,1,Man,Yes,
862,0,United States,Americas,USA,18,22,,$300 or more,United States,Remote,Remote,No,Master’s degree,,0,Man,Yes,
863,1,Malaysia,Asia,MYS,2,15,,,Malaysia,Hybrid,Hybrid,Yes,Master’s degree,,0,Man,Yes,Not familiar with anyone yet
864,0,Germany,Europe,DEU,5,10,,$45 - $59,Germany,Remote,Hybrid,No,Doctoral degree,unity,1,Woman,Yes,
865,1,Australia,Oceania,AUS,1,7,,,Australia,Hybrid,Remote,Yes,Master’s degree,,1,Woman,Yes,
866,0,Brazil,Americas,BRA,2,0,I am not compensated on a yearly basis,I am not compensated on an hourly or project basis,Brazil,Remote,Remote,Yes,Doctoral degree,,1,Man,,
867,0,Netherlands,Europe,NLD,5,13,"$40,000 - $59,999",$75 - $99,Netherlands,Remote,Hybrid,No,Master’s degree,,1,Woman,No,
868,1,United States,Americas,USA,1,3,,,United States,Remote,Remote,Yes,Master’s degree,,0,Self-described or Prefer not to say,Yes,"Giorgia Lupi, Federica Fragapane"
869,0,Israel,Asia,ISR,2,8,"$100,000 - $119,999",$45 - $59,Israel,Remote,Hybrid,Yes,Master’s degree,,1,Woman,Yes,
870,0,France,Europe,FRA,4,10,"$60,000 - $79,999",I am not compensated on an hourly or project basis,France,Remote,Remote,No,Master’s degree,,1,Woman,Yes,
871,0,United States,Americas,USA,4,25,,$75 - $99,United States,Remote,Remote,Yes,Master’s degree,,0,Woman,Yes,"Meghan HarrisGabrielle Merite, Wendy Shijia, Sofia Martynovich, Will Chase, Alli Torban, Lace Padilla, Frank, Elavsky, Cedric Scherer, Alex Selby-Booth, Jon Schwabish, Steve Wexler, Nadieh Bremer, Shirley Wu, Fredrica Fragapane, Lisa Charlotte Muth, John Burn-Murdoch, Alberto Cairo, Amanda Makulec, Kenneth Field, Maarten Lambrechts, Manuel Lima, Moritz Stefaner"
872,0,Russia,Europe,RUS,9,19,"$40,000 - $59,999",$30 - $44,Russia,Hybrid,Hybrid,Yes,Master’s degree,,0,Woman,Yes,"Nadir Bremer, Giorgia Lupi, Alexander Bogachev, Alexey Novichkov, Datavis Society, Laury Frick,"
873,0,Germany,Europe,DEU,8,5,I am not compensated on a yearly basis,$100 - $124,Germany,Remote,Remote,Yes,Master’s degree,,1,Man,No,
874,0,South Africa,Africa,ZAF,2,10,"$40,000 - $59,999",I am not compensated on an hourly or project basis,South Africa,Remote,Hybrid,Yes,Bachelor’s degree,,1,Man,No,
875,0,Denmark,Europe,DNK,8,11,,$100 - $124,Denmark,Remote,Remote,No,Master’s degree,,1,Man,No,
876,0,United States,Americas,USA,5,14,,$150 - $174,United States,Remote,Remote,No,Bachelor’s degree,,0,Woman,Yes,
877,0,Spain,Europe,ESP,6,15,,$45 - $59,Spain,Remote,Hybrid,No,Master’s degree,,0,Man,,"Francesco Franchi, Accurat"
878,0,United Kingdom,Europe,GBR,10,12,,$100 - $124,United Kingdom,Remote,Hybrid,No,Master’s degree,,0,Woman,Yes,
879,0,United States,Americas,USA,6,25,"$120,000 - $139,999",,United States,On site,Hybrid,No,Doctoral degree,,0,Man,No,
880,0,United States,Americas,USA,2,25,"$60,000 - $79,999",,United States,Remote,Hybrid,No,Bachelor’s degree,Adobe InDesign,0,Woman,Yes,
881,0,United States,Americas,USA,8,3,"$140,000 - $159,999",,United States,Remote,Remote,No,Doctoral degree,,0,Man,No,
882,0,Russia,Europe,RUS,5,11,"$40,000 - $59,999",,Russia,On site,On site,No,Master’s degree,,1,Man,No,
883,0,United States,Americas,USA,5,10,,,United States,On site,Hybrid,Yes,Master’s degree,,0,Man,Yes,Tanya Shapiro
884,0,United States,Americas,USA,15,30,"$80,000 - $99,999",$150 - $174,United States,Remote,Remote,No,Bachelor’s degree,,0,Woman,Yes,
885,0,Russia,Europe,RUS,5,12,"$10,000 - $19,999",I am not compensated on an hourly or project basis,Russia,On site,Hybrid,No,Master’s degree,,1,Man,,
886,0,India,Asia,IND,9,12,,$60 - $74,India,Remote,Remote,Yes,Bachelor’s degree,,0,Man,Yes,
887,0,Spain,Europe,ESP,10,16,,$125 - $149,Spain,Remote,Remote,No,Bachelor’s degree,,1,Man,,
888,0,United States,Americas,USA,5,9,"$80,000 - $99,999",,United States,On site,Hybrid,Yes,Doctoral degree,,0,Woman,,
889,0,India,Asia,IND,10,25,"$120,000 - $139,999",$45 - $59,India,Hybrid,Remote,No,Master’s degree,,0,Man,Yes,
890,0,United Kingdom,Europe,GBR,5,17,"$40,000 - $59,999",,United Kingdom,On site,On site,No,High school diploma,,0,Man,,
891,0,United Kingdom,Europe,GBR,10,31,,$125 - $149,United Kingdom,Remote,Remote,No,High school diploma,DataGraph ; Jamovi,0,Man,Yes,Pamela Schultz at DataGraph
892,0,Singapore,Asia,SGP,4,4,"$20,000 - $39,999",,Singapore,Hybrid,Hybrid,No,Bachelor’s degree,Procreate,1,Woman,No,"Georgio Karamanis, Cedric Scherer, Hadley Wickham"
893,0,Germany,Europe,DEU,8,10,"$60,000 - $79,999",,Germany,Hybrid,Remote,Yes,Doctoral degree,,1,Man,No,
894,0,South Korea,Asia,PRK,14,9,"$60,000 - $79,999",,South Korea,On site,Hybrid,No,Doctoral degree,,0,Woman,No,
895,0,United States,Americas,USA,7,10,"$120,000 - $139,999",,United States,Remote,Remote,Yes,Doctoral degree,,0,Man,Yes,
896,0,Mexico,Americas,MEX,10,25,"Less than $10,000",,Mexico,On site,Hybrid,No,Master’s degree,,0,Woman,No,
897,0,United States,Americas,USA,10,24,"$120,000 - $139,999",,United States,Hybrid,On site,No,Doctoral degree,,1,Woman,Yes,
898,0,United States,Americas,USA,25,25,"$200,000 - $219,999",,United States,Hybrid,Remote,Yes,Doctoral degree,,0,Man,No,
899,0,United States,Americas,USA,8,2,"$80,000 - $99,999",I am not compensated on an hourly or project basis,United States,Hybrid,Remote,No,Master’s degree,,0,Man,Yes,
900,0,Australia,Oceania,AUS,4,2,"$140,000 - $159,999",,Australia,Hybrid,Hybrid,No,Master’s degree,,1,Man,Yes,
901,0,United States,Americas,USA,4,10,"$40,000 - $59,999",$100 - $124,United States,,Remote,No,Master’s degree,,0,Woman,No,Ann K Emery
902,1,United States,Americas,USA,3,10,"$100,000 - $119,999",,United States,Remote,Hybrid,No,Master’s degree,,0,Woman,Yes,
903,0,Netherlands,Europe,NLD,3,8,,$150 - $174,Netherlands,Remote,Remote,Yes,Master’s degree,"Houdini, Unity",1,Man,No,
904,1,United States,Americas,USA,1,5,"$80,000 - $99,999",,United States,Remote,Remote,Yes,Master’s degree,,0,Woman,Yes,
905,0,Switzerland,Europe,CHE,7,17,,$175 - $199,Switzerland,Remote,Hybrid,Yes,Master’s degree,,0,Man,No,
906,0,India,Asia,IND,6,13,"$40,000 - $59,999",,India,Hybrid,Remote,Yes,Master’s degree,"Seaborn, altair, matplotlib, tableau public",1,Man,Yes,
907,1,United States,Americas,USA,2,7,,$30 - $44,United States,Remote,Remote,No,Bachelor’s degree,,0,Man,Yes,"Amy O'Kruk, Frank Elavsky, Krisztina Szucs, Federica Fragapane"
908,0,Czech Republic (Czechia),Europe,CZE,5,7,,$15 - $29,Czech Republic (Czechia),On site,On site,Yes,Master’s degree,,0,Man,Yes,
909,0,Canada,Americas,CAN,5,1,"$40,000 - $59,999",,Canada,Remote,Remote,No,Doctoral degree,,1,Woman,Yes,
910,0,United States,Americas,USA,3,4,"$60,000 - $79,999",I am not compensated on an hourly or project basis,United States,Hybrid,Hybrid,No,Master’s degree,,1,Woman,Yes,
911,0,United States,Americas,USA,4,12,"$80,000 - $99,999",,United States,Remote,Remote,Yes,Master’s degree,,0,Woman,Yes,
912,0,Germany,Europe,DEU,10,25,"$100,000 - $119,999",,Germany,Hybrid,Hybrid,No,Master’s degree,,0,Man,Yes,
913,0,United States,Americas,USA,4,5,"$60,000 - $79,999",,United States,Hybrid,Hybrid,No,Master’s degree,,0,Woman,,
914,0,United Kingdom,Europe,GBR,5,5,"$80,000 - $99,999",,United Kingdom,Remote,Remote,Yes,Master’s degree,,0,Man,Yes,
915,0,United States,Americas,USA,5,10,"$120,000 - $139,999",,United States,Remote,Hybrid,Yes,Master’s degree,,0,Woman,No,
916,0,Finland,Europe,FIN,4,10,"$40,000 - $59,999",,Finland,Hybrid,Hybrid,Yes,Master’s degree,,1,Woman,,
917,0,Denmark,Europe,DNK,3,2,"$80,000 - $99,999",,Denmark,On site,On site,No,Doctoral degree,SAS,1,Woman,Yes,
918,0,United States,Americas,USA,2,15,"$60,000 - $79,999",,United States,On site,Remote,Yes,Master’s degree,,0,Woman,No,
919,1,United Kingdom,Europe,GBR,1,12,"$60,000 - $79,999",,United Kingdom,Hybrid,Hybrid,Yes,Bachelor’s degree,,0,Woman,Yes,"Anyone and everyone, I learn and get ideas from seeing other work"
920,0,United States,Americas,USA,5,6,"$240,000 or more",,United States,Hybrid,Hybrid,No,Master’s degree,,1,Woman,Yes,
921,0,United States,Americas,USA,4,12,"$60,000 - $79,999",,United States,Hybrid,Hybrid,No,Doctoral degree,,1,Woman,,"Ann K Emery, Stephanie Evergreen"
922,0,United States,Americas,USA,0,3,"$60,000 - $79,999",,United States,Remote,Remote,No,Master’s degree,,0,Woman,No,
923,0,United States,Americas,USA,5,15,"$100,000 - $119,999",I am not compensated on an hourly or project basis,United States,Remote,Remote,No,Master’s degree,,0,Woman,Yes,
924,0,United States,Americas,USA,5,8,"$80,000 - $99,999",,United States,Hybrid,Remote,Yes,Master’s degree,,0,Man,No,
925,0,France,Europe,FRA,2,6,"$40,000 - $59,999",,France,Hybrid,Hybrid,No,Master’s degree,,0,Man,,
926,0,United Kingdom,Europe,GBR,8,15,"$80,000 - $99,999",,United Kingdom,Hybrid,Hybrid,No,Master’s degree,,0,Man,No,
927,0,United States,Americas,USA,4,12,"$60,000 - $79,999",,United States,On site,Hybrid,Yes,Master’s degree,,0,Woman,No,
928,0,United Kingdom,Europe,GBR,4,4,"$60,000 - $79,999",,United Kingdom,Hybrid,Hybrid,Yes,Master’s degree,,0,Man,No,
929,0,United States,Americas,USA,12,25,"$160,000 - $179,999",,United States,Hybrid,Hybrid,No,Master’s degree,,0,Man,Yes,
930,0,United States,Americas,USA,5,10,"$80,000 - $99,999",,United States,Remote,Remote,Yes,Master’s degree,,0,Woman,No,
931,0,Italy,Europe,ITA,12,12,"$20,000 - $39,999",,Italy,Remote,Hybrid,No,Doctoral degree,,1,Man,,
932,0,United States,Americas,USA,4,8,"$80,000 - $99,999",,United States,Hybrid,Hybrid,Yes,Doctoral degree,,0,Self-described or Prefer not to say,Yes,
933,0,United States,Americas,USA,2,5,I am not compensated on a yearly basis,I am not compensated on an hourly or project basis,United States,Remote,On site,No,Doctoral degree,,0,Man,Yes,
934,0,United States,Americas,USA,2,16,"$100,000 - $119,999",,United States,Hybrid,Hybrid,No,Bachelor’s degree,,1,Woman,Yes,
935,0,Ecuador,Americas,ECU,4,10,"$20,000 - $39,999",,Ecuador,Remote,Remote,Yes,Bachelor’s degree,,1,Woman,Yes,
936,0,United States,Americas,USA,5,20,"$120,000 - $139,999",,United States,Remote,Remote,,Master’s degree,"Sketch, Axure",0,Man,Yes,
937,0,Canada,Americas,CAN,5,5,"$60,000 - $79,999",,Canada,Remote,Remote,No,Master’s degree,,0,Woman,Yes,
938,0,United States,Americas,USA,5,5,"$60,000 - $79,999",,United States,Hybrid,Hybrid,No,Master’s degree,,0,Woman,Yes,"Ann K. Emery, Heather Krause"
939,0,United States,Americas,USA,4,10,"$60,000 - $79,999",,United States,Remote,Hybrid,No,Master’s degree,,0,Man,No,
940,0,United States,Americas,USA,2,20,,,United States,On site,On site,No,Master’s degree,,0,Woman,Yes,
941,0,United States,Americas,USA,5,10,"$80,000 - $99,999",,United States,Remote,Remote,Yes,Doctoral degree,,0,Woman,Yes,
942,1,United States,Americas,USA,2,20,I am not compensated on a yearly basis,$100 - $124,United States,Remote,Remote,No,Bachelor’s degree,,1,Woman,Yes,
943,0,United States,Americas,USA,3,2,"$40,000 - $59,999",,United States,Remote,Remote,No,Master’s degree,,0,Man,Yes,
944,0,United Kingdom,Europe,GBR,5,7,"$60,000 - $79,999",,United Kingdom,Hybrid,Remote,Yes,Master’s degree,,1,Woman,Yes,
945,0,United States,Americas,USA,3,25,"$80,000 - $99,999",,United States,Remote,Remote,No,Doctoral degree,,0,Woman,Yes,"Andy Kriebel, Chimdi Nwosu, Kevin Flerlage, Ken Flerlage, Anthony Smoak"
946,0,United States,Americas,USA,4,4,"$80,000 - $99,999",$45 - $59,United States,Remote,Hybrid,No,Master’s degree,,0,Man,Yes,
947,0,United States,Americas,USA,5,15,"$80,000 - $99,999",,United States,Remote,Remote,No,Doctoral degree,,0,Man,No,Cederic Scherer
948,0,United States,Americas,USA,4,10,"$60,000 - $79,999",,United States,Remote,Hybrid,No,Master’s degree,,0,Woman,,
949,0,United States,Americas,USA,3,20,"$80,000 - $99,999",,United States,Remote,Remote,Yes,Master’s degree,,1,Man,Yes,
950,0,United States,Americas,USA,3,18,"$40,000 - $59,999",,United States,Hybrid,Remote,Yes,Master’s degree,Salesforce,1,Woman,Yes,
951,0,United States,Americas,USA,5,31,"$80,000 - $99,999",,United States,Remote,Remote,Yes,Bachelor’s degree,,0,Woman,,Stephanie Evergreen
952,0,United States,Americas,USA,4,3,"$100,000 - $119,999",,United States,Remote,Remote,Yes,Some college,,0,Man,,
953,0,United States,Americas,USA,5,5,"$60,000 - $79,999",,United States,Remote,Remote,Yes,Master’s degree,Spotfire,0,Man,Yes,
954,0,United Kingdom,Europe,GBR,5,9,"$60,000 - $79,999",,United Kingdom,Hybrid,Hybrid,No,Bachelor’s degree,,0,Man,,
955,0,United Kingdom,Europe,GBR,5,12,"$60,000 - $79,999",I am not compensated on an hourly or project basis,United Kingdom,Remote,Hybrid,No,Master’s degree,,0,Man,,
956,0,Italy,Europe,ITA,2,2,"$20,000 - $39,999",,Italy,On site,On site,No,Master’s degree,,0,Man,Yes,
957,0,United States,Americas,USA,8,12,"$100,000 - $119,999",,United States,Hybrid,Hybrid,No,Doctoral degree,Amcharts,1,Man,Yes,
958,0,United States,Americas,USA,2,10,,$75 - $99,United States,Remote,Hybrid,No,Master’s degree,,0,Man,Yes,
959,0,United States,Americas,USA,3,5,"$60,000 - $79,999",,United States,Remote,Remote,Yes,Master’s degree,,0,Woman,No,
960,0,United States,Americas,USA,31,31,"$160,000 - $179,999",I am not compensated on an hourly or project basis,United States,Remote,Remote,No,Doctoral degree,,0,Woman,No,
961,0,Argentina,Americas,ARG,3,10,I am not compensated on a yearly basis,I am not compensated on an hourly or project basis,Argentina,Remote,Remote,Yes,,Periscope Data,1,Woman,No,
962,0,Sweden,Europe,SWE,8,20,"$60,000 - $79,999",,Sweden,Hybrid,Remote,Yes,Master’s degree,,1,Man,No,
963,0,Uganda,Africa,UGA,3,6,"$10,000 - $19,999",,Uganda,On site,Remote,Yes,Bachelor’s degree,Canva,0,Woman,,
964,0,France,Europe,FRA,14,10,"$40,000 - $59,999",,France,Hybrid,Hybrid,No,Doctoral degree,,1,Woman,No,
965,0,United States,Americas,USA,7,14,"$60,000 - $79,999",,United States,On site,Remote,Yes,Master’s degree,,0,Self-described or Prefer not to say,No,
966,0,United States,Americas,USA,5,19,"$80,000 - $99,999",,United States,On site,Hybrid,No,Associate’s degree,,0,Woman,Yes,"Jeffrey Shaffer, Andy Cotgreave, Amanda Makulec, Cole Nussbaumer Knaflic, Flerlage twins, others I am forgetting."
967,0,United States,Americas,USA,8,24,"$160,000 - $179,999",,United States,Remote,Remote,No,Master’s degree,,0,Man,Yes,"Tableau public, Expert blogs and newsletters"
968,0,India,Asia,IND,2,0,"Less than $10,000",,India,Hybrid,Remote,Yes,Bachelor’s degree,,1,Man,Yes,
969,0,United States,Americas,USA,15,20,"$100,000 - $119,999",,United States,Hybrid,Hybrid,No,Master’s degree,,0,Woman,,
970,0,United States,Americas,USA,8,15,"$60,000 - $79,999",,United States,Hybrid,Hybrid,No,Master’s degree,Qualtrics,1,,,
971,0,United States,Americas,USA,11,11,"$240,000 or more",,United States,Hybrid,Hybrid,No,Doctoral degree,,0,Man,No,
972,0,India,Asia,IND,31,31,"$100,000 - $119,999",$100 - $124,India,On site,Hybrid,No,Master’s degree,,0,Man,Yes,
973,0,Finland,Europe,FIN,10,23,,,Finland,Hybrid,Hybrid,Yes,Master’s degree,,1,Man,No,
974,0,Canada,Americas,CAN,10,20,"$140,000 - $159,999",,Canada,Hybrid,Hybrid,Yes,Master’s degree,,0,Man,Yes,
975,0,United States,Americas,USA,10,20,"$80,000 - $99,999",,United States,Remote,Remote,No,Master’s degree,SAP-WebI,0,Woman,Yes,
976,0,United States,Americas,USA,12,31,,,United States,Hybrid,Hybrid,No,Master’s degree,,0,Man,Yes,
977,0,Hungary,Europe,HUN,15,25,,,Hungary,Hybrid,Hybrid,No,Master’s degree,Zing charts,0,Woman,,"Stefan Few, Alberto Cairo"
978,0,Canada,Americas,CAN,5,6,"$40,000 - $59,999",,Canada,Remote,Hybrid,No,Bachelor’s degree,,1,Man,Yes,
979,0,Colombia,Americas,COL,5,18,"$40,000 - $59,999",,Colombia,Remote,Remote,No,Bachelor’s degree,,1,Man,,
980,0,United States,Americas,USA,7,21,"$220,000 - $239,999",,United States,Hybrid,Remote,Yes,Master’s degree,,0,Man,Yes,Alli Torban
981,0,Canada,Americas,CAN,7,14,"$80,000 - $99,999",,Canada,Hybrid,Hybrid,No,Master’s degree,,1,Man,No,
982,0,United States,Americas,USA,4,25,"$80,000 - $99,999",,United States,Hybrid,Hybrid,No,Bachelor’s degree,,0,Man,Yes,
983,0,United States,Americas,USA,4,3,"$80,000 - $99,999",,United States,Remote,Remote,No,Bachelor’s degree,,0,Man,Yes,
984,0,United States,Americas,USA,3,30,"$80,000 - $99,999",,United States,Remote,Remote,No,Bachelor’s degree,,0,Woman,No,Ann Emery
985,0,United States,Americas,USA,2,1,"$60,000 - $79,999",,United States,Remote,Remote,No,Bachelor’s degree,,0,Woman,No,
986,0,Italy,Europe,ITA,18,26,"$20,000 - $39,999",,Italy,Hybrid,Hybrid,Yes,Master’s degree,,0,Man,No,
987,0,United States,Americas,USA,20,20,"$80,000 - $99,999",,United States,On site,On site,No,Master’s degree,,0,Man,Yes,
988,0,United States,Americas,USA,2,8,"$60,000 - $79,999",,United States,Remote,Remote,No,Bachelor’s degree,,0,Man,Yes,
989,0,United States,Americas,USA,10,31,"$200,000 - $219,999",$100 - $124,United States,Remote,Hybrid,No,Doctoral degree,,0,Man,Yes,Good one on one mentors. don't learn much from groups
990,0,United States,Americas,USA,8,4,"$80,000 - $99,999",,United States,Remote,Remote,Yes,Doctoral degree,,0,Woman,No,
991,0,Latvia,Europe,LVA,6,6,"$20,000 - $39,999",,Latvia,Hybrid,Hybrid,No,Master’s degree,,1,Woman,No,
992,0,Canada,Americas,CAN,6,13,"$60,000 - $79,999",,Canada,Hybrid,Hybrid,No,Master’s degree,,0,Woman,,
993,0,United Kingdom,Europe,GBR,6,2,"$40,000 - $59,999",,United Kingdom,Hybrid,Hybrid,No,Master’s degree,,0,Woman,Yes,
994,0,Denmark,Europe,DNK,3,2,"Less than $10,000",I am not compensated on an hourly or project basis,Denmark,On site,On site,No,Bachelor’s degree,,0,Man,No,
995,0,Denmark,Europe,DNK,7,25,"$60,000 - $79,999",,Denmark,On site,On site,No,Associate’s degree,,1,Man,No,
996,0,United States,Americas,USA,10,12,"$80,000 - $99,999",,United States,Remote,Remote,No,Bachelor’s degree,Chart.js,0,Woman,Yes,
997,0,United States,Americas,USA,6,10,"$60,000 - $79,999",,United States,Hybrid,Hybrid,No,Bachelor’s degree,,0,Woman,No,
998,1,United States,Americas,USA,8,8,"$20,000 - $39,999",I am not compensated on an hourly or project basis,United States,Remote,Hybrid,No,Master’s degree,,0,Man,Yes,
999,0,Peru,Americas,PER,15,20,"$20,000 - $39,999",I am not compensated on an hourly or project basis,Peru,Remote,Remote,No,Bachelor’s degree,,0,Man,,
1000,0,United States,Americas,USA,16,26,"$120,000 - $139,999",,United States,Hybrid,Hybrid,Yes,Bachelor’s degree,,0,Man,No,
1001,0,United States,Americas,USA,2,1,"$80,000 - $99,999",,United States,Remote,Hybrid,No,,,0,Self-described or Prefer not to say,No,
1002,0,United States,Americas,USA,31,31,,,United States,Remote,Remote,Yes,Bachelor’s degree,Delta Graph,0,Man,Yes,
1003,0,United States,Americas,USA,7,14,"$120,000 - $139,999",,United States,Hybrid,Hybrid,No,Bachelor’s degree,,0,Woman,No,
1004,0,United States,Americas,USA,10,10,"$80,000 - $99,999",I am not compensated on an hourly or project basis,United States,Hybrid,Hybrid,No,Bachelor’s degree,,0,,No,
1005,0,United States,Americas,USA,7,7,"$160,000 - $179,999",,United States,Remote,Remote,Yes,Bachelor’s degree,,0,Man,Yes,"Elijah Meeks, Shirley Wu, Nadieh Bremer, Mike Bostock, Nicholas Rougeux, Cole Nussbaumer Knaflic"
1006,0,Germany,Europe,DEU,8,10,"$60,000 - $79,999",$15 - $29,Germany,Hybrid,Remote,Yes,Doctoral degree,,1,Man,No,
1007,0,Sweden,Europe,SWE,12,18,"$20,000 - $39,999",,Sweden,Hybrid,Hybrid,No,Bachelor’s degree,,1,Man,Yes,
1008,0,United Kingdom,Europe,GBR,10,8,,,United Kingdom,Remote,Remote,Yes,Doctoral degree,,1,Woman,No,
1009,1,United States,Americas,USA,2,12,I am not compensated on a yearly basis,$30 - $44,United States,Remote,Hybrid,Yes,Bachelor’s degree,,0,Woman,Yes,
1010,0,United States,Americas,USA,4,3,"$40,000 - $59,999",,United States,Remote,Hybrid,Yes,Master’s degree,,0,Woman,No,
1011,1,India,Asia,IND,0,0,,I am not compensated on an hourly or project basis,India,,Remote,Yes,Master’s degree,,1,Woman,No,my boss
1012,1,Norway,Europe,NOR,2,2,"$40,000 - $59,999",,Norway,On site,On site,No,Master’s degree,"ROOT, Inkscape",1,Self-described or Prefer not to say,No,
1013,0,Nigeria,Africa,NGA,0,15,,,Nigeria,Remote,Remote,Yes,Master’s degree,,0,Woman,Yes,
1014,1,United States,Americas,USA,3,0,"$40,000 - $59,999",,United States,Hybrid,Remote,No,Master’s degree,,1,Man,Yes,
1015,0,Bulgaria,Europe,BGR,5,15,,$75 - $99,Bulgaria,Remote,Remote,No,Doctoral degree,,1,Woman,Yes,
1016,0,Brazil,Americas,BRA,2,1,I am not compensated on a yearly basis,$15 - $29,Brazil,Remote,Remote,Yes,Master’s degree,,1,Man,Yes,Twitter and other scientific papers
1017,1,United Kingdom,Europe,GBR,5,22,,,United Kingdom,Hybrid,Hybrid,No,Master’s degree,,0,Woman,Yes,Cole Nussbaumer Knaflic
1018,0,Australia,Oceania,AUS,5,15,,,Australia,Hybrid,On site,No,Bachelor’s degree,,0,Woman,Yes,"Daniel Marsh-Patrick, Sam Parsons, Nir Smilga, Gerard Duggan, Agata Ketterick, Visual Capatalist, Makeover Monday"
1019,0,United States,Americas,USA,20,27,,,United States,Remote,,No,Doctoral degree,InDesign,0,Woman,Yes,
1020,0,United States,Americas,USA,4,3,"$80,000 - $99,999",,United States,Remote,Hybrid,No,Bachelor’s degree,,0,Woman,Yes,
1021,0,United States,Americas,USA,2,2,"$100,000 - $119,999",,United States,Remote,Remote,No,Bachelor’s degree,,0,Man,No,
1022,0,United States,Americas,USA,15,21,,$150 - $174,United States,Remote,Remote,No,Doctoral degree,,0,Woman,Yes,
1023,0,Czech Republic (Czechia),Europe,CZE,7,14,,$45 - $59,Czech Republic (Czechia),Hybrid,Hybrid,No,Bachelor’s degree,Sketch,1,Woman,Yes,
1024,0,United Kingdom,Europe,GBR,12,25,"$60,000 - $79,999",,United Kingdom,Hybrid,Hybrid,No,Bachelor’s degree,,0,Man,Yes,
1025,0,United States,Americas,USA,10,20,"$60,000 - $79,999",,United States,Remote,Hybrid,No,Master’s degree,,0,Woman,No,
1026,0,Netherlands,Europe,NLD,8,8,,$125 - $149,Netherlands,Remote,Remote,No,Master’s degree,,0,Man,Yes,
1027,0,United Kingdom,Europe,GBR,6,6,"$40,000 - $59,999",,United Kingdom,Remote,Remote,Yes,Bachelor’s degree,,0,Woman,No,"Twitter, the economist, tidy tuesday"
1028,0,United Kingdom,Europe,GBR,6,21,"$100,000 - $119,999",,United Kingdom,Hybrid,On site,No,Bachelor’s degree,,0,Man,Yes,
1030,0,,,,7,22,,,,Hybrid,Hybrid,No,Bachelor’s degree,,0,Man,Yes,Mike Bostock
1031,0,India,Asia,IND,4,13,"$40,000 - $59,999",,India,Hybrid,Hybrid,Yes,Master’s degree,"Seaborn, altair, matplotlib,",0,Man,Yes,
1032,0,New Zealand,Oceania,NZL,5,31,,,New Zealand,Remote,Remote,,Master’s degree,,0,Woman,Yes,Suggest some I’m finding it hard to find contemporaries
1033,0,United States,Americas,USA,13,11,"$200,000 - $219,999",$200 - $224,United States,Hybrid,Hybrid,No,,deck.gl,0,Woman,No,
1034,1,Madagascar,Africa,MDG,5,5,,,Madagascar,,Remote,Yes,Master’s degree,,1,Woman,Yes,
1035,0,United States,Americas,USA,4,31,"$10,000 - $19,999",,United States,Hybrid,Hybrid,No,Master’s degree,,0,Man,Yes,"Dan Carr, Howard Wainer, Hadley Wickham"
1036,0,United States,Americas,USA,4,31,"$60,000 - $79,999",,United States,On site,Remote,Yes,Doctoral degree,,0,Woman,,
1037,0,United States,Americas,USA,5,5,"$60,000 - $79,999",,United States,On site,Hybrid,Yes,Doctoral degree,,0,Man,Yes,
1038,0,United Kingdom,Europe,GBR,9,24,,$60 - $74,United Kingdom,Remote,Remote,No,Bachelor’s degree,,0,Man,Yes,
1039,0,United Kingdom,Europe,GBR,20,20,"$40,000 - $59,999",,United Kingdom,Remote,Remote,Yes,Bachelor’s degree,,0,Man,Yes,
1040,0,Canada,Americas,CAN,3,10,"$100,000 - $119,999",,Canada,Remote,Remote,No,Bachelor’s degree,,0,Woman,No,
1041,0,United States,Americas,USA,7,18,"$80,000 - $99,999",,United States,On site,Hybrid,No,Doctoral degree,InDesign,0,Woman,Yes,
1042,0,Portugal,Europe,PRT,8,25,,,Portugal,On site,Hybrid,No,Doctoral degree,,1,Man,Yes,
1043,0,Portugal,Europe,PRT,1,1,"$10,000 - $19,999",,Portugal,Remote,Remote,No,Master’s degree,,1,Woman,,
1044,0,United States,Americas,USA,5,9,"$160,000 - $179,999",,United States,Remote,On site,No,Master’s degree,,0,Woman,Yes,
1045,0,United States,Americas,USA,3,17,"$80,000 - $99,999",,United States,Hybrid,Hybrid,No,Master’s degree,,0,Woman,Yes,
1046,0,United States,Americas,USA,4,8,"$120,000 - $139,999",,United States,Remote,Remote,No,Master’s degree,,0,Woman,Yes,
1047,0,United States,Americas,USA,5,8,"$140,000 - $159,999",,United States,Hybrid,Hybrid,No,Master’s degree,,0,Woman,No,
1048,0,Brazil,Americas,BRA,4,13,"$40,000 - $59,999",,Brazil,Remote,Remote,No,Master’s degree,,0,Woman,Yes,
1049,0,United Kingdom,Europe,GBR,3,7,"$20,000 - $39,999",,United Kingdom,Hybrid,Hybrid,No,Doctoral degree,,1,Woman,No,
1050,0,Spain,Europe,ESP,4,12,"$40,000 - $59,999",,Spain,Hybrid,Remote,No,Master’s degree,AWS Quicksight,0,Man,Yes,
1051,0,Finland,Europe,FIN,2,4,"$40,000 - $59,999",,Finland,Hybrid,Hybrid,No,Master’s degree,Infogram,0,Woman,Yes,
1052,0,India,Asia,IND,0,1,"Less than $10,000",Less than $15,India,Remote,Remote,Yes,Bachelor’s degree,,1,Man,No,
1053,0,Hungary,Europe,HUN,3,4,"$10,000 - $19,999",,Hungary,Hybrid,Hybrid,No,Master’s degree,MicroStrategy,1,Man,Yes,
1054,0,Switzerland,Europe,CHE,3,10,"$100,000 - $119,999",,Switzerland,On site,Remote,Yes,Master’s degree,,1,Woman,No,
1055,0,Spain,Europe,ESP,3,7,"$20,000 - $39,999",,Spain,Hybrid,Remote,No,Doctoral degree,,1,Man,No,
1056,0,United States,Americas,USA,4,15,"$160,000 - $179,999",,United States,Remote,Hybrid,No,Master’s degree,,0,Woman,Yes,
1057,0,United States,Americas,USA,3,8,"$80,000 - $99,999",,United States,Remote,Remote,Yes,Master’s degree,,0,Woman,No,
1058,0,Hungary,Europe,HUN,4,9,"$20,000 - $39,999",,Hungary,Hybrid,Hybrid,No,Master’s degree,,1,Man,No,
1059,0,United States,Americas,USA,4,18,"$80,000 - $99,999",,United States,Remote,Remote,No,Master’s degree,,0,Woman,,
1060,0,United States,Americas,USA,3,7,"$80,000 - $99,999",,United States,Remote,Remote,No,Master’s degree,,0,Woman,Yes,
1061,0,Ireland,Europe,IRL,5,10,"$60,000 - $79,999",,Ireland,Hybrid,Hybrid,No,Master’s degree,,0,Woman,Yes,
1062,0,Canada,Americas,CAN,4,,"$40,000 - $59,999",,Canada,Remote,Remote,No,Bachelor’s degree,,0,Woman,No,
1063,0,United States,Americas,USA,4,8,"$60,000 - $79,999",,United States,Remote,Remote,No,Master’s degree,,0,Woman,,
1064,0,United States,Americas,USA,5,14,"$160,000 - $179,999",,United States,Remote,Remote,No,Master’s degree,,0,Man,No,
1065,0,United States,Americas,USA,5,5,"$220,000 - $239,999",I am not compensated on an hourly or project basis,United States,Hybrid,Remote,No,Doctoral degree,,0,Woman,,
1066,0,Kazakhstan,Asia,KAZ,2,15,"Less than $10,000",,Kazakhstan,Hybrid,Remote,Yes,Bachelor’s degree,,0,Man,No,
1067,0,Germany,Europe,DEU,23,23,"$60,000 - $79,999",,Germany,Hybrid,Hybrid,No,Master’s degree,,1,Man,No,
1068,0,United States,Americas,USA,5,10,,,United States,Hybrid,Hybrid,No,Master’s degree,,0,Woman,No,
1069,0,United States,Americas,USA,4,4,"$100,000 - $119,999",,United States,Remote,Remote,Yes,Master’s degree,,0,Woman,No,
1070,0,France,Europe,FRA,4,3,"$20,000 - $39,999",,France,Hybrid,Hybrid,No,Master’s degree,,1,Man,Yes,
1071,0,Spain,Europe,ESP,3,12,"$20,000 - $39,999",,Spain,On site,Hybrid,No,Master’s degree,Observable Plot.js,1,Woman,Yes,
1072,0,Portugal,Europe,PRT,0,13,,,Portugal,Remote,Hybrid,Yes,Master’s degree,,1,Woman,Yes,"Mona Chalabi, Federica Fragapane, Gabrielle Mèrite, Paul Franz, Johnny Harris"
1073,0,United States,Americas,USA,5,20,,,United States,,Hybrid,No,Doctoral degree,,0,Woman,Yes,"Ken and Kevin Flerlage brothers, Tableau Tim, Enrico Bertini, Moritz Stefaner, Amy Cesal, Elijah Meeks, Albert Cairo, Lindsay Betzendahl"
1074,0,Canada,Americas,CAN,2,8,"$60,000 - $79,999",,Canada,Remote,Remote,No,Master’s degree,Mode Analytics,0,Woman,Yes,
1076,0,United States,Americas,USA,3,17,,$30 - $44,United States,Hybrid,Hybrid,Yes,Bachelor’s degree,,0,Man,No,
1077,0,United States,Americas,USA,5,17,"$80,000 - $99,999",,United States,Hybrid,Hybrid,No,Bachelor’s degree,,0,Man,No,
1078,0,United Kingdom,Europe,GBR,9,11,"$80,000 - $99,999",,United Kingdom,Hybrid,Hybrid,Yes,Master’s degree,,0,Woman,No,
1079,0,United States,Americas,USA,4,3,"$60,000 - $79,999",,United States,Remote,Remote,No,Bachelor’s degree,,0,Woman,Yes,
1080,0,United States,Americas,USA,3,19,"$120,000 - $139,999",,United States,Remote,Remote,Yes,Bachelor’s degree,,0,Woman,,
1081,0,United States,Americas,USA,19,22,,,United States,Hybrid,Hybrid,No,Master’s degree,,0,Woman,No,
1082,0,Australia,Oceania,AUS,10,20,"$80,000 - $99,999",$175 - $199,Australia,Remote,Hybrid,Yes,Master’s degree,,0,Woman,No,
1083,0,India,Asia,IND,28,25,"$40,000 - $59,999",$15 - $29,India,On site,On site,Yes,Doctoral degree,,0,Man,Yes,
1084,0,France,Europe,FRA,8,26,"$140,000 - $159,999",,France,Remote,Remote,No,Doctoral degree,,1,Man,,"Zan Armstrong, Shirley Wu"
1085,0,United States,Americas,USA,2,1,,,United States,Remote,Hybrid,Yes,Bachelor’s degree,,1,Woman,Yes,
1086,0,United States,Americas,USA,6,12,"$60,000 - $79,999",I am not compensated on an hourly or project basis,United States,Hybrid,Hybrid,No,Master’s degree,,0,Woman,No,Ann Emery
1087,0,United States,Americas,USA,8,12,"$80,000 - $99,999",I am not compensated on an hourly or project basis,United States,Remote,Remote,Yes,Master’s degree,,0,Woman,Yes,
1088,0,Brazil,Americas,BRA,2,3,"$10,000 - $19,999",Less than $15,Brazil,Remote,Remote,No,Bachelor’s degree,,1,Woman,No,
1089,0,Belgium,Europe,BEL,13,13,,,Belgium,Hybrid,Hybrid,No,Master’s degree,,1,Woman,Yes,"Andy Kriebel, Tableau Tom"
1090,0,Uganda,Africa,UGA,5,8,"$10,000 - $19,999",Less than $15,Uganda,Hybrid,Hybrid,Yes,Bachelor’s degree,,0,Man,No,
1091,0,United Kingdom,Europe,GBR,7,3,"$80,000 - $99,999",,United Kingdom,On site,On site,No,Doctoral degree,,0,Woman,No,
1092,0,United States,Americas,USA,10,19,"$240,000 or more",,United States,Remote,Remote,Yes,Master’s degree,,0,Man,No,Matthew Kay
1093,0,Canada,Americas,CAN,1,20,,,Canada,Remote,Hybrid,Yes,Bachelor’s degree,,0,Woman,Yes,
1094,0,United States,Americas,USA,12,27,"$160,000 - $179,999",,United States,Remote,Remote,Yes,Master’s degree,"Keynote, Business Objects",0,Woman,,
1095,0,United States,Americas,USA,6,13,,,United States,Remote,Remote,No,Master’s degree,,0,Man,No,
1096,0,United States,Americas,USA,9,11,"$140,000 - $159,999",,United States,Hybrid,Hybrid,No,Master’s degree,,0,Woman,,
1097,0,France,Europe,FRA,8,15,"$40,000 - $59,999",$100 - $124,France,Hybrid,Hybrid,No,Doctoral degree,,0,Woman,Yes,
1098,0,United Kingdom,Europe,GBR,5,10,,$45 - $59,United Kingdom,Remote,Remote,No,Bachelor’s degree,,0,Woman,,
1099,0,United States,Americas,USA,5,23,"$60,000 - $79,999",,United States,Remote,Remote,No,Master’s degree,,0,Woman,No,
1100,0,Finland,Europe,FIN,5,12,,,Finland,Remote,Remote,Yes,Master’s degree,,1,Self-described or Prefer not to say,Yes,
1101,0,United States,Americas,USA,10,31,"$140,000 - $159,999",$75 - $99,United States,Remote,Hybrid,No,Bachelor’s degree,,0,Woman,No,
1102,0,Germany,Europe,DEU,10,31,,,Germany,Hybrid,Remote,No,Bachelor’s degree,,1,Man,,
1103,0,United Kingdom,Europe,GBR,7,22,"$40,000 - $59,999",,United Kingdom,Remote,Remote,No,Bachelor’s degree,Microstrategy,0,Man,Yes,
1104,0,South Africa,Africa,ZAF,8,31,"$40,000 - $59,999",,South Africa,Hybrid,Hybrid,No,Bachelor’s degree,,0,Man,Yes,
1105,0,United Kingdom,Europe,GBR,18,25,"$100,000 - $119,999",,United Kingdom,Remote,Remote,No,Bachelor’s degree,,0,Man,Yes,
1106,0,France,Europe,FRA,2,10,"$20,000 - $39,999",,France,Hybrid,Remote,Yes,Technical school,,0,Man,Yes,
1107,0,Finland,Europe,FIN,5,12,"$60,000 - $79,999",,Finland,Hybrid,Hybrid,No,Technical school,,1,Man,Yes,
1108,0,United Kingdom,Europe,GBR,10,12,"$80,000 - $99,999",,United Kingdom,Remote,Remote,No,Bachelor’s degree,,0,Woman,Yes,
1109,0,France,Europe,FRA,9,12,"$100,000 - $119,999",$150 - $174,France,Remote,Remote,No,Doctoral degree,Cables.gl,1,Man,Yes,
1110,0,United Kingdom,Europe,GBR,8,19,"$80,000 - $99,999",,United Kingdom,Hybrid,Hybrid,No,Bachelor’s degree,,0,Man,Yes,
1111,0,United States,Americas,USA,15,21,I am not compensated on a yearly basis,$250 - $274,United States,Remote,Remote,Yes,Master’s degree,,0,Woman,,
1112,0,United States,Americas,USA,5,8,"$140,000 - $159,999",,United States,Remote,Remote,Yes,Bachelor’s degree,,0,Man,Yes,
1113,1,Germany,Europe,DEU,0,4,"$40,000 - $59,999",,Germany,Hybrid,Remote,Yes,Master’s degree,,1,Man,Yes,
1114,1,Libya,Africa,LBY,3,14,I am not compensated on a yearly basis,I am not compensated on an hourly or project basis,Libya,Remote,Remote,Yes,Master’s degree,,1,Man,Yes,
1115,1,Australia,Oceania,AUS,4,12,,,Australia,Hybrid,Hybrid,No,Master’s degree,,0,Woman,Yes,
1116,1,Switzerland,Europe,CHE,4,7,I am not compensated on a yearly basis,I am not compensated on an hourly or project basis,Switzerland,Hybrid,Hybrid,Yes,Master’s degree,,1,Man,Yes,"Neurath, Arntz, W.E.B. Du Bois, Giorgia Lupi"
1117,0,Poland,Europe,POL,2,6,"$80,000 - $99,999",,Poland,Remote,Remote,No,Master’s degree,,1,Man,Yes,
1118,0,United States,Americas,USA,5,5,I am not compensated on a yearly basis,$45 - $59,United States,Remote,Remote,Yes,Master’s degree,,0,Man,No,
1119,0,United States,Americas,USA,31,31,,$175 - $199,United States,Remote,,No,Master’s degree,,0,Woman,No,
1120,0,Canada,Americas,CAN,,25,,,Canada,,,No,Master’s degree,,0,Woman,No,Ann Emery/Depict Data and the students in her workshops
1121,0,Belgium,Europe,BEL,10,18,,$100 - $124,Belgium,Remote,Remote,No,Master’s degree,,1,Man,Yes,"Matthias Stahl, Amelia Wattenberger, John Nelson, all at NYTGraphics, Lisa Muth and the Datawrapper team, John Burn Murdoch, Topi Tjukanov"
1122,0,Italy,Europe,ITA,0,0,,,Italy,Remote,Remote,Yes,Bachelor’s degree,,1,Man,Yes,
1123,0,Sweden,Europe,SWE,4,14,"$40,000 - $59,999",$100 - $124,Sweden,Remote,Remote,No,Master’s degree,,1,Man,,"Alli Torban, Gabrielle Merite, Sonja Kuijpers, Miriam Quick, Stefanie Posavec"
1124,0,Germany,Europe,DEU,8,13,,$75 - $99,Germany,Remote,Remote,No,Master’s degree,,1,Man,No,Stephanie Evergreen
1125,0,United Kingdom,Europe,GBR,2,5,"$40,000 - $59,999",,United Kingdom,Remote,Remote,No,Master’s degree,,0,Woman,Yes,
1126,0,Germany,Europe,DEU,5,7,"$40,000 - $59,999",,Germany,Hybrid,Hybrid,Yes,Master’s degree,,1,Woman,Yes,
1127,0,United Kingdom,Europe,GBR,14,15,,$125 - $149,United Kingdom,Remote,Remote,Yes,Bachelor’s degree,,0,Self-described or Prefer not to say,Yes,
1128,0,United States,Americas,USA,8,20,"$80,000 - $99,999",,United States,On site,Hybrid,No,Doctoral degree,,0,Man,No,
1129,0,United Kingdom,Europe,GBR,3,9,"$40,000 - $59,999",,United Kingdom,Hybrid,Hybrid,Yes,Master’s degree,,1,Woman,Yes,
1130,0,United States,Americas,USA,1,5,"$60,000 - $79,999",,United States,Remote,Remote,No,Master’s degree,Canva,0,Woman,,
1131,0,United Kingdom,Europe,GBR,4,10,"$40,000 - $59,999",,United Kingdom,On site,On site,Yes,Doctoral degree,,0,Woman,No,
1132,0,United States,Americas,USA,10,20,"$140,000 - $159,999",,United States,Hybrid,Hybrid,Yes,Master’s degree,,0,Man,Yes,
1133,0,United States,Americas,USA,5,9,"$40,000 - $59,999",,United States,Hybrid,Hybrid,No,Master’s degree,,0,Woman,No,
1134,0,Brazil,Americas,BRA,2,17,"Less than $10,000",I am not compensated on an hourly or project basis,Brazil,Remote,Remote,No,Master’s degree,,0,Man,No,
1135,0,United States,Americas,USA,4,2,"$60,000 - $79,999",I am not compensated on an hourly or project basis,United States,Hybrid,Hybrid,No,Master’s degree,,0,Man,No,
1136,0,Germany,Europe,DEU,0,20,"$100,000 - $119,999",I am not compensated on an hourly or project basis,Germany,Hybrid,Hybrid,No,Master’s degree,,0,Woman,Yes,
1137,0,United Kingdom,Europe,GBR,4,19,"$20,000 - $39,999",,United Kingdom,Hybrid,Remote,No,Bachelor’s degree,,0,Man,Yes,
1138,0,,,,3,7,,,,On site,Hybrid,No,Doctoral degree,"Mode, Inkscape",0,Woman,Yes,
1139,0,United States,Americas,USA,5,14,"$60,000 - $79,999",I am not compensated on an hourly or project basis,United States,Hybrid,Hybrid,Yes,Some college,Service Now,0,Man,No,
1140,0,United States,Americas,USA,5,20,I am not compensated on a yearly basis,I am not compensated on an hourly or project basis,United States,Remote,Remote,No,Some college,,0,Man,No,
1141,0,Iran,,,7,10,"$10,000 - $19,999",,Iran,On site,Hybrid,No,Master’s degree,,0,Man,No,
1142,0,United States,Americas,USA,10,10,"$180,000 - $199,999",,United States,Remote,Remote,No,Master’s degree,,0,Man,No,
1143,0,United States,Americas,USA,7,7,"$80,000 - $99,999",,United States,Hybrid,Hybrid,No,Master’s degree,,0,Woman,No,
1144,0,United States,Americas,USA,5,9,"$80,000 - $99,999",,United States,Remote,,No,Bachelor’s degree,,0,Woman,Yes,
1145,0,United Kingdom,Europe,GBR,12,14,,,United Kingdom,Hybrid,Hybrid,No,Master’s degree,,0,Man,Yes,
1146,0,United States,Americas,USA,1,31,,,United States,On site,Remote,No,Bachelor’s degree,,0,Woman,No,
1147,0,United Kingdom,Europe,GBR,5,16,"$40,000 - $59,999",,United Kingdom,Hybrid,Hybrid,No,Bachelor’s degree,,1,Man,Yes,
1148,0,United States,Americas,USA,5,15,,,United States,Remote,Remote,No,Bachelor’s degree,,0,Woman,Yes,
1149,0,United States,Americas,USA,0,30,"$60,000 - $79,999",,United States,Hybrid,Remote,Yes,Bachelor’s degree,,0,Self-described or Prefer not to say,No,
1150,0,United States,Americas,USA,4,3,"$80,000 - $99,999",,United States,Hybrid,Hybrid,No,Bachelor’s degree,,0,Woman,Yes,
1151,0,United States,Americas,USA,16,16,,,United States,Remote,Remote,No,Master’s degree,,1,Man,Yes,
1152,0,Canada,Americas,CAN,10,20,"$40,000 - $59,999",,Canada,Remote,Remote,Yes,Master’s degree,,0,Woman,,
1153,0,France,Europe,FRA,7,9,"$40,000 - $59,999",,France,Hybrid,Hybrid,No,Doctoral degree,,0,Man,,
1154,0,Sweden,Europe,SWE,3,17,,$75 - $99,Sweden,Remote,Hybrid,Yes,Master’s degree,,1,Man,Yes,
1155,0,United Kingdom,Europe,GBR,3,30,,,United Kingdom,Remote,Hybrid,Yes,Bachelor’s degree,,0,Woman,No,
1156,0,United Kingdom,Europe,GBR,0,20,"$40,000 - $59,999",,United Kingdom,Remote,Remote,No,Bachelor’s degree,,1,Woman,Yes,
1157,0,United States,Americas,USA,9,9,,,United States,Hybrid,Hybrid,No,Master’s degree,,0,Woman,No,
1158,0,Canada,Americas,CAN,6,12,"$100,000 - $119,999",,Canada,On site,Remote,No,Associate’s degree,Indesign and photoshop for publication design,0,Woman,Yes,Cole Nussbaum Knaflic; Dona Wong; many others -- I have a lot of reference books!
1159,0,United Kingdom,Europe,GBR,3,15,"$120,000 - $139,999",I am not compensated on an hourly or project basis,United Kingdom,Hybrid,Hybrid,Yes,,,0,Man,No,
1160,0,United States,Americas,USA,10,31,"$160,000 - $179,999",,United States,Hybrid,Hybrid,Yes,Bachelor’s degree,,0,Man,Yes,
1161,0,United States,Americas,USA,11,11,"$120,000 - $139,999",I am not compensated on an hourly or project basis,United States,Remote,Remote,No,,,0,,Yes,
1162,0,France,Europe,FRA,3,10,,$250 - $274,France,Remote,Remote,Yes,Master’s degree,,1,Woman,No,
1163,0,Ireland,Europe,IRL,8,20,"$80,000 - $99,999",,Ireland,Remote,Remote,Yes,Technical school,,0,Woman,,The Big Book of Dashboards people
1164,0,Switzerland,Europe,CHE,11,20,"$80,000 - $99,999",$125 - $149,Switzerland,On site,On site,No,Master’s degree,,1,Woman,,"Geometric Art, Swiss Graphic design in general"
1165,0,France,Europe,FRA,31,31,,$175 - $199,France,Remote,Remote,Yes,Master’s degree,,1,Man,Yes,
1166,0,Pakistan,Asia,PAK,12,15,,$30 - $44,Pakistan,Remote,Remote,Yes,Bachelor’s degree,,0,Woman,Yes,
1167,0,United Kingdom,Europe,GBR,15,31,,,United Kingdom,Hybrid,Remote,No,,,0,Man,Yes,
1168,0,United Kingdom,Europe,GBR,4,15,"$40,000 - $59,999",,United Kingdom,Hybrid,Hybrid,Yes,Doctoral degree,,1,Woman,Yes,
1169,0,,,,2,15,"$120,000 - $139,999",,,Remote,Remote,Yes,Master’s degree,Echarts,0,Man,Yes,
1170,0,Germany,Europe,DEU,0,10,I am not compensated on a yearly basis,I am not compensated on an hourly or project basis,Germany,Remote,Remote,No,Master’s degree,,1,Self-described or Prefer not to say,Yes,
1171,0,United Kingdom,Europe,GBR,0,10,,,United Kingdom,Remote,Remote,Yes,Doctoral degree,,1,Woman,No,
1173,0,Taiwan,Asia,TWN,0,0,"$60,000 - $79,999",,Taiwan,Hybrid,Hybrid,Yes,Master’s degree,,0,Woman,No,
1174,0,Spain,Europe,ESP,5,8,"$40,000 - $59,999",I am not compensated on an hourly or project basis,Spain,Remote,Remote,Yes,Master’s degree,,0,Man,No,
1175,1,Nepal,Asia,NPL,3,2,"Less than $10,000",$100 - $124,Nepal,Remote,Remote,Yes,,AnyChart,0,,No,
1176,0,India,Asia,IND,0,1,,,India,Remote,Hybrid,Yes,Bachelor’s degree,,1,Man,Yes,
1177,0,Norway,Europe,NOR,4,4,,,Norway,Remote,Hybrid,Yes,Bachelor’s degree,,0,Woman,,
1178,0,United States,Americas,USA,5,16,"$80,000 - $99,999",,United States,Remote,Remote,No,Associate’s degree,,0,Man,,
1179,0,United States,Americas,USA,11,8,,,United States,Hybrid,Hybrid,Yes,Doctoral degree,,0,Man,Yes,"Giorgia Lupi, Nadieh Bremer, various Tableau visionaries"
1180,0,Tanzania,Africa,TZA,3,3,"$10,000 - $19,999",,Tanzania,Remote,Remote,Yes,Bachelor’s degree,,0,Woman,Yes,
1181,0,Spain,Europe,ESP,5,25,,$30 - $44,Spain,Hybrid,Hybrid,Yes,Master’s degree,,1,Man,,
1182,0,United States,Americas,USA,10,9,,,United States,On site,On site,Yes,Bachelor’s degree,,0,Man,,
1183,0,Argentina,Americas,ARG,14,14,"$60,000 - $79,999",I am not compensated on an hourly or project basis,Argentina,Remote,Remote,Yes,Master’s degree,,1,Woman,Yes,
1184,0,United States,Americas,USA,2,3,"$60,000 - $79,999",,United States,Hybrid,Hybrid,No,,,0,Woman,Yes,
1186,0,Norway,Europe,NOR,7,20,"$80,000 - $99,999",,Norway,Hybrid,Hybrid,No,,everviz,0,Man,No,
1187,0,United States,Americas,USA,5,10,"$80,000 - $99,999",$75 - $99,United States,Remote,Remote,No,Doctoral degree,,0,Woman,Yes,
1188,0,United States,Americas,USA,2,16,,,United States,Remote,Hybrid,No,Master’s degree,,1,Woman,Yes,
1189,0,Poland,Europe,POL,15,20,"$100,000 - $119,999",,Poland,Remote,Remote,No,,,0,Self-described or Prefer not to say,Yes,
1190,0,United Kingdom,Europe,GBR,2,13,,$45 - $59,United Kingdom,Remote,Remote,Yes,Doctoral degree,,1,Woman,Yes,
1191,0,United States,Americas,USA,10,25,,$100 - $124,United States,Remote,Remote,No,Doctoral degree,,0,Woman,Yes,
1192,0,United States,Americas,USA,2,10,,,United States,Remote,Hybrid,Yes,Bachelor’s degree,,0,Woman,Yes,
1193,0,United States,Americas,USA,5,8,"$180,000 - $199,999",,United States,Remote,Remote,No,Bachelor’s degree,,0,Woman,,
1194,0,Germany,Europe,DEU,15,25,,$100 - $124,Germany,Remote,Hybrid,No,Master’s degree,SAC,0,Man,No,Twitter
1195,0,Ethiopia,Africa,ETH,0,4,I am not compensated on a yearly basis,,Ethiopia,Remote,Remote,Yes,Master’s degree,,1,Woman,No,
1196,0,Sweden,Europe,SWE,5,7,"$20,000 - $39,999",$15 - $29,Sweden,On site,Hybrid,No,,,0,Man,No,
1197,0,Germany,Europe,DEU,2,8,"$80,000 - $99,999",$75 - $99,Germany,On site,Hybrid,No,Doctoral degree,,1,Man,Yes,
1198,0,United States,Americas,USA,6,8,"$100,000 - $119,999",,United States,Hybrid,Hybrid,No,Doctoral degree,,0,Woman,Yes,
1199,0,United Kingdom,Europe,GBR,31,30,,,United Kingdom,Hybrid,Hybrid,No,Doctoral degree,,1,Man,Yes,
1200,0,United States,Americas,USA,6,10,"$80,000 - $99,999",,United States,Hybrid,Remote,No,Master’s degree,,0,Woman,Yes,
1201,0,United States,Americas,USA,10,10,"$140,000 - $159,999",I am not compensated on an hourly or project basis,United States,Hybrid,Hybrid,No,Master’s degree,,0,Woman,No,"Ann K. Emery, Stephanie Evergreen, Tableau Viz of the Day, Edward Tufte"
1202,0,United States,Americas,USA,9,12,"$160,000 - $179,999",$60 - $74,United States,Remote,Remote,Yes,,,0,Man,Yes,
1203,1,,,,4,0,,,,Remote,Hybrid,Yes,Master’s degree,,1,Woman,Yes,
1204,0,India,Asia,IND,2,24,,,India,Remote,Remote,Yes,Bachelor’s degree,,0,Woman,Yes,Gurman Bhatia
1205,0,Russia,Europe,RUS,5,3,"$20,000 - $39,999",,Russia,On site,Remote,Yes,Master’s degree,Thinkcell,1,Woman,No,
1206,0,Romania,Europe,ROU,1,6,,,Romania,Hybrid,Hybrid,Yes,Master’s degree,Kibana,0,Man,No,Examples
1207,0,United States,Americas,USA,4,23,"$100,000 - $119,999",,United States,Remote,Remote,No,Master’s degree,,0,Woman,No,
1208,0,Canada,Americas,CAN,2,3,I am not compensated on a yearly basis,I am not compensated on an hourly or project basis,Canada,Remote,,Yes,Master’s degree,,0,Woman,Yes,
1209,0,United Kingdom,Europe,GBR,2,5,,,United Kingdom,Hybrid,Hybrid,Yes,Master’s degree,,0,Woman,Yes,
1210,0,United States,Americas,USA,8,31,,,United States,Remote,Remote,No,Master’s degree,,1,Woman,No,
1211,0,United States,Americas,USA,4,5,,,United States,Remote,Remote,No,Master’s degree,,0,Woman,,"Jeff Shaffer, Annabelle Rincon, Andy Cotgreave, Steve Wexler, Andy Kriebel, Lorna Brown, Lindsay Betzendahl, Andy Cotgreave, Flerlage Twins, Jim Dehner"
1212,0,Finland,Europe,FIN,5,20,"$60,000 - $79,999",,Finland,Hybrid,Hybrid,No,Bachelor’s degree,,1,Man,No,
1213,0,United States,Americas,USA,5,5,"$60,000 - $79,999",,United States,On site,Remote,Yes,Master’s degree,,0,Woman,Yes,
1214,0,India,Asia,IND,0,1,,,India,Remote,On site,No,,,0,Man,,
1215,0,,,,10,20,,,,,Hybrid,Yes,Doctoral degree,,0,Man,Yes,
1216,0,Netherlands,Europe,NLD,0,15,"$40,000 - $59,999",I am not compensated on an hourly or project basis,Netherlands,Hybrid,Hybrid,Yes,Bachelor’s degree,,1,Man,Yes,
1217,0,United Kingdom,Europe,GBR,10,20,"$100,000 - $119,999",,United Kingdom,Hybrid,Hybrid,No,Master’s degree,,0,Woman,Yes,
1218,0,United States,Americas,USA,4,10,"$60,000 - $79,999",,United States,Remote,Remote,No,Master’s degree,,0,Woman,,
1219,0,United States,Americas,USA,6,10,"$80,000 - $99,999",,United States,Remote,Remote,Yes,,,0,,,
1220,0,Australia,Oceania,AUS,6,6,"$120,000 - $139,999",,Australia,Remote,Remote,Yes,,MicroStrategy QuickSight,0,,No,
1221,0,United States,Americas,USA,2,3,"$100,000 - $119,999",,United States,Hybrid,Remote,No,,,0,,Yes,"Amelia Wattenberger, Cole Knaflic, Stephanie Evergreen, Shirley Wu"
1222,0,United States,Americas,USA,5,18,,,United States,Hybrid,Hybrid,No,,,0,Man,Yes,
1224,0,United States,Americas,USA,0,22,,,United States,,Remote,No,Doctoral degree,,0,Woman,No,
1225,0,United Kingdom,Europe,GBR,12,16,"$140,000 - $159,999",I am not compensated on an hourly or project basis,United Kingdom,Remote,Remote,No,Master’s degree,,0,Self-described or Prefer not to say,No,
1226,1,United States,Americas,USA,4,5,,,United States,On site,On site,No,Bachelor’s degree,,0,Woman,,
1227,0,Russia,Europe,RUS,9,14,,$15 - $29,Russia,Remote,Remote,No,Master’s degree,,1,Man,No,
1228,0,Belgium,Europe,BEL,30,31,,,Belgium,Remote,Remote,No,Master’s degree,Datawrapper.de altair,1,Man,No,
1229,0,United States,Americas,USA,1,15,,,United States,Remote,Remote,No,Bachelor’s degree,,0,Woman,Yes,
1230,0,Canada,Americas,CAN,7,10,,,Canada,Remote,Remote,No,Doctoral degree,piktochart,0,Woman,No,
1231,0,Netherlands,Europe,NLD,9,8,,,Netherlands,Remote,Remote,Yes,Master’s degree,,0,,Yes,
1232,0,Peru,Americas,PER,2,3,"$10,000 - $19,999",Less than $15,Peru,Remote,,Yes,,,0,,No,
1233,1,,,,2,10,,,,Hybrid,Remote,Yes,Bachelor’s degree,,0,Self-described or Prefer not to say,No,
1234,0,,,,15,20,,$75 - $99,,Remote,Remote,No,Master’s degree,,0,Woman,Yes,
1235,0,France,Europe,FRA,5,20,,$45 - $59,France,Remote,Remote,No,Bachelor’s degree,,0,Woman,Yes,
1236,0,,,,,,,,,,Remote,No,Master’s degree,,0,Woman,No,
1237,0,Austria,Europe,AUT,2,2,,,Austria,,Hybrid,Yes,Master’s degree,Cytoscape,1,Woman,Yes,"Giorgia Lupi, Lisa Charlotte Muth, Cole Nussbaumer Knaflic, Steve Wexler, Jonathan Schwabish"
1239,0,,,,30,30,,,,Hybrid,On site,No,Doctoral degree,,0,Self-described or Prefer not to say,Yes,
1240,0,United States,Americas,USA,5,4,"$100,000 - $119,999",,United States,Remote,Hybrid,Yes,Bachelor’s degree,,0,Woman,Yes,
1241,0,United States,Americas,USA,7,18,"$40,000 - $59,999",,United States,On site,Hybrid,No,Master’s degree,,0,Woman,No,
1242,1,United States,Americas,USA,0,5,,,United States,,On site,Yes,Bachelor’s degree,,0,Woman,Yes,"Cole Nussbaumer-Knaflic, Stephanie Evergreen, Tamara Munzner"
1243,0,Portugal,Europe,PRT,6,6,"$20,000 - $39,999",,Portugal,Hybrid,Remote,Yes,Bachelor’s degree,,1,Man,,
1244,1,Czech Republic (Czechia),Europe,CZE,5,5,"$20,000 - $39,999",,Czech Republic (Czechia),Hybrid,Hybrid,No,High school diploma,,1,Woman,Yes,
1245,0,India,Asia,IND,3,10,,,India,Remote,Remote,Yes,Bachelor’s degree,,0,Man,Yes,
1247,0,United States,Americas,USA,4,6,"$40,000 - $59,999",,United States,Remote,Remote,No,Master’s degree,,0,Woman,Yes,
1248,0,Malta,Europe,MLT,4,10,"$40,000 - $59,999",,Malta,Remote,Remote,No,Master’s degree,,1,Woman,Yes,
1249,0,Belarus,Europe,BLR,4,19,,,Belarus,Remote,Remote,Yes,Doctoral degree,,0,Woman,No,"Georgios Karamanis, Michael DiBenigno"
1250,0,United Kingdom,Europe,GBR,3,4,"$20,000 - $39,999",,United Kingdom,Hybrid,Remote,No,Bachelor’s degree,,1,Woman,Yes,
1253,0,United States,Americas,USA,5,31,I am not compensated on a yearly basis,,United States,Remote,Remote,Yes,Bachelor’s degree,Custom tool,0,Man,Yes,
1254,0,United States,Americas,USA,4,28,,,United States,,Remote,No,Bachelor’s degree,,0,Woman,Yes,
1255,0,Austria,Europe,AUT,14,17,,,Austria,Hybrid,Hybrid,No,Master’s degree,Vega-Lite,1,Man,Yes,
1256,1,Canada,Americas,CAN,1,0,,,Canada,Remote,,No,Master’s degree,,0,Woman,Yes,
1257,0,,,,20,31,,,,Remote,Hybrid,No,,,0,,No,
1258,0,United States,Americas,USA,9,20,,,United States,,,Yes,Master’s degree,,0,Woman,No,
1259,0,,,,17,31,"$60,000 - $79,999",,,On site,On site,No,Master’s degree,,0,Woman,No,
1263,0,,,,7,10,,,,On site,On site,No,Doctoral degree,,0,Man,No,
1265,0,Poland,Europe,POL,10,11,"$20,000 - $39,999",$30 - $44,Poland,Remote,Hybrid,No,Bachelor’s degree,,1,Man,Yes,
1266,0,Russia,Europe,RUS,2,3,,,Russia,Remote,Remote,Yes,Master’s degree,,0,Self-described or Prefer not to say,Yes,
1267,0,United States,Americas,USA,0,7,,,United States,Hybrid,Remote,No,Master’s degree,,0,Woman,,
1268,0,Montenegro,Europe,MNE,6,17,,,Montenegro,Remote,Remote,Yes,Master’s degree,AnyChart,1,Man,No,"Nathan Yau, Alberto Cairo"
1269,0,United States,Americas,USA,8,26,"$20,000 - $39,999",,United States,Hybrid,Hybrid,No,Associate’s degree,,0,Woman,No,
1270,0,United States,Americas,USA,16,16,"$140,000 - $159,999",,United States,Hybrid,Hybrid,No,Doctoral degree,,0,Woman,Yes,
1271,0,,,,1,0,,,,Remote,Hybrid,Yes,Bachelor’s degree,,0,Woman,Yes,
1272,0,United States,Americas,USA,10,12,"$240,000 or more",,United States,On site,On site,No,Master’s degree,ChartJS,0,Man,Yes,
1274,0,United Kingdom,Europe,GBR,2,17,"$40,000 - $59,999",,United Kingdom,Hybrid,Hybrid,Yes,,,0,Woman,Yes,
1276,0,,,,6,4,,,,On site,Hybrid,Yes,Doctoral degree,,0,Woman,No,
1280,0,Poland,Europe,POL,4,7,"$20,000 - $39,999",I am not compensated on an hourly or project basis,Poland,Remote,Remote,Yes,,,0,,Yes,
1283,0,Estonia,Europe,EST,,16,"$40,000 - $59,999",,Estonia,Remote,Hybrid,Yes,Master’s degree,,1,Man,Yes,
1284,0,United States,Americas,USA,0,,,,United States,Remote,Remote,No,Master’s degree,,0,Woman,,
1288,0,United States,Americas,USA,25,31,,$75 - $99,United States,Remote,Remote,No,Bachelor’s degree,tuvalabs.com data exploration environment,0,,Yes,
1293,1,United States,Americas,USA,7,10,,,United States,,Hybrid,No,Bachelor’s degree,,0,Man,Yes,
1295,0,,,,10,27,,,,Remote,,No,Master’s degree,,0,Man,Yes,"Cairo, Tufte, DuBois, Kieran Healy"
1300,1,,,,,5,,,,,,,,,0,Self-described or Prefer not to say,No,
1305,1,India,Asia,IND,,,,,India,,,No,Master’s degree,,0,Man,Yes,
1308,0,Germany,Europe,DEU,2,4,"$80,000 - $99,999",,Germany,On site,On site,No,,,0,,Yes,
1309,0,Canada,Americas,CAN,3,7,,,Canada,,,,Bachelor’s degree,,0,Man,Yes,
846,0,United States,Americas,USA,8,5,"$60,000 - $79,999",I am not compensated on an hourly or project basis,United States,Remote,Remote,Yes,Master’s degree,,0,Woman,,
1223,1,United States,Americas,USA,3,3,"$100,000 - $119,999",,United States,Hybrid,Hybrid,No,Bachelor’s degree,,0,Man,No,
1298,0,Brazil,Americas,BRA,5,3,"$40,000 - $59,999",I am not compensated on an hourly or project basis,Brazil,Remote,Remote,Yes,,,0,,Yes,
1029,0,Uganda,Africa,UGA,2,0,I am not compensated on a yearly basis,I am not compensated on an hourly or project basis,Uganda,On site,On site,No,Bachelor’s degree,,0,Woman,,Twitter
1075,0,United Kingdom,Europe,GBR,8,10,"$40,000 - $59,999",,United Kingdom,Hybrid,Hybrid,Yes,Master’s degree,,0,Man,,
1172,0,Argentina,Americas,ARG,3,20,"$20,000 - $39,999",I am not compensated on an hourly or project basis,Argentina,Remote,Remote,Yes,Master’s degree,,1,Man,,"Bill Shander, Scott Berinato, Ryan Sleeper"
1185,0,United States,Americas,USA,18,22,"$100,000 - $119,999",,United States,Hybrid,Remote,No,Associate’s degree,,0,Man,,
1238,1,Austria,Europe,AUT,4,11,"$40,000 - $59,999",,Austria,Hybrid,Hybrid,No,Master’s degree,,1,Man,,
1246,0,United States,Americas,USA,4,8,"$120,000 - $139,999",,United States,Remote,Hybrid,No,Master’s degree,,0,Woman,,
1312,0,Ukraine,Europe,UKR,11,15,"$40,000 - $59,999",$30 - $44,Ukraine,Remote,Remote,No,,,0,Man,,
1252,0,United States,Americas,USA,7,7,"$100,000 - $119,999",,United States,Hybrid,Hybrid,No,,"Paraview, Blender, Inkscape",0,,,
1251,0,Mauritius,Africa,MUS,4,5,"$10,000 - $19,999",,Mauritius,On site,Hybrid,No,,,0,,,
1260,0,Italy,Europe,ITA,5,6,"$20,000 - $39,999",,Italy,Remote,Remote,No,,SAS Visual Analytics,0,,,
1261,0,United States,Americas,USA,4,12,,,United States,Remote,Remote,No,,,0,,,
1262,0,Russia,Europe,RUS,5,12,"$20,000 - $39,999",$15 - $29,Russia,Remote,Hybrid,No,,,0,,,
1264,0,United States,Americas,USA,6,16,,,United States,Remote,Hybrid,No,,,0,,,
1273,0,United States,Americas,USA,12,16,"$200,000 - $219,999",$125 - $149,United States,Remote,Remote,Yes,,,0,,,
1275,0,Spain,Europe,ESP,2,3,"$20,000 - $39,999",I am not compensated on an hourly or project basis,Spain,Remote,Hybrid,Yes,,,0,,,
1277,0,India,Asia,IND,2,4,"Less than $10,000",Less than $15,India,Remote,Hybrid,Yes,,,0,,,
1278,1,United States,Americas,USA,27,14,"$100,000 - $119,999",,United States,Remote,Remote,No,,Airtable,0,,,
1279,0,Spain,Europe,ESP,1,4,"$20,000 - $39,999",,Spain,Remote,Remote,Yes,,,0,,,
1281,0,Brazil,Americas,BRA,3,0,"Less than $10,000",Less than $15,Brazil,Remote,Remote,Yes,,,0,,,
1282,0,Mexico,Americas,MEX,4,10,I am not compensated on a yearly basis,$75 - $99,Mexico,Hybrid,Remote,No,,,0,,,
1285,0,New Zealand,Oceania,NZL,7,15,"$100,000 - $119,999",,New Zealand,Hybrid,Hybrid,No,,CRM Analytics (Salesforce native tool),0,,,
1286,0,United States,Americas,USA,6,11,"$160,000 - $179,999",I am not compensated on an hourly or project basis,United States,Remote,Remote,No,,,0,,,
1289,0,Colombia,Americas,COL,3,10,"$10,000 - $19,999",$15 - $29,Colombia,On site,Remote,Yes,,Apache Superset,0,,,
1291,0,United States,Americas,USA,3,12,"$60,000 - $79,999",I am not compensated on an hourly or project basis,United States,Hybrid,Hybrid,No,,,0,,,
1294,0,United Kingdom,Europe,GBR,15,30,"$80,000 - $99,999",$60 - $74,United Kingdom,Hybrid,Remote,No,,,0,,,
1296,0,United States,Americas,USA,5,10,"$140,000 - $159,999",,United States,Hybrid,Hybrid,No,,,0,,,
1299,0,France,Europe,FRA,3,4,"$40,000 - $59,999",,France,Hybrid,Hybrid,No,,,0,,,
1301,0,Nepal,Asia,NPL,1,1,"Less than $10,000",Less than $15,Nepal,On site,Remote,Yes,,,0,,,
1302,0,United States,Americas,USA,1,6,,$15 - $29,United States,On site,Hybrid,No,,,0,,,
1303,0,United States,Americas,USA,4,5,I am not compensated on a yearly basis,$100 - $124,United States,Remote,Remote,Yes,,,0,,,
1306,0,Germany,Europe,DEU,11,16,,,Germany,Remote,Remote,No,,,0,,,
1311,1,United States,Americas,USA,0,7,,,United States,On site,Hybrid,Yes,,,0,,,
1287,1,Italy,Europe,ITA,1,6,"Less than $10,000",,Italy,Hybrid,Hybrid,Yes,,Blender,0,,,
1290,0,United States,Americas,USA,7,31,"$40,000 - $59,999",,United States,Hybrid,Remote,Yes,,,0,,,
1292,1,Nigeria,Africa,NGA,0,0,I am not compensated on a yearly basis,I am not compensated on an hourly or project basis,Nigeria,,Remote,Yes,,,0,,,
1297,0,United States,Americas,USA,2,5,"$100,000 - $119,999",I am not compensated on an hourly or project basis,United States,Hybrid,Hybrid,No,,,0,,,
1310,0,Germany,Europe,DEU,1,14,,,Germany,Remote,Hybrid,Yes,,,0,,,
1304,0,United Kingdom,Europe,GBR,8,9,"$80,000 - $99,999",,United Kingdom,Hybrid,Hybrid,No,,,0,,,
1307,0,Greece,Europe,GRC,5,5,"$20,000 - $39,999",,Greece,Hybrid,Hybrid,No,,,0,,,
1313,0,Australia,Oceania,AUS,4,22,"$80,000 - $99,999",,Australia,On site,On site,No,,,0,,,
1314,0,Hungary,Europe,HUN,10,10,"$20,000 - $39,999",,Hungary,Hybrid,Hybrid,No,,,0,,,
1316,0,Australia,Oceania,AUS,20,20,"$80,000 - $99,999",,Australia,Hybrid,Hybrid,No,,,0,,,
1317,0,Singapore,Asia,SGP,7,10,"$100,000 - $119,999",,Singapore,On site,Remote,No,,,0,,,
1318,0,Spain,Europe,ESP,4,10,"$60,000 - $79,999",,Spain,Remote,Remote,Yes,,,0,,,
1319,0,Poland,Europe,POL,3,7,"$20,000 - $39,999",,Poland,Hybrid,Remote,Yes,,,0,,,
1320,0,United States,Americas,USA,11,14,"$240,000 or more",,United States,Remote,Remote,Yes,,visx,0,,,
1321,0,United Kingdom,Europe,GBR,15,25,"$40,000 - $59,999",,United Kingdom,Hybrid,Hybrid,No,,,0,,,
1322,0,Canada,Americas,CAN,10,17,,,Canada,Hybrid,Hybrid,No,,,0,,,
1323,1,United States,Americas,USA,1,6,"$60,000 - $79,999",I am not compensated on an hourly or project basis,United States,Remote,Remote,Yes,,,0,,,
1333,0,New Zealand,Oceania,NZL,31,31,,,New Zealand,Remote,Remote,Yes,,,0,,,
1334,0,United Kingdom,Europe,GBR,20,26,"$20,000 - $39,999",I am not compensated on an hourly or project basis,United Kingdom,Remote,Hybrid,No,,"Cinema 4D, Avenza Mapublisher, Avenza Geographic Imager",0,,,
1335,0,France,Europe,FRA,11,14,"$80,000 - $99,999",,France,Remote,Remote,No,,Spotfire,0,,,
1315,0,United States,Americas,USA,5,10,"$120,000 - $139,999",,United States,Remote,Remote,,,,0,,,
1328,0,United Kingdom,Europe,GBR,5,19,"$60,000 - $79,999",,United Kingdom,Hybrid,Hybrid,,,Aerialod,0,,,
1324,0,India,Asia,IND,4,4,"$10,000 - $19,999",$45 - $59,India,On site,Hybrid,,,OBIEE,0,,,
1325,0,United States,Americas,USA,5,7,"$80,000 - $99,999",I am not compensated on an hourly or project basis,United States,Hybrid,Remote,,,,0,,,
1327,0,United States,Americas,USA,25,25,"$100,000 - $119,999",,United States,Hybrid,Remote,,,,0,,,
1329,0,Indonesia,Asia,IDN,1,15,I am not compensated on a yearly basis,I am not compensated on an hourly or project basis,Indonesia,Hybrid,Hybrid,,,,0,,,
1330,0,India,Asia,IND,3,10,"$10,000 - $19,999",,India,On site,Remote,,,,0,,,
1331,0,United States,Americas,USA,5,5,"$60,000 - $79,999",,United States,Hybrid,Hybrid,,,,0,,,
1336,0,Australia,Oceania,AUS,5,2,"$40,000 - $59,999",I am not compensated on an hourly or project basis,Australia,Remote,Remote,,,,0,,,
1326,0,United States,Americas,USA,4,9,"$100,000 - $119,999",I am not compensated on an hourly or project basis,United States,Remote,Remote,,,,0,,,
1332,1,United States,Americas,USA,3,13,,,United States,Remote,Remote,,,,0,,,
1373,0,,,,5,1,,,,,,,,,0,,,
1337,0,France,Europe,FRA,10,11,"$40,000 - $59,999",,France,Hybrid,Hybrid,,,,0,,,
1338,0,United States,Americas,USA,8,8,"$240,000 or more",,United States,Remote,Remote,,,,0,,,
1339,0,United Kingdom,Europe,GBR,21,31,"$40,000 - $59,999",,United Kingdom,Remote,Hybrid,,,Fusion Analytics Warehouse,0,,,
1342,0,United States,Americas,USA,7,19,"$60,000 - $79,999",,United States,Remote,Remote,,,,0,,,
1362,0,,,,11,31,,,,On site,On site,,,,0,,,
1369,0,Slovenia,Europe,SVN,3,12,"$20,000 - $39,999",,Slovenia,Hybrid,Hybrid,,,,0,,,
1345,0,United States,Americas,USA,23,20,I am not compensated on a yearly basis,I am not compensated on an hourly or project basis,United States,Hybrid,Remote,,,,0,,,
1357,0,United States,Americas,USA,0,4,"$40,000 - $59,999",I am not compensated on an hourly or project basis,United States,Remote,Remote,,,,0,,,
1367,0,Indonesia,Asia,IDN,0,6,I am not compensated on a yearly basis,I am not compensated on an hourly or project basis,Indonesia,Remote,Hybrid,,,,0,,,
1372,0,Israel,Asia,ISR,1,5,,,Israel,,Remote,,,,0,,,
1358,1,United States,Americas,USA,1,4,I am not compensated on a yearly basis,I am not compensated on an hourly or project basis,United States,Remote,Remote,,,,0,,,
1368,1,India,Asia,IND,1,1,"$10,000 - $19,999",,India,Hybrid,Hybrid,,,,0,,,
1380,1,Tanzania,Africa,TZA,0,3,,,Tanzania,Remote,Remote,,,,0,,,
1391,1,United States,Americas,USA,0,24,,,United States,,,,,,0,,,
1404,1,,,,2,0,,,,,,,,,0,,,
1364,1,Ireland,Europe,IRL,7,7,"$10,000 - $19,999",$15 - $29,Ireland,Hybrid,Remote,,,,0,,,
1370,0,United States,Americas,USA,4,0,"$20,000 - $39,999",I am not compensated on an hourly or project basis,United States,Hybrid,Hybrid,,,,0,,,
1340,0,United States,Americas,USA,6,4,"$80,000 - $99,999",,United States,Remote,Remote,,,,0,,,
1341,0,New Zealand,Oceania,NZL,20,20,"$20,000 - $39,999",,New Zealand,Hybrid,Hybrid,,,,0,,,
1343,0,United States,Americas,USA,10,24,"$160,000 - $179,999",I am not compensated on an hourly or project basis,United States,Remote,Remote,,,,0,,,
1344,0,United States,Americas,USA,30,31,"$220,000 - $239,999",,United States,Remote,Remote,,,,0,,,
1346,0,Australia,Oceania,AUS,0,14,"$60,000 - $79,999",,Australia,Hybrid,Remote,,,,0,,,
1347,0,United States,Americas,USA,3,6,"$100,000 - $119,999",,United States,Hybrid,Hybrid,,,,0,,,
1349,0,Argentina,Americas,ARG,8,15,"$20,000 - $39,999",,Argentina,Hybrid,Hybrid,,,,0,,,
1350,0,United States,Americas,USA,10,6,"$240,000 or more",,United States,Hybrid,Hybrid,,,,0,,,
1351,0,United States,Americas,USA,8,18,"$120,000 - $139,999",,United States,Remote,Remote,,,,0,,,
1352,0,United Kingdom,Europe,GBR,20,20,"$100,000 - $119,999",,United Kingdom,Remote,Remote,,,,0,,,
1353,0,United States,Americas,USA,,,"$120,000 - $139,999",,United States,Remote,Hybrid,,,,0,,,
1354,0,United States,Americas,USA,3,10,"$60,000 - $79,999",,United States,On site,Hybrid,,,,0,,,
1378,0,United States,Americas,USA,22,25,"$200,000 - $219,999",,United States,Hybrid,Hybrid,,,,0,,,
1348,0,United States,Americas,USA,11,17,,,United States,Remote,On site,,,,0,,,
1355,0,Singapore,Asia,SGP,8,10,"$140,000 - $159,999",I am not compensated on an hourly or project basis,Singapore,Hybrid,Hybrid,,,,0,,,
1356,0,United States,Americas,USA,7,10,"$140,000 - $159,999",I am not compensated on an hourly or project basis,United States,Remote,Remote,,,,0,,,
1360,0,United States,Americas,USA,7,7,"$140,000 - $159,999",,United States,Remote,Hybrid,,,,0,,,
1361,0,United States,Americas,USA,6,25,"$140,000 - $159,999",,United States,Remote,Remote,,,,0,,,
1365,0,China,Asia,CHN,6,10,"$80,000 - $99,999",,China,On site,On site,,,,0,,,
1371,0,Canada,Americas,CAN,5,6,"$40,000 - $59,999",,Canada,Remote,Remote,,,,0,,,
1374,0,United States,Americas,USA,12,31,,,United States,Hybrid,Remote,,,,0,,,
1375,0,Germany,Europe,DEU,5,5,"$60,000 - $79,999",I am not compensated on an hourly or project basis,Germany,Hybrid,Remote,,,,0,,,
1382,0,United States,Americas,USA,16,22,,,United States,Remote,Remote,,,,0,,,
1383,0,Netherlands,Europe,NLD,10,10,,,Netherlands,Hybrid,Hybrid,,,,0,,,
1384,1,Philippines,Asia,PHL,2,4,"$10,000 - $19,999",,Philippines,On site,Hybrid,,,,0,,,
1403,0,,,,8,12,,,,Remote,Remote,,,,0,,,
1366,0,Australia,Oceania,AUS,5,30,"$100,000 - $119,999",I am not compensated on an hourly or project basis,Australia,Hybrid,Hybrid,,,,0,,,
1397,0,Italy,Europe,ITA,5,11,"$40,000 - $59,999",,Italy,,,,,,0,,,
1359,0,Slovakia,Europe,SVK,2,3,I am not compensated on a yearly basis,$75 - $99,Slovakia,Remote,On site,,,,0,,,
1376,0,Peru,Americas,PER,1,0,I am not compensated on a yearly basis,Less than $15,Peru,Remote,Hybrid,,,,0,,,
1377,0,Thailand,Asia,THA,10,0,"$40,000 - $59,999",$15 - $29,Thailand,Remote,Remote,,,,0,,,
1388,0,United States,Americas,USA,5,7,"$80,000 - $99,999",,United States,Hybrid,Hybrid,,,,0,,,
1363,0,United States,Americas,USA,9,5,"$100,000 - $119,999",$100 - $124,United States,Hybrid,On site,,,,0,,,
1379,1,Canada,Americas,CAN,15,23,,$125 - $149,Canada,Remote,Hybrid,,,,0,,,
1381,1,Colombia,Americas,COL,7,10,"Less than $10,000",I am not compensated on an hourly or project basis,Colombia,Remote,Remote,,,,0,,,
1385,0,Netherlands,Europe,NLD,8,20,,,Netherlands,Hybrid,Remote,,,,0,,,
1389,0,Netherlands,Europe,NLD,3,5,I am not compensated on a yearly basis,I am not compensated on an hourly or project basis,Netherlands,Hybrid,Hybrid,,,,0,,,
1400,0,Canada,Americas,CAN,21,22,,,Canada,On site,On site,,,,0,,,
1386,0,Germany,Europe,DEU,5,8,"$40,000 - $59,999",I am not compensated on an hourly or project basis,Germany,Hybrid,Remote,,,,0,,,
1387,0,Argentina,Americas,ARG,10,10,I am not compensated on a yearly basis,I am not compensated on an hourly or project basis,Argentina,Hybrid,Remote,,,,0,,,
1390,0,South Africa,Africa,ZAF,3,10,I am not compensated on a yearly basis,I am not compensated on an hourly or project basis,South Africa,Remote,Remote,,,,0,,,
1392,1,United States,Americas,USA,2,3,"$60,000 - $79,999",I am not compensated on an hourly or project basis,United States,Remote,Hybrid,,,,0,,,
1393,0,United States,Americas,USA,0,16,"$120,000 - $139,999",,United States,On site,Hybrid,,,,0,,,
1394,0,United States,Americas,USA,5,24,"$240,000 or more",,United States,Remote,Remote,,,,0,,,
1395,0,United Kingdom,Europe,GBR,5,5,,,United Kingdom,Hybrid,Hybrid,,,,0,,,
1396,0,United States,Americas,USA,6,21,"$100,000 - $119,999",,United States,Hybrid,Remote,,,,0,,,
1398,0,United States,Americas,USA,5,30,,,United States,Remote,Remote,,,,0,,,
1399,0,United States,Americas,USA,4,20,,,United States,Hybrid,Hybrid,,,,0,,,
1401,0,United States,Americas,USA,2,25,,,United States,Hybrid,Hybrid,,,,0,,,
1402,0,United States,Americas,USA,7,10,,,United States,Remote,Remote,,,,0,,,
1408,0,unfinished,,,0,10,I am not compensated on a yearly basis,,,,,,,,0,,,
1405,0,unfinished,,,2,10,,,,,,,,,0,,,
1406,0,unfinished,,,10,2,,,,,,,,,0,,,
1407,0,unfinished,,,3,0,,,,,,,,,0,,,
1409,0,unfinished,,,1,6,,,,,,,,,0,,,
1410,0,unfinished,,,5,10,,,,,,,,,0,,,
1411,0,unfinished,,,1,10,,,,,,,,,0,,,
1412,0,unfinished,,,0,5,,,,,,,,,0,,,
1413,0,unfinished,,,0,1,,,,,,,,,0,,,
1414,0,unfinished,,,10,17,,,,,,,,,0,,,
1415,0,unfinished,,,7,17,,,,,,,,,0,,,
1416,0,unfinished,,,12,31,,,,,,,,,0,,,
1417,0,unfinished,,,6,30,,,,,,,,,0,,,
1418,0,unfinished,,,6,6,,,,,,,,,0,,,
1419,0,unfinished,,,7,1,,,,,,,,,0,,,
1420,0,unfinished,,,2,4,,,,,,,,,0,,,
1421,0,unfinished,,,2,12,,,,,,,,,0,,,
1422,0,unfinished,,,10,31,,,,,,,,,0,,,
1423,0,unfinished,,,10,31,,,,,,,,,0,,,
1424,0,unfinished,,,11,22,,,,,,,,,0,,,
1425,0,unfinished,,,10,20,,,,,,,,,0,,,
1426,0,unfinished,,,11,24,,,,,,,,,0,,,
1427,0,unfinished,,,31,31,,,,,,,,,0,,,
1428,0,unfinished,,,8,25,,,,,,,,,0,,,
1429,0,unfinished,,,10,20,,,,,,,,,0,,,
1430,1,unfinished,,,1,4,,,,,,,,,0,,,
1431,0,unfinished,,,5,20,,,,,,,,,0,,,
1432,1,unfinished,,,1,15,,,,,,,,,0,,,
1433,0,unfinished,,,5,3,,,,,,,,,0,,,
1434,1,unfinished,,,0,1,,,,,,,,,0,,,
1435,1,unfinished,,,2,0,,,,,,,,,0,,,
1436,0,unfinished,,,5,16,,,,,,,,,0,,,
1437,1,unfinished,,,2,3,,,,,,,,,0,,,
1438,0,unfinished,,,2,20,,,,,,,,,0,,,
1439,0,unfinished,,,0,7,,,,,,,,,0,,,
1440,1,unfinished,,,1,3,,,,,,,,,0,,,
1441,1,unfinished,,,1,1,,,,,,,,,0,,,
1442,0,unfinished,,,5,30,,,,,,,,,0,,,
1443,0,unfinished,,,7,5,,,,,,,,,0,,,
1444,0,unfinished,,,10,10,,,,,,,,,0,,,
1445,0,unfinished,,,9,20,,,,,,,,,0,,,
1446,0,unfinished,,,7,10,,,,,,,,,0,,,
1447,0,unfinished,,,10,14,,,,,,,,,0,,,
1448,0,unfinished,,,7,10,,,,,,,,,0,,,
1449,0,unfinished,,,22,22,,,,,,,,,0,,,
1450,0,unfinished,,,10,15,,,,,,,,,0,,,
1451,0,unfinished,,,20,28,,,,,,,,,0,,,
1452,0,unfinished,,,15,28,,,,,,,,,0,,,
1453,0,unfinished,,,6,0,,,,,,,,,0,,,
1454,0,unfinished,,,14,14,,,,,,,,,0,,,
1455,0,unfinished,,,15,27,,,,,,,,,0,,,
1456,0,unfinished,,,15,20,,,,,,,,,0,,,
1457,0,unfinished,,,10,25,,,,,,,,,0,,,
1458,1,unfinished,,,3,6,,,,,,,,,0,,,
1459,0,unfinished,,,12,17,,,,,,,,,0,,,
1460,0,unfinished,,,6,6,,,,,,,,,0,,,
1461,0,unfinished,,,7,12,,,,,,,,,0,,,
1462,0,unfinished,,,6,6,,,,,,,,,0,,,
1463,0,unfinished,,,6,15,,,,,,,,,0,,,
1464,0,unfinished,,,30,30,,,,,,,,,0,,,
1465,0,unfinished,,,6,6,,,,,,,,,0,,,
1466,0,unfinished,,,8,19,,,,,,,,,0,,,
1467,0,unfinished,,,25,24,,,,,,,,,0,,,
1468,0,unfinished,,,10,16,,,,,,,,,0,,,
1469,0,unfinished,,,11,13,,,,,,,,,0,,,
1470,0,unfinished,,,10,26,,,,,,,,,0,,,
1471,0,unfinished,,,5,3,,,,,,,,,0,,,
1472,0,unfinished,,,8,13,,,,,,,,,0,,,
1473,0,unfinished,,,7,15,,,,,,,,,0,,,
1474,0,unfinished,,,11,23,,,,,,,,,0,,,
1475,0,unfinished,,,10,12,,,,,,,,,0,,,
1476,0,unfinished,,,8,12,,,,,,,,,0,,,
1477,0,unfinished,,,8,23,,,,,,,,,0,,,
1478,0,unfinished,,,8,12,,,,,,,,,0,,,
1479,0,unfinished,,,8,11,,,,,,,,,0,,,
1480,0,unfinished,,,6,6,,,,,,,,,0,,,
1481,0,unfinished,,,20,31,,,,,,,,,0,,,
1482,0,unfinished,,,8,8,,,,,,,,,0,,,
1483,0,unfinished,,,8,20,,,,,,,,,0,,,
1484,0,unfinished,,,4,4,,,,,,,,,0,,,
1485,0,unfinished,,,2,25,,,,,,,,,0,,,
1486,0,unfinished,,,2,12,,,,,,,,,0,,,
1487,0,unfinished,,,3,4,,,,,,,,,0,,,
1488,0,unfinished,,,1,0,,,,,,,,,0,,,
1489,0,unfinished,,,2,15,,,,,,,,,0,,,
1490,0,unfinished,,,0,11,,,,,,,,,0,,,
1491,0,unfinished,,,2,15,,,,,,,,,0,,,
1492,0,unfinished,,,4,6,,,,,,,,,0,,,
1493,0,unfinished,,,4,14,,,,,,,,,0,,,
1494,0,unfinished,,,5,15,,,,,,,,,0,,,
1495,0,unfinished,,,4,17,,,,,,,,,0,,,
1496,0,unfinished,,,5,15,,,,,,,,,0,,,
1497,0,unfinished,,,5,15,,,,,,,,,0,,,
1498,0,unfinished,,,3,5,,,,,,,,,0,,,
1499,0,unfinished,,,4,10,,,,,,,,,0,,,
1500,0,unfinished,,,1,2,,,,,,,,,0,,,
1501,0,unfinished,,,0,20,,,,,,,,,0,,,
1502,0,unfinished,,,2,3,,,,,,,,,0,,,
1503,0,unfinished,,,4,14,,,,,,,,,0,,,
1504,0,unfinished,,,5,8,,,,,,,,,0,,,
1505,0,unfinished,,,1,10,,,,,,,,,0,,,
1506,0,unfinished,,,0,0,,,,,,,,,0,,,
1507,0,unfinished,,,1,2,,,,,,,,,0,,,
1508,0,unfinished,,,1,7,,,,,,,,,0,,,
1509,0,unfinished,,,4,10,,,,,,,,,0,,,
1510,0,unfinished,,,2,30,,,,,,,,,0,,,
1511,0,unfinished,,,5,10,,,,,,,,,0,,,
1512,0,unfinished,,,4,18,,,,,,,,,0,,,
1513,0,unfinished,,,0,1,,,,,,,,,0,,,
1514,0,unfinished,,,2,6,,,,,,,,,0,,,
1515,0,unfinished,,,2,10,,,,,,,,,0,,,
1516,0,unfinished,,,4,10,,,,,,,,,0,,,
1517,0,unfinished,,,5,8,,,,,,,,,0,,,
1518,0,unfinished,,,5,12,,,,,,,,,0,,,
1519,0,unfinished,,,0,0,,,,,,,,,0,,,
1520,0,unfinished,,,5,20,,,,,,,,,0,,,
1521,0,unfinished,,,5,25,,,,,,,,,0,,,
1522,0,unfinished,,,4,20,,,,,,,,,0,,,
1523,0,unfinished,,,0,10,,,,,,,,,0,,,
1524,0,unfinished,,,5,8,,,,,,,,,0,,,
1525,0,unfinished,,,4,6,,,,,,,,,0,,,
1526,0,unfinished,,,1,22,,,,,,,,,0,,,
1527,0,unfinished,,,1,3,,,,,,,,,0,,,
1528,0,unfinished,,,2,10,,,,,,,,,0,,,
1529,0,unfinished,,,4,20,,,,,,,,,0,,,
1530,0,unfinished,,,5,7,,,,,,,,,0,,,
1531,0,unfinished,,,3,31,,,,,,,,,0,,,
1532,0,unfinished,,,5,5,,,,,,,,,0,,,
1533,0,unfinished,,,20,30,,,,,,,,,0,,,
1534,0,unfinished,,,10,18,,,,,,,,,0,,,
1535,1,unfinished,,,6,6,,,,,,,,,0,,,
1536,1,unfinished,,,1,1,,,,,,,,,0,,,
1537,1,unfinished,,,0,2,,,,,,,,,0,,,
1538,1,unfinished,,,3,5,,,,,,,,,0,,,
1539,0,unfinished,,,2,0,,,,,,,,,0,,,
1540,0,unfinished,,,0,0,,,,,,,,,0,,,
1541,0,unfinished,,,1,1,,,,,,,,,0,,,
1542,0,unfinished,,,7,7,,,,,,,,,0,,,
1543,0,unfinished,,,8,10,,,,,,,,,0,,,
1544,0,unfinished,,,2,12,,,,,,,,,0,,,
1545,0,unfinished,,,2,2,,,,,,,,,0,,,
1546,0,unfinished,,,2,4,,,,,,,,,0,,,
1547,0,unfinished,,,0,9,,,,,,,,,0,,,
1548,0,unfinished,,,5,10,,,,,,,,,0,,,
1549,0,unfinished,,,5,5,,,,,,,,,0,,,
1550,0,unfinished,,,2,3,,,,,,,,,0,,,
1551,0,unfinished,,,31,31,,,,,,,,,0,,,
1552,1,unfinished,,,1,2,,,,,,,,,0,,,
1553,1,unfinished,,,0,10,,,,,,,,,0,,,
1554,0,unfinished,,,5,10,,,,,,,,,0,,,
1555,1,unfinished,,,3,5,,,,,,,,,0,,,
1556,0,unfinished,,,15,20,,,,,,,,,0,,,
1557,0,unfinished,,,4,20,,,,,,,,,0,,,
1558,0,unfinished,,,0,7,,,,,,,,,0,,,
1559,0,unfinished,,,4,10,,,,,,,,,0,,,
1560,0,unfinished,,,3,0,,,,,,,,,0,,,
1561,0,unfinished,,,0,20,,,,,,,,,0,,,
1562,0,unfinished,,,0,8,,,,,,,,,0,,,
1563,1,unfinished,,,2,2,,,,,,,,,0,,,
1564,1,unfinished,,,1,1,,,,,,,,,0,,,
1565,0,unfinished,,,3,6,,,,,,,,,0,,,
1566,1,unfinished,,,2,4,,,,,,,,,0,,,
1567,1,unfinished,,,4,10,,,,,,,,,0,,,
1568,0,unfinished,,,8,8,,,,,,,,,0,,,`;

// https://github.com/d3/d3-fetch/blob/main/README.md#dsv
const data_raw = d3.csvParse(csvData, function(data){
    return data;
});

var data = data_raw.filter(function (d) {return (d.Loc1Country != "unfinished") });
// console.log(data[0]);
// console.log(data.length); //should equal 1404
//console.log(new Set(data.map(x=>x.pay_hourly)))
data.sort((a,b) => Number(a.years_dataviz) - Number(b.years_dataviz));
//console.log(data[1400]);

// - - V A R I A B L E S - -

const payHourly = {
    // ✦ 0 – 99
    // ✶ 100 – 199
    // ✷ 200 – 299
    // ✺ >300
    "":"",
    "I am not compensated on an hourly or project basis":"",
    "Less than $15":"✦",
    "$15 - $29":"✦",
    "$30 - $44":"✦",
    "$45 - $59":"✦",
    "$60 - $74":"✦",
    "$75 - $99":"✦",
    "$100 - $124":"✶",
    "$125 - $149":"✶",
    "$150 - $174":"✶",
    "$175 - $199":"✶",
    "$200 - $224":"✷",
    "$225 - $249":"✷",
    "$250 - $274":"✷",
    "$300 or more":"✺",
};
const workType = {
    "Hybrid":"◐",
    "On site":"◉",
    "Remote":"◯",
    "":""
};
// const workTypePrefer = {
//     "Hybrid":"◐",
//     "On site":"◉",
//     "Remote":"◯",
//     "":""
// };
const eduLevel = {
   "Bachelor’s degree":"..",
   "Doctoral degree":"....",
   "Master’s degree":"...",
   "Technical school":".",
   "Some college":".",
   "Associate’s degree":"..",
   "High school diploma":".",
   "":""
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
    "Oceania":"#37324F",
    "Americas": "#5a735d",// previously darker green "#49574B",
    "":"#e3c1c1",
};

// - - V I Z U A L - -

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
    .on('mouseover', mouseOver)
    .on('mouseout', mouseOut)
    .on('click', onClick)
    ;

function mouseOver (event, d) {
    d3.select(this).style('opacity', '0.3');
    tooltip.style("visibility", 'visible')
        .style("left", (event.pageX + 20) + "px")
        .style("top", (event.pageY - 100) + "px");
    tooltip
    .append("p").attr("class", "tooltip-title").text("Respondent No: "+ (d.refID));
    if (d.Loc1Country != "") {
        tooltip
        .append("p").attr("class", "tooltip-title").text("Country: "+ (d.Loc1Country));
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
    }
    ;}

function mouseOut (event, d) {
    d3.select(this).style('opacity', '1');
    tooltip.style("visibility", 'hidden').selectAll("p").remove()
    ;}

function onClick (event, d) {
    d3.select(this)
    .attr('class', 'rect-clicked')
    .style('background-color', d=>(regionColours[d.continent]))
    .style('border',d=>(d.dvs_member == "Yes" ? "2px solid #75cbec" : "2px solid white"))
    
    var svg_circle = d3.select(this)
    .append("svg")
    .attr("width", 32).attr("height", 32)
    .append("g");
    svg_circle
    .append("circle")
        .attr("class","inside-circle")
        .attr('cx', 16).attr('cy', 16).attr('r', 13)
        //.style("stroke-dasharray",d=>(d.remote_or_what == "Hybrid" ? "15%" : "0"))
        //.style("stroke",d=>(workType[d.remote_or_what]))
        .style("fill-opacity", d=>(d.looking_for_job == "Yes" ? "0.3":"0"))
        ;
    svg_circle
    .append("text")
        .attr("class","text")
        .attr("dy",10)
        .attr("dx",3)
        .style("fill",d=>(d.continent == "Oceania" || d.continent == "Americas" ? "#d9d9d9" : "black"))
        .text(d=>(d.lang_two_or_more == 1 ? "ª" : ""))
        ;
    svg_circle
    .append("text")
        .attr("class","text")
        .attr("dy",20)
        .attr("dx",5)
        .style("fill",d=>(d.continent == "Oceania" || d.continent == "Americas" ? "#d9d9d9" : "black"))
        .text(d=>(genderSymbols[d.gender] + payHourly[d.pay_hourly] + workType[d.remote_or_what]))
        ;
    svg_circle
    .append("text")
        .attr("class","text")
        .attr("dy",30)
        .attr("dx",3)
        .style("fill",d=>(d.continent == "Oceania" || d.continent == "Americas" ? "#d9d9d9" : "black"))
        .text(d=>(d.student == 1 ? eduLevel[d.edu_level] + "    ➝" : eduLevel[d.edu_level]))
        //→
        ;
    ;}
