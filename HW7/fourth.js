/*
#########
#@#######
#    ####
#### ####
####  ###
##### ###
##### ###
#####   #
#######*#
#########
*/
for(let i=0; i<4; i++){ /*WHILE GAME NOT ENDED*/
  while(isFree('south')){
    south();
  }
  while(isFree('east')){
    east();
  }
}
