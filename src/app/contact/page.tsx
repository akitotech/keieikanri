'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData as any).toString()
      });

      if (response.ok) {
        setSubmitStatus('success');
        // 成功ページにリダイレクト
        window.location.href = '/contact/success';
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-bold text-slate-900">無料相談のお申込み</h1>
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
          {/* Title Section */}
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">
              無料相談のお申込み
            </h2>
            <p className="text-lg text-slate-600 mb-2">
              日本語でのZoom面談（<strong>限定3社</strong>、<strong>9/14(日)締切</strong>）をご希望の方は下記フォームよりお申し込みください。
            </p>
            <p className="text-sm text-slate-500">
              ※送信後、担当者より24時間以内にご連絡いたします。
            </p>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <form 
              name="contact" 
              method="POST" 
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              data-netlify-redirect="/contact/success"
              onSubmit={handleSubmit}
              className="grid gap-6"
            >
              {/* Netlify Forms用の隠しフィールド */}
              <input type="hidden" name="form-name" value="contact" />
              <div style={{ display: 'none' }}>
                <label>
                  Don't fill this out if you're human: <input name="bot-field" />
                </label>
              </div>
              
              {/* Family Name Field */}
              <div>
                <label htmlFor="familyName" className="block text-sm font-medium text-slate-700 mb-2">
                  姓（ファミリーネーム） <span className="text-red-500">*</span>
                </label>
                <input 
                  type="text" 
                  id="familyName"
                  name="familyName" 
                  placeholder="山田" 
                  required 
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors" 
                />
              </div>

              {/* First Name Field */}
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-slate-700 mb-2">
                  名（ファーストネーム） <span className="text-red-500">*</span>
                </label>
                <input 
                  type="text" 
                  id="firstName"
                  name="firstName" 
                  placeholder="太郎" 
                  required 
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors" 
                />
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                  メールアドレス <span className="text-red-500">*</span>
                </label>
                <input 
                  type="email" 
                  id="email"
                  name="email" 
                  placeholder="yamada@example.com" 
                  required 
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors" 
                />
              </div>

              {/* Nationality Field */}
              <div>
                <label htmlFor="nationality" className="block text-sm font-medium text-slate-700 mb-2">
                  国籍 <span className="text-red-500">*</span>
                </label>
                <input 
                  type="text" 
                  id="nationality"
                  name="nationality" 
                  placeholder="例：日本、中国、韓国、アメリカなど" 
                  required
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors" 
                />
              </div>

              {/* Company Field */}
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-2">
                  会社名・事業名 <span className="text-red-500">*</span>
                </label>
                <input 
                  type="text" 
                  id="company"
                  name="company" 
                  placeholder="株式会社サンプル" 
                  required
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors" 
                />
              </div>

              {/* Business Content Field */}
              <div>
                <label htmlFor="businessContent" className="block text-sm font-medium text-slate-700 mb-2">
                  事業内容 <span className="text-red-500">*</span>
                </label>
                <textarea 
                  id="businessContent"
                  name="businessContent" 
                  rows={6} 
                  placeholder="事業内容について詳しくお書きください。例：ITコンサルティング、貿易業、飲食店経営、不動産投資、教育事業など" 
                  required 
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-vertical" 
                />
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full px-6 py-4 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? '送信中...' : '無料相談を申し込む'}
                </button>
                
                {/* Status Messages */}
                {submitStatus === 'error' && (
                  <div className="mt-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded-xl">
                    送信に失敗しました。もう一度お試しください。
                  </div>
                )}
                {submitStatus === 'success' && (
                  <div className="mt-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded-xl">
                    送信が完了しました！
                  </div>
                )}
              </div>
            </form>
          </div>

        </div>
      </main>
    </div>
  );
}
