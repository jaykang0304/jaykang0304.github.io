import React from 'react';
import { translations } from '../i18n/translations';
import './Privacy.css';

const notices = {
  ko: {
    scope: 'Bogle Studio는 앱별로 개인정보 처리 항목과 이용 목적을 안내합니다. 사용하는 앱의 방침을 확인해 주세요.',
    sawit: '쏘잇 (SawIt) — 알림 보관, 광고 및 분석',
    coincoin: '코인코인 (Coin Coin) — 게임 전용 개인정보처리방침',
    buddytaxi: '친구 택시 (Buddy Taxi) — 위치, 기기 내 친구 장부, 지도 및 광고',
    contact: '개인정보 관련 문의',
  },
  en: {
    scope: 'Bogle Studio explains data handling separately for each app. Please read the policy for the app you use.',
    sawit: 'SawIt — notification archive, advertising, and analytics',
    coincoin: 'Coin Coin — game-specific privacy policy',
    buddytaxi: "Buddy Taxi — location, on-device friends' tab, maps and advertising",
    contact: 'Privacy questions',
  },
  ja: {
    scope: 'Bogle Studioはアプリごとにデータの取り扱いをご案内しています。ご利用のアプリの方針をご確認ください。',
    sawit: 'SawIt — 通知の保存、広告、分析（韓国語・英語）',
    coincoin: 'Coin Coin — ゲーム専用プライバシーポリシー',
    buddytaxi: '友だちタクシー (Buddy Taxi) — 位置情報、端末内の記録、地図と広告（韓国語・英語）',
    contact: 'プライバシーに関するお問い合わせ',
  },
};

const Privacy = ({ language }) => {
  const t = notices[language] || notices.en;
  const title = (translations[language] || translations.en).privacy.title;

  return (
    <div className="privacy-page">
      <section className="privacy-hero">
        <div className="container container-narrow">
          <h1>{title}</h1>
        </div>
      </section>
      <section className="privacy-content section">
        <div className="container container-narrow">
          <article className="privacy-article">
            <div className="privacy-section">
              <p>{t.scope}</p>
              <ul className="privacy-list highlight">
                <li><a href="/sawit-privacy.html">{t.sawit}</a></li>
                <li><a href="/coincoin-privacy.html">{t.coincoin}</a></li>
                <li><a href="/buddytaxi-privacy.html">{t.buddytaxi}</a></li>
              </ul>
            </div>
            <div className="privacy-section">
              <h2>{t.contact}</h2>
              <a href="mailto:jaykang0304@gmail.com">jaykang0304@gmail.com</a>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
};

export default Privacy;
