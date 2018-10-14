var data= [{"COLLEGENAME":"SAHYADRI COLLEGE OF ENGG & MGMT","COLLEGETYPE":"ENGINEERING","LOCATION":"MANGLORE","CSE":"YES","ISE":"YES","ME":"YES","EC":"YES","CV":"YES","ENT":"NO","OPTOMETRY":"NO","SPEECHHEARING":"NO","CARDIOLOGY":"NO","HOSTEL":"YES","STARTUPS":"YES","DIGITALLIBRARY":"YES","WIFI":"YES","CAFETERIA":"YES","HANDSONLABS":"NO"},{"COLLEGENAME":"KARAVALI ","COLLEGETYPE":"ENGINEERING","LOCATION":"MANGLORE","CSE":"YES","ISE":"NO","ME":"YES","EC":"YES","CV":"YES","ENT":"NO","OPTOMETRY":"NO","SPEECHHEARING":"NO","CARDIOLOGY":"NO","HOSTEL":"YES","STARTUPS":"NO","DIGITALLIBRARY":"YES","WIFI":"YES","CAFETERIA":"YES","HANDSONLABS":"NO"},{"COLLEGENAME":"FR. MULLER COLLEGE OF MEDICAL SCIENCE ","COLLEGETYPE":"MEDICAL","LOCATION":"MANGLORE","CSE":"NO","ISE":"NO","ME":"NO","EC":"NO","CV":"NO","ENT":"YES","OPTOMETRY":"YES","SPEECHHEARING":"YES","CARDIOLOGY":"YES","HOSTEL":"YES","STARTUPS":"NO","DIGITALLIBRARY":"YES","WIFI":"YES","CAFETERIA":"YES","HAND3SONLABS":"YES"}];
var my_json = JSON.stringify(data);
var filtered_json = find_in_object(JSON.parse(my_json), {COLLEGETYPE: 'ENGINEERING',STARTUPS:'YES'});

console.log(filtered_json);
function find_in_object(my_object, my_criteria){

    return my_object.filter(function(obj) {
      return Object.keys(my_criteria).every(function(c) {
        return obj[c] == my_criteria[c];
      });
    });
  }
