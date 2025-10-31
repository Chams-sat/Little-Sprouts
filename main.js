document.addEventListener('DOMContentLoaded', () => {
  const langSwitcher = document.getElementById('lang-switcher');
  const html = document.documentElement;
  
  // Store all translations in one place
  const translations = {
    en: {
      site_name: 'Little Sprouts',
      home: 'Home',
      about_us: 'About Us',
      programs: 'Programs',
      news: 'News',
      contact: 'Contact',
      enroll_now: 'Enroll Now',
       // other English translations
      hero_title_part1: 'Welcome to Little Sprouts Kindergarten:',
      hero_title_part2: 'Where',
      hero_title_highlight: 'Little Minds',
      hero_title_part3: 'Blossom',
      hero_subtitle: 'Nurturing curiosity and creativity in a fun, safe, and engaging learning environment.',
      explore_our_world: 'Explore Our World',
      why_choose_us_title: 'Why Choose Us',
      why_choose_us_subtitle: 'We provide a nurturing and stimulating environment where your child can grow, learn, and thrive with a smile!',
      experienced_teachers_title: 'Experienced Teachers',
      experienced_teachers_desc: 'Our dedicated and passionate educators are experts in early childhood development.',
      play_based_learning_title: 'Play-Based Learning',
      play_based_learning_desc: 'We believe children learn best through play, exploration, and hands-on activities.',
      safe_caring_env_title: 'Safe & Caring Environment',
      safe_caring_env_desc: "Your child's safety and well-being are our top priorities in our secure and loving setting.",
      our_programs_title: 'Our Programs',
      toddlers_title: 'Toddlers (1-2 years)',
      toddlers_desc: 'Our toddler program focuses on sensory exploration, language development, and social skills in a safe and nurturing environment. We encourage curiosity and independence through age-appropriate activities and play.',
      preschool_title: 'Preschool (3-4 years)',
      preschool_desc: 'Our preschool program builds on foundational skills, introducing pre-reading, pre-writing, and math concepts through engaging, theme-based activities. We foster social-emotional growth and a love for learning.',
      prek_title: 'Pre-K (4-5 years)',
      prek_desc: 'Our Pre-K program is designed to prepare children for kindergarten. We focus on developing literacy, numeracy, and critical thinking skills, ensuring a smooth transition to elementary school.',
      daily_adventures_title: 'Our Daily Adventures',
      art_giggles_title: 'Art & Giggles',
      art_giggles_desc: 'Splashing paint, moulding clay, and creating masterpieces.',
      jingles_wiggles_title: 'Jingles & Wiggles',
      jingles_wiggles_desc: 'Singing songs, dancing around, and playing instruments.',
      outdoor_fun_title: 'Outdoor Fun',
      outdoor_fun_desc: 'Exploring nature, running free, and soaking up the sun.',
      daily_rhythm_title: 'Our Daily Rhythm',
      time_900: '9:00 AM',
      hello_sunshine_title: 'Hello Sunshine!',
      hello_sunshine_desc: 'A warm welcome with songs and stories.',
      time_930: '9:30 AM',
      creative_play_title: 'Creative Play',
      creative_play_desc: 'Time to get messy with arts and crafts.',
      time_1030: '10:30 AM',
      garden_adventures_title: 'Garden Adventures',
      garden_adventures_desc: 'Fresh air and fun in our playground.',
      time_1130: '11:30 AM',
      story_land_title: 'Story Land',
      story_land_desc: 'Gathering for magical tales and rhymes.',
      mission_vision_title: 'Our Mission & Vision',
      mission_vision_desc: 'Our mission is to create a joyful, safe, and colorful world where every child feels loved, valued, and excited to learn. We envision a community of happy, kind, and creative problem-solvers, ready to paint their own bright futures!',
      core_values_title: 'Our Core Values',
      creativity_title: 'Creativity',
      creativity_desc: 'Splashing paint, singing songs, and building worlds from our wildest dreams.',
      community_title: 'Community',
      community_desc: 'Sharing smiles, helping friends, and growing together like a big, happy family.',
      kindness_title: 'Kindness',
      kindness_desc: 'Using kind words, giving warm hugs, and celebrating what makes each of us special.',
      playful_learning_title_alt: 'Playful Learning',
      playful_learning_desc_alt: 'Discovering the world through giggles, games, and grand adventures.',
      meet_staff_title: 'Meet Our Super Staff!',
      jane_doe_name: 'Jane Doe',
      jane_doe_role: 'Director & Head Explorer',
      jane_doe_bio: '"With 15 years of adventures in early education, I love creating a magical space where every child can sparkle!"',
      john_smith_name: 'John Smith',
      john_smith_role: 'Lead Teacher & Chief Storyteller',
      john_smith_bio: '"My mission is to spark endless curiosity with silly songs, messy art, and stories that leap off the page!"',
      emily_white_name: 'Emily White',
      emily_white_role: 'Assistant Teacher & Fun Champion',
      emily_white_bio: '"I love seeing little faces light up with confidence as they build, create, and make new friends every day."',
      what_parents_say_title: 'What Parents Say',
      testimonial1_text: '"Little Sprouts has been a second home for our daughter. The teachers are incredibly caring and attentive."',
      testimonial1_family: '- The Smith Family',
      testimonial2_text: '"We are so impressed with the play-based curriculum. Our son is learning so much while having fun!"',
      testimonial2_family: '- The Johnson Family',
      testimonial3_text: '"The facilities are clean, safe, and welcoming. We couldn\'t be happier with our choice."',
      testimonial3_family: '- The Williams Family',
      gallery_title: 'Our Gallery of Smiles',
      schedule_visit_title: 'Schedule a Visit Today!',
      schedule_visit_desc: "Come see our wonderful kindergarten for yourself. We'd love to show you around and answer all your questions.",
      book_tour: 'Book a Tour',
      download_handbook: 'Download Handbook',
      our_news_title: 'Our News',
      find_news_placeholder: 'Find fun news & events...',
      news_tab: 'News',
      events_tab: 'Events',
      holidays_tab: 'Holidays',
      latest_news_title: 'Latest News & Giggles',
      news1_date: 'September 25, 2024',
      news1_title: 'Annual Sports Day Fun!',
      news1_desc: 'Get ready for a day of fun and games! Our Annual Sports Day is just around the corner. Join us for a day of healthy competition.',
      read_more: 'Read More →',
      news2_date: 'September 20, 2024',
      news2_title: 'Parent-Teacher Chit-Chats',
      news2_desc: "We invite all parents to attend the upcoming Parent-Teacher meetings to discuss your child's progress and development.",
      news3_date: 'September 15, 2024',
      news3_title: 'Artsy-Crafty Fair',
      news3_desc: 'Come and see the amazing creations of our talented little artists at the annual Art and Craft Fair. A vibrant display of creativity!',
      news4_date: 'September 10, 2024',
      news4_title: 'School Holiday Notice',
      news4_desc: 'Please note that the school will be closed on October 10th for a scheduled maintenance day. Classes will resume as normal.',
      event_calendar_title: 'Event Calendar',
      calendar_month: 'October 2024',
      stay_in_loop_title: 'Stay in the Loop!',
      stay_in_loop_desc: 'Subscribe to our newsletter for the latest updates.',
      your_email_placeholder: 'Your email address',
      submit_button: 'Submit',
      online_registration_title: 'Online Registration',
      online_registration_desc: "Hooray! It's time to join our kindergarten family. Follow these easy-peasy steps to get your little star registered for a world of fun and learning.",
      step1_title: 'Create a Parent Portal',
      step1_desc: 'First, let\'s get you set up with a parent account. It’s quick and easy!',
      step2_title: 'Fill in the Fun Form',
      step2_desc: 'Tell us all about your little one by filling out our colorful application form.',
      step3_title: 'Upload Your Documents',
      step3_desc: 'Time for a little paperwork! Upload the needed documents right here.',
      step4_title: 'Blast Off!',
      step4_desc: "Give everything one last look, hit submit, and you\'re all done. Welcome aboard!",
      what_you_need_title: "What You'll Need",
      doc1: 'Birth Certificate',
      doc2: 'Proof of Residence',
      doc3: 'Immunization Records',
      doc4: 'Parent/Guardian ID',
      lets_go_button: "Let's Go!",
      download_forms_button: 'Download Forms',
      mark_calendar_title: 'Mark Your Calendar!',
      date1_date: 'January 15th',
      date1_desc: 'Registration Opens',
      date2_date: 'March 31st',
      date2_desc: 'Registration Deadline',
      date3_date: 'April 15th',
      date3_desc: 'Welcome Letters Sent Out',
      got_questions_title: 'Got Questions?',
      faq1_q: 'Can I save my application and come back?',
      faq1_a: 'Of course! You can save your progress and finish the application anytime before the deadline. No rush!',
      faq2_q: 'What if I get stuck?',
      faq2_a: "Don't worry! Our friendly admissions team is here to help. Call us at (123) 456-7890 or email admissions@kindergarten.com.",
      faq3_q: 'Is there a fee to apply?',
      faq3_a: "Yes, there's a small, non-refundable application fee of $50. You'll be prompted to pay when you submit your application.",
      get_in_touch_title: 'Get in Touch',
      your_name_label: 'Your Name',
      your_name_placeholder: "Little Sprout's Parent",
      email_address_label: 'Email Address',
      email_address_placeholder: 'hello@littlesprouts.com',
      message_label: 'Message',
      message_placeholder: 'How can we help you grow?',
      send_message_button: 'Send Message',
      visit_us_title: 'Visit Us',
      address: '123 Sunshine Boulevard<br />Garden City, CA 90210',
      contact_info_title: 'Contact Info',
      contact_info_details: 'Phone: (555) 123-4567<br />Email: hello@littlesprouts.com',
      hours_title: 'Hours',
      hours_details: 'Monday-Friday: 7:30 AM - 6:00 PM<br />Saturday: Closed<br />Sunday: Closed',
      footer_copyright: '© 2024 Little Sprouts Kindergarten. All rights reserved.'
    },
    ar: {
      site_name: 'البراعم الصغيرة',
      home: 'الرئيسية',
      about_us: 'من نحن',
      programs: 'برامجنا',
      news: 'الأخبار',
      contact: 'اتصل بنا',
      enroll_now: 'سجل الآن',
      // other Arabic translations
      hero_title_part1: 'أهلاً بكم في روضة البراعم الصغيرة:',
      hero_title_part2: 'حيث',
      hero_title_highlight: 'العقول الصغيرة',
      hero_title_part3: 'تزدهر',
      hero_subtitle: 'نرعى الفضول والإبداع في بيئة تعليمية ممتعة وآمنة وجذابة.',
      explore_our_world: 'اكتشف عالمنا',
      why_choose_us_title: 'لماذا تختارنا',
      why_choose_us_subtitle: 'نحن نوفر بيئة راعية ومحفزة حيث يمكن لطفلك أن ينمو ويتعلم ويزدهر بابتسامة!',
      experienced_teachers_title: 'معلمون ذوو خبرة',
      experienced_teachers_desc: 'معلمونا المتفانون والمتحمسون هم خبراء في تنمية الطفولة المبكرة.',
      play_based_learning_title: 'التعلم القائم على اللعب',
      play_based_learning_desc: 'نحن نؤمن بأن الأطفال يتعلمون بشكل أفضل من خلال اللعب والاستكشاف والأنشطة العملية.',
      safe_caring_env_title: 'بيئة آمنة ورعاية',
      safe_caring_env_desc: 'سلامة طفلك ورفاهيته هي أهم أولوياتنا في بيئتنا الآمنة والمحبة.',
      our_programs_title: 'برامجنا',
      toddlers_title: 'الأطفال الصغار (1-2 سنة)',
      toddlers_desc: 'يركز برنامجنا للأطفال الصغار على الاستكشاف الحسي وتنمية اللغة والمهارات الاجتماعية في بيئة آمنة ورعاية. نشجع الفضول والاستقلالية من خلال الأنشطة واللعب المناسب للعمر.',
      preschool_title: 'مرحلة ما قبل المدرسة (3-4 سنوات)',
      preschool_desc: 'يبني برنامجنا لمرحلة ما قبل المدرسة على المهارات الأساسية، ويقدم مفاهيم ما قبل القراءة وما قبل الكتابة والرياضيات من خلال أنشطة جذابة قائمة على الموضوعات. نحن نعزز النمو الاجتماعي العاطفي وحب التعلم.',
      prek_title: 'التمهيدي (4-5 سنوات)',
      prek_desc: 'تم تصميم برنامجنا التمهيدي لإعداد الأطفال لرياض الأطفال. نحن نركز على تطوير مهارات القراءة والكتابة والحساب والتفكير النقدي، مما يضمن انتقالًا سلسًا إلى المدرسة الابتدائية.',
      daily_adventures_title: 'مغامراتنا اليومية',
      art_giggles_title: 'فن وضحكات',
      art_giggles_desc: 'رش الطلاء وتشكيل الطين وصنع روائع فنية.',
      jingles_wiggles_title: 'أناشيد وحركات',
      jingles_wiggles_desc: 'غناء الأغاني والرقص والعزف على الآلات الموسيقية.',
      outdoor_fun_title: 'متعة في الهواء الطلق',
      outdoor_fun_desc: 'استكشاف الطبيعة والركض بحرية والاستمتاع بأشعة الشمس.',
      daily_rhythm_title: 'إيقاعنا اليومي',
      time_900: '9:00 صباحًا',
      hello_sunshine_title: 'أهلاً يا شمس!',
      hello_sunshine_desc: 'ترحيب حار بالأغاني والقصص.',
      time_930: '9:30 صباحًا',
      creative_play_title: 'اللعب الإبداعي',
      creative_play_desc: 'حان وقت الفوضى مع الفنون والحرف اليدوية.',
      time_1030: '10:30 صباحًا',
      garden_adventures_title: 'مغامرات الحديقة',
      garden_adventures_desc: 'هواء نقي ومرح في ملعبنا.',
      time_1130: '11:30 صباحًا',
      story_land_title: 'أرض الحكايات',
      story_land_desc: 'التجمع لسماع الحكايات والأناشيد السحرية.',
      mission_vision_title: 'مهمتنا ورؤيتنا',
      mission_vision_desc: 'مهمتنا هي خلق عالم مبهج وآمن وملون حيث يشعر كل طفل بالحب والتقدير والحماس للتعلم. نتصور مجتمعًا من حلالي المشاكل السعداء والطيبين والمبدعين، على استعداد لرسم مستقبلهم المشرق!',
      core_values_title: 'قيمنا الأساسية',
      creativity_title: 'الإبداع',
      creativity_desc: 'رش الطلاء، غناء الأغاني، وبناء عوالم من أعنف أحلامنا.',
      community_title: 'المجتمع',
      community_desc: 'مشاركة الابتسامات، مساعدة الأصدقاء، والنمو معًا كعائلة كبيرة سعيدة.',
      kindness_title: 'اللطف',
      kindness_desc: 'استخدام الكلمات اللطيفة، إعطاء الأحضان الدافئة، والاحتفال بما يجعل كل منا مميزًا.',
      playful_learning_title_alt: 'التعلم المرح',
      playful_learning_desc_alt: 'اكتشاف العالم من خلال الضحكات والألعاب والمغامرات الكبرى.',
      meet_staff_title: 'تعرف على طاقمنا الرائع!',
      jane_doe_name: 'جين دو',
      jane_doe_role: 'المديرة والمستكشفة الرئيسية',
      jane_doe_bio: '"مع 15 عامًا من المغامرات في التعليم المبكر، أحب خلق مساحة سحرية حيث يمكن لكل طفل أن يتألق!"',
      john_smith_name: 'جون سميث',
      john_smith_role: 'المعلم الرئيسي وكبير رواة القصص',
      john_smith_bio: '"مهمتي هي إثارة الفضول اللامتناهي بالأغاني المضحكة والفن الفوضوي والقصص التي تقفز من الصفحة!"',
      emily_white_name: 'إميلي وايت',
      emily_white_role: 'المعلمة المساعدة وبطلة المرح',
      emily_white_bio: '"أحب رؤية الوجوه الصغيرة تضيء بالثقة وهم يبنون ويبدعون ويكوّنون صداقات جديدة كل يوم."',
      what_parents_say_title: 'ماذا يقول الآباء',
      testimonial1_text: '"كانت البراعم الصغيرة بمثابة منزل ثان لابنتنا. المعلمون مهتمون ويقظون بشكل لا يصدق."',
      testimonial1_family: '- عائلة سميث',
      testimonial2_text: '"نحن معجبون جدًا بالمنهج القائم على اللعب. ابننا يتعلم الكثير بينما يستمتع!"',
      testimonial2_family: '- عائلة جونسون',
      testimonial3_text: '"المرافق نظيفة وآمنة ومرحبة. لا يمكننا أن نكون أكثر سعادة باختيارنا."',
      testimonial3_family: '- عائلة ويليامز',
      gallery_title: 'معرض ابتساماتنا',
      schedule_visit_title: 'حدد موعدًا للزيارة اليوم!',
      schedule_visit_desc: 'تعال وشاهد روضتنا الرائعة بنفسك. نود أن نريك المكان ونجيب على جميع أسئلتك.',
      book_tour: 'احجز جولة',
      download_handbook: 'تنزيل الدليل',
      our_news_title: 'أخبارنا',
      find_news_placeholder: 'ابحث عن أخبار وأحداث ممتعة...',
      news_tab: 'الأخبار',
      events_tab: 'الأحداث',
      holidays_tab: 'العطلات',
      latest_news_title: 'آخر الأخبار والضحكات',
      news1_date: '25 سبتمبر 2024',
      news1_title: 'متعة اليوم الرياضي السنوي!',
      news1_desc: 'استعد ليوم من المرح والألعاب! يومنا الرياضي السنوي على الأبواب. انضم إلينا ليوم من المنافسة الصحية.',
      read_more: 'اقرأ المزيد →',
      news2_date: '20 سبتمبر 2024',
      news2_title: 'محادثات بين أولياء الأمور والمعلمين',
      news2_desc: 'ندعو جميع أولياء الأمور لحضور اجتماعات أولياء الأمور والمعلمين القادمة لمناقشة تقدم وتطور طفلكم.',
      news3_date: '15 سبتمبر 2024',
      news3_title: 'معرض الفنون والحرف',
      news3_desc: 'تعالوا وشاهدوا الإبداعات المذهلة لفنانينا الصغار الموهوبين في معرض الفن والحرف السنوي. عرض نابض بالحياة للإبداع!',
      news4_date: '10 سبتمبر 2024',
      news4_title: 'إشعار عطلة مدرسية',
      news4_desc: 'يرجى ملاحظة أن المدرسة ستكون مغلقة في 10 أكتوبر ليوم صيانة مجدول. ستستأنف الفصول كالمعتاد.',
      event_calendar_title: 'تقويم الفعاليات',
      calendar_month: 'أكتوبر 2024',
      stay_in_loop_title: 'ابق على اطلاع!',
      stay_in_loop_desc: 'اشترك في نشرتنا الإخبارية للحصول على آخر التحديثات.',
      your_email_placeholder: 'عنوان بريدك الإلكتروني',
      submit_button: 'إرسال',
      online_registration_title: 'التسجيل عبر الإنترنت',
      online_registration_desc: 'يا للفرح! حان الوقت للانضمام إلى عائلة روضتنا. اتبع هذه الخطوات السهلة لتسجيل نجمك الصغير في عالم من المرح والتعلم.',
      step1_title: 'إنشاء بوابة ولي الأمر',
      step1_desc: 'أولاً، دعنا نقم بإعداد حساب ولي أمر لك. إنه سريع وسهل!',
      step2_title: 'املأ النموذج الممتع',
      step2_desc: 'أخبرنا بكل شيء عن طفلك الصغير عن طريق ملء نموذج الطلب الملون الخاص بنا.',
      step3_title: 'تحميل مستنداتك',
      step3_desc: 'حان الوقت لبعض الأعمال الورقية! قم بتحميل المستندات المطلوبة هنا.',
      step4_title: 'انطلق!',
      step4_desc: 'ألقِ نظرة أخيرة على كل شيء، اضغط على إرسال، وبذلك تكون قد انتهيت. أهلاً بك على متن الطائرة!',
      what_you_need_title: 'ماذا ستحتاج',
      doc1: 'شهادة الميلاد',
      doc2: 'إثبات الإقامة',
      doc3: 'سجلات التحصين',
      doc4: 'هوية ولي الأمر/الوصي',
      lets_go_button: 'هيا بنا!',
      download_forms_button: 'تنزيل النماذج',
      mark_calendar_title: 'ضع علامة على تقويمك!',
      date1_date: '15 يناير',
      date1_desc: 'فتح باب التسجيل',
      date2_date: '31 مارس',
      date2_desc: 'الموعد النهائي للتسجيل',
      date3_date: '15 أبريل',
      date3_desc: 'إرسال رسائل الترحيب',
      got_questions_title: 'هل لديك أسئلة؟',
      faq1_q: 'هل يمكنني حفظ طلبي والعودة لاحقًا؟',
      faq1_a: 'بالطبع! يمكنك حفظ تقدمك وإنهاء الطلب في أي وقت قبل الموعد النهائي. لا داعي للاستعجال!',
      faq2_q: 'ماذا لو واجهتني مشكلة؟',
      faq2_a: 'لا تقلق! فريق القبول الودود لدينا هنا للمساعدة. اتصل بنا على (123) 456-7890 أو أرسل بريدًا إلكترونيًا إلى admissions@kindergarten.com.',
      faq3_q: 'هل هناك رسوم للتقديم؟',
      faq3_a: "نعم، هناك رسوم طلب صغيرة غير قابلة للاسترداد بقيمة 50 دولارًا. سيُطلب منك الدفع عند تقديم طلبك.",
      get_in_touch_title: 'تواصل معنا',
      your_name_label: 'اسمك',
      your_name_placeholder: 'ولي أمر في البراعم الصغيرة',
      email_address_label: 'عنوان البريد الإلكتروني',
      email_address_placeholder: 'hello@littlesprouts.com',
      message_label: 'رسالتك',
      message_placeholder: 'كيف يمكننا مساعدتك على النمو؟',
      send_message_button: 'إرسال الرسالة',
      visit_us_title: 'زورونا',
      address: '123 شارع صن شاين<br />جاردن سيتي، كاليفورنيا 90210',
      contact_info_title: 'معلومات الاتصال',
      contact_info_details: 'الهاتف: (555) 123-4567<br />البريد الإلكتروني: hello@littlesprouts.com',
      hours_title: 'ساعات العمل',
      hours_details: 'الاثنين - الجمعة: 7:30 صباحًا - 6:00 مساءً<br />السبت: مغلق<br />الأحد: مغلق',
      footer_copyright: '© 2024 روضة البراعم الصغيرة. جميع الحقوق محفوظة.'
    }
  };

  const updateUIForLanguage = (lang) => {
    const isRTL = lang === 'ar';
    html.lang = lang;
    html.dir = isRTL ? 'rtl' : 'ltr';
    langSwitcher.querySelector('span').textContent = isRTL ? 'English' : 'العربية';
    applyTranslations(lang);
  };

  const applyTranslations = (lang) => {
    document.querySelectorAll('[data-translate]').forEach(element => {
      const key = element.getAttribute('data-translate');
      if (translations[lang] && translations[lang][key]) {
        const translation = translations[lang][key];
        // Using textContent is safer than innerHTML as it prevents XSS vulnerabilities.
        // The <br> tags in the translations will be rendered as text, so they should be handled in the HTML structure.
        // For elements that need to contain HTML (like the address), we can make an exception.
        if (element.getAttribute('data-allow-html')) {
            element.innerHTML = translation;
        } else {
            element.textContent = translation;
        }
      }
    });
  };

  langSwitcher.addEventListener('click', () => {
    const newLang = html.lang === 'en' ? 'ar' : 'en';
    updateUIForLanguage(newLang);
  });

  // Mobile Menu
  const mobileMenuButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');
  const openIcon = mobileMenuButton.querySelector('svg:first-child');
  const closeIcon = mobileMenuButton.querySelector('svg:last-child');

  mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
    openIcon.classList.toggle('hidden');
    closeIcon.classList.toggle('hidden');
  });

  // Form Submissions (for demo purposes)
  const newsletterForm = document.querySelector('#news form');
  const contactForm = document.querySelector('#contact form');

  newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = newsletterForm.querySelector('input[type="email"]').value;
    console.log('Newsletter submission:', { email });
    alert('Thank you for subscribing to our newsletter!');
    newsletterForm.reset();
  });

  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = contactForm.querySelector('input[type="text"]').value;
    const email = contactForm.querySelector('input[type="email"]').value;
    const message = contactForm.querySelector('textarea').value;
    console.log('Contact form submission:', { name, email, message });
    alert('Thank you for your message! We will get back to you soon.');
    contactForm.reset();
  });

  // Set initial language on page load
  updateUIForLanguage(html.lang || 'en');
});
