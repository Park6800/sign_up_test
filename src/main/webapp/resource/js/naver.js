// 언어별 페이지 구성
function change_page(){
  var lang_page = document.getElementById("cg_page").value;
  if(lang_page == "en"){
    location.href="http://localhost:8080/Naver_join/naver_en.html"
  }
  else if(lang_page =="ko"){
    location.href="http://localhost:8080/Naver_join/naver_ko.html"
  }
  else{
    location.href="http://localhost:8080/Naver_join/naver_jp.html"
  }
}

$(document).ready(function() {
  // id가 selectAll 에 클릭 이벤트
$("#selectAll").click(function() {
  // selectAll 체크 값을 확인하고 그 아래 btn_check name 값을 가진 값을 변경 시킨다.
 if($("#selectAll").is(":checked")) $("input[name=btn_check]").prop("checked", true);
 else $("input[name=btn_check]").prop("checked", false);
});
// name이 btn_check 인 것에 클릭 이벤트
$("input[name=btn_check]").click(function() {
  // 체크 칸 갯수를 측정
  // 체크가된 칸 갯수를 측정
 var total = $("input[name=btn_check]").length;
 var checked = $("input[name=btn_check]:checked").length;
 
 // total 이랑 checked가 다르면 selectAll은 체크안함
 if(total != checked) $("#selectAll").prop("checked", false);
 else $("#selectAll").prop("checked", true); 
});
});

function chk_terms_func() {
  // vital_chk (필수체크요소)의 체크 여부를 확인해서 필수가 전부 체크되면 링크 아닐시 오류 배출 
  var v_chk1 = $("#vital_chk1").is(':checked');
  var v_chk2 = $("#vital_chk2").is(':checked');

  if(v_chk1==true){
    if(v_chk2==true){
      location.href="http://localhost:8080/Naver_join/input.html"
    }
  }
  else{
    document.getElementById("termsError").innerHTML = "네이버 이용약관과 개인정보 수집 및 이용에 대한 안내 모두 동의해주세요.";
  }
}


// 네이버 페이지로 이동
function move_naver(){
  location.href="https://naver.com";
}


/*
function selectAll(selectAll)  {
    const checkboxes 
    //name='btn_check'인 모든 element를 찾아서 NodeList 형태로 리턴
         = document.getElementsByName("btn_check");
        
    
    checkboxes.forEach((checkbox) => {
        // sclectAll의 형태로 전부 변경
      checkbox.checked = selectAll.checked;
    })
  }
*/
 

  

  /*
  위랑 같은 결과

  function CheckValue(){
    var aa = document.getElementById("Chk1")
    var bb = document.getElementById("Chk2")


    bb.checked = aa.checked == true ? true : false;




    if(aa.checked==true){
        console.log(aa.checked);
        bb.checked = true;
    }
    else{
        console.log(aa.checked);
        bb.checked = false;
    }
  }
  */