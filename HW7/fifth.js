/*
#########
#      @#
####### #
#   #   #
# # # ###
# # # ###
# #   ###
# #######
#      *#
#########
*/
for (let i=0; i<10; i++){
  while(isFree('east')){
    east();
  }
  while(isFree('south')){
    south();
  }
  while(isFree('west')){
    west();
  }
  while(isFree('south')){
    south();
  }
  while(isFree('west')){
    west();
  }
  while(isFree('north')){
    north();
  }
  while(isFree('west')){
    west();
  }
  while(isFree('south')){
    south();
  }
  while(isFree('east')){
    east();
  }
}
