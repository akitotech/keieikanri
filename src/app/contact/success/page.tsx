export default function ContactSuccessPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-bold text-slate-900">送信完了</h1>
            <a 
              href="/" 
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              ← トップページに戻る
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-6 bg-green-100 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 text-slate-900">
              お問い合わせありがとうございます
            </h2>
            
            <p className="text-lg text-slate-600 mb-6">
              送信が完了しました。担当者より24時間以内にご連絡いたします。
            </p>
            
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
              <h3 className="font-semibold text-blue-900 mb-2">次のステップ</h3>
              <ul className="text-sm text-blue-800 text-left space-y-1">
                <li>• 担当者より24時間以内にメールまたはお電話にてご連絡いたします</li>
                <li>• ご相談内容に応じて、オンライン面談の日程を調整いたします</li>
                <li>• 必要に応じて、追加の資料をお送りいたします</li>
              </ul>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/" 
                className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
              >
                トップページに戻る
              </a>
              <a 
                href="/contact" 
                className="px-6 py-3 border border-slate-300 text-slate-700 font-semibold rounded-lg hover:bg-slate-50 transition-colors"
              >
                別の内容で問い合わせる
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
