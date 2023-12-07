
// --------------------------------------------------------------------
// Data in Firebase
// commented out to prevent redundant writes
// do not delete in case we need to remake the resources
// --------------------------------------------------------------------
function writeResources() {
    //define a variable for the collection you want to create in Firestore to populate data
    var resourcesRef = db.collection("resources");

    resourcesRef.add({
        code: "foodbank1",
        name: "Greater Vancouver Food Bank",
        category: "food",
        city: "Vancouver",
        province: "BC",
        description: "A non-profit organization committed to addressing food insecurity in the community. Through various distribution centers, they provide nutritious food to individuals and families in need, fostering a collaborative approach with local partners to maximize their impact on hunger relief.",
        location: "8345 Winston Street Burnaby, BC V5A 2H3",
        contactPhone: "(604) 876-3601",
        last_updated: firebase.firestore.FieldValue.serverTimestamp()  //current system time
    });
    resourcesRef.add({
        code: "foodbank2",
        name: "Richmond Food Bank Society",
        category: "food",
        city: "Vancouver",
        province: "BC",
        description: "A non-profit organization committed to eradicating hunger in the Richmond community. They operate distribution centers, offering essential food assistance to individuals and families while collaborating with local partners to create a comprehensive solution to food insecurity.",
        location: "5800 Cedarbridge Way #100, Richmond, BC V6X 2A7",
        contactPhone: "(604) 271-5609",
        last_updated: firebase.firestore.FieldValue.serverTimestamp()  //current system time
    });
    resourcesRef.add({
        code: "NV01",
        name: "North Vancouver Food Bank", //replace with your own city?
        city: "North Vancouver",
        province: "BC",
        description: "Each month we provide healthy food to around 16,000 individuals and families in need and 138 Community Agency Partners across Vancouver, Burnaby, New Westminster, and the North Shore. Our mission is to provide healthy food to those in need.",
        last_updated: firebase.firestore.FieldValue.serverTimestamp()  //current system time
    });
}

// adding real data to firebase
function writeResources() {
    var resourcesRef = db.collection("resources");
    // categoty: food
    resourcesRef.add({
        category: "food",
        code: "harverst_project_nv",
        name: "Harvest Project",
        city: "North Vancouver",
        searchType: ["food", "food bank", "foodbank", "harvest project", "north vancouver"],
        contactPhone: "(604)-983-9488",
        description: "Supports North Shore residents facing challenges like job loss, health issues, or family loss. Offers coaching, grocery/clothing support, and information services. Emergency food assistance available",
        description_detail: "Assists North Shore residents who are experiencing challenging life circumstances such as a job loss, divorce, emotional and physical health issues, or death of a family member. Provides one-to-one coaching/mentoring, a grocery support program, clothing support program, and information and referral services aimed at empowering people to take positive steps in their lives. Also offers an emergency food program in partnership with St Andrew's United Church; see that listing for details. Proof of North Shore residence is required. Accepts donations of clothing and groceries; drop by during business hours, and then phone reception to receive the items. Hours are 10 am to 4 pm Tuesday to Friday, and 10 am to 2 pm on Saturdays; an appointment is required. Nonprofit society, registered charity.",
        closeTime: "16:00",
        openTime: "10:00",
        province: "BC",
        location: "1073 Roosevelt Crescent, North Vancouver, V7P 1M4 BC",
        lat: 49.321970,
        lng: -123.104940,
        last_updated: firebase.firestore.FieldValue.serverTimestamp()  //current system time
    });
    resourcesRef.add({
        category: "food",
        code: "GVFB_distribution_site-NV",
        name: "GVFB Distribution Site - North Vancouver",
        city: "North Vancouver",
        searchType: ["food", "food bank", "gvfb", "north vancouver", "food distribution", "distribution site", "greater vancouver food bank"],
        contactPhone: "(604)-876-3601",
        description: "Distributes 10-12 weekly food items to North Vancouver residents in need. Requires government ID, proof of address, and one year in Canada for international students. Provides photo membership cards for access. Specialized nutrition programs for families with children and seniors",
        description_detail: "Provides approximately 10 to 12 food items per client per week to residents of North Vancouver who are experiencing food insecurity. To access services, registration with government-issued identification (ID) for each family member (expired ID and photocopies stamped from the welfare office are acceptable), as well as proof of address for the household is required. International students are required to have been in Canada for at least one year to be eligible for services. Clients will receive a photo membership card that allows them to access food from any of the GVFB distribution sites. Also offers specialized nutrition supplement programs for families with children ages birth to 12, and seniors",
        closeTime: "10:00",
        openTime: "15:00",
        province: "BC",
        location: "225 East 2nd Street, North Vancouver, V7M 1C9",
        lat: 49.314670,
        lng: -123.082470,
        last_updated: firebase.firestore.FieldValue.serverTimestamp()
    });
    resourcesRef.add({
        category: "food",
        code: "Loving_spoonful-VAN",
        name: "A Loving Spoonful",
        city: "Vancouver",
        searchType: ["food", "food bank", "a loving spoonful", "vancouver"],
        contactPhone: "(604)-682-6325",
        description: "A Loving Spoonful is a volunteer-driven, non-partisan Society that provides free, nutritious meals to people living with HIV and co-existing illness in Metro Vancouver and the surrounding areas.",
        description_detail: "A Loving Spoonful is a volunteer-driven, non-partisan Society that provides free, nutritious meals to people living with HIV and co-existing illness in Metro Vancouver and the surrounding areas.Provides free nutritious meals and groceries to individuals and families living with HIV/AIDS and co-existing illness in Metro Vancouver, based on medical need. Meals and groceries are available for pick-up or delivery. Physician referral required. Office hours are 9 am to 5 pm Monday to Friday. Nonprofit society, registered charity.",
        closeTime: "17:00",
        openTime: "9:00",
        province: "BC",
        location: "1449 Powell Street, Vancouver, V5L 1G8 BC",
        lat: 49.283440,
        lng: -123.073070,
        last_updated: firebase.firestore.FieldValue.serverTimestamp()
    });
    resourcesRef.add({
        category: "food",
        code: "GVFB_distribution_site-NV",
        name: "GVFB Distribution Site - Vancouver",
        city: "Vancouver",
        searchType: ["food", "food bank", "foodbank", "gvfb", "north vancouver", "food distribution", "distribution site"],
        contactPhone: "(604)-876-3601",
        description: "Distributes 10-12 weekly food items to North Vancouver residents in need. Requires government ID, proof of address, and one year in Canada for international students. Provides photo membership cards for access. Specialized nutrition programs for families with children and seniors.",
        description_detail: "Provides approximately 10 to 12 food items per client per week to residents of Vancouver who are experiencing food insecurity. To access services, registration with government-issued identification (ID) for each family member (expired ID and photocopies stamped from the welfare office are acceptable), as well as proof of address for the household is required. International students are required to have been in Canada for at least one year to be eligible for services. Clients will receive a photo membership card that allows them to access food from any of the GVFB distribution sites. Also offers specialized nutrition supplement programs for families with children ages birth to 12, and seniors.",
        closeTime: "16:00",
        openTime: "10:00",
        province: "BC",
        location: "3454 Lougheed Highway, Vancouver, V5M 2A4 BC",
        lat: 49.262780,
        lng: -123.028740,
        last_updated: firebase.firestore.FieldValue.serverTimestamp()
    });
    resourcesRef.add({
        category: "food",
        code: "Food_access_project-VAN",
        name: "Food Access Project-PIRS",
        city: "Vancouver",
        searchType: ["food", "food bank", "food access project", "vancouver", "low-income"],
        contactPhone: "(604)-298-5888",
        description: "Distributes weekly healthy food hampers and care packages to low-income families with children. Available through direct delivery. Outreach support workers provide additional assistance, including mental wellness and parenting support, children's resources, and help accessing government financial aid.",
        description_detail: "Distributes weekly healthy food hampers and care packages to families with children living in a low-income bracket or on social assistance; service available by direct delivery or pick-up at food hub locations in Burnaby (Journey Home, 10:30 am to 1 pm Thursdays) and Vancouver (South Vancouver Family Place, 10:30 am to 2:30 pm Mondays). Outreach support workers connect with families to offer additional help as needed, including mental wellness and parenting support, children's resources, and access to government financial aid. Developed as an emergency response program to help reduce the inflation of food insecurity among the most vulnerable PIRS clients due to the pandemic.",
        closeTime: "14:30",
        openTime: "10:30",
        province: "BC",
        location: "1874 Kingsway, Vancouver, V5N 2S7 BC",
        lat: 49.245880,
        lng: -123.066960,
        last_updated: firebase.firestore.FieldValue.serverTimestamp()
    });
    resourcesRef.add({
        category: "food",
        code: "Aboriginal_Front_Door_society-VAN",
        name: "Aboriginal Front Door Society",
        city: "Vancouver",
        searchType: ["food", "food bank", "aboriginal front door society", "vancouver", "aboriginal", "elder", "family", "indigenous"],
        contactPhone: "(604)-428-1908",
        description: "Creates a supportive space for Downtown Eastside's Aboriginal and non-Aboriginal community, emphasizing traditional healing. Offers Elder/family cultural guidance, community meetings, and social activities. Provides culturally safe referrals to drug and alcohol treatment. The Common Bowl Food Truck serves coffee, meals, and food hampers as supplies permit.",
        description_detail: "Offers a supportive space where Aboriginal and non-Aboriginal people in the Downtown Eastside can reconnect with traditional approaches to community and healing. Services include Elder/family cultural guidance, community meetings, social/recreational activities, and culturally safe referrals to drug and alcohol treatment. The Common Bowl Food Truck serves coffee, meals, and food hampers as supplies permit; operating hours are 9 am to 5 pm Monday to Friday. Office hours are 8 am to 12 noon and 1 pm to 4 pm Monday to Friday. Nonprofit society.",
        closeTime: "17:00",
        openTime: "9:00",
        province: "BC",
        location: "384 Main Street, Vancouver, V6A 2T1 BC",
        lat: 49.281814,
        lng: -123.099647,
        last_updated: firebase.firestore.FieldValue.serverTimestamp()
    });
    // categoty: housing
    resourcesRef.add({
        category: "housing",
        code: "Aboriginal_Shelter-VAN",
        name: "Aboriginal Shelter-VAFCS",
        city: "Vancouver",
        searchType: ["housing", "aboriginal", "shelter", "vancouver", "man", "emergency", "homeless"],
        contactPhone: "(604)-682-5556",
        description: "Emergency low-barrier shelter for men, 19 and older, accommodating up to 52 individuals. Opens at 3 pm, first-come, first-served. Curfew at 11 pm, closes at 10 am. Provides hot dinner, breakfast snack, and hygiene supplies.",
        description_detail: "An emergency low-barrier shelter (with mats and blankets) that accommodates up to 52 men ages 19 and over. Open at 3 pm on a first-come, first-served basis; curfew is at 11 pm and shelter closes at 10 am. Provides a hot dinner around 6:15 pm, and a sandwich/snack for breakfast after 8 am. Also provides personal hygiene supplies. Storage available for 50 lbs or less of personal items; no space for storage of carts or bikes. Zero tolerance for violence or use of alcohol or illegal drugs. Pets are permitted in kennels on a case-by-case basis; dogs must be muzzled. Wheelchair accessible. Open to everyone. Receives funding from BC Housing and City of Vancouver.",
        closeTime: "10:00",
        openTime: "15:00",
        province: "BC",
        location: "201 Central Street, Vancouver, V6A 4A9 BC",
        lat: 49.271198,
        lng: -123.098869,
        last_updated: firebase.firestore.FieldValue.serverTimestamp()
    });
    resourcesRef.add({
        category: "housing",
        code: "Powell_place_shelter-VAN",
        name: "Powell Place Emergency Shelter for Women",
        city: "Vancouver",
        searchType: ["housing", "powell place", "vancouver", "shelter", "woman", "emergency", "homeless"],
        contactPhone: "(604)-606-0403",
        description: "Provides year-round low-barrier, 24-hour emergency shelter for 52 women, including transgender women, at risk of homelessness. Focuses on autonomy, independence, and skill-building.",
        description_detail: "Provides year-round low-barrier, 24-hour emergency shelter for 52 women (including transgender women) experiencing, or at risk of homelessness. Women are supported in retaining their autonomy, regaining their independence, and building skills to move forward in life. Services include three meals per day, one-on-one support and advocacy, crisis intervention, referrals, housing search assistance, and accompaniment to appointments. Health-related services include 24-hour access to bed rest, medication storage, home nursing and home care support through referral, oxygen tank storage, and harm reduction supplies (condoms, new needle distribution, information). Referral accepted from self or other. Does not accept pets. Not wheelchair accessible.",
        closeTime: "24:00",
        openTime: "00:00",
        province: "BC",
        location: "329 Powell Street, Vancouver, V6A 1G5 BC",
        lat: 49.283357,
        lng: -123.096396,
        last_updated: firebase.firestore.FieldValue.serverTimestamp()
    })
    resourcesRef.add({
        category: "housing",
        code: "Imouto_Housing-VAN",
        name: "Imouto Housing for Young Women",
        city: "Vancouver",
        searchType: ["housing", "Imouto Housing", "vancouver", "shelter", "youth", "woman", "longterm", "homeless"],
        contactPhone: "604-215-0369",
        description: "Providing long-term transitional housing for young women aged 16 to 24 facing homelessness or barriers to housing. Offers 24/7 staff support, an intergenerational mentorship program, and a community kitchen.",
        description_detail: "Offers long-term transitional housing for 16 young women ages 16 to 24 who are homeless, at risk of homelessness, or have other barriers to accessing housing and support services. Staff is on site 24 hours each day, seven days a week and additional supports are offered by a partnership of community agencies. Offers an intergenerational mentorship program, a community kitchen for residents, and garden. Other services include accompaniment, activity groups, advocacy, communal living space, community garden, community kitchen, emotional support, group support, outreach team, and information and referral. Accepts self-referrals. Rent is charged. Also offers two crisis beds where young women can stay up to 72 hours, during which time efforts will be made to connect them with primary health care and related support services. Not wheelchair accessible.",
        closeTime: "24:00",
        openTime: "00:00",
        province: "BC",
        location: "120 Jackson Street, Vancouver, V6A 1B5 BC",
        lat: 49.280042,
        lng: -123.101653,
        last_updated: firebase.firestore.FieldValue.serverTimestamp()
    });
    resourcesRef.add({
        category: "housing",
        code: "SEREENAS_HOUSING-VAN",
        name: "Sereena Housing for Women",
        city: "Vancouver",
        searchType: ["Sereena Housing", "housing", "vancouver", "shelter", "violence", "woman", "abuse", "affordable housing"],
        contactPhone: "604-642-2620",
        description: "Sereenas Housing for Women provides 56 units of supportive housing for women who have been impacted by violence. Offers additional services such as but not limited to accompaniment, advocacy, Emotional Support, and referrals ",
        description_detail: "rovides 56 units of supportive housing for women who have been impacted by violence and/or substance abuse. Services include accompaniment, activity groups, advocacy, emotional support, group support, an outreach team, and information and referral. Vancouver Coastal Health (VCH) clinical housing team is available onsite to work exclusively with Sereena residents. Rent is charged. No minimum or maximum stay, though a three-month commitment is preferred. Visiting hours are 9 am to 11 pm. Funded by and applications through BC Housing.",
        closeTime: "23:00",
        openTime: "9:00",
        province: "BC",
        location: "143 Dunlevy Avenue, Vancouver, V6A 3A4 BC",
        lat: 49.283252,
        lng: -123.095574,
        last_updated: firebase.firestore.FieldValue.serverTimestamp()
    });
    resourcesRef.add({
        category: "housing",
        code: "Seniors_Homelessness-NV",
        name: "Seniors' Homelessness Services",
        city: "North Vancouver",
        searchType: ["housing", "Seniors Homelessness", "vancouver", "shelter", "senior", "eviction prevention", "affordable housing", "homeless"],
        contactPhone: "604-987-8211",
        description: "Supporting homeless and at-risk adults aged 55 and older through outreach and in-office assistance. Services include eviction prevention, housing search, application support, income assistance, and financial management. Additional offerings include life skills, nutrition support, elder abuse awareness, mentorship training, and community engagement. Emergency subsidies available",
        description_detail: "Provides outreach and in-office support to older adults, age 55 and older who are homeless or at risk of losing their home. Services include assistance with eviction prevention, searching for suitable and affordable housing, helping to complete application forms, arranging for income support, and financial management. Also offers life and social skills development, nutrition support, elder abuse awareness, mentorship training, community engagement opportunities, and connections to community resources such as mental health care or primary health care. Small emergency subsidies are available to stabilize housing crises. Referral accepted from self or other. Office hours are 8:30 am to 5 pm Monday to Friday. Funded in part by BC Housing.",
        closeTime: "17:00",
        openTime: "8:30",
        province: "BC",
        location: "104-267 West Esplanade, North Vancouver, V7M 1A5 BC",
        lat: 49.312913,
        lng: -123.085209,
        last_updated: firebase.firestore.FieldValue.serverTimestamp()
    });
    // // category: money
    resourcesRef.add({
        category: "money",
        code: "Service_BC_Centre-MR",
        name: "Service BC Centre - Maple Ridge (Child Care Subsidy Program)",
        city: "Maple Ridge",
        searchType: ["subsidy", "Service BC Centre", "Maple Ridge", "Child Care Subsidy", "child care", "Affordable Child Care Benefit", "dependant", "parent"],
        contactPhone: "604-466-7470",
        description: "Service BC location that includes in person Affordable Child Care Benefit services",
        description_detail: "Offers a range of BC government services and information, including BC Hydro payments; birth, death, and marriage certificate applications; business registration; child care subsidy program; residential tenancy information; fish and wildlife licenses; Medical Services Plan (MSP) registration and billing payments; and Legal Aid BC (LABC) forms and access. Services vary by location; see website for full list of services offered. Office hours are 8:30 am to 5 pm Monday to Friday.",
        closeTime: "17:00",
        openTime: "8:30",
        province: "BC",
        location: "175-22470 Dewdney Trunk Road, Maple Ridge, V2X 5Z6 BC",
        lat: 49.219898,
        lng: -122.599753,
        last_updated: firebase.firestore.FieldValue.serverTimestamp()
    });
    resourcesRef.add({
        category: "money",
        code: "Service_BC_Centre-SQ",
        name: "Service BC Centre - Squamish (Child Care Subsidy Program)",
        city: "Squamish",
        searchType: ["subsidy", "Service BC Centre", "Squamish", "Child Care Subsidy", "child care", "Affordable Child Care Benefit", "dependant", "parent"],
        contactPhone: "604-892-2400",
        description: "Service BC location that includes in person Affordable Child Care Benefit services",
        description_detail: "Offers a range of BC government services and information, including BC Hydro payments; birth, death, and marriage certificate applications; business registration; child care subsidy program; residential tenancy information; fish and wildlife licenses; Medical Services Plan (MSP) registration and billing payments; and Legal Aid BC (LABC) forms and access. Services vary by location; see website for full list of services offered. Services vary by location; see website for details. Office hours are 8:30 am to 4:30 pm Monday to Friday.",
        closeTime: "16:30",
        openTime: "8:30",
        province: "BC",
        location: "1360 Pemberton Street, Squamish BC",
        lat: 49.703313,
        lng: -123.153136,
        last_updated: firebase.firestore.FieldValue.serverTimestamp()
    });
    resourcesRef.add({
        category: "money",
        code: "harverst_project_nv",
        name: "North Vancouver Rent Bank",
        city: "North Vancouver",
        searchType: ["intrest free loan", "financial loan", "rent", "rent bank", "north vancouver", "harvest project", "essentials"],
        contactPhone: "604-983-9488",
        description: "Offering interest-free loans on the North Shore for those facing eviction, utility disconnection, or seeking new rental due to a temporary fund shortage. Loans, up to $1,400 for individuals and $2,000 for families, cover rental arrears, deposits, and essential utilities.",
        description_detail: "Provides interest free loans to individuals and families on the North Shore who are seeking new rental or at risk of eviction or essential utility disconnection due to a temporary shortage of funds. Loans may be used for rental arrears, security deposits and/or first month's rent, and essential utilities such as hydro and gas. Maximum loan amount can be up to $1,400 for a single person and $2,000 for a family. Maximum repayment period is 24 months. Applicants must be age 19 and over, a resident of the North Shore, eligible for Harvest Project programs, have or will have a steady source of income or be receiving income assistance, not be in the process of bankruptcy, and owe no more than two months' rent. Applicants must provide two pieces of identification, proof of tenancy, and three months of bank records. Applicants require an intake appointment with a Financial Case Worker to assess eligibility. Apply using the online form or by phone. Hours are 10 am to 4 pm Tuesday to Friday, and 10 am to 2 pm Saturdays.",
        closeTime: "16:00",
        openTime: "10:00",
        province: "BC",
        location: "1073 Roosevelt Crescent, North Vancouver, V7P 1M4 BC",
        lat: 49.321752,
        lng: -123.104324,
        last_updated: firebase.firestore.FieldValue.serverTimestamp()
    });
    resourcesRef.add({
        category: "money",
        code: "Rent_Bank-VAN",
        name: "Vancouver Rent Bank",
        city: "Vancouver",
        searchType: ["intrest free loan", "financial aid", "rent", "rent bank", "vancouver", "drop in", "essentials"],
        contactPhone: "604-566-9685",
        description: "Provides one-time interest free loans to people in danger of eviction, homelessness, or essential utility cut-off due to temporary financial crisis. Loans may be used for security deposits, rent, and essential utilities such as hydro and gas.",
        description_detail: "Aims to increase housing stability by providing one-time interest free loans to people in danger of eviction, homelessness, or essential utility cut-off due to temporary financial crisis. Loans may be used for security deposits, rent, and essential utilities such as hydro and gas. Maximum loan amount can be up to $1300 for a single person, and $1800 for a family. Maximum repayment period is 24 months, and payments are made through automatic withdrawal. Applicants must be aged 19 and over, a resident of the City of Vancouver, have a steady source of income, qualify as low income, have legal status in Canada, and have an existing bank account. Applicants must provide proof of income, statements of expenses, two pieces of valid identification, and proof of tenancy. Also offers tools to better manage limited financial resources. Serves Vancouver. Office hours vary; appointment required.",
        closeTime: "16:00",
        openTime: "10:00",
        province: "BC",
        location: "920 East Hastings Street, Vancouver, BC",
        lat: 49.2807797,
        lng: -123.0836165,
        last_updated: firebase.firestore.FieldValue.serverTimestamp()
    });
    resourcesRef.add({
        category: "money",
        code: "On_Reserve_Income_Assistance-VAN",
        name: "On-Reserve Income Assistance Program",
        city: "Vancouver",
        searchType: ["money", "financial aid", "rent", "essentials", "vancouver", "employment support", "indigenous", "on reserve", "income assistance"],
        contactPhone: "1-800-567-9604",
        description: "Provides financial assitance to on-reserve residents as a last resort. Can aid in coverage of basic needs, and pre-employment and emploment support. In person support done through Indigenous Services Canada.",
        description_detail: "This program serves as a last resort for eligible individuals and families, either ordinarily residing on reserve or being Status Indians living in Yukon. Income assistance covers basic needs like food, clothing, rent, and utilities, as well as special needs such as essential household items and doctor-recommended diets. Additionally, the program offers pre-employment and employment supports, including life skills and job training, to enhance self-sufficiency. For inquiries, please contact your regional office",
        closeTime: "16:30",
        openTime: "8:00",
        province: "BC",
        location: "1138 Melville St 6th floor, Vancouver, BC V6E 4S3",
        lat: 49.287698,
        lng: -123.125338,
        last_updated: firebase.firestore.FieldValue.serverTimestamp()
    });
    resourcesRef.add({
        category: "money",
        code: "Burnaby_Rent_Bank-BR",
        name: "Burnaby Rent Bank",
        city: "Burnaby",
        searchType: ["intrest free loan", "financial aid", "rent", "rent bank", "burnaby", "online application", "essentials"],
        contactPhone: "778-727-0786",
        description: "Burnaby Housing Stabilization Program: provides short-term, interest-free loans up to $1,700 for individuals and families aged 19+. Covers eviction risk, moving expenses, and essential arrears. Apply online, prove low income, and stabilize housing for 90+ days. Open Monday to Thursday, 9 am to 4:30 pm. Funded by BC Rent Bank.",
        description_detail: "Housing stabilization program for low-income residents in Burnaby ages 19 and up. Offers low-fee, short-term loans with no interest to low-income individuals and families residing in Burnaby who are at risk of eviction or essential utility disconnection due to a temporary and unexpected shortage of funds. Loans may also be issued for damage deposits, pet deposits, and first month's rent for low-income individuals and families who are moving into a new residence in Burnaby and are unable to meet these expenses. If approved, loan funds are distributed in cheque form and are written directly to the creditor. Maximum loan amount is $1,400 for individuals, $1,700 for families, and up to $500 for essential utility arrears, with a maximum repayment term of 24 months, subject to a $1/month administration fee. Applicants must complete a pre-assessment form available online. Applicants must have a current bank account, have proof of a regular source of verifiable income which is sufficient to cover rent/living expenses, demonstrate the household is low income, not be more than two months in arrears, have no undischarged bankruptcy, not be able to access any other forms of financial assistance, have two pieces of government-issued ID, and demonstrate that the loan will stabilize their housing situation for 90 plus days. Program hours are 9 am to 4:30 pm Monday to Thursday. Funded by BC Rent Bank.",
        closeTime: "16:30",
        openTime: "9:00",
        province: "BC",
        location: "1-4075 Kingsway, Burnaby, V5H 1Y9 BC",
        lat: 49.233277,
        lng: -123.01412,
        last_updated: firebase.firestore.FieldValue.serverTimestamp()
    });
    // // category: work
    resourcesRef.add({
        category: "work",
        code: "Service_Canada_Centre-NV",
        name: "Service Canada Centre - North Shore",
        city: "North Vancouver",
        searchType: ["service canada", "north vancouver", "employment insurance", "job bank", "record of employment", "id", "employment help"],
        contactPhone: "1-800-926-9105",
        description: "Provide many federal government services in person such as employment related benifets and financial aid. Service includes obtaining government identification and employment insurance",
        description_detail: "Provides in-person information and access to a wide range of federal government services and benefits related to employment, financial assistance, and personal identification. Includes programs that assist seniors, families and children, individuals with disabilities, veterans, workers, employers, and self-employed. Acts as single point of access for a number of programs such as Employment Insurance (EI), Canada Pension Plan (CPP), and Old Age Security (OAS). Processes documents such as Social Insurance Numbers (SIN), Records of Employment (ROE) and tax slips. Also offers Veterans Affairs Canada (VAC) services. On-site computers and printers provide access to all Government of Canada websites including the Job Bank, Benefits Finder and My Service Canada Account. As a Passport Receiving Agent, accepts standard passport applications and sends to the Passport Program for processing. Wheelchair accessible. Service offered in English. Many services are also available online, by mail, or by phone where interpretation for many other languages is available. Individuals requiring additional support can complete a request for service. Local offices are open 8:30 am to 4 pm Monday to Friday for in-person service.",
        closeTime: "16:00",
        openTime: "8:30",
        province: "BC",
        location: "100-221 Esplanade West, North Vancouver, V7M 1A6 BC",
        lat: 49.313184,
        lng: -123.0848,
        last_updated: firebase.firestore.FieldValue.serverTimestamp()
    });
    resourcesRef.add({
        category: "work",
        code: "Work_BC-BR",
        name: "WorkBC Centre - Burnaby",
        city: "Burnaby",
        searchType: ["burnaby", "work bc", "employment", "employment help", "public computer", "public scanner", "public phone", "skills training", "financial aid"],
        contactPhone: "778-357-0445",
        description: "Provides individualized support to help job seekers find and maintain employment and improve employment readiness. Clients must be unemployed or precariously employed and legally allowed to work in BC. Self-serve resource area provides career and job search resources, job postings, career-related books and labour market information, and access to computers, internet, phone, photocopiers, and scanners.",
        description_detail: "Provides individualized support to help job seekers find and maintain employment and improve employment readiness. Clients must be unemployed or precariously employed and legally allowed to work in BC. Self-serve resource area provides career and job search resources, job postings, career-related books and labour market information, and access to computers, internet, phone, photocopiers, and scanners. Online services include career exploration and labour market information, job search resources, webinars, and self-assessment tools. Offers job search workshops, essential skills training for employment readiness, and short-term training to meet minimum entry requirements or develop specific skills for a job or an industry. Also provides skills training, self-employment services, wage subsidy services, and financial support for apprenticeships, depending on eligibility and suitability. Offers case management and one-to-one employment planning services to individuals needing more guidance and support. Supplemental services such as customized job placement and work experience placement services may be available for clients with significant barriers to employment. May also provide financial assistance for dependent care, transportation to job interviews, and tools. Services are free of charge. Referral accepted from self or other. Registration is online or in-person. Hours are 8:30 am to 5 pm Mondays and Wednesdays, 8:30 am to 6:30 pm Tuesdays and Thursdays, and 8:30 am to 3 pm Fridays. Funded by Ministry of Social Development and Poverty Reduction (MSDPR).",
        closeTime: "15:00",
        openTime: "8:30",
        province: "BC",
        location: "101-3999 Henning Drive, Burnaby, V5C 6P9 BC",
        lat: 49.265246,
        lng: -123.01507,
        last_updated: firebase.firestore.FieldValue.serverTimestamp()
    });
    resourcesRef.add({
        category: "work",
        code: "New_Relationship_Trust-NV",
        name: "New Relationship Trust",
        city: "North Vancouver",
        searchType: ["north vancouver", "financial aid", "employment help", "nrt", "New Relationship Trust", "indigenous", "training", "bursaries"],
        contactPhone: "604-925-3338",
        description: "helps indigenous persons throguh providing finainical aid towards employment trianing or post-secondary education. Also provides suppoty for language and cultural for both the elderly and youth.",
        description_detail: "Works to strengthen First Nations in BC through support in governance capacity, education, language and culture, youth and Elders, and economic development. Awards scholarships and bursaries to Indigenous (First Nations, Metis, and Inuit) students pursuing post-secondary education; application form available online. Also provides Elder Grants and Youth Grants to support groups, communities, and organizations that develop and deliver community programs to benefit these groups. Office hours are 8:30 am to 4:30 pm Monday to Friday. Nonprofit society.",
        closeTime: "16:30",
        openTime: "8:30",
        province: "BC",
        location: "3188 Alder Court, North Vancouver, BC V7H 2V6",
        lat: 49.310089,
        lng: -122.989409,
        last_updated: firebase.firestore.FieldValue.serverTimestamp()
    });
    resourcesRef.add({
        category: "work",
        code: "Work_BC_Centre-VAN",
        name: "WorkBC Centre - Vancouver",
        city: "Vancouver",
        searchType: ["work bc", "workbc", "employment", "employment help", "public computer", "public scanner", "public phone", "skills training", "financial aid"],
        contactPhone: "604-334-6372",
        description: "Helps individuals seek and maintain employment. Provides a self serve resource area where individuals can job search, take part in short term employment training, use public amenitities such as a printer, and more.",
        description_detail: "Provides individualized support to help job seekers find and maintain employment and improve employment readiness. Self-serve resource area provides career and job search resources, job postings, career-related books and labour market information, and access to computers, phone, fax, photocopiers, and printers. Offers job search workshops, essential skills training for employment readiness, and short-term training to meet minimum entry requirements or develop specific skills for a job or an industry. Also provides referrals to funded skills training, self-employment services, wage subsidy services, and financial support for apprenticeships, depending on eligibility and suitability. Offers case management and personal employment planning services to individuals needing more guidance and support. Supplemental services for people with complex needs may be available, or delivered through other qualified service providers. Services are free of charge. Referral accepted from self or other. Hours are 9 am to 5:30 pm Mondays, Tuesdays, Thursdays, and Fridays, 9 am to 2 pm Wednesdays, and 10 am to 2 pm Saturdays.",
        closeTime: "17:30",
        openTime: "9:00",
        province: "BC",
        location: "134 East Hastings Street, Vancouver, V6A 1N4 BC",
        lat: 49.281217,
        lng: -123.102007,
        last_updated: firebase.firestore.FieldValue.serverTimestamp()
    });
    resourcesRef.add({
        category: "work",
        code: "BCCDA-VAN",
        name: "BC Career Development Association",
        city: "Vancouver",
        searchType: ["BCCDA", "bc career development association", "employment", "employment help", "skills training", "financial aid", "BC"],
        contactPhone: "604-684-3638",
        description: "Provincial membership association provides education, training, networking, and certification services to the BC career development sector. Hosts BC's annual Career Development Conference. Fee for membership. Hours are 9 am to 4:30 pm Monday to Friday. Nonprofit society.",
        description_detail: "Provincial membership association provides education, training, networking, and certification services to the BC career development sector. Hosts BC's annual Career Development Conference. Fee for membership. Hours are 9 am to 4:30 pm Monday to Friday. Nonprofit society.",
        closeTime: "16:30",
        openTime: "9:00",
        province: "BC",
        location: "510 W Hastings St #728, Vancouver, BC V6B 1L8",
        lat: 49.2841133,
        lng: -123.1123702,
        last_updated: firebase.firestore.FieldValue.serverTimestamp()
    });
    resourcesRef.add({
        category: "work",
        code: "Service_Canada-VAN",
        name: "Service Canada Centre - Vancouver",
        city: "Vancouver",
        searchType: ["employment", "employment help", "skills training", "financial aid", "BC", "vancouver", "service canada centre", "service canada center"],
        contactPhone: "1-800-926-9105",
        description: "In-person information on what federal government services and benifets relates to an individual. These service will be about employment, financial assistance, and personal identification. Includes programs that assist seniors, families and children, individuals with disabilities, veterans, workers, employers, and self-employed.",
        description_detail: "Provides in-person information and access to a wide range of federal government services and benefits related to employment, financial assistance, and personal identification. Includes programs that assist seniors, families and children, individuals with disabilities, veterans, workers, employers, and self-employed. Acts as single point of access for a number of programs such as Employment Insurance (EI), Canada Pension Plan (CPP), and Old Age Security (OAS). Processes documents such as Social Insurance Numbers (SIN), Records of Employment (ROE) and tax slips. Also offers Veterans Affairs Canada (VAC) services. On-site computers and printers provide access to all Government of Canada websites including the Job Bank, Benefits Finder and My Service Canada Account. As a Passport Receiving Agent, accepts standard passport applications and sends to the Passport Program for processing. Wheelchair accessible. Service offered in English.",
        closeTime: "16:00",
        openTime: "8:30",
        province: "BC",
        location: "West Office, 757 Hastings Street, 125 Sinclair Centre, Vancouver, BC V6C 1A1",
        lat: 49.286009,
        lng: 123.11394,
        last_updated: firebase.firestore.FieldValue.serverTimestamp()
    });
    // // ------------end or resources-------------------------------------
}




