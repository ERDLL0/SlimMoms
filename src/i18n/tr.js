const tr = {
  translation: {
    // Header / Navigation
    nav: {
      diary: 'GÜNLÜK',
      calculator: 'HESAPLAYICI',
      login: 'GİRİŞ',
      register: 'KAYIT OL',
      exit: 'Çıkış',
    },

    // Language switcher
    lang: {
      en: 'EN',
      tr: 'TR',
    },

    // Main Page
    main: {
      title: 'Günlük kalori ihtiyacınızı hemen hesaplayın',
    },

    // Calculator Page
    calculator: {
      title: 'Günlük kalori limitinizi güncelleyin',
    },

    // DailyCaloriesForm
    form: {
      height: 'Boy *',
      age: 'Yaş *',
      currentWeight: 'Mevcut kilo *',
      desiredWeight: 'İstenen kilo *',
      bloodType: 'Kan grubu *',
      submit: 'Zayıflamaya başla',
    },

    // DailyCalorieIntake (Modal)
    modal: {
      title: 'Önerilen günlük kalori ihtiyacınız',
      notRecommended: 'Size önerilmeyen yiyecekler',
      startButton: 'Zayıflamaya başla',
    },

    // Login / Register
    auth: {
      loginTitle: 'GİRİŞ YAP',
      registerTitle: 'KAYIT OL',
      emailPlaceholder: 'E-posta *',
      passwordPlaceholder: 'Şifre *',
      namePlaceholder: 'Ad *',
      loginBtn: 'Giriş yap',
      registerBtn: 'Kayıt ol',
      profileNotFound: 'Profil bulunamadı.',
      incorrectCredentials: 'E-posta veya şifre hatalı.',
      alreadyRegistered: 'Bu profil zaten kayıtlı.',
    },

    // Diary Page
    diary: {
      productPlaceholder: 'Ürün adını giriniz',
      gramPlaceholder: 'Gram',
      addBtn: '+',
    },

    // DiaryProductsList
    products: {
      weight: 'g',
      calories: 'kcal',
    },

    // RightSideBar
    sidebar: {
      summary: 'Özet:',
      remaining: 'Kalan',
      consumed: 'Tüketilen',
      dailyRate: 'Günlük limit',
      percentDaily: 'Günlük oranın %\'si',
      notRecommended: 'Önerilmeyen yiyecekler',
      dietHint: 'Diyetiniz burada gösterilecek',
    },

    // Validation
    validation: {
      required: 'Zorunlu alan',
      invalidEmail: 'Geçersiz e-posta',
      minChars: 'Min {{min}} karakter',
      maxChars: 'Maks {{max}} karakter',
      minVal: 'Min {{min}}',
      maxVal: 'Maks {{max}}',
    },

    // Not Allowed Foods
    notAllowed: {
      milk: 'Tam yağlı süt',
      sourCream: 'Ekşi krema',
      flourProducts: 'Unlu mamuller',
    },

    // Macros
    macros: {
      protein: 'Protein',
      carbs: 'Karbonhidrat',
      fat: 'Yağ',
      calories: 'Kalori',
    },
  },
};

export default tr;
