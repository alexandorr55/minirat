# Introduction
This website is made with the purpose of helping Los Ratones fans finding anything they want related to our favorite rats.

# Making a Calendar Event
Press submit to add the event to the calendar.

## Updating the Score
If you would like to add the score to an event, just make sure the date is correct, then put in the score. Then click the blue button to update the score of that game.

## Deleting an Event
To delete an event, put in the date for that event. Then press the red button to delete that game.
# The Backend
We use a free tier of supabase to hold the data about Los Ratones. We also use the edge functions feature of supabase to create the data by utilizing the APIs from Leaguepedia. This means we trust Leaguepedia to be accurate when it comes to game statistics.

Supabase can't automatically re-fetch the data from Leaguepedia, so we automate it to pull again once a day using Github Actions. This also means that the amount of users visiting the site doesn't cause more API calls to Leaguepedia, which means we're not causing any issues to Leaguepedia. If anything, we could get rate-limited by supabase, but that is a lot less likely.
