"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { BUSINESS_TYPES, INQUIRY_TYPES } from "@/lib/constants";
import { products } from "@/lib/data/products";
import { useCases } from "@/lib/data/useCases";
import styles from "./ContactForm.module.css";

const initialState = {
  companyName: "",
  contactName: "",
  email: "",
  phone: "",
  businessType: "",
  inquiryType: "",
  desiredProduct: "",
  useCase: "",
  timing: "",
  message: "",
};

export function ContactForm() {
  const router = useRouter();
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  function handleChange(event) {
    const { name, value } = event.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setSubmitError(null);

    const requiredFields = ["companyName", "contactName", "email", "businessType", "inquiryType", "message"];
    const nextErrors = {};
    requiredFields.forEach((field) => {
      if (!values[field].trim()) {
        nextErrors[field] = "必須項目です";
      }
    });
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (values.email && !emailPattern.test(values.email)) {
      nextErrors.email = "メールアドレスの形式が正しくありません";
    }
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) throw new Error("送信に失敗しました");
      router.push("/contact/thanks");
    } catch {
      setSubmitError("送信に失敗しました。時間をおいて再度お試しください。");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      <div className={styles.field}>
        <label htmlFor="companyName">会社名・店舗名 *</label>
        <input id="companyName" name="companyName" value={values.companyName} onChange={handleChange} />
        {errors.companyName && <p className={styles.error}>{errors.companyName}</p>}
      </div>

      <div className={styles.field}>
        <label htmlFor="contactName">ご担当者名 *</label>
        <input id="contactName" name="contactName" value={values.contactName} onChange={handleChange} />
        {errors.contactName && <p className={styles.error}>{errors.contactName}</p>}
      </div>

      <div className={styles.row}>
        <div className={styles.field}>
          <label htmlFor="email">メールアドレス *</label>
          <input id="email" name="email" type="email" value={values.email} onChange={handleChange} />
          {errors.email && <p className={styles.error}>{errors.email}</p>}
        </div>
        <div className={styles.field}>
          <label htmlFor="phone">電話番号</label>
          <input id="phone" name="phone" value={values.phone} onChange={handleChange} />
        </div>
      </div>

      <div className={styles.field}>
        <label htmlFor="businessType">業種 *</label>
        <select id="businessType" name="businessType" value={values.businessType} onChange={handleChange}>
          <option value="">選択してください</option>
          {BUSINESS_TYPES.map((type) => (
            <option key={type.value} value={type.value}>
              {type.label}
            </option>
          ))}
        </select>
        {errors.businessType && <p className={styles.error}>{errors.businessType}</p>}
      </div>

      <div className={styles.field}>
        <label htmlFor="inquiryType">相談内容 *</label>
        <select id="inquiryType" name="inquiryType" value={values.inquiryType} onChange={handleChange}>
          <option value="">選択してください</option>
          {INQUIRY_TYPES.map((type) => (
            <option key={type.value} value={type.value}>
              {type.label}
            </option>
          ))}
        </select>
        {errors.inquiryType && <p className={styles.error}>{errors.inquiryType}</p>}
      </div>

      <div className={styles.field}>
        <label htmlFor="desiredProduct">ご希望の商品</label>
        <select id="desiredProduct" name="desiredProduct" value={values.desiredProduct} onChange={handleChange}>
          <option value="">未定・相談したい</option>
          {products.map((product) => (
            <option key={product.slug} value={product.slug}>
              {product.name}
            </option>
          ))}
        </select>
      </div>

      <div className={styles.field}>
        <label htmlFor="useCase">導入シーン</label>
        <select id="useCase" name="useCase" value={values.useCase} onChange={handleChange}>
          <option value="">選択してください</option>
          {useCases.map((useCase) => (
            <option key={useCase.slug} value={useCase.slug}>
              {useCase.label}
            </option>
          ))}
        </select>
      </div>

      <div className={styles.field}>
        <label htmlFor="timing">導入希望時期</label>
        <input id="timing" name="timing" value={values.timing} onChange={handleChange} placeholder="例：2026年秋頃" />
      </div>

      <div className={styles.field}>
        <label htmlFor="message">お問い合わせ内容 *</label>
        <textarea id="message" name="message" rows={6} value={values.message} onChange={handleChange} />
        {errors.message && <p className={styles.error}>{errors.message}</p>}
      </div>

      {submitError && <p className={styles.error}>{submitError}</p>}

      <button type="submit" className={styles.submit} disabled={submitting}>
        {submitting ? "送信中…" : "送信する"}
      </button>
    </form>
  );
}
