export default function TestFormPage() {
  return (
    <div className="min-h-screen bg-slate-50 p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">フォーム送信テスト</h1>
        
        <form 
          name="contact" 
          method="POST" 
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          data-netlify-redirect="/contact/success"
          className="space-y-4"
        >
          {/* Netlify Forms用の隠しフィールド */}
          <input type="hidden" name="form-name" value="contact" />
          <div style={{ display: 'none' }}>
            <label>
              Don't fill this out if you're human: <input name="bot-field" />
            </label>
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-2">
              姓: <input type="text" name="familyName" required className="border p-2 w-full" />
            </label>
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-2">
              名: <input type="text" name="firstName" required className="border p-2 w-full" />
            </label>
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-2">
              メール: <input type="email" name="email" required className="border p-2 w-full" />
            </label>
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-2">
              会社名: <input type="text" name="company" required className="border p-2 w-full" />
            </label>
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-2">
              事業内容: <textarea name="businessContent" required className="border p-2 w-full h-24"></textarea>
            </label>
          </div>
          
          <button 
            type="submit" 
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
          >
            テスト送信
          </button>
        </form>
        
        <div className="mt-8 p-4 bg-yellow-100 rounded">
          <h3 className="font-bold mb-2">デバッグ情報:</h3>
          <p>1. ブラウザの開発者ツール（F12）を開く</p>
          <p>2. Consoleタブでログを確認</p>
          <p>3. Networkタブで送信状況を確認</p>
          <p>4. フォーム送信後、Netlifyダッシュボードで確認</p>
        </div>
      </div>
    </div>
  );
}
