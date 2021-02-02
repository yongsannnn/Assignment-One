# Assignment-One
Gym locator & Occupancy Chart Application

Strategy:

    The user: Fitness/Gym enthusiast of all ages
    
    The user's needs:   1) Know where is the nearby ActiveSG Gym near his premises. 
                        2) Able to see the current occupancy rate of the selected outlet
                        3) Read,manupilate and interact with past occupancy data chart to plan out future visits. 
   
    User pain points:   1) Do not want visit a gym that is fully occupied. 
                        2) Wants to visit the gym but don't know where is the nearest outlet.

    User Stories:   1) As a user I want to check where is the nearest gym, so that I can visit the gym. 
                    2) As a user I want to know how filled the gym is now, so that I can plan my visit.
                    3) As a user I want to compare occupancy between different gyms, so that I can choose which outlet to visit. 

Scope:

    Functional Requirement:
        1) User can search where is the nearest outlet based on region.
        2) User can enable his location and use it and find the nearest outlet. 
        3) User should be able to see all the key information of the selected outlet. (Eg, Opening Hours, Address, Live Occupancy Rate)
        4) User should be able to interact with the chart to filter/compare different outlet's past & live occupancy.
        5) Live data of the occupancy rate should be updating without the need of the user to trigger a refresh. 

    Non-Functional Requirement: 
        1) Font size should be cathered to all ages 
        2) Application should be mobile first design. 
        3) Application should not store any of the user's location information(if enabled)

Structure: 

    Homepage: 
        1) Map
        2) Exisiting location plotted, segregated by different zones(North,Central,West and East)
            When pin is selected:
                2.1) Details of Selected Gym
                2.2) Current Occupancy Rate
        Sub Page:
            1) Chart
                1.1) Occupancy Rate for each outlet for the past 7 days. 
                1.2) Manupilating of data
                    1.2.1) Filter by Outlet
                    1.2.2) Filter by Time
                    1.2.3) Comparing one or multiple outlets
                 
        
Technique/Step-by-step: 

    To meet user needs 1&2) 
        1)	Map will have 4 layers showing outlets from the north, central, west and east. Zoom to show its exact location. Use can interact and show a specific zone only.
        2)	Pins will reflect each outlet’s occupancy rate, differentiated by 3 colours. Green, amber, red. 
        3)	By clicking on the pin(interaction) it will show the details of the gym, address, tele, opening hours. There will be a live number of the occupancy rate that is updated by a json file every hour. This same number will affect 2nd point. 

    To meet user needs 3)
        1)	By using charts (heatmap) and json file (weekly update), user can have an overview of all the gym’s average weekly occupancy rate base on hourly intervals. 
        2)	User can interact with the data; 
            a.	Filter by specific outlet
            b.	Filter by specific time or range
        3)	Add/remove different outlets to compare occupancy through the selected parameter. (This must happen in the same chart) 


API/JSON File Exploration and Investigations:

    Location of all gyms in Singapore: https://data.gov.sg/dataset/gymssg
    Weekly Occupancy Data: https://gym-tracker.data.gov.sg/data/gym-formatted-data.json
    Hourly Occupancy Data: https://gym-tracker.data.gov.sg/api/gymcapall/



Additional Consideration:
Add in nearby bus stop to Objective 1.3 (APIs from data mall) 




