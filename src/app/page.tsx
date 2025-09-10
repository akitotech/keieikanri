'use client';
import CountdownTimer from '@/components/CountdownTimer';

export default function Home() {
  return (
    <div className="bg-slate-50 text-slate-800">
      {/* Top Alert Bar with Countdown */}
      <div className="w-full bg-red-600 text-white">
        <div className="container mx-auto container-narrow px-4 py-2 flex items-center justify-between gap-4">
          <p className="text-sm md:text-base font-semibold">【緊急】10月以降は資本金3,000万円＋従業員必置へ。<strong>9/14(日) 23:59 までに相談申込み</strong>／<strong>限定3社</strong>、今だけ現行要件で申請可！</p>
          <div className="flex items-center gap-2 shrink-0">
            <span className="text-xs md:text-sm">締切まで</span>
            <CountdownTimer />
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="bg-white sticky top-0 z-40 border-b border-slate-200 shadow-sm">
        <div className="container mx-auto container-narrow px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 flex items-center justify-center">
              <img 
                src="/logo.png" 
                alt="Kobe Regency Logo" 
                className="w-full h-full object-contain"
                onError={(e) => {
                  // ロゴ画像が見つからない場合のフォールバック
                  const img = e.currentTarget;
                  const fallback = img.nextElementSibling as HTMLElement;
                  if (img && fallback) {
                    img.style.display = 'none';
                    fallback.style.display = 'flex';
                  }
                }}
              />
              <div className="w-9 h-9 rounded-2xl bg-blue-600 flex items-center justify-center text-white font-black hidden">K</div>
            </div>
            <div className="leading-tight">
              <div className="text-slate-900 font-extrabold tracking-tight">経営管理ビザ 4か月｜緊急申請窓口</div>
              <div className="text-slate-600 text-sm font-medium">神戸リージェンシー行政書士事務所（全国オンライン対応）</div>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-3">
            <a href="#why" className="px-3 py-2 text-sm text-slate-700 hover:text-slate-900">今だけの理由</a>
            <a href="#compare" className="px-3 py-2 text-sm text-slate-700 hover:text-slate-900">改正ポイント</a>
            <a href="#support" className="px-3 py-2 text-sm text-slate-700 hover:text-slate-900">サポート内容</a>
            <a href="#price" className="px-3 py-2 text-sm text-slate-700 hover:text-slate-900">報酬</a>
            <a href="#faq" className="px-3 py-2 text-sm text-slate-700 hover:text-slate-900">FAQ</a>
            <a href="/contact" className="px-4 py-2 rounded-xl bg-slate-900 text-white text-sm font-semibold hover:opacity-90">無料相談</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-red-50 via-white to-slate-50"></div>
        <div className="container mx-auto container-narrow px-4 py-14 md:py-20 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-3xl md:text-5xl font-black leading-[1.3] tracking-tight text-slate-900">
              経営管理ビザは<strong className="text-red-600">10月から厳格化</strong>。<br />
              <span className="text-yellow-600 font-extrabold">資本金500万円</span>で申請できるのは<strong>「今だけ」</strong>。
        </h1>
            <p className="mt-5 text-lg md:text-xl text-slate-700">
              今なら<strong>4か月の経営管理ビザ</strong>を<strong>事務所契約なし</strong>で申請可能。10月以降は
              <span className="font-semibold">資本金3,000万円＋従業員（常勤）必置</span>へ。現行要件での申請は今が有利です。
            </p>
            <div className="mt-7 flex justify-center">
              <a href="/contact" className="px-8 py-4 rounded-2xl bg-blue-600 text-white font-semibold shadow hover:opacity-90 text-lg">48時間以内の無料相談を予約</a>
            </div>
            <p className="mt-3 text-xs text-slate-500">※相談申込み期限：<strong>9/14(日) 23:59（日本時間）</strong>。<strong>限定3社</strong>のみ受付。</p>
          </div>
          <div>
            <div className="relative rounded-3xl bg-white shadow-lg border border-slate-200 p-6">
              <h3 className="text-lg font-bold">最短スケジュール（目安：10日）</h3>
              <ul className="mt-4 space-y-3 text-sm">
                <li className="flex gap-3"><span className="w-20 flex-none font-semibold">Day 0-1</span><span>要件診断・即日ヒアリング／必要書類リスト化</span></li>
                <li className="flex gap-3"><span className="w-20 flex-none font-semibold">Day 2-4</span><span>資本金払込証憑、履歴書・経歴書ドラフト</span></li>
                <li className="flex gap-3"><span className="w-20 flex-none font-semibold">Day 3-6</span><span>4か月用事業計画ドラフト</span></li>
                <li className="flex gap-3"><span className="w-20 flex-none font-semibold">Day 7-9</span><span>申請書仕上げ</span></li>
                <li className="flex gap-3"><span className="w-20 flex-none font-semibold">Day 10</span><span>提出</span></li>
              </ul>
              <div className="mt-5 text-xs text-slate-500">※個別状況により前後します。当事務所が工程を並行管理します。</div>
            </div>
          </div>
        </div>
      </section>

      {/* Compare Section */}
      <section id="compare" className="py-14 md:py-20">
        <div className="container mx-auto container-narrow px-4">
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">何が変わるのか（現行 vs 改正後）</h2>
          <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-200">
              <div className="p-6">
                <h3 className="text-lg font-bold text-green-700">現行（今だけ申請可）</h3>
                <ul className="mt-3 space-y-2 text-sm">
                  <li>資本金<strong>500万円以上</strong></li>
                  <li>従業員雇用<strong>不要</strong>（資本金等で代替可）</li>
                  <li><strong>4か月ビザ</strong>：事務所契約<strong>なし</strong>で申請可</li>
                  <li>経営者の学位・経験は<strong>評価要素</strong></li>
                </ul>
              </div>
              <div className="p-6 bg-slate-50">
                <h3 className="text-lg font-bold text-red-700">改正後（10月以降）</h3>
                <ul className="mt-3 space-y-2 text-sm">
                  <li>資本金<strong>3,000万円以上必須</strong></li>
                  <li>従業員<strong>常勤1名以上必須</strong></li>
                  <li><strong>4か月ビザも可能</strong>（ただし要件は厳格化）</li>
                  <li>経営者：<strong>学位</strong>（博士/修士/専門職）または<strong>経営3年以上</strong>が<strong>必須</strong></li>
                </ul>
              </div>
            </div>
          </div>
          <p className="mt-3 text-xs text-slate-500">※改正の詳細・施行時期は公表資料・実務情報に基づきます。最新の運用は個別にご確認ください。</p>
        </div>
      </section>

      {/* Why Now */}
      <section id="why" className="py-14 md:py-20 bg-white">
        <div className="container mx-auto container-narrow px-4">
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">なぜ「今だけ申請」が必要か</h2>
          <div className="mt-6 grid md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50">
              <h3 className="font-bold">資本金要件が大幅引き上げ</h3>
              <p className="mt-2 text-sm">資本金が<strong>6倍</strong>（500万→3,000万）に引き上げられます。</p>
            </div>
            <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50">
              <h3 className="font-bold">常勤雇用の義務化</h3>
              <p className="mt-2 text-sm">改正後は<strong>常勤雇用1名以上</strong>が必須となり、起業準備段階での申請ハードルが大きく上がります。</p>
            </div>
            <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50">
              <h3 className="font-bold">学位または経営経験の要件追加</h3>
              <p className="mt-2 text-sm">経営者に<strong>学位</strong>（博士・修士・専門職）または<strong>経営3年以上</strong>の経験が必須となり、要件を満たさなくなる可能性があります。</p>
            </div>
            <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50">
              <h3 className="font-bold">事業計画への専門家関与</h3>
              <p className="mt-2 text-sm"><strong>中小企業診断士等</strong>による事業計画の評価が必要となり、コストの大幅増が予想されます。</p>
            </div>
          </div>
        </div>
      </section>

      {/* Support */}
      <section id="support" className="py-14 md:py-20">
        <div className="container mx-auto container-narrow px-4">
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">当事務所のサポート</h2>
          <div className="mt-6 grid md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-sm">
              <h3 className="font-bold">即日診断</h3>
              <p className="mt-2 text-sm">オンライン面談で状況を精査。現行要件での可否、最短ルート、必要書類を即日提示。</p>
            </div>
            <div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-sm">
              <h3 className="font-bold">書類・計画の一括作成</h3>
              <p className="mt-2 text-sm">資本金払込証憑、履歴書・経歴書、4か月用事業計画を短期集中でドラフト→仕上げ。</p>
            </div>
            <div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-sm">
              <h3 className="font-bold">徹底した進捗管理</h3>
              <p className="mt-2 text-sm">徹底した進捗管理により、<strong>9月中の申請を実現</strong>します。</p>
            </div>
          </div>

          <div id="checklist" className="mt-10 p-6 rounded-2xl border border-amber-300 bg-amber-50">
            <h3 className="font-bold text-amber-900">現行要件で間に合わせるためのチェック項目</h3>
            <ul className="mt-3 grid sm:grid-cols-2 gap-3 text-sm">
              <li>□ 資本金<strong>500万円</strong>の払込資金を確保している</li>
              <li>□ 銀行払込・残高証明など<strong>資金証憑</strong>の準備ができる</li>
              <li>□ 経営者の<strong>履歴書・職務経歴</strong>をすぐ提示できる</li>
              <li>□ 事業アイデア・市場・初期取引見込みを言語化できる</li>
              <li>□ 本人確認書類（パスポート等）の原本を保有している</li>
              <li>□ <strong>オンライン面談（即日、日本語のみ）</strong>が可能</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="price" className="py-14 md:py-20 bg-white">
        <div className="container mx-auto container-narrow px-4">
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">報酬</h2>
        </div>
        <div className="container mx-auto container-narrow px-4">
          <div className="mt-6 rounded-2xl border border-slate-200 bg-white shadow-sm p-6">
            <p className="text-lg font-bold">申請一式（4か月・今だけ現行要件での申請）</p>
            <div className="mt-2 flex items-baseline gap-2">
              <span className="text-sm text-slate-600">基本報酬</span>
              <p className="text-2xl font-extrabold text-slate-900">250,000円</p>
              <span className="text-sm text-slate-500">+消費税</span>
              <p className="text-sm text-slate-500">275,000円</p>
            </div>
            <ul className="mt-4 text-sm text-slate-700 list-disc pl-5">
              <li>含まれるもの：要件診断、書類作成一式、工程管理、提出代行、補正対応</li>
              <li>含まれないもの：官公庁手数料、取得実費（残高証明・登記事項等）、郵送料、翻訳代</li>
              <li>お支払い時期：ご契約時に着手金、提出前に残額清算（ご相談可）</li>
              <li>報酬は難易度加算あり。契約前にお見積りします</li>
            </ul>
          </div>
          <p className="mt-4 text-sm text-slate-600">※対応言語は日本語のみ。海外在住の方は日本語話者の代理人同席をご検討ください。</p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-14 md:py-20 bg-white">
        <div className="container mx-auto container-narrow px-4">
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">よくある質問</h2>
          <div className="mt-6 grid md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50">
              <h3 className="font-semibold">4か月ビザでも事務所は必要ですか？</h3>
              <p className="mt-2 text-sm">不要です。起業準備用の暫定在留のため、事務所契約なしで申請可能です（現行要件）。</p>
            </div>
            <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50">
              <h3 className="font-semibold">締切まであとわずかですが間に合いますか？</h3>
              <p className="mt-2 text-sm">書類が揃えば可能です。<strong>9/14(日) 23:59</strong>までにご相談ください（限定3社）。</p>
            </div>
            <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50">
              <h3 className="font-semibold">4か月後はどうなりますか？</h3>
              <p className="mt-2 text-sm">オフィス契約や体制整備を進め、1年更新につなげます。計画は取得直後から伴走します。</p>
            </div>
            <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50">
              <h3 className="font-semibold">対応言語について</h3>
              <p className="mt-2 text-sm">日本語でのZoom面談となります。海外在住の方は日本語話者の代理人同席をご検討ください。</p>
            </div>
          </div>
          <p className="mt-4 text-xs text-slate-500">※法令・運用は予告なく変更される場合があります。最新の状況は個別にご相談ください。</p>
        </div>
      </section>


      {/* Final CTA */}
      <section className="py-14 md:py-20">
        <div className="container mx-auto container-narrow px-4">
          <div className="rounded-3xl border border-red-200 bg-gradient-to-r from-red-50 to-orange-50 p-8 md:p-12 shadow-xl">
            <div className="text-center">
              <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-slate-900 mb-4">
                ⚠️ <span className="text-red-600">9月14日23:59</span> で締切！
              </h2>
              <p className="text-lg text-slate-700 mb-6">
                10月以降は<strong className="text-red-600">資本金3,000万円＋従業員必須</strong>に。<br />
                今なら<strong className="text-orange-600">資本金500万円</strong>で申請可能な最後のチャンスです。
              </p>
              <div className="bg-white rounded-2xl p-6 border border-orange-200">
                <p className="text-sm text-slate-600 mb-4">
                  <strong>限定3社</strong>のみ受付中。この機会を逃すと要件が大幅に厳格化されます。
                </p>
                <div className="flex justify-center">
                  <a href="/contact" className="px-8 py-4 rounded-xl bg-red-600 text-white font-semibold hover:bg-red-700 shadow-lg text-lg">9月中申請を相談する</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 border-t border-slate-200 bg-white">
        <div className="container mx-auto container-narrow px-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <div className="text-slate-900 font-extrabold">神戸リージェンシー行政書士事務所｜経営管理ビザ 緊急申請窓口</div>
            <div className="text-sm text-slate-500 mt-1">全国オンライン対応（日本語のみ）</div>
          <div className="text-sm text-slate-600 mt-2 font-medium">
            <div>所在地：兵庫県神戸市中央区浜辺通4-1-23-312</div>
          </div>
            <div className="text-xs text-slate-400 mt-2">© 2025</div>
          </div>
          <div className="text-xs text-slate-500 max-w-xl">
            <p>【免責】本LPは公表資料および実務情報に基づき作成していますが、実際の運用・経過措置は変更される場合があります。最新情報は個別にご相談ください。</p>
          </div>
        </div>
      </footer>

      {/* Mobile Sticky CTA */}
      <div className="fixed bottom-0 inset-x-0 z-50 md:hidden border-t border-slate-200 bg-white/90 backdrop-blur">
        <div className="container mx-auto container-narrow px-3 py-3">
          <a href="/contact" className="w-full text-center px-4 py-3 rounded-xl bg-slate-900 text-white font-semibold block">無料相談を予約</a>
        </div>
      </div>
    </div>
  );
}
