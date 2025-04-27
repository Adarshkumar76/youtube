### Debouncing:

typing slow: 200ms
typing fast: 30ms

Debouncing with 200ms
-If difference between two key strokes is <200ms - Decline the API call
-If it is > 200ms make the API call

### Caching

time complexity to search in array is = O(n)
time complexity to search in object (map, hashMap) is = O(1)

[i, in, ind, indi, india, .....]

{
i,
in,
ind,
indi,
india,
}


### Live Chat 
    live chat >>>> infinite scroll >>>> pagination

        -> Challenges
           DL   -live data
           UIL  -update the UI

    Live Data handling ways
        -Web Socket (Two way connection with server and client) 
                Ex: Zeroda, Trading App, WhatsApp
        -API polling or Long Polling (client make a request to server at a set time interval and get data the update the UI)
                Ex: Gmail, Cricbuzz
