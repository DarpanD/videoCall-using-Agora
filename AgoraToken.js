// agora SDK already installed
// adding agora tokens into the file
const APP_ID = "03341d5e00da42dc9dc0db1d49e844fe";
const TOKEN =
  "007eJxTYMiZlnr0z/znxluXqW97ccNUROhMwRq5R+e5M/5UXvI9U+iuwGBgbGximGKaamCQkmhilJJsmZJskJJkmGJimWphYpKW+sM2Pq0hkJFhVcIjBkYoBPFZGHITM/MYGAABhSIB";
const CHANNEL = "main";

/*
to gennerate the token : 
    step 1 > log in on https://console.agora.io/
    step 2 > move to projects 
    step 3 > if no project create new project with use case Social / Chatroom (my premade project name : video calling agora)
    step 4 > configure  > for new project delete certificate > gennerate temp  rtc token 
    step 5 > give channel name 
    step 6 > copy app id , channel name , temp token (token refresh every 24 hrs , need to be set manually for now)
*/

// future tasks -> create a way to genrate tokens dynamically such that not needed to manually update every 24hrs

export default { APP_ID, TOKEN, CHANNEL };
