import './App.css';

function App() {
  return (
    <div className="App">
      <div style={{ 
        maxWidth: '800px', 
        margin: '0 auto', 
        padding: '40px 20px',
        textAlign: 'left',
        lineHeight: '1.8'
      }}>
        <h1 style={{ textAlign: 'center', marginBottom: '40px' }}>개인정보처리방침</h1>
        
        <section style={{ marginBottom: '30px' }}>
          <p>
            Bogle Studio ("회사", "우리", "당사")는 카톡 센서 모바일 애플리케이션("서비스")을 운영합니다.
            이 페이지는 사용자가 서비스 이용 시 개인정보의 수집, 사용 및 공개에 관한 정책을 안내하고, 
            이 데이터와 관련된 사용자의 선택권을 설명합니다.
          </p>
          <p>
            당사는 사용자의 개인정보를 보호하기 위해 최선을 다하고 있습니다. 
            본 서비스를 사용함으로써 귀하는 본 개인정보처리방침에 따라 정보가 수집 및 사용됨에 동의하게 됩니다.
          </p>
        </section>

        <section style={{ marginBottom: '30px' }}>
          <h2>데이터의 수집 및 사용</h2>
          <p>
            당사는 사용자의 개인정보를 최소한으로 수집합니다. 
            서비스 제공 및 개선을 위해 다음과 같은 데이터만 수집합니다:
          </p>
          <ul>
            <li><strong>Firebase Crashlytics</strong>: 앱 충돌 및 오류 정보 (앱 안정성 개선 목적)</li>
            <li><strong>Firebase Analytics</strong>: 익명화된 사용 통계 (서비스 개선 목적)</li>
          </ul>
          
          <p>
            <strong>당사는 다음과 같은 데이터를 수집하지 않습니다:</strong>
          </p>
          <ul>
            <li>개인 식별 정보 (이름, 이메일, 전화번호 등)</li>
            <li>위치 정보</li>
            <li>연락처 정보</li>
            <li>사진 또는 미디어 파일</li>
          </ul>
          
          <p>수집된 데이터는 다음과 같은 목적으로만 사용됩니다:</p>
          <ul>
            <li>앱 안정성 향상 및 버그 수정</li>
            <li>사용자 경험 개선을 위한 익명 통계 분석</li>
            <li>서비스 품질 향상</li>
          </ul>
        </section>

        <section style={{ marginBottom: '30px' }}>
          <h2>어린이의 개인정보 보호</h2>
          <p>
            당사의 서비스는 13세 미만의 어린이를 포함한 모든 연령대의 사용자에게 제공됩니다. 
            당사는 13세 미만의 어린이로부터 개인 식별 정보를 수집하지 않습니다. 
            만약 부모나 보호자가 자녀의 개인정보가 수집된 사실을 알게 되면 당사에 연락해 주십시오. 
            당사는 해당 정보를 삭제하기 위한 조치를 취할 것입니다.
          </p>
        </section>

        <section style={{ marginBottom: '30px' }}>
          <h2>데이터 저장</h2>
          <p>
            당사는 Firebase의 Crashlytics와 Analytics를 통해 수집된 데이터를 Google의 서버에 저장합니다. 
            이러한 데이터는 익명화되어 있으며, 개인을 식별할 수 없는 형태로 처리됩니다.
          </p>
          <p>
            모든 데이터는 Google Firebase의 보안 정책에 따라 안전하게 관리되며, 
            서비스 개선 목적 이외에는 사용되지 않습니다.
          </p>
        </section>

        <section style={{ marginBottom: '30px' }}>
          <h2>이 개인정보처리방침의 변경</h2>
          <p>
            당사는 개인정보처리방침을 수시로 업데이트할 수 있습니다. 
            변경 사항이 있을 경우 새로운 개인정보처리방침을 이 페이지에 게시하여 알려드리겠습니다.
          </p>
          <p>
            변경 사항이 적용되기 전에 서비스에 대한 눈에 띄는 공지를 통해 알려드리며, 
            본 개인정보처리방침의 상단에 "최종 업데이트" 날짜를 업데이트할 것입니다.
          </p>
          <p>
            변경 사항이 있는지 주기적으로 개인정보처리방침을 검토하시기 바랍니다. 
            이 개인정보처리방침의 변경 사항은 이 페이지에 게시될 때 적용됩니다.
          </p>
        </section>

        <section style={{ marginBottom: '30px' }}>
          <h2>문의하기</h2>
          <p>이 개인정보처리방침에 대해 질문이 있으시면 아래 연락처로 문의해 주십시오:</p>
          <ul>
            <li>이메일: <a href="mailto:jaykang0304@gmail.com">jaykang0304@gmail.com</a></li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default App;
