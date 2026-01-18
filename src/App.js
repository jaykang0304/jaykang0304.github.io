import './App.css';
import { useState } from 'react';

const translations = {
  ko: {
    title: "개인정보처리방침",
    intro1: 'Bogle Studio ("회사", "우리", "당사")는 다양한 모바일 애플리케이션("서비스")을 운영합니다. 이 페이지는 사용자가 당사의 모든 애플리케이션 이용 시 개인정보의 수집, 사용 및 공개에 관한 정책을 안내하고, 이 데이터와 관련된 사용자의 선택권을 설명합니다.',
    intro2: "당사는 사용자의 개인정보를 보호하기 위해 최선을 다하고 있습니다. 본 서비스를 사용함으로써 귀하는 본 개인정보처리방침에 따라 정보가 수집 및 사용됨에 동의하게 됩니다.",
    dataCollection: "데이터의 수집 및 사용",
    dataIntro: "당사는 사용자의 개인정보를 최소한으로 수집합니다. 서비스 제공 및 개선을 위해 다음과 같은 데이터만 수집합니다:",
    crashlytics: "앱 충돌 및 오류 정보 (앱 안정성 개선 목적)",
    analytics: "익명화된 사용 통계 (서비스 개선 목적)",
    notCollected: "당사는 다음과 같은 데이터를 수집하지 않습니다:",
    noPersonalInfo: "개인 식별 정보 (이름, 이메일, 전화번호 등)",
    noLocation: "위치 정보",
    noContacts: "연락처 정보",
    noMedia: "사진 또는 미디어 파일",
    usagePurpose: "수집된 데이터는 다음과 같은 목적으로만 사용됩니다:",
    stability: "앱 안정성 향상 및 버그 수정",
    improvement: "사용자 경험 개선을 위한 익명 통계 분석",
    quality: "서비스 품질 향상",
    childrenPrivacy: "어린이의 개인정보 보호",
    childrenText: "당사의 서비스는 13세 미만의 어린이를 포함한 모든 연령대의 사용자에게 제공됩니다. 당사는 13세 미만의 어린이로부터 개인 식별 정보를 수집하지 않습니다. 만약 부모나 보호자가 자녀의 개인정보가 수집된 사실을 알게 되면 당사에 연락해 주십시오. 당사는 해당 정보를 삭제하기 위한 조치를 취할 것입니다.",
    dataStorage: "데이터 저장",
    storageText1: "당사는 Firebase의 Crashlytics와 Analytics를 통해 수집된 데이터를 Google의 서버에 저장합니다. 이러한 데이터는 익명화되어 있으며, 개인을 식별할 수 없는 형태로 처리됩니다.",
    storageText2: "모든 데이터는 Google Firebase의 보안 정책에 따라 안전하게 관리되며, 서비스 개선 목적 이외에는 사용되지 않습니다.",
    policyChanges: "이 개인정보처리방침의 변경",
    changesText1: "당사는 개인정보처리방침을 수시로 업데이트할 수 있습니다. 변경 사항이 있을 경우 새로운 개인정보처리방침을 이 페이지에 게시하여 알려드리겠습니다.",
    changesText2: '변경 사항이 적용되기 전에 서비스에 대한 눈에 띄는 공지를 통해 알려드리며, 본 개인정보처리방침의 상단에 "최종 업데이트" 날짜를 업데이트할 것입니다.',
    changesText3: "변경 사항이 있는지 주기적으로 개인정보처리방침을 검토하시기 바랍니다. 이 개인정보처리방침의 변경 사항은 이 페이지에 게시될 때 적용됩니다.",
    contact: "문의하기",
    contactText: "이 개인정보처리방침에 대해 질문이 있으시면 아래 연락처로 문의해 주십시오:",
    email: "이메일"
  },
  en: {
    title: "Privacy Policy",
    intro1: 'Bogle Studio ("Company", "we", "us") operates various mobile applications ("Services"). This page informs users about our policies regarding the collection, use, and disclosure of personal information when using all of our applications, and explains users\' choices regarding this data.',
    intro2: "We are committed to protecting your personal information. By using our Services, you agree to the collection and use of information in accordance with this Privacy Policy.",
    dataCollection: "Data Collection and Use",
    dataIntro: "We collect minimal personal information from users. We only collect the following data for the purpose of providing and improving our Services:",
    crashlytics: "App crash and error information (for app stability improvement)",
    analytics: "Anonymized usage statistics (for service improvement)",
    notCollected: "We do NOT collect the following data:",
    noPersonalInfo: "Personal identification information (name, email, phone number, etc.)",
    noLocation: "Location information",
    noContacts: "Contact information",
    noMedia: "Photos or media files",
    usagePurpose: "The collected data is used only for the following purposes:",
    stability: "Improving app stability and fixing bugs",
    improvement: "Anonymous statistical analysis to improve user experience",
    quality: "Enhancing service quality",
    childrenPrivacy: "Children's Privacy",
    childrenText: "Our Services are provided to users of all ages, including children under 13. We do not collect personally identifiable information from children under 13. If a parent or guardian becomes aware that their child has provided us with personal information, please contact us. We will take steps to delete such information.",
    dataStorage: "Data Storage",
    storageText1: "We store data collected through Firebase Crashlytics and Analytics on Google's servers. This data is anonymized and processed in a form that cannot identify individuals.",
    storageText2: "All data is securely managed in accordance with Google Firebase's security policies and is not used for purposes other than service improvement.",
    policyChanges: "Changes to This Privacy Policy",
    changesText1: "We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.",
    changesText2: 'We will notify you through prominent notice on our Services before the changes take effect and update the "last updated" date at the top of this Privacy Policy.',
    changesText3: "You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.",
    contact: "Contact Us",
    contactText: "If you have any questions about this Privacy Policy, please contact us:",
    email: "Email"
  },
  ja: {
    title: "プライバシーポリシー",
    intro1: 'Bogle Studio（「当社」）は、さまざまなモバイルアプリケーション（「サービス」）を運営しています。このページでは、当社のすべてのアプリケーションをご利用いただく際の個人情報の収集、使用、開示に関するポリシーをご案内し、このデータに関するユーザーの選択権について説明します。',
    intro2: "当社はユーザーの個人情報を保護するために最善を尽くしています。本サービスを使用することにより、お客様は本プライバシーポリシーに従って情報が収集および使用されることに同意するものとします。",
    dataCollection: "データの収集と使用",
    dataIntro: "当社はユーザーの個人情報を最小限に抑えて収集します。サービスの提供と改善のために、以下のデータのみを収集します：",
    crashlytics: "アプリのクラッシュおよびエラー情報（アプリの安定性向上のため）",
    analytics: "匿名化された使用統計（サービス改善のため）",
    notCollected: "当社は以下のデータを収集しません：",
    noPersonalInfo: "個人識別情報（氏名、メールアドレス、電話番号など）",
    noLocation: "位置情報",
    noContacts: "連絡先情報",
    noMedia: "写真またはメディアファイル",
    usagePurpose: "収集されたデータは以下の目的でのみ使用されます：",
    stability: "アプリの安定性向上とバグ修正",
    improvement: "ユーザーエクスペリエンス向上のための匿名統計分析",
    quality: "サービス品質の向上",
    childrenPrivacy: "子供のプライバシー保護",
    childrenText: "当社のサービスは、13歳未満の子供を含むすべての年齢層のユーザーに提供されています。当社は13歳未満の子供から個人識別情報を収集しません。保護者の方がお子様の個人情報が収集されたことを知った場合は、当社までご連絡ください。当社は該当情報を削除するための措置を講じます。",
    dataStorage: "データの保存",
    storageText1: "当社はFirebaseのCrashlyticsとAnalyticsを通じて収集されたデータをGoogleのサーバーに保存します。これらのデータは匿名化されており、個人を特定できない形式で処理されます。",
    storageText2: "すべてのデータはGoogle Firebaseのセキュリティポリシーに従って安全に管理され、サービス改善以外の目的には使用されません。",
    policyChanges: "このプライバシーポリシーの変更",
    changesText1: "当社はプライバシーポリシーを随時更新することがあります。変更がある場合は、このページに新しいプライバシーポリシーを掲載してお知らせします。",
    changesText2: '変更が適用される前にサービスで目立つ通知を通じてお知らせし、このプライバシーポリシーの上部にある「最終更新」日を更新します。',
    changesText3: "このプライバシーポリシーを定期的にご確認いただくことをお勧めします。このプライバシーポリシーの変更は、このページに掲載された時点で有効になります。",
    contact: "お問い合わせ",
    contactText: "このプライバシーポリシーについてご質問がある場合は、以下の連絡先までお問い合わせください：",
    email: "メールアドレス"
  }
};

function App() {
  const [language, setLanguage] = useState('ko');
  const t = translations[language];

  return (
    <div className="App">
      <div style={{ 
        maxWidth: '800px', 
        margin: '0 auto', 
        padding: '40px 20px',
        textAlign: 'left',
        lineHeight: '1.8'
      }}>
        <div style={{ 
          textAlign: 'center', 
          marginBottom: '30px',
          display: 'flex',
          justifyContent: 'center',
          gap: '10px'
        }}>
          <button 
            onClick={() => setLanguage('ko')}
            style={{
              padding: '10px 20px',
              fontSize: '16px',
              cursor: 'pointer',
              backgroundColor: language === 'ko' ? '#007bff' : '#f0f0f0',
              color: language === 'ko' ? 'white' : 'black',
              border: 'none',
              borderRadius: '5px',
              fontWeight: language === 'ko' ? 'bold' : 'normal'
            }}
          >
            한국어
          </button>
          <button 
            onClick={() => setLanguage('en')}
            style={{
              padding: '10px 20px',
              fontSize: '16px',
              cursor: 'pointer',
              backgroundColor: language === 'en' ? '#007bff' : '#f0f0f0',
              color: language === 'en' ? 'white' : 'black',
              border: 'none',
              borderRadius: '5px',
              fontWeight: language === 'en' ? 'bold' : 'normal'
            }}
          >
            English
          </button>
          <button 
            onClick={() => setLanguage('ja')}
            style={{
              padding: '10px 20px',
              fontSize: '16px',
              cursor: 'pointer',
              backgroundColor: language === 'ja' ? '#007bff' : '#f0f0f0',
              color: language === 'ja' ? 'white' : 'black',
              border: 'none',
              borderRadius: '5px',
              fontWeight: language === 'ja' ? 'bold' : 'normal'
            }}
          >
            日本語
          </button>
        </div>

        <h1 style={{ textAlign: 'center', marginBottom: '40px' }}>{t.title}</h1>
        
        <section style={{ marginBottom: '30px' }}>
          <p>{t.intro1}</p>
          <p>{t.intro2}</p>
        </section>

        <section style={{ marginBottom: '30px' }}>
          <h2>{t.dataCollection}</h2>
          <p>{t.dataIntro}</p>
          <ul>
            <li><strong>Firebase Crashlytics</strong>: {t.crashlytics}</li>
            <li><strong>Firebase Analytics</strong>: {t.analytics}</li>
          </ul>
          
          <p><strong>{t.notCollected}</strong></p>
          <ul>
            <li>{t.noPersonalInfo}</li>
            <li>{t.noLocation}</li>
            <li>{t.noContacts}</li>
            <li>{t.noMedia}</li>
          </ul>
          
          <p>{t.usagePurpose}</p>
          <ul>
            <li>{t.stability}</li>
            <li>{t.improvement}</li>
            <li>{t.quality}</li>
          </ul>
        </section>

        <section style={{ marginBottom: '30px' }}>
          <h2>{t.childrenPrivacy}</h2>
          <p>{t.childrenText}</p>
        </section>

        <section style={{ marginBottom: '30px' }}>
          <h2>{t.dataStorage}</h2>
          <p>{t.storageText1}</p>
          <p>{t.storageText2}</p>
        </section>

        <section style={{ marginBottom: '30px' }}>
          <h2>{t.policyChanges}</h2>
          <p>{t.changesText1}</p>
          <p>{t.changesText2}</p>
          <p>{t.changesText3}</p>
        </section>

        <section style={{ marginBottom: '30px' }}>
          <h2>{t.contact}</h2>
          <p>{t.contactText}</p>
          <ul>
            <li>{t.email}: <a href="mailto:jaykang0304@gmail.com">jaykang0304@gmail.com</a></li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default App;
