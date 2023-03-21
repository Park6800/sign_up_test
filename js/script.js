// 아이디 확인 및 에러 출력
function ID_blur() {
  var ID_ = document.getElementById('ID_value').value.length;

    if (ID_ == 0) {
      document.getElementById("idError").innerHTML = "필수 정보입니다."
      document.getElementById('idError').setAttribute('class', 'error');
    }
    else if (ID_ < 8) {
      document.getElementById("idError").innerHTML = "8자 이상 입력하세요."
      document.getElementById('idError').setAttribute('class', 'error');
    }
    else {
      document.getElementById("idError").innerHTML = "멋진 아이디네요!"
      document.getElementById('idError').setAttribute('class', 'checking');
      document.getElementById('idError').setAttribute('name', 'idpass');
    }
  };

// 비밀번호 확인 및 정규식
function PW_blur() {

    // 비밀번호 정규식 8자 이상 20자 이하 문자 + 특수문자
    // /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    // (?=.*[@$!%*#?&]) * 필수
    const regExp = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,20}$/;
    var PW_ = document.getElementById('PW_value').value.length;
    var PW = document.getElementById('PW_value').value;
    if (PW_ == 0) {
      document.getElementById("pwError").innerHTML = "필수 정보입니다."
    }
    else {
      if (PW_ < 8) {
        document.getElementById("pwError").innerHTML = "8자리 이상 입력하세요"
      }
      else if (!regExp.test(PW)) {
        document.getElementById("pwError").innerHTML = "올바른 형식으로 입력하세요."
      }
      else {
        document.getElementById("pwError").innerHTML = ""
      }
    }
  };

// 비밀번호 재확인 부문
function chk_pw() {

    const rpw = document.getElementById("CHK_PW_value").value;
    const pw = document.getElementById("PW_value").value;

    // id = chk_pwError 의 class 명을 checking로 변경
    if (rpw.length == 0) {
      document.getElementById("chk_pwError").innerHTML = "필수 정보입니다"
    }
    else if (pw == rpw) {
      document.getElementById('chk_pwError').setAttribute('class', 'checking');
      document.getElementById("chk_pwError").innerHTML = "일치합니다"
    }
    // id = chk_pwError 의 class 명을 error로 변경
    else {
      document.getElementById('chk_pwError').setAttribute('class', 'error');
      document.getElementById("chk_pwError").innerHTML = "불 일치합니다"
    }
  };

// 이름 입력 에 관한 에러 출력
function NAME_blur() {
  var name_ = document.getElementById("name").value.length
    if (name_ == 0) {
      document.getElementById("nameError").innerHTML = "필수정보입니다."
      document.getElementById('nameError').setAttribute('class', "error");
      check = false
    } else {
      document.getElementById("nameError").innerHTML = ""
      document.getElementById('nameError').setAttribute('class', "checking");
    }

  };

// 년 입력에 관한 에러 및 년 입력이 끝나면 '달' 입력 에러가 출력 
const reg_test = /[\d]{4,4}$/;
const reg_test2 = /[\d]{1,2}$/;
function Birth_blur() {
  var Year_ = document.getElementById("Year").value.length;
  var Year = document.getElementById("Year").value;
    if (Year_ == 0) {
      document.getElementById("yearError").innerHTML = "태어난 년도 4자리를 정확하게 입력하세요."
    }
    else if (!reg_test.test(Year)) {
      document.getElementById("yearError").innerHTML = "숫자만 4자리 입력해주세요."
    }
    else if (Year_ < 4) {
      document.getElementById("yearError").innerHTML = "태어난 년도 4자리를 정확하게 입력하세요."
    }
    else {
      document.getElementById("yearError").innerHTML = ""
      if (document.getElementById("Moon").value == "0") {
        document.getElementById("yearError").innerHTML = "태어난 월을 선택하세요."
      }
      else if (document.getElementById("Moon").value != "0") {
        document.getElementById("yearError").innerHTML = ""
      }
    }
  };
// 달을 입력하고 난 후에 바로 '일'을 입력 에러 뜨게하는것.
document.getElementById("Moon")
  .addEventListener("change", function () {
    if (document.getElementById("Moon").value == "0") {
      document.getElementById("yearError").innerHTML = "태어난 월을 선택하세요."
      document.getElementById('yearError').setAttribute('class', "error");
    }
    else if (document.getElementById("Moon").value != "0") {
      document.getElementById("yearError").innerHTML = ""
      if (document.getElementById("Day").value.length == 0) {
        document.getElementById("yearError").innerHTML = "태어난 일(날짜) 2자리를 정확하게 입력하세요."
        document.getElementById('yearError').setAttribute('class', "error");
      }
    }
  })
// 날짜 창 미기입시 태어난 날 입력 출력
document.getElementById("Day")
  .addEventListener("blur", function () {
    if (this.value.length == 0) {
      document.getElementById("yearError").innerHTML = "태어난 일(날짜) 2자리를 정확하게 입력하세요."
      document.getElementById('yearError').setAttribute('class', "error");
    }
    else if (!reg_test2.test(this.value)) {
      document.getElementById("yearError").innerHTML = "숫자만 입력해주세요."
      document.getElementById('yearError').setAttribute('class', "error");
    }
    else {
      document.getElementById("yearError").innerHTML = ""
      document.getElementById('yearError').setAttribute('class', "checking");
    }
  })

// 성별 의 값이 "성별"(기본값) 일때 필수 정보입니다를 뛰우고 아닐때 빈값 출력
function change_gender() {
  var gender = document.getElementById("Cg_gender").value;
  if (gender == "성별") {
    document.getElementById("genderError").innerHTML = "필수 정보입니다."
    document.getElementById('genderError').setAttribute('class', "error");
  }
  else {
    document.getElementById("genderError").innerHTML = ""
    document.getElementById('genderError').setAttribute('class', "checking");
  }
}

// 이메일 입력창 미기입시 필수 정보 출력
document.getElementById("CHK_email_value")
  .addEventListener("blur", function () {
    // 문자 또는 숫자 형태의 문자열 + @ (필수) 문자열 + .(필수)문자열 형태
    var reg = /^[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

    if (this.value.length == 0) {
      document.getElementById("emailError").innerHTML = "선택 정보입니다."
    }
    else {
      document.getElementById("emailError").innerHTML = ""
      // 정규식 테스트
      if (!reg.test(this.value)) {
        document.getElementById("emailError").innerHTML = "이메일 주소를 다시 확인해주세요.(@ 필수)"
      }
      else {
        document.getElementById("emailError").innerHTML = ""
      }
    }
  })

// 전화번호 창 번호 미기입시 필수정보 출력
function Phone_blur() {
  var Phone_ = document.getElementById("phone_num").value.length;
  
    if (Phone_ == 0) {
      document.getElementById("phoneError").innerHTML = "필수 정보입니다."
      document.getElementById("phoneError").setAttribute('class', 'error');
    }
    else {
      document.getElementById("phoneError").innerHTML = ""
      document.getElementById("phoneError").setAttribute('class', 'checking');
    }
  }
// 인증번호 임의의 랜덤 천의 자리 수 생성
var ran_number = parseInt(Math.random() * 10000);
function randomNum() {
  if (document.getElementById("phoneError").className == "checking") {
    console.log(ran_number);
    document.getElementById("chk_number").removeAttribute("disabled");
  }
  else {
    alert("전화번호를 입력하세요.")
  }
  
}

// 위에서 생성한 랜덤 값과 입력값 비교
document.getElementById("chk_number")
  .addEventListener("blur", function () {
    if (ran_number = this.value) {
      document.getElementById("phoneError").innerHTML = "인증되었습니다."
      document.getElementById("phoneError").setAttribute('class', 'checking');
    }
    else {
      document.getElementById("phoneError").innerHTML = "인증번호를 틀렸습니다."
      document.getElementById("phoneError").setAttribute('class', 'error');
    }
  })


// 미기입 정보를 페이지 상단에서 부터 확인해서 알려줌
document.getElementById("join")
  .addEventListener("click", function () {
    ID_blur();
    PW_blur();
    chk_pw();
    NAME_blur();
    Birth_blur();
    change_gender();
    Phone_blur()
    if (document.getElementById("idError").className == "checking") {
      if (document.getElementById("chk_pwError").className == 'checking') {
        if (document.getElementById("nameError").className == "checking") {
          if (document.getElementById("yearError").className == "checking") {
            if (document.getElementById("genderError").className == "checking") {
              if (document.getElementById("phoneError").className == "checking") {
                alert("가입을 환영합니다.")
                location.reload();
              }
              else {
                alert("전화번호 인증하세요.")
              }
            }
            else {
              alert("성별을 확인해주세요.")
            }
          }
          else {
            alert("생년월일을 확인해주세요.")
          }
        }
        else {
          alert("이름을 확인해주세요.")
        }
      }
      else {
        alert("비밀번호를 확인해주세요.")
      }
    }
    else {
      alert("아이디를 확인해주세요.")
    }
  })