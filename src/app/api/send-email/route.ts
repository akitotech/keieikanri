import { NextRequest, NextResponse } from 'next/server';
const nodemailer = require('nodemailer');

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { familyName, firstName, email, nationality, company, businessContent } = body;

    // バリデーション
    if (!familyName || !firstName || !email || !nationality || !company || !businessContent) {
      return NextResponse.json(
        { error: 'すべての項目を入力してください' },
        { status: 400 }
      );
    }

    // メール本文を作成
    const emailBody = `
無料相談のお申込み

お名前: ${familyName} ${firstName}
メールアドレス: ${email}
国籍: ${nationality}
会社名・事業名: ${company}
事業内容: ${businessContent}

---
このメールは問い合わせフォームから自動送信されました。
    `.trim();

    // 開発環境ではコンソールに出力（本番環境ではメール送信）
    if (process.env.NODE_ENV === 'development') {
      console.log('=== 問い合わせメール ===');
      console.log('宛先: koberegency@gmail.com');
      console.log('件名: 無料相談のお申込み');
      console.log('本文:');
      console.log(emailBody);
      console.log('=======================');
    } else {
      // 本番環境でのメール送信
      const transporter = nodemailer.createTransporter({
        service: 'gmail',
        auth: {
          user: 'koberegency@gmail.com',
          pass: process.env.GMAIL_APP_PASSWORD,
        },
      });

      await transporter.sendMail({
        from: 'koberegency@gmail.com',
        to: 'koberegency@gmail.com',
        subject: '無料相談のお申込み',
        text: emailBody,
        replyTo: email,
      });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('メール送信エラー:', error);
    return NextResponse.json(
      { error: 'メール送信に失敗しました。しばらく時間をおいて再度お試しください。' },
      { status: 500 }
    );
  }
}
