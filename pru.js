
'use strict';

const Acu /*As Long*/ = 0x301;
//------------------

function AscLng(c /*As String*/) /*As Long*/ {
  var result = c.charCodeAt(0);
  // if (result <= 0) {
  //   result = result + 65536
  // }
  return result
}
//------------------

function HeadAndTail(c /*As String, h As Integer, t As Integer*/) {
  var n,h,t /*As Long*/;
  n = AscLng(c)

  switch(n){
    case 0x410:
      h = 100;
      t = 1;
      break;   //A
    case 0x411:
      h = 100;
      t = 8;
      break;   //B
    case 0x412:
      h = 100;
      t = 8;
      break;   //V
    case 0x413:
      h = 100;
      t = 9;
      break;   //G
    case 0x414:
      h = 100;
      t = 8;
      break;   //D
    case 0x415:
      h = 100;
      t = 4;
      break;   //JE
    case 0x416:
      h = 100;
      t = 4;
      break;   //ZH
    case 0x417:
      h = 100;
      t = 8;
      break;   //Z
    case 0x418:
      h = 100;
      t = 1;
      break;   //I
    case 0x419:
      h = 100;
      t = 1;
      break;   //J
    case 0x41A:
      h = 100;
      t = 1;
      break;   //K
    case 0x41B:
      h = 100;
      t = 1;
      break;   //L
    case 0x41C:
      h = 100;
      t = 1;
      break;   //M
    case 0x41D:
      h = 100;
      t = 1;
      break;   //N
    case 0x41E:
      h = 100;
      t = 8;
      break;   //O
    case 0x41F:
      h = 100;
      t = 1;
      break;   //P
    case 0x420:
      h = 100;
      t = 9;
      break;   //R
    case 0x421:
      h = 100;
      t = 4;
      break;   //S
    case 0x422:
      h = 100;
      t = 1;
      break;   //T
    case 0x423:
      h = 100;
      t = 8;
      break;   //U
    case 0x424:
      h = 100;
      t = 9;
      break;   //F
    case 0x425:
      h = 100;
      t = 4;
      break;   //KH
    case 0x426:
      h = 100;
      t = 6;
      break;   //TS
    case 0x427:
      h = 100;
      t = 1;
      break;   //CH
    case 0x428:
      h = 100;
      t = 1;
      break;   //SH
    case 0x429:
      h = 100;
      t = 6;
      break;   //SCH
    case 0x42A:
      h = 100;
      t = 8;
      break;   //TV.ZNAK
    case 0x42B:
      h = 100;
      t = 1;
      break;   //Y
    case 0x42C:
      h = 100;
      t = 8;
      break;   //M.ZNAK
    case 0x42D:
      h = 100;
      t = 8;
      break;   //E
    case 0x42E:
      h = 100;
      t = 8;
      break;   //JU
    case 0x42F:
      h = 100;
      t = 1;
      break;   //JA
    case 0x401:
      h = 100;
      t = 4;
      break;   //JO
    case 0x406:
      h = 100;
      t = 8;
      break;   //I(U)
    case 0x407:
      h = 100;
      t = 8;
      break;   //J(U)
    case 0x404:
      h = 100;
      t = 4;
      break;   //E(U)
    case 0x40E:
      h = 100;
      t = 8;
      break;   //U(B)
    case 0x490:
      h = 100;
      t = 9;
      break;   //G(U)
    case 0x430:
      h = 2;
      t = 1;
      break;   //a
    case 0x431:
      h = 2;
      t = 8;
      break;   //  b
    case 0x432:
      h = 6;
      t = 2;
      break;   //v
    case 0x433:
      h = 7;
      t = 1;
      break;   //g
    case 0x434:
      h = 2;
      t = 3;
      break;   //d
    case 0x435:
      h = 5;
      t = 4;
      break;   //je
    case 0x436:
      h = 4;
      t = 4;
      break;   //zh
    case 0x437:
      h = 4;
      t = 3;
      break;   //z
    case 0x438:
      h = 1;
      t = 1;
      break;   //i
    case 0x439:
      h = 1;
      t = 1;
      break;   //j
    case 0x43A:
      h = 1;
      t = 1;
      break;   //k
    case 0x43B:
      h = 3;
      t = 1;
      break;   //l
    case 0x43C:
      h = 3;
      t = 1;
      break;   //m
    case 0x43D:
      h = 1;
      t = 1;
      break;   //n
    case 0x43E:
      h = 2;
      t = 5;
      break;   //o
    case 0x43F:
      h = 1;
      t = 1;
      break;   //p
    case 0x440:
      h = 1;
      t = 1;
      break;   //r
    case 0x441:
      h = 2;
      t = 4;
      break;   //s
    case 0x442:
      h = 1;
      t = 1;
      break;   //  t
    case 0x443:
      h = 1;
      t = 3;
      break;   //u
    case 0x444:
      h = 2;
      t = 8;
      break;   //f
    case 0x445:
      h = 4;
      t = 4;
      break;   //kh
    case 0x446:
      h = 1;
      t = 6;
      break;   //  ts
    case 0x447:
      h = 8;
      t = 1;
      break;   //ch
    case 0x448:
      h = 1;
      t = 1;
      break;   //sh
    case 0x449:
      h = 1;
      t = 6;
      break;   //sch
    case 0x44A:
      h = 8;
      t = 7;
      break;   //  tv.znak
    case 0x44B:
      h = 1;
      t = 1;
      break;   //y
    case 0x44C:
      h = 1;
      t = 7;
      break;   //m.znak
    case 0x44D:
      h = 4;
      t = 8;
      break;   //e
    case 0x44E:
      h = 1;
      t = 5;
      break;   //ju
    case 0x44F:
      h = 3;
      t = 1;
      break;   //ja
    case 0x451:
      h = 5;
      t = 4;
      break;   //jo
    case 0x456:
      h = 1;
      t = 1;
      break;   //i(U)
    case 0x457:
      h = 1;
      t = 1;
      break;   //j(U)
    case 0x454:
      h = 2;
      t = 4;
      break;   //e(U)
    case 0x45E:
      h = 1;
      t = 3;
      break;   //u(B)
    case 0x491:
      h = 3;
      t = 9;
      break;   //g(U)
    case 0xE000:
      h = 200;
      t = 200;
      break;
    default:
      h = 0;
      t = 0;
  }
  return {head:h,tail:t};
}
//------------------

function InsChTZ(c /*As String*/, c0 /*As String*/) /*As String*/ {
  var n0 /*As Long*/;
  var n /*As Long*/;

  n0 = AscLng(c0)
  n = AscLng(c)

  var result = ""
  if ((n0 != 0x427) && (n0 != 0x42A)) { //Only for Ch, TVZN
    return ""
  }

  if (n0 == 0x427) {                         // Ch
    if (n != 0xAB && n != 0x201E) {       // Ne Otkr.kavychka - jolochka ili lapka
      result = String.fromCharCode(0xE401) + String.fromCharCode(0xE403) // 2,5 mm
    }
  }
	else {
  	if (n0 == 0x42A) {                     // TVZN
    	if ((n != 0xAB) && (n != 0x201E)) {       // Ne Otkr.kavychka - jolochka ili lapka
      	result = String.fromCharCode(0xE403);   // 2,0 mm
      }
    }
  }
  return result
}
//------------------

function Ins(c1 /*As String*/, c2 /*As String*/) /*As String*/ {
  var h /*As Integer*/;
  var t /*As Integer*/;
  var dummy /*As Integer*/;
  var n1 /*As Long*/;
  var n2 /*As Long*/;
  var result;

  t = HeadAndTail(c1).tail;
  h = HeadAndTail(c2).head;
  n1 = AscLng(c1)
  n2 = AscLng(c2)
	switch (true) {
	  case ((t == 200) || (h == 200)):
	    return result = "";
			break;
	  case (((n1 == 0x41F) || (n1 == 0x422)) && (n2 == 0x432)) :
	  	result = String.fromCharCode(0xE410); //Pv, Tv
			break;
	  case ((n1 == 0x431) && (n2 == 0x432)) :
	  	result = String.fromCharCode(0xE414); //bv
			break;
	  case ((n1 == 0x431) &&
	    ((n2 == 0x21) || (n2 == 0x22) || (n2 == 0x27) || (n2 == 0x29) || (n2 == 0x3F) ||
	    (n2 == 0x5D) || (n2 == 0xBB) || (n2 == 0x2019) || (n2 == 0x201C) || (n2 == 0x201D))) :
	    result = String.fromCharCode(0xE404); //b,!?"//)]
			break;
	  case (((n1 == 0x438) || (n1 == 0x439) || (n1 == 0x43B) || (n1 == 0x43C)
	    || (n1 == 0x448) || (n1 == 0x456) || (n1 == 0x457)) &&
	    ((n2 == 0x438) || (n2 == 0x439) || (n2 == 0x446) || (n2 == 0x448)
	    || (n2 == 0x449) || (n2 == 0x456) || (n2 == 0x457))) :
	    result = String.fromCharCode(0xE413); // i-j-l-m-sh-i(u)-j(u),i-j-ts-sh-sch-i(u)-j(u)
			break;
	  case (((n1 == 0x41D) || (n1 == 0x41F) || (n1 == 0x422)) &&
	    ((n2 == 0x456) || (n2 == 0x457))) :
	    result = String.fromCharCode(0xE413); // N-P-T,i(u)-j(u)
			break;
	  case ((n1 == 0x3F)
	    && ((n2 == 0x22) || (n2 == 0xBB) || (n2 == 0x201C) || (n2 == 0x201D))) :
	    result = String.fromCharCode(0xE402);  // ?,"
			break;
	  case (((n1 == 0x446) || (n1 == 0x449) || (n1 == 0x426) || (n1 == 0x429))
	    && ((n2 == 0x22) || (n2 == 0xBB) || (n2 == 0x201C) || (n2 == 0x201D))) :
	    result = String.fromCharCode(0xE060); // ts-sch-TS-SCH,"
			break;
	  case (((n1 == 0x431) || (n1 == 0x41E) || (n1 == 0x420)
	    || (n1 == 0x423) || (n1 == 0x42D) || (n1 == 0x42E)
	    || (n1 == 0x406) || (n1 == 0x407) || (n1 == 0x40E))
	    && ((n2 == 0x22) || (n2 == 0xBB) || (n2 == 0x201C) || (n2 == 0x201D))) :
	    result = String.fromCharCode(0xE403);  // b-O-R-U-E-IU-I(U)-J(U)-U(B),"
			break;
	  case (((n1 == 0x201E) || (n1 == 0xAB))
	    && ((n2 == 0x418) || (n2 == 0x419) || (n2 == 0x423) || (n2 == 0x426)
	    || (n2 == 0x428) || (n2 == 0x429) || (n2 == 0x42B) || (n2 == 0x42C)
	    || (n2 == 0x40E))) :
	    result = "";  // ",I-J-U-TS-SH-SCH-Y-MZN-U(B)
			break;
	  case ((t == 0) && (n2 == 0x456 || n2 == 0x457)) :
	    result = String.fromCharCode(0xE403); // ..., i(U)-J(U)
			break;
	  case ((t == 0) && (h == 0)) :
	  	result = "";                              //_,_
			break;
	  case ((t == 0) && (h == 1)) :
	    result = String.fromCharCode(0xE402);                   //_,p
			break;
	  case ((t == 0) && (h == 2)) :
	  	result = String.fromCharCode(0xE402);                   //_,o
			break;
	  case ((t == 0) && (h == 3)) :
	  	result = String.fromCharCode(0xE402);                   //_,l
			break;
	  case ((t == 0) && (h == 4)) :
	    result = String.fromCharCode(0xE402) + String.fromCharCode(0xE007);   //_,e
	    break;
	  case ((t == 0) && (h == 5)) :
	    result = String.fromCharCode(0xE402) + String.fromCharCode(0xE005);   //_,je
	    break;
	  case ((t == 0) && (h == 6)) :
	    result = String.fromCharCode(0xE402) + String.fromCharCode(0xE006);   //_,v
	    break;
	  case ((t == 0) && (h == 7)) :
	    result = String.fromCharCode(0xE402) + String.fromCharCode(0xE007);   //_,g
	    break;
	  case ((t == 0) && (h == 8)) :
	    result = String.fromCharCode(0xE402) + String.fromCharCode(0xE008);   //_,ch
	    break;
	  case ((t == 0) && (h == 100)) :
	    result = String.fromCharCode(0xE401)                ;   //_,A
	    break;
	  case ((t == 1) && (h == 0)) :
	    result = String.fromCharCode(0xE010) + String.fromCharCode(0xE402)  ;   //i,_
	    break;
	  case ((t == 1) && (h == 1)) :
	    result = String.fromCharCode(0xE011)                  ;   //i,p
	    break;
	  case ((t == 1) && (h == 2)) :
	    result = String.fromCharCode(0xE012)                  ;   //i,o
	    break;
	  case ((t == 1) && (h == 3)) :
	    result = String.fromCharCode(0xE010)                  ;   //i,l
	    break;
	  case ((t == 1) && (h == 4)) :
	    result = String.fromCharCode(0xE014)                  ;   //i,e
	    break;
	  case ((t == 1) && (h == 5)) :
	    result = String.fromCharCode(0xE015)                  ;   //i,je
	    break;
	  case ((t == 1) && (h == 6)) :
	    result = String.fromCharCode(0xE016)                  ;   //i,v
	    break;
	  case ((t == 1) && (h == 7)) :
	    result = String.fromCharCode(0xE017)                  ;   //i,g
	    break;
	  case ((t == 1) && (h == 8)) :
	    result = String.fromCharCode(0xE018)                  ;   //i,ch
	    break;
	  case ((t == 1) && (h == 100)) :
	    result = String.fromCharCode(0xE010) + String.fromCharCode(0xE403);   //i,A
	    break;
	  case ((t == 2) && (h == 0)) :
	    result = String.fromCharCode(0xE020) + String.fromCharCode(0xE402)  ;   //v,_
	    break;
	  case ((t == 2) && (h == 1)) :
	    result = String.fromCharCode(0xE021)                  ;   //v,p
	    break;
	  case ((t == 2) && (h == 2)) :
	    result = String.fromCharCode(0xE022)                  ;   //v,o
	    break;
	  case ((t == 2) && (h == 3)) :
	    result = String.fromCharCode(0xE023)                  ;   //v,l
	    break;
	  case ((t == 2) && (h == 4)) :
	    result = String.fromCharCode(0xE024)                  ;   //v,e
	    break;
	  case ((t == 2) && (h == 5)) :
	    result = String.fromCharCode(0xE025)                  ;   //v,je
	    break;
	  case ((t == 2) && (h == 6)) :
	    result = String.fromCharCode(0xE026)                  ;   //v,v
	    break;
	  case ((t == 2) && (h == 7)) :
	    result = String.fromCharCode(0xE027)                  ;   //v,g
	    break;
	  case ((t == 2) && (h == 8)) :
	    result = String.fromCharCode(0xE028)                  ;   //v,ch
	    break;
	  case ((t == 2) && (h == 100)) :
	    result = String.fromCharCode(0xE020) + String.fromCharCode(0xE403);   //v,A
	    break;
	  case ((t == 3) && (h == 0)) :
	    result = String.fromCharCode(0xE030) + String.fromCharCode(0xE402)  ;   //u,_
	    break;
	  case ((t == 3) && (h == 1)) :
	    result = String.fromCharCode(0xE031)                  ;   //u,p
	    break;
	  case ((t == 3) && (h == 2)) :
	    result = String.fromCharCode(0xE032)                  ;   //u,o
	    break;
	  case ((t == 3) && (h == 3)) :
	    result = String.fromCharCode(0xE033)                  ;   //u,l
	    break;
	  case ((t == 3) && (h == 4)) :
	    result = String.fromCharCode(0xE034)                  ;   //u,e
	    break;
	  case ((t == 3) && (h == 5)) :
	    result = String.fromCharCode(0xE035)                  ;   //u,je
	    break;
	  case ((t == 3) && (h == 6)) :
	    result = String.fromCharCode(0xE036)                  ;   //u,v
	    break;
	  case ((t == 3) && (h == 7)) :
	    result = String.fromCharCode(0xE037)                  ;   //u,g
	    break;
	  case ((t == 3) && (h == 8)) :
	    result = String.fromCharCode(0xE038)                  ;   //u,ch
	    break;
	  case ((t == 3) && (h == 100)) :
	    result = String.fromCharCode(0xE030) + String.fromCharCode(0xE403);   //u,A
	    break;
	  case ((t == 4) && (h == 0)) :
	    result = String.fromCharCode(0xE040) + String.fromCharCode(0xE402)  ;   //s,_
	    break;
	  case ((t == 4) && (h == 1)) :
	    result = String.fromCharCode(0xE041)                  ;   //s,p
	    break;
	  case ((t == 4) && (h == 2)) :
	    result = String.fromCharCode(0xE042)                  ;   //s,o
	    break;
	  case ((t == 4) && (h == 3)) :
	    result = String.fromCharCode(0xE043)                  ;   //s,l
	    break;
	  case ((t == 4) && (h == 4)) :
	    result = String.fromCharCode(0xE044)                  ;   //s,e
	    break;
	  case ((t == 4) && (h == 5)) :
	    result = String.fromCharCode(0xE045)                  ;   //s,je
	    break;
	  case ((t == 4) && (h == 6)) :
	    result = String.fromCharCode(0xE046)                  ;   //s,v
	    break;
	  case ((t == 4) && (h == 7)) :
	    result = String.fromCharCode(0xE047)                  ;   //s,g
	    break;
	  case ((t == 4) && (h == 8)) :
	    result = String.fromCharCode(0xE048)                  ;   //s,ch
	    break;
	  case ((t == 4) && (h == 100)) :
	    result = String.fromCharCode(0xE040) + String.fromCharCode(0xE403);   //s,A
	    break;
	  case ((t == 5) && (h == 0)) :
	    result = String.fromCharCode(0xE402)                  ;   //o,_
	    break;
	  case ((t == 5) && (h == 1)) :
	    result = String.fromCharCode(0xE051)                  ;   //o,p
	    break;
	  case ((t == 5) && (h == 2)) :
	    result = String.fromCharCode(0xE052)                  ;   //o,o
	    break;
	  case ((t == 5) && (h == 3)) :
	    result = String.fromCharCode(0xE053)                  ;   //o,l
	    break;
	  case ((t == 5) && (h == 4)) :
	    result = String.fromCharCode(0xE054)                  ;   //o,e
	    break;
	  case ((t == 5) && (h == 5)) :
	    result = String.fromCharCode(0xE055)                  ;   //o,je
	    break;
	  case ((t == 5) && (h == 6)) :
	    result = String.fromCharCode(0xE056)                  ;   //o,v
	    break;
	  case ((t == 5) && (h == 7)) :
	    result = String.fromCharCode(0xE057)                  ;   //o,g
	    break;
	  case ((t == 5) && (h == 8)) :
	    result = String.fromCharCode(0xE058)                  ;   //o,ch
	    break;
	  case ((t == 5) && (h == 100)) :
	    result = String.fromCharCode(0xE403)                ;   //o,A
	    break;
	  case ((t == 6) && (h == 0)) :
	    result = String.fromCharCode(0xE060) + String.fromCharCode(0xE402)  ;   //ts,_
	    break;
	  case ((t == 6) && (h == 1)) :
	    result = String.fromCharCode(0xE061)                  ;   //ts,p
	    break;
	  case ((t == 6) && (h == 2)) :
	    result = String.fromCharCode(0xE062)                  ;   //ts,o
	    break;
	  case ((t == 6) && (h == 3)) :
	    result = String.fromCharCode(0xE063)                  ;   //ts,l
	    break;
	  case ((t == 6) && (h == 4)) :
	    result = String.fromCharCode(0xE064)                  ;   //ts,e
	    break;
	  case ((t == 6) && (h == 5)) :
	    result = String.fromCharCode(0xE065)                  ;   //ts,je
	    break;
	  case ((t == 6) && (h == 6)) :
	    result = String.fromCharCode(0xE066)                  ;   //ts,v
	    break;
	  case ((t == 6) && (h == 7)) :
	    result = String.fromCharCode(0xE067)                  ;   //ts,g
	    break;
	  case ((t == 6) && (h == 8)) :
	    result = String.fromCharCode(0xE068)                  ;   //ts,ch
	    break;
	  case ((t == 6) && (h == 100)) :
	    result = String.fromCharCode(0xE060) + String.fromCharCode(0xE403);   //ts,A
	    break;
	  case ((t == 7) && (h == 0)) :
	    result = String.fromCharCode(0xE070) + String.fromCharCode(0xE402)  ;   //m.zn,_
	    break;
	  case ((t == 7) && (h == 1)) :
	    result = String.fromCharCode(0xE071)                  ;   //m.zn,p
	    break;
	  case ((t == 7) && (h == 2)) :
	    result = String.fromCharCode(0xE072)                  ;   //m.zn,o
	    break;
	  case ((t == 7) && (h == 3)) :
	    result = String.fromCharCode(0xE073)                  ;   //m.zn,l
	    break;
	  case ((t == 7) && (h == 4)) :
	    result = String.fromCharCode(0xE074)                  ;   //m.zn,e
	    break;
	  case ((t == 7) && (h == 5)) :
	    result = String.fromCharCode(0xE075)                  ;   //m.zn,je
	    break;
	  case ((t == 7) && (h == 6)) :
	    result = String.fromCharCode(0xE076)                  ;   //m.zn,v
	    break;
	  case ((t == 7) && (h == 7)) :
	    result = String.fromCharCode(0xE077)                  ;   //m.zn,g
	    break;
	  case ((t == 7) && (h == 8)) :
	    result = String.fromCharCode(0xE078)                  ;   //m.zn,ch
	    break;
	  case ((t == 7) && (h == 100)) :
	    result = String.fromCharCode(0xE070) + String.fromCharCode(0xE403);   //m.zn,_
	    break;
	  case ((t == 8) && (h == 0)) :
	    result = String.fromCharCode(0xE403)                  ;   //D,_
	    break;
	  case ((t == 8) && (h == 1)) :
	    result = String.fromCharCode(0xE081)                  ;   //D,p
	    break;
	  case ((t == 8) && (h == 2)) :
	    result = String.fromCharCode(0xE082)                  ;   //D,o
	    break;
	  case ((t == 8) && (h == 3)) :
	    result = String.fromCharCode(0xE083)                  ;   //D,l
	    break;
	  case ((t == 8) && (h == 4)) :
	    result = String.fromCharCode(0xE084)                  ;   //D,e
	    break;
	  case ((t == 8) && (h == 5)) :
	    result = String.fromCharCode(0xE085)                  ;   //D,je
	    break;
	  case ((t == 8) && (h == 6)) :
	    result = String.fromCharCode(0xE086)                  ;   //D,v
	    break;
	  case ((t == 8) && (h == 7)) :
	    result = String.fromCharCode(0xE087)                  ;   //D,g
	    break;
	  case ((t == 8) && (h == 8)) :
	    result = String.fromCharCode(0xE088)                  ;   //D,ch
	    break;
	  case ((t == 8) && (h == 100)) :
	    result = String.fromCharCode(0xE403)                ;   //D,_
	    break;
	  case ((t == 9) && (h == 0)) :
	    result = String.fromCharCode(0xE402)                  ;   //G,_
	    break;
	  case ((t == 9) && (h == 1)) :
	    result = String.fromCharCode(0xE091)                  ;   //G,p
	    break;
	  case ((t == 9) && (h == 2)) :
	    result = String.fromCharCode(0xE092)                  ;   //G,o
	    break;
	  case ((t == 9) && (h == 3)) :
	    result = String.fromCharCode(0xE093)                  ;   //G,l
	    break;
	  case ((t == 9) && (h == 4)) :
	    result = String.fromCharCode(0xE094)                  ;   //G,e
	    break;
	  case ((t == 9) && (h == 5)) :
	    result = String.fromCharCode(0xE095)                  ;   //G,je
	    break;
	  case ((t == 9) && (h == 6)) :
	    result = String.fromCharCode(0xE096)                  ;   //G,v
	    break;
	  case ((t == 9) && (h == 7)) :
	    result = String.fromCharCode(0xE097)                  ;   //G,g
	    break;
	  case ((t == 9) && (h == 8)) :
	    result = String.fromCharCode(0xE098)                  ;   //G,ch
	    break;
	  case ((t == 9) && (h == 100)) :
	    result = String.fromCharCode(0xE403)                ;   //G,_
	    break;
	  default:
	    result = "";
	}

  return result = result + InsChTZ(c1, c2)

}
//------------------

function ToPru(txt) {
  var s  /*As String*/;
  var c1 /*As String*/;
  var c2 /*As String*/;
  var i  /*As Long*/;
  var n1 /*As Long*/;
  var n2 /*As Long*/;
  var flag /*As Integer*/;
  var m1, m2 /*As Long*/;
  var f /*As Font*/;

  if (!txt.length) {
    return "";
  }

  s = "";
  c1 = "";
  c2 = txt.charAt(0);
  s = s + Ins(" ", c2) + c2;

  flag = 0
  for (i = 1;i<txt.length;i++) {
    if (flag == 0) {
      c1 = c2
    }
    c2 = txt.charAt(i);
    n1 = AscLng(c1);
    n2 = AscLng(c2);
    if (((n1 == 0x430) || (n1 == 0x438) || (n1 == 0x44B) || (n1 == 0x44F))
        && (n2 == Acu) ) { // a,i,y,ja + //
      flag = 1;
      s = s + String.fromCharCode(0xE420);
    }
		else {
		  if (((n1 == 0x43E) || (n1 == 0x443) || (n1 == 0x44D) || (n1 == 0x44E))
		        && (n2 == Acu) ) { // o,u,ju,e + //
		    flag = 1
		    s = s + String.fromCharCode(0xE421)
		  }
			else {
			  if ((n1 == 0x435) && (n2 == Acu)) { // je + //
			      flag = 1
			      s = s + String.fromCharCode(0xE422)
			  }
				else {
		      flag = 0
		      s = s + Ins(c1, c2) + c2
    		}
  		}
  	}
  }

  if (flag == 0) {
    c1 = c2
  }
  s = s + Ins(c1, " ")
  return s;

}
//------------------

function ToTimes(txt) {
  var s /*As String*/;
  var c /*As String*/;
  var i /*As Long*/;
  var a /*As Long*/;
  var m1, m2 /*As Long*/;

  if (!txt.length) {
    return "";
  }

  s = ""
  for (i=0;i<txt.length;i++){
    c = txt.charAt(i);
    a = AscLng(c);
    if (a < 0xE000) {
      s = s + c;
    }
		else {
		  if ((a == 0xE420) || (a == 0xE421) || (a == 0xE422)) {
	      s = s + String.fromCharCode(Acu);
		  }
  	}
  }

  return s;

}
//------------------
