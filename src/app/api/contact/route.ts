import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    
    // フォームデータをログに出力（デバッグ用）
    console.log('Form data received:', Object.fromEntries(formData));
    
    // フォーム送信成功のリダイレクト
    return NextResponse.redirect(new URL('/contact/success', request.url));
  } catch (error) {
    console.error('Form submission error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
