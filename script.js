function getZodiacSign(day, month) {

  var zodiacSigns = {
    'capricorn':'Bricjapi',
    'aquarius':'Ujori',
    'pisces':'Peshqit',
    'aries':'Dashi',
    'taurus':'Demi',
    'gemini':'Binjaket',
    'cancer':'Gaforja',
    'leo':'Luani',
    'virgo':'Virgjeresha',
    'libra':'Peshorja',
    'scorpio':'Akrepi',
    'sagittarius':'Shigjetari'
  }
var sign;

  if((month == 1 && day <= 20) || (month == 12 && day >=22)) {
    sign = [zodiacSigns.capricorn, "Capricorn"];
  } else if ((month == 1 && day >= 21) || (month == 2 && day <= 18)) {
    sign = [zodiacSigns.aquarius, "Aquarius"];
  } else if((month == 2 && day >= 19) || (month == 3 && day <= 20)) {
    sign = [zodiacSigns.pisces, "Pisces"];
  } else if((month == 3 && day >= 21) || (month == 4 && day <= 20)) {
    sign = [zodiacSigns.aries, "Aries"];
  } else if((month == 4 && day >= 21) || (month == 5 && day <= 20)) {
    sign = [zodiacSigns.taurus, "Taurus"];
  } else if((month == 5 && day >= 21) || (month == 6 && day <= 20)) {
    sign = [zodiacSigns.gemini, "Gemini"];
  } else if((month == 6 && day >= 22) || (month == 7 && day <= 22)) {
    sign = [zodiacSigns.cancer, "Cancer"];
  } else if((month == 7 && day >= 23) || (month == 8 && day <= 23)) {
    sign = [zodiacSigns.leo, "Leo"];
  } else if((month == 8 && day >= 24) || (month == 9 && day <= 23)) {
    sign = [zodiacSigns.virgo, "Virgo"];
  } else if((month == 9 && day >= 24) || (month == 10 && day <= 23)) {
    sign = [zodiacSigns.libra, "Libra"];
  } else if((month == 10 && day >= 24) || (month == 11 && day <= 22)) {
    sign = [zodiacSigns.scorpio, "Scorpio"];
  } else if((month == 11 && day >= 23) || (month == 12 && day <= 21)) {
    sign = [zodiacSigns.sagittarius, "Sagitarius"];
  }
  return "<img style='margin-top:30px' src='http://lunarcafe.com/wp-content/uploads/2015/08/"+sign[1]+".png'/><h2>Shenja: " + sign[0] + "</div>";
}