/* =====================================
   中学校英語サポート＋ - メインアプリケーション
   3単元対応版（三単現のs・be動詞・一般動詞）
   ===================================== */

/* === マテリアルデータ === */
const MATERIALS = {
  's01': {
    unitInfo: {
      id: 's01',
      title: '三単現のs',
      grade: 1,
      difficulty: 2,
      totalQuestions: 45,
      estimatedMinutes: 30,
      goal: 'He/She/Itが主語のとき、動詞にs/esをつけられるようになる',
      description: '三人称単数現在形のsをマスターしよう'
    },
    explanation: {
      title: '三単現のsとは？',
      intro: '「He」「She」「It」「Ken」「my sister」など、1人の人やものについて話すとき（三人称単数）、動詞の形が変わります。これを「三単現のs」と言います。',
      rules: [
        { pattern: 'ほとんどの動詞', rule: '+ s', examples: ['play → plays', 'like → likes', 'eat → eats'] },
        { pattern: 's, sh, ch, x, o で終わる', rule: '+ es', examples: ['wash → washes', 'watch → watches', 'go → goes'] },
        { pattern: '子音字 + y で終わる', rule: 'y → ies', examples: ['study → studies', 'cry → cries', 'fly → flies'] },
        { pattern: 'have（例外）', rule: '→ has', examples: ['have → has'] }
      ],
      commonMistakes: [
        { wrong: 'She play tennis.', correct: 'She plays tennis.', tip: 'Sheは三単現→playsにする' },
        { wrong: 'He studys math.', correct: 'He studies math.', tip: '子音+y → ies。studysはNG' },
        { wrong: 'She have a cat.', correct: 'She has a cat.', tip: 'haveはhasになる（例外！）' }
      ]
    },
    quickCheck: [
      { id: 'qc01', type: 'choice', question: '「彼女は英語を勉強します」は？', choices: ['She study English.', 'She studies English.', 'She studys English.', 'She is study English.'], answer: 1, explanation: 'study→studies（子音+y→ies）' },
      { id: 'qc02', type: 'choice', question: 'Heに続くwashの正しい形は？', choices: ['wash', 'washs', 'washes', 'washies'], answer: 2, explanation: 'shで終わる→es。wash→washes' }
    ],
    basicQuestions: [
      { id: 'b01', type: 'transform', question: '次の動詞を三単現のsをつけた形に変えなさい。\nplay', answer: 'plays', hint: 'ほとんどの動詞はそのままsをつけます。', explanation: 'play → plays（+ s）' },
      { id: 'b02', type: 'transform', question: '次の動詞を三単現のsをつけた形に変えなさい。\nstudy', answer: 'studies', hint: '子音字+yで終わる動詞は、y→iesです。', explanation: 'study → studies（y→ies）' },
      { id: 'b03', type: 'transform', question: '次の動詞を三単現のsをつけた形に変えなさい。\nwatch', answer: 'watches', hint: 'chで終わる動詞はesをつけます。', explanation: 'watch → watches（ch→es）' },
      { id: 'b04', type: 'transform', question: '次の動詞を三単現のsをつけた形に変えなさい。\nhave', answer: 'has', hint: 'haveは例外でhasになります。', explanation: 'have → has（例外！）' },
      { id: 'b05', type: 'transform', question: '次の動詞を三単現のsをつけた形に変えなさい。\ngo', answer: 'goes', hint: 'oで終わる動詞はesをつけます。', explanation: 'go → goes（o→oes）' },
      { id: 'b06', type: 'transform', question: '次の動詞を三単現のsをつけた形に変えなさい。\nwash', answer: 'washes', hint: 'shで終わる動詞はesをつけます。', explanation: 'wash → washes（sh→es）' },
      { id: 'b07', type: 'transform', question: '次の動詞を三単現のsをつけた形に変えなさい。\nteach', answer: 'teaches', hint: 'chで終わる動詞はesをつけます。', explanation: 'teach → teaches（ch→es）' },
      { id: 'b08', type: 'transform', question: '次の動詞を三単現のsをつけた形に変えなさい。\ncry', answer: 'cries', hint: '子音字+yで終わる動詞は、y→iesです。', explanation: 'cry → cries（y→ies）' },
      { id: 'b09', type: 'transform', question: '次の動詞を三単現のsをつけた形に変えなさい。\ndo', answer: 'does', hint: 'doは特殊でdoesになります。', explanation: 'do → does（特殊変化）' },
      { id: 'b10', type: 'transform', question: '次の動詞を三単現のsをつけた形に変えなさい。\nfly', answer: 'flies', hint: '子音字+yで終わる動詞は、y→iesです。', explanation: 'fly → flies（y→ies）' },
      { id: 'b11', type: 'choice', question: '（　）に入る正しい語を選びなさい。\nMy sister ( ) the piano every day.', choices: ['play', 'plays', 'playing', 'played'], answer: 1, hint: 'my sisterは三単現です。', explanation: 'My sisterは三単現なのでplay→plays。' },
      { id: 'b12', type: 'choice', question: '（　）に入る正しい語を選びなさい。\nTom ( ) his homework after school.', choices: ['do', 'does', 'doing', 'is do'], answer: 1, hint: 'doは特殊変化です。', explanation: 'Tomは三単現なのでdo→does。' },
      { id: 'b13', type: 'choice', question: '（　）に入る正しい語を選びなさい。\nAmi ( ) to school by bike.', choices: ['go', 'goes', 'going', 'is go'], answer: 1, hint: 'goはoで終わるのでesをつけます。', explanation: 'Amiは三単現なのでgo→goes。' },
      { id: 'b14', type: 'choice', question: '（　）に入る正しい語を選びなさい。\nKen ( ) a dog.', choices: ['have', 'has', 'having', 'is have'], answer: 1, hint: 'haveはhasになります。', explanation: 'Kenは三単現なのでhave→has。' },
      { id: 'b15', type: 'choice', question: '（　）に入る正しい語を選びなさい。\nShe ( ) math at this school.', choices: ['teach', 'teaches', 'teaching', 'taught'], answer: 1, hint: 'teachはchで終わります。', explanation: 'Sheは三単現なのでteach→teaches。' },
      { id: 'b16', type: 'sort', question: '並び替えて正しい英文を作りなさい。', words: ['cats', 'She', 'two', 'has'], answer: 'She has two cats.', hint: 'Sheが主語。haveはhasに。', explanation: 'She has two cats.（have→has）' },
      { id: 'b17', type: 'sort', question: '並び替えて正しい英文を作りなさい。', words: ['every', 'He', 'English', 'studies', 'day'], answer: 'He studies English every day.', hint: 'studyはstudiesになります。', explanation: 'He studies English every day.（study→studies）' },
      { id: 'b18', type: 'sort', question: '並び替えて正しい英文を作りなさい。', words: ['piano', 'teaches', 'the', 'Ms. Sato'], answer: 'Ms. Sato teaches the piano.', hint: 'teachはteachesになります。', explanation: 'Ms. Sato teaches the piano.（teach→teaches）' },
      { id: 'b19', type: 'mistake', question: '次の英文の間違いを見つけて正しく直しなさい。\nShe play the guitar.', wrongWord: 'play', answer: 'plays', explanation: 'Sheは三単現なのでplay→plays。' },
      { id: 'b20', type: 'mistake', question: '次の英文の間違いを見つけて正しく直しなさい。\nHe studys math every night.', wrongWord: 'studys', answer: 'studies', explanation: 'study→studies（×studys ○studies）' }
    ],
    advancedQuestions: [
      { id: 'a01', type: 'writing', question: '次の日本文を英語にしなさい。\n「ケンは毎朝、朝食を食べます。」', answer: 'Ken eats breakfast every morning.', hint: 'eatはeatsになります。', explanation: 'eat→eats（+s）' },
      { id: 'a02', type: 'writing', question: '次の日本文を英語にしなさい。\n「彼女は日曜日にテニスをします。」', answer: 'She plays tennis on Sundays.', hint: 'playはplaysになります。', explanation: 'play→plays' },
      { id: 'a03', type: 'writing', question: '次の日本文を英語にしなさい。\n「田中先生は数学を教えます。」', answer: 'Mr. Tanaka teaches math.', hint: 'teachはchで終わります。', explanation: 'teach→teaches（ch→es）' },
      { id: 'a04', type: 'writing', question: '次の日本文を英語にしなさい。\n「私の母は毎日、料理を作ります。」', answer: 'My mother cooks every day.', hint: 'cookはcooksになります。', explanation: 'cook→cooks（+s）' },
      { id: 'a05', type: 'writing', question: '次の日本文を英語にしなさい。\n「私の兄は音楽を聴きます。」', answer: 'My brother listens to music.', hint: 'listenはlistensになります。', explanation: 'listen→listens（+s）' },
      { id: 'a06', type: 'mistake', question: '次の英文の間違いを見つけて正しく直しなさい。\nShe go to school by bike.', wrongWord: 'go', answer: 'goes', explanation: 'go→goes（oで終わるのでes）' },
      { id: 'a07', type: 'mistake', question: '次の英文の間違いを見つけて正しく直しなさい。\nHe have two sisters.', wrongWord: 'have', answer: 'has', explanation: 'have→has（例外）' },
      { id: 'a08', type: 'rewrite', question: 'I → He に変えて書き直しなさい。\nI like music.', placeholder: 'He ...', answer: 'He likes music.', hint: '主語が変わると動詞も変わります。', explanation: 'I→Heにすると、like→likesにしなければなりません。' },
      { id: 'a09', type: 'rewrite', question: 'We → She に変えて書き直しなさい。\nWe play soccer.', placeholder: 'She ...', answer: 'She plays soccer.', hint: '三単現になるので動詞にsをつけます。', explanation: 'We→Sheにすると、play→playsになります。' },
      { id: 'a10', type: 'writing', question: '次の日本文を英語にしなさい。\n「ユキは毎晩、日記を書きます。」', answer: 'Yuki writes a diary every night.', hint: 'writeはwritesになります。', explanation: 'write→writes（+s）' }
    ],
    testQuestions: [
      { id: 't01', type: 'transform', points: 4, question: '次の動詞を三単現のsをつけた形に変えなさい。\nlive', answer: 'lives', explanation: 'live→lives（+s）' },
      { id: 't02', type: 'transform', points: 4, question: '次の動詞を三単現のsをつけた形に変えなさい。\nwash', answer: 'washes', explanation: 'wash→washes（shで終わるのでes）' },
      { id: 't03', type: 'transform', points: 4, question: '次の動詞を三単現のsをつけた形に変えなさい。\ncry', answer: 'cries', explanation: 'cry→cries（子音字y→ies）' },
      { id: 't04', type: 'transform', points: 4, question: '次の動詞を三単現のsをつけた形に変えなさい。\nhave', answer: 'has', explanation: 'have→has（例外！）' },
      { id: 't05', type: 'choice', points: 4, question: '（　）に入る正しい語を選びなさい。\nYuki ( ) English very much.', choices: ['like', 'likes', 'liked', 'is like'], answer: 1, explanation: 'Yukiは三単現なのでlike→likes。' },
      { id: 't06', type: 'choice', points: 4, question: '（　）に入る正しい語を選びなさい。\nMy brother ( ) soccer after school.', choices: ['play', 'plays', 'playing', 'is plays'], answer: 1, explanation: 'My brotherは三単現なのでplay→plays。' },
      { id: 't07', type: 'sort', points: 5, question: '並び替えて正しい文を作りなさい。', words: ['the', 'teaches', 'Ms. Sato', 'piano'], answer: 'Ms. Sato teaches the piano.', explanation: 'Ms. Sato teaches the piano.（teach→teaches）' },
      { id: 't08', type: 'sort', points: 5, question: '並び替えて正しい文を作りなさい。', words: ['a', 'has', 'Ken', 'sister'], answer: 'Ken has a sister.', explanation: 'Ken has a sister.（have→has）' },
      { id: 't09', type: 'mistake', points: 5, question: '次の文の間違いを1つ見つけて正しく直しなさい。\nHe studys math every night.', wrongWord: 'studys', answer: 'studies', explanation: 'study→studies（×studys ○studies）' },
      { id: 't10', type: 'mistake', points: 5, question: '次の文の間違いを1つ見つけて正しく直しなさい。\nShe have a dog.', wrongWord: 'have', answer: 'has', explanation: 'have→has（例外）' },
      { id: 't11', type: 'writing', points: 6, question: '次の日本文を英語にしなさい。\n「私の父は車を持っています。」', answer: 'My father has a car.', hint: 'haveはhasになります。', explanation: 'My father has a car.（have→has）' },
      { id: 't12', type: 'writing', points: 6, question: '次の日本文を英語にしなさい。\n「エミは放課後に音楽を聴きます。」', answer: 'Emi listens to music after school.', hint: 'listenはlistensになります。', explanation: 'Emi listens to music after school.（listen→listens）' },
      { id: 't13', type: 'writing', points: 4, question: '次の日本文を英語にしなさい。\n「私の姉は毎朝、日本語を勉強します。」', answer: 'My sister studies Japanese every morning.', hint: 'studyはstudiesになります。', explanation: 'My sister studies Japanese every morning.（study→studies）' }
    ]
  },
  'b01': {
    unitInfo: {
      id: 'b01',
      title: 'be動詞（am / is / are）',
      grade: 1,
      difficulty: 2,
      totalQuestions: 35,
      estimatedMinutes: 25,
      goal: '主語に応じてam/is/areを使い分けられるようになる',
      description: 'be動詞の基本をマスターしよう'
    },
    explanation: {
      title: 'be動詞とは？',
      intro: '「〜は・・・です」や「〜は（場所）にいます」という文を作るとき、be動詞を使います。主語によって使う形が変わります。',
      rules: [
        { pattern: 'I', rule: 'am', examples: ['I am Ken.', 'I am a student.'] },
        { pattern: 'He / She / It / 単数の名詞', rule: 'is', examples: ['He is tall.', 'She is my teacher.', 'It is a cat.'] },
        { pattern: 'You / We / They / 複数の名詞', rule: 'are', examples: ['You are kind.', 'We are friends.', 'They are students.'] }
      ],
      commonMistakes: [
        { wrong: 'I is a student.', correct: 'I am a student.', tip: 'Iのあとはam！' },
        { wrong: 'She are tall.', correct: 'She is tall.', tip: 'She/He/Itのあとはis！' },
        { wrong: 'They is happy.', correct: 'They are happy.', tip: 'They/We/Youのあとはare！' }
      ]
    },
    quickCheck: [
      { id: 'qc01', type: 'choice', question: '「私は中学生です」を英語にすると？', choices: ['I am a junior high school student.', 'I is a junior high school student.', 'I are a junior high school student.', 'I be a junior high school student.'], answer: 0, explanation: 'Iのあとはam！ I am a junior high school student.' },
      { id: 'qc02', type: 'choice', question: '「彼女は背が高い」の正しい英文は？', choices: ['She am tall.', 'She is tall.', 'She are tall.', 'She be tall.'], answer: 1, explanation: 'She/He/Itのあとはis！ She is tall.' }
    ],
    basicQuestions: [
      { id: 'b01', type: 'choice', question: '（　）に入る正しい語を選びなさい。\nI ( ) Taro.', choices: ['am', 'is', 'are', 'be'], answer: 0, hint: 'Iのあとはam！', explanation: 'I am Taro.' },
      { id: 'b02', type: 'choice', question: '（　）に入る正しい語を選びなさい。\nShe ( ) my mother.', choices: ['am', 'is', 'are', 'be'], answer: 1, hint: 'She/He/Itのあとはis！', explanation: 'She is my mother.' },
      { id: 'b03', type: 'choice', question: '（　）に入る正しい語を選びなさい。\nYou ( ) kind.', choices: ['am', 'is', 'are', 'be'], answer: 2, hint: 'You/We/Theyのあとはare！', explanation: 'You are kind.' },
      { id: 'b04', type: 'choice', question: '（　）に入る正しい語を選びなさい。\nWe ( ) friends.', choices: ['am', 'is', 'are', 'be'], answer: 2, hint: 'We/They/Youのあとはare！', explanation: 'We are friends.' },
      { id: 'b05', type: 'choice', question: '（　）に入る正しい語を選びなさい。\nHe ( ) a tennis player.', choices: ['am', 'is', 'are', 'be'], answer: 1, hint: 'He/She/Itのあとはis！', explanation: 'He is a tennis player.' },
      { id: 'b06', type: 'choice', question: '（　）に入る正しい語を選びなさい。\nThey ( ) junior high school students.', choices: ['am', 'is', 'are', 'be'], answer: 2, hint: 'They/We/Youのあとはare！', explanation: 'They are junior high school students.' },
      { id: 'b07', type: 'choice', question: '（　）に入る正しい語を選びなさい。\nIt ( ) a big dog.', choices: ['am', 'is', 'are', 'be'], answer: 1, hint: 'It/He/Sheのあとはis！', explanation: 'It is a big dog.' },
      { id: 'b08', type: 'choice', question: '（　）に入る正しい語を選びなさい。\nMs. Sato ( ) our English teacher.', choices: ['am', 'is', 'are', 'be'], answer: 1, hint: '単数名詞のあとはis！', explanation: 'Ms. Sato is our English teacher.' },
      { id: 'b09', type: 'sort', question: '並び替えて正しい英文を作りなさい。', words: ['She', 'is', 'a', 'teacher'], answer: 'She is a teacher.', hint: 'Sheが主語。', explanation: 'She is a teacher.' },
      { id: 'b10', type: 'sort', question: '並び替えて正しい英文を作りなさい。', words: ['are', 'We', 'good', 'friends'], answer: 'We are good friends.', hint: 'Weが主語。', explanation: 'We are good friends.' },
      { id: 'b11', type: 'sort', question: '並び替えて正しい英文を作りなさい。', words: ['is', 'tall', 'Ken'], answer: 'Ken is tall.', hint: 'Kenが主語。', explanation: 'Ken is tall.' },
      { id: 'b12', type: 'sort', question: '並び替えて正しい英文を作りなさい。', words: ['am', 'Yuki', 'I', 'not'], answer: 'I am not Yuki.', hint: '否定文。', explanation: 'I am not Yuki.' },
      { id: 'b13', type: 'mistake', question: '次の英文の間違いを見つけて正しく直しなさい。\nI is Ken.', wrongWord: 'is', answer: 'am', explanation: 'Iのあとはam！ I am Ken.' },
      { id: 'b14', type: 'mistake', question: '次の英文の間違いを見つけて正しく直しなさい。\nShe are my sister.', wrongWord: 'are', answer: 'is', explanation: 'She/He/Itのあとはis！ She is my sister.' },
      { id: 'b15', type: 'mistake', question: '次の英文の間違いを見つけて正しく直しなさい。\nThey is students.', wrongWord: 'is', answer: 'are', explanation: 'They/We/Youのあとはare！ They are students.' },
      { id: 'b16', type: 'mistake', question: '次の英文の間違いを見つけて正しく直しなさい。\nHe am happy.', wrongWord: 'am', answer: 'is', explanation: 'He/She/Itのあとはis！ He is happy.' },
      { id: 'b17', type: 'transform', question: 'am の否定形を答えなさい。', answer: 'am not', hint: '「〜ではありません」', explanation: 'am not / I\'m not' },
      { id: 'b18', type: 'transform', question: 'is の否定形を答えなさい。', answer: 'is not', hint: 'isn\'t でもOK', explanation: 'is not / isn\'t' },
      { id: 'b19', type: 'transform', question: 'are の否定形を答えなさい。', answer: 'are not', hint: 'aren\'t でもOK', explanation: 'are not / aren\'t' },
      { id: 'b20', type: 'transform', question: 'is を疑問文の最初に置いて「彼は...ですか？」という文を作りなさい。', answer: 'Is he', hint: 'Is + 主語', explanation: 'Is he ...?' }
    ],
    advancedQuestions: [
      { id: 'a01', type: 'writing', question: '次の日本文を英語にしなさい。\n「私は佐藤ユキです。」', answer: 'I am Sato Yuki.', hint: 'Iのあとはam', explanation: 'I am Sato Yuki.' },
      { id: 'a02', type: 'writing', question: '次の日本文を英語にしなさい。\n「ケンは野球選手です。」', answer: 'Ken is a baseball player.', hint: 'Kenのあとはis', explanation: 'Ken is a baseball player.' },
      { id: 'a03', type: 'writing', question: '次の日本文を英語にしなさい。\n「私たちは中学1年生です。」', answer: 'We are first-year junior high school students.', hint: 'Weのあとはare', explanation: 'We are first-year junior high school students.' },
      { id: 'a04', type: 'writing', question: '次の日本文を英語にしなさい。\n「あれは私の学校です。」', answer: 'That is my school.', hint: 'That（単数）のあとはis', explanation: 'That is my school.' },
      { id: 'a05', type: 'writing', question: '次の日本文を英語にしなさい。\n「彼らは私の友達です。」', answer: 'They are my friends.', hint: 'Theyのあとはare', explanation: 'They are my friends.' },
      { id: 'a06', type: 'rewrite', question: 'He is tall. を否定文に変えなさい。', placeholder: 'He ...', answer: 'He is not tall.', hint: 'is not または isn\'t', explanation: 'He is not tall. / He isn\'t tall.' },
      { id: 'a07', type: 'rewrite', question: 'She is a singer. を疑問文に変えなさい。', placeholder: 'Is ...?', answer: 'Is she a singer?', hint: 'Is + 主語 + ...?', explanation: 'Is she a singer?' },
      { id: 'a08', type: 'mistake', question: '次の英文の間違いを1つ見つけて正しく直しなさい。\nI are a teacher.', wrongWord: 'are', answer: 'am', explanation: 'Iのあとはam！ I am a teacher.' }
    ],
    testQuestions: [
      { id: 't01', type: 'transform', points: 4, question: 'You are students. の「You」を「I」に変えて書き直しなさい。', answer: 'I am a student.', explanation: 'You are → I am（1人になるのでa student）' },
      { id: 't02', type: 'transform', points: 4, question: 'They are tall. の「are」を否定形に変えなさい。', answer: 'are not', explanation: 'are not / aren\'t' },
      { id: 't03', type: 'choice', points: 4, question: '「私は学生です」を英語にすると？', choices: ['I is a student.', 'I am a student.', 'I are a student.', 'I be a student.'], answer: 1, explanation: 'I am a student.' },
      { id: 't04', type: 'choice', points: 4, question: '「彼は背が高い」を英語にすると？', choices: ['He am tall.', 'He is tall.', 'He are tall.', 'He be tall.'], answer: 1, explanation: 'He is tall.' },
      { id: 't05', type: 'choice', points: 4, question: '「私たちは友達です」を英語にすると？', choices: ['We am friends.', 'We is friends.', 'We are friends.', 'We be friends.'], answer: 2, explanation: 'We are friends.' },
      { id: 't06', type: 'sort', points: 5, question: '並び替えて正しい文を作りなさい。', words: ['is', 'Yuki', 'a', 'student'], answer: 'Yuki is a student.', explanation: 'Yuki is a student.' },
      { id: 't07', type: 'sort', points: 5, question: '並び替えて正しい文を作りなさい。', words: ['are', 'kind', 'They'], answer: 'They are kind.', explanation: 'They are kind.' },
      { id: 't08', type: 'mistake', points: 5, question: '次の英文の間違いを見つけて正しく直しなさい。\nShe am a teacher.', wrongWord: 'am', answer: 'is', explanation: 'She のあとは is ! She is a teacher.' },
      { id: 't09', type: 'writing', points: 6, question: '次の日本文を英語にしなさい。\n「これは私のペンです。」', answer: 'This is my pen.', hint: 'This は単数なので is', explanation: 'This is my pen.' },
      { id: 't10', type: 'writing', points: 6, question: '次の日本文を英語にしなさい。\n「あなたは何歳ですか？」', answer: 'How old are you?', hint: 'How old疑問文', explanation: 'How old are you?' }
    ]
  },
  'g01': {
    unitInfo: {
      id: 'g01',
      title: '一般動詞',
      grade: 1,
      difficulty: 3,
      totalQuestions: 35,
      estimatedMinutes: 30,
      goal: '一般動詞の肯定文・否定文・疑問文を使い分けられるようになる',
      description: '一般動詞の基本をマスターしよう'
    },
    explanation: {
      title: '一般動詞とは？',
      intro: '「〜する」「〜が好きだ」などの動作や状態を表す動詞を「一般動詞」と言います。be動詞（am/is/are）以外の動詞がすべて一般動詞です。',
      rules: [
        { pattern: '肯定文（〜します）', rule: '主語 + 動詞 + ...', examples: ['I play soccer.', 'She studies English.（三単現のs）'] },
        { pattern: '否定文（〜しません）', rule: '主語 + do not / does not + 動詞の原形', examples: ['I don\'t play soccer.', 'She doesn\'t study English.'] },
        { pattern: '疑問文（〜しますか？）', rule: 'Do / Does + 主語 + 動詞の原形?', examples: ['Do you play soccer?', 'Does she study English?'] },
        { pattern: '答え方', rule: 'Yes, 主語 + do/does. / No, 主語 + don\'t/doesn\'t.', examples: ['Yes, I do.', 'No, she doesn\'t.'] }
      ],
      commonMistakes: [
        { wrong: 'I don\'t likes music.', correct: 'I don\'t like music.', tip: 'do not のあとは動詞の原形！likesはNG' },
        { wrong: 'Does she plays tennis?', correct: 'Does she play tennis?', tip: 'does のあとは動詞の原形！playsはNG' },
        { wrong: 'Do she study?', correct: 'Does she study?', tip: 'She/He/It には does を使う！' }
      ]
    },
    quickCheck: [
      { id: 'qc01', type: 'choice', question: '「私は音楽が好きではありません」を英語にすると？', choices: ['I don\'t like music.', 'I doesn\'t like music.', 'I don\'t likes music.', 'I am not like music.'], answer: 0, explanation: 'don\'t（do not）のあとは動詞の原形！I don\'t like music.' },
      { id: 'qc02', type: 'choice', question: '「彼女はテニスをしますか？」の正しい英文は？', choices: ['Do she play tennis?', 'Does she play tennis?', 'Does she plays tennis?', 'Is she play tennis?'], answer: 1, explanation: 'She/He/It には Does を使い、動詞は原形！Does she play tennis?' }
    ],
    basicQuestions: [
      { id: 'b01', type: 'choice', question: '（　）に入る正しい語を選びなさい。\nI don\'t ( ) soccer.', choices: ['play', 'plays', 'playing', 'played'], answer: 0, hint: 'don\'t のあとは動詞の原形！', explanation: 'I don\'t play soccer.' },
      { id: 'b02', type: 'choice', question: '（　）に入る正しい語を選びなさい。\nShe ( ) ( ) music.', choices: ['doesn\'t', 'like', 'likes', 'doesn\'t likes'], answer: 0, hint: 'She は does + 原形', explanation: 'She doesn\'t like music.' },
      { id: 'b03', type: 'choice', question: '（　）に入る正しい語を選びなさい。\nWe don\'t ( ) lunch here.', choices: ['eat', 'eats', 'eating', 'ate'], answer: 0, hint: 'don\'t のあとは動詞の原形！', explanation: 'We don\'t eat lunch here.' },
      { id: 'b04', type: 'choice', question: '（　）に入る正しい語を選びなさい。\nHe ( ) ( ) to school by bike.', choices: ['doesn\'t', 'go', 'goes', 'doesn\'t goes'], answer: 0, hint: 'He は does not + 原形', explanation: 'He doesn\'t go to school by bike.' },
      { id: 'b05', type: 'choice', question: '（　）に入る正しい語を選びなさい。\nI don\'t ( ) English.', choices: ['speak', 'speaks', 'speaking', 'spoke'], answer: 0, hint: 'I は do not + 原形', explanation: 'I don\'t speak English.' },
      { id: 'b06', type: 'choice', question: '（　）に入る正しい語を選びなさい。\nThey ( ) ( ) here.', choices: ['don\'t', 'live', 'lives', 'don\'t lives'], answer: 0, hint: 'They は do not + 原形', explanation: 'They don\'t live here.' },
      { id: 'b07', type: 'choice', question: '（　）に入る正しい語を選びなさい。\nShe ( ) ( ) a car.', choices: ['doesn\'t', 'have', 'has', 'doesn\'t has'], answer: 0, hint: 'She は does not + 原形', explanation: 'She doesn\'t have a car.' },
      { id: 'b08', type: 'choice', question: '（　）に入る正しい語を選びなさい。\nMy father ( ) ( ) this movie.', choices: ['doesn\'t', 'watch', 'watches', 'doesn\'t watches'], answer: 0, hint: 'does not + 原形', explanation: 'My father doesn\'t watch this movie.' },
      { id: 'b09', type: 'choice', question: '（　）に入る正しい語を選びなさい。\n( ) you play tennis?', choices: ['Do', 'Does', 'Are', 'Is'], answer: 0, hint: 'You は Do', explanation: 'Do you play tennis?' },
      { id: 'b10', type: 'choice', question: '（　）に入る正しい語を選びなさい。\n( ) she like music?', choices: ['Do', 'Does', 'Are', 'Is'], answer: 1, hint: 'She は Does', explanation: 'Does she like music?' },
      { id: 'b11', type: 'choice', question: '（　）に入る正しい語を選びなさい。\n( ) they study English?', choices: ['Do', 'Does', 'Are', 'Is'], answer: 0, hint: 'They は Do', explanation: 'Do they study English?' },
      { id: 'b12', type: 'choice', question: '（　）に入る正しい語を選びなさい。\n( ) he eat breakfast every day?', choices: ['Do', 'Does', 'Are', 'Is'], answer: 1, hint: 'He は Does', explanation: 'Does he eat breakfast every day?' },
      { id: 'b13', type: 'sort', question: '並び替えて正しい英文を作りなさい。', words: ['don\'t', 'I', 'like', 'cats'], answer: 'I don\'t like cats.', hint: 'I + don\'t + 原形', explanation: 'I don\'t like cats.' },
      { id: 'b14', type: 'sort', question: '並び替えて正しい英文を作りなさい。', words: ['soccer', 'Does', 'play', 'Ken?'], answer: 'Does Ken play soccer?', hint: 'Does + 主語 + 原形?', explanation: 'Does Ken play soccer?' },
      { id: 'b15', type: 'sort', question: '並び替えて正しい英文を作りなさい。', words: ['she', 'doesn\'t', 'music', 'like'], answer: 'She doesn\'t like music.', hint: 'She + doesn\'t + 原形', explanation: 'She doesn\'t like music.' },
      { id: 'b16', type: 'sort', question: '並び替えて正しい英文を作りなさい。', words: ['you', 'Do', 'English', 'speak?'], answer: 'Do you speak English?', hint: 'Do + 主語 + 原形?', explanation: 'Do you speak English?' },
      { id: 'b17', type: 'mistake', question: '次の英文の間違いを見つけて正しく直しなさい。\nShe don\'t play tennis.', wrongWord: 'don\'t', answer: 'doesn\'t', explanation: 'She は don\'t ではなく doesn\'t ! She doesn\'t play tennis.' },
      { id: 'b18', type: 'mistake', question: '次の英文の間違いを見つけて正しく直しなさい。\nDoes she plays music?', wrongWord: 'plays', answer: 'play', explanation: 'Does のあとは動詞の原形！Does she play music?' },
      { id: 'b19', type: 'choice', question: 'Do you play soccer? に Yes で答えるには？', choices: ['Yes, I do.', 'Yes, I play.', 'Yes, I\'m do.', 'Yes, you do.'], answer: 0, hint: 'Yes, 主語 + do/does.', explanation: 'Yes, I do.' },
      { id: 'b20', type: 'choice', question: 'Does she have a dog? に No で答えるには？', choices: ['No, she do.', 'No, she doesn\'t.', 'No, she don\'t.', 'No, I didn\'t.'], answer: 1, hint: 'No, 主語 + don\'t/doesn\'t.', explanation: 'No, she doesn\'t.' }
    ],
    advancedQuestions: [
      { id: 'a01', type: 'writing', question: '次の日本文を英語にしなさい。\n「私はサッカーをしません。」', answer: 'I don\'t play soccer.', hint: 'do not play', explanation: 'I don\'t play soccer.' },
      { id: 'a02', type: 'writing', question: '次の日本文を英語にしなさい。\n「田中先生は英語を教えますか？」', answer: 'Does Mr. Tanaka teach English?', hint: 'Does + 主語 + 動詞の原形?', explanation: 'Does Mr. Tanaka teach English?' },
      { id: 'a03', type: 'writing', question: '次の日本文を英語にしなさい。\n「はい、教えます。」', answer: 'Yes, he does.', hint: 'Yes, 主語 + does.', explanation: 'Yes, he does.' },
      { id: 'a04', type: 'writing', question: '次の日本文を英語にしなさい。\n「ユキは音楽を聴きますか？ いいえ、聴きません。」', answer: 'Does Yuki listen to music? No, she doesn\'t.', hint: 'Does ... ? No, she doesn\'t.', explanation: 'Does Yuki listen to music? No, she doesn\'t.' },
      { id: 'a05', type: 'writing', question: '次の日本文を英語にしなさい。\n「私たちはここに住んでいません。」', answer: 'We don\'t live here.', hint: 'do not live', explanation: 'We don\'t live here.' },
      { id: 'a06', type: 'rewrite', question: 'I play soccer. を否定文に変えなさい。', placeholder: 'I ...', answer: 'I don\'t play soccer.', hint: 'do not + 原形', explanation: 'I don\'t play soccer.' },
      { id: 'a07', type: 'rewrite', question: 'She likes music. を疑問文に変えなさい。', placeholder: 'Does ...?', answer: 'Does she like music?', hint: 'Does + 主語 + 原形?', explanation: 'Does she like music?' },
      { id: 'a08', type: 'rewrite', question: 'Do they study English? に Yes で答えなさい。', placeholder: 'Yes, ...', answer: 'Yes, they do.', hint: 'Yes, 主語 + do.', explanation: 'Yes, they do.' }
    ],
    testQuestions: [
      { id: 't01', type: 'choice', points: 4, question: 'I ( ) tennis after school.', choices: ['play', 'plays', 'don\'t play', 'doesn\'t play'], answer: 0, explanation: 'I + 動詞の原形' },
      { id: 't02', type: 'choice', points: 4, question: 'She ( ) music very much.', choices: ['like', 'likes', 'don\'t like', 'doesn\'t like'], answer: 1, explanation: 'She は三単現なので likes' },
      { id: 't03', type: 'choice', points: 4, question: 'Ken ( ) a dog.', choices: ['have', 'has', 'don\'t have', 'doesn\'t have'], answer: 1, explanation: 'Ken は三単現なので has' },
      { id: 't04', type: 'choice', points: 4, question: '「私は英語を話しません」は？', choices: ['I don\'t speak English.', 'I speak English.', 'I doesn\'t speak English.', 'I don\'t speaks English.'], answer: 0, explanation: 'I + don\'t + 動詞の原形' },
      { id: 't05', type: 'choice', points: 4, question: '「彼は毎日、宿題をしますか？」は？', choices: ['Do he do his homework?', 'Does he does his homework?', 'Does he do his homework?', 'Does he do his homeworks?'], answer: 2, explanation: 'Does he do his homework?' },
      { id: 't06', type: 'sort', points: 5, question: '並び替えて正しい文を作りなさい。', words: ['don\'t', 'like', 'I', 'apples'], answer: 'I don\'t like apples.', explanation: 'I don\'t like apples.' },
      { id: 't07', type: 'sort', points: 5, question: '並び替えて正しい文を作りなさい。', words: ['Does', 'tennis', 'Yuki', 'play?'], answer: 'Does Yuki play tennis?', explanation: 'Does Yuki play tennis?' },
      { id: 't08', type: 'mistake', points: 5, question: '次の英文の間違いを見つけて正しく直しなさい。\nHe don\'t like pizza.', wrongWord: 'don\'t', answer: 'doesn\'t', explanation: 'He は doesn\'t を使う' },
      { id: 't09', type: 'writing', points: 6, question: '次の日本文を英語にしなさい。\n「あなたはサッカーをしますか？」', answer: 'Do you play soccer?', hint: 'Do + you + 動詞の原形?', explanation: 'Do you play soccer?' },
      { id: 't10', type: 'writing', points: 6, question: '次の日本文を英語にしなさい。\n「いいえ、私はしません。」', answer: 'No, I don\'t.', hint: 'No, I + don\'t.', explanation: 'No, I don\'t.' },
      { id: 't11', type: 'choice', points: 5, question: 'Does she study English? の答えは？', choices: ['Yes, she do.', 'Yes, she does.', 'No, she do.', 'No, I doesn\'t.'], answer: 1, explanation: 'Yes, she does.' },
      { id: 't12', type: 'choice', points: 5, question: 'Do they like music? の答えは？', choices: ['Yes, they do.', 'Yes, they does.', 'No, they likes.', 'No, we don\'t.'], answer: 0, explanation: 'Yes, they do.' }
    ]
  }
};

/* === アプリ状態 === */
const state = {
  currentScreen: 'home',
  currentUnitId: 's01',
  quizMode: 'basic',
  currentQuestionIndex: 0,
  questions: [],
  answers: [],
  score: 0,
  earnedPoints: 0,   // テストで獲得した点数
  maxPoints: 0,      // テストの満点
  totalPoints: 0,    // 後方互換のため残す（未使用）
  selectedWords: [],
  isAnswered: false,
  questionHistory: [],
  learningRecord: {},
  currentTab: 'explanation'
};

/* === 初期化 === */
document.addEventListener('DOMContentLoaded', () => {
  console.log('アプリ初期化開始');
  loadLearningRecord();
  showScreen('home');
});

/* === 画面遷移 === */
function showScreen(screenName, unitId) {
  if (unitId) {
    state.currentUnitId = unitId;
  }

  const screens = document.querySelectorAll('.screen');
  screens.forEach(screen => screen.classList.remove('active'));

  const targetScreen = document.getElementById(`screen-${screenName}`);
  if (targetScreen) {
    targetScreen.classList.add('active');
    state.currentScreen = screenName;

    // 画面に応じた描画関数を呼ぶ
    switch(screenName) {
      case 'home':
        renderHome();
        break;
      case 'units':
        renderUnits();
        break;
      case 'unit-detail':
        renderUnitDetail();
        break;
      case 'work':
        renderQuestion();
        break;
      case 'question':
        renderQuestionForm();
        break;
      case 'question-history':
        renderQuestionHistory();
        break;
      case 'records':
        renderRecords();
        break;
      case 'parent':
        renderParent();
        break;
      case 'menu':
        renderMenu();
        break;
    }
  }
}

/* === ホーム画面の描画 === */
function renderHome() {
  const now = new Date();
  const hour = now.getHours();
  let greeting = '';
  if (hour < 12) {
    greeting = 'おはよう';
  } else if (hour < 18) {
    greeting = 'こんにちは';
  } else {
    greeting = 'こんばんは';
  }

  const today = formatDate(now);
  const todayRecord = state.learningRecord[today] || {};

  let streak = 0;
  let checkDate = new Date(now);
  for (let i = 0; i < 365; i++) {
    const dateStr = formatDate(checkDate);
    if (state.learningRecord[dateStr]) {
      streak++;
      checkDate.setDate(checkDate.getDate() - 1);
    } else {
      break;
    }
  }

  const html = `
    <div class="home-header">
      <h1>${greeting}！</h1>
      <p class="streak">連続学習：${streak}日目</p>
    </div>

    <div class="continue-card">
      <h3>続きから学ぶ</h3>
      <p>最後に学習した単元：${MATERIALS[state.currentUnitId].unitInfo.title}</p>
      <button onclick="showScreen('unit-detail', '${state.currentUnitId}')">続きから開始</button>
    </div>

    <div class="units-grid-home">
      ${['s01', 'b01', 'g01'].map(unitId => {
        const unit = MATERIALS[unitId];
        const record = todayRecord[unitId] || { questions: 0, correct: 0 };
        const progress = record.questions > 0 ? Math.round((record.correct / record.questions) * 100) : 0;
        return `
          <div class="unit-card" onclick="showScreen('unit-detail', '${unitId}')">
            <h3>${unit.unitInfo.title}</h3>
            <p>全${unit.unitInfo.totalQuestions}問</p>
            <div class="progress-bar">
              <div class="progress-fill" style="width: ${progress}%"></div>
            </div>
            <p class="progress-text">${record.questions > 0 ? `${record.correct}/${record.questions}問` : '未実施'}</p>
          </div>
        `;
      }).join('')}
    </div>

    <div class="quick-tips">
      <h3>質問バナー</h3>
      <p>各単元の「質問」ボタンをタップして、わからないところを質問できます。</p>
    </div>

    <div class="home-menu">
      <button onclick="showScreen('menu')">メニュー</button>
      <button onclick="showScreen('records')">学習記録</button>
    </div>
  `;

  const homeScreen = document.getElementById('screen-home');
  if (homeScreen) {
    homeScreen.innerHTML = html;
  }
}

/* === ユニット一覧の描画 === */
function renderUnits() {
  const now = new Date();
  const today = formatDate(now);
  const todayRecord = state.learningRecord[today] || {};

  const html = `
    <h1>学習単元を選ぼう</h1>

    <div class="units-grid">
      ${['s01', 'b01', 'g01'].map(unitId => {
        const unit = MATERIALS[unitId];
        const record = todayRecord[unitId] || { questions: 0, correct: 0 };
        const progress = record.questions > 0 ? Math.round((record.correct / record.questions) * 100) : 0;
        return `
          <div class="unit-card" onclick="showScreen('unit-detail', '${unitId}')">
            <h3>${unit.unitInfo.title}</h3>
            <p>${unit.unitInfo.description}</p>
            <p>全${unit.unitInfo.totalQuestions}問 | 難易度：${'★'.repeat(unit.unitInfo.difficulty)}</p>
            <div class="progress-bar">
              <div class="progress-fill" style="width: ${progress}%"></div>
            </div>
            <p class="progress-text">${record.questions > 0 ? `${record.correct}/${record.questions}問 (${progress}%)` : '未実施'}</p>
          </div>
        `;
      }).join('')}
    </div>

    <button onclick="showScreen('home')" style="margin-top: 20px; width: 100%;">ホームに戻る</button>
  `;

  const unitsScreen = document.getElementById('screen-units');
  if (unitsScreen) {
    unitsScreen.innerHTML = html;
  }
}

/* === ユニット詳細の描画 === */
function renderUnitDetail() {
  const unit = MATERIALS[state.currentUnitId];
  if (!unit) return;

  const tabs = ['explanation', 'quickCheck', 'basic', 'advanced', 'test'];

  let tabContent = '';

  if (state.currentTab === 'explanation') {
    tabContent = `
      <div class="explanation-content">
        <h2>${unit.explanation.title}</h2>
        <p>${unit.explanation.intro}</p>

        <h3>規則</h3>
        ${unit.explanation.rules.map(rule => `
          <div class="rule-box">
            <h4>${rule.pattern}</h4>
            <p><strong>→ ${rule.rule}</strong></p>
            <ul>
              ${rule.examples.map(ex => `<li>${ex}</li>`).join('')}
            </ul>
          </div>
        `).join('')}

        <h3>よくある間違い</h3>
        ${unit.explanation.commonMistakes.map(mistake => `
          <div class="mistake-box">
            <p class="wrong">✗ ${mistake.wrong}</p>
            <p class="correct">○ ${mistake.correct}</p>
            <p class="tip">💡 ${mistake.tip}</p>
          </div>
        `).join('')}
      </div>
    `;
  } else if (state.currentTab === 'quickCheck') {
    tabContent = `
      <div class="quiz-content">
        <h3>クイックチェック（${unit.quickCheck.length}問）</h3>
        <p>このテーマについて、すぐに理解できているか確認しましょう。</p>
        <button onclick="startQuiz('quickCheck', '${state.currentUnitId}')" class="btn-large">クイックチェックを開始</button>
      </div>
    `;
  } else if (state.currentTab === 'basic') {
    const basicCount = unit.basicQuestions.length;
    tabContent = `
      <div class="quiz-content">
        <h3>基本問題（${basicCount}問）</h3>
        <p>選択問題、穴埋め、並び替え、ミス発見など、様々な形式で基本を学びます。</p>
        <button onclick="startQuiz('basic', '${state.currentUnitId}')" class="btn-large">基本問題を開始</button>
      </div>
    `;
  } else if (state.currentTab === 'advanced') {
    const advCount = unit.advancedQuestions.length;
    tabContent = `
      <div class="quiz-content">
        <h3>応用問題（${advCount}問）</h3>
        <p>英作文や書き換え、複合的なミス発見など、より高度な問題に挑戦します。</p>
        <button onclick="startQuiz('advanced', '${state.currentUnitId}')" class="btn-large">応用問題を開始</button>
      </div>
    `;
  } else if (state.currentTab === 'test') {
    const testCount = unit.testQuestions.length;
    const totalPoints = unit.testQuestions.reduce((sum, q) => sum + (q.points || 0), 0);
    tabContent = `
      <div class="quiz-content">
        <h3>テスト（${testCount}問・${totalPoints}点満点）</h3>
        <p>学んだ内容の理解度を、本番同様の形式でテストします。</p>
        <button onclick="startQuiz('test', '${state.currentUnitId}')" class="btn-large">テストを開始</button>
      </div>
    `;
  }

  const html = `
    <h1>${unit.unitInfo.title}</h1>
    <p>${unit.unitInfo.description}</p>

    <div class="tabs">
      ${tabs.map(tab => {
        const labels = { explanation: '説明', quickCheck: 'クイック', basic: '基本', advanced: '応用', test: 'テスト' };
        return `
          <button class="tab-btn ${state.currentTab === tab ? 'active' : ''}" onclick="switchTab('${tab}', '${state.currentUnitId}')">
            ${labels[tab]}
          </button>
        `;
      }).join('')}
    </div>

    <div class="tab-content">
      ${tabContent}
    </div>

    <div class="detail-buttons">
      <button onclick="showScreen('units')">ユニット一覧に戻る</button>
      <button onclick="showScreen('menu')">メニュー</button>
    </div>
  `;

  const detailScreen = document.getElementById('screen-unit-detail');
  if (detailScreen) {
    detailScreen.innerHTML = html;
  }
}

function switchTab(tabName, unitId) {
  state.currentTab = tabName;
  state.currentUnitId = unitId;
  renderUnitDetail();
}

/* === クイズ開始 === */
function startQuiz(mode, unitId) {
  if (unitId) {
    state.currentUnitId = unitId;
  }

  const unit = MATERIALS[state.currentUnitId];
  if (!unit) return;

  state.quizMode = mode;
  state.currentQuestionIndex = 0;
  state.questions = [];
  state.answers = [];
  state.score = 0;
  state.earnedPoints = 0;
  state.maxPoints = 0;
  state.totalPoints = 0;
  state.selectedWords = [];
  state.isAnswered = false;
  state.questionHistory = [];

  if (mode === 'quickCheck') {
    state.questions = unit.quickCheck;
  } else if (mode === 'basic') {
    state.questions = unit.basicQuestions;
  } else if (mode === 'advanced') {
    state.questions = unit.advancedQuestions;
  } else if (mode === 'test') {
    state.questions = unit.testQuestions;
    state.maxPoints = unit.testQuestions.reduce((sum, q) => sum + (q.points || 0), 0);
  }

  showScreen('work');
}

/* === 問題画面の描画 === */
function renderQuestion() {
  if (state.currentQuestionIndex >= state.questions.length) {
    showResults();
    return;
  }

  const question = state.questions[state.currentQuestionIndex];
  const progress = state.currentQuestionIndex + 1;
  const total = state.questions.length;

  let questionContent = '';

  if (question.type === 'choice') {
    questionContent = `
      <div class="question-body">
        <p>${question.question}</p>
        <div class="choices">
          ${question.choices.map((choice, idx) => `
            <button class="choice-btn" onclick="selectAnswer(${idx}, '${question.id}')">
              ${String.fromCharCode(65 + idx)}. ${choice}
            </button>
          `).join('')}
        </div>
      </div>
    `;
  } else if (question.type === 'transform') {
    questionContent = `
      <div class="question-body">
        <p>${question.question}</p>
        <input type="text" id="answer-input" placeholder="答えを入力してください" onkeyup="checkAnswer(event, '${question.id}')">
        ${question.hint ? `<p class="hint">💡 ${question.hint}</p>` : ''}
      </div>
    `;
  } else if (question.type === 'sort') {
    questionContent = `
      <div class="question-body">
        <p>${question.question}</p>
        <p>${question.words.join(' / ')}</p>
        <input type="text" id="answer-input" placeholder="答えを入力してください" onkeyup="checkAnswer(event, '${question.id}')">
        ${question.hint ? `<p class="hint">💡 ${question.hint}</p>` : ''}
      </div>
    `;
  } else if (question.type === 'mistake') {
    questionContent = `
      <div class="question-body">
        <p>${question.question}</p>
        <input type="text" id="answer-input" placeholder="正しい形を入力してください" onkeyup="checkAnswer(event, '${question.id}')">
        ${question.hint ? `<p class="hint">💡 ${question.hint}</p>` : ''}
      </div>
    `;
  } else if (question.type === 'writing') {
    questionContent = `
      <div class="question-body">
        <p>${question.question}</p>
        <input type="text" id="answer-input" placeholder="答えを入力してください" onkeyup="checkAnswer(event, '${question.id}')">
        ${question.hint ? `<p class="hint">💡 ${question.hint}</p>` : ''}
      </div>
    `;
  } else if (question.type === 'rewrite') {
    questionContent = `
      <div class="question-body">
        <p>${question.question}</p>
        <p><strong>${question.placeholder}</strong></p>
        <input type="text" id="answer-input" placeholder="答えを入力してください" onkeyup="checkAnswer(event, '${question.id}')">
        ${question.hint ? `<p class="hint">💡 ${question.hint}</p>` : ''}
      </div>
    `;
  }

  const html = `
    <div class="quiz-header">
      <h2>${MATERIALS[state.currentUnitId].unitInfo.title}</h2>
      <div class="progress">問題 ${progress}/${total}</div>
      <div class="progress-bar">
        <div class="progress-fill" style="width: ${(progress / total) * 100}%"></div>
      </div>
    </div>

    ${questionContent}

    <div class="quiz-controls">
      <button onclick="goToPrevious()" ${state.currentQuestionIndex === 0 ? 'disabled' : ''}>前へ</button>
      <button onclick="goToNext()" ${!state.isAnswered ? 'disabled' : ''}>次へ</button>
      <button onclick="quitQuiz()">やめる</button>
    </div>

    ${state.isAnswered ? `
      <div class="explanation-box">
        <h4>解説</h4>
        <p>${question.explanation}</p>
      </div>
    ` : ''}
  `;

  const workScreen = document.getElementById('screen-work');
  if (workScreen) {
    workScreen.innerHTML = html;
    if (question.type === 'choice') {
      const selectedAnswer = state.answers[state.currentQuestionIndex];
      if (selectedAnswer !== undefined) {
        const choices = document.querySelectorAll('.choice-btn');
        choices[selectedAnswer].classList.add('selected');
      }
    }
  }
}

function selectAnswer(choiceIdx, questionId) {
  const question = state.questions[state.currentQuestionIndex];

  state.answers[state.currentQuestionIndex] = choiceIdx;

  const isCorrect = choiceIdx === question.answer;
  if (isCorrect) {
    state.score++;
    if (state.quizMode === 'test') {
      state.totalPoints -= (state.questions[state.currentQuestionIndex].points || 0);
    }
  }

  state.isAnswered = true;
  state.questionHistory.push({
    questionId: questionId,
    answer: question.choices[choiceIdx],
    correct: isCorrect,
    explanation: question.explanation
  });

  renderQuestion();
}

function checkAnswer(event, questionId) {
  if (event.key === 'Enter') {
    submitAnswer();
  }
}

function submitAnswer() {
  const question = state.questions[state.currentQuestionIndex];
  const input = document.getElementById('answer-input');
  if (!input) return;

  const userAnswer = input.value.trim().toLowerCase();
  const correctAnswer = question.answer.toLowerCase();

  const isCorrect = userAnswer === correctAnswer;

  if (isCorrect) {
    state.score++;
    if (state.quizMode === 'test') {
      state.earnedPoints += (question.points || 0);
    }
  }

  state.answers[state.currentQuestionIndex] = userAnswer;
  state.isAnswered = true;
  state.questionHistory.push({
    questionId: question.id,
    answer: userAnswer,
    correct: isCorrect,
    explanation: question.explanation
  });

  renderQuestion();
}

function goToNext() {
  if (!state.isAnswered) {
    alert('問題に答えてから進んでください');
    return;
  }

  state.currentQuestionIndex++;
  state.isAnswered = false;
  state.selectedWords = [];
  renderQuestion();
}

function goToPrevious() {
  if (state.currentQuestionIndex > 0) {
    state.currentQuestionIndex--;
    state.isAnswered = !!state.answers[state.currentQuestionIndex];
    renderQuestion();
  }
}

function quitQuiz() {
  if (confirm('クイズを終了しますか？')) {
    showScreen('unit-detail');
  }
}

/* === 結果画面 === */
function showResults() {
  const totalQuestions = state.questions.length;
  const correctCount = state.score;
  const percentage = Math.round((correctCount / totalQuestions) * 100);

  let comment = '';
  if (percentage === 100) {
    comment = 'パーフェクト！素晴らしい！';
  } else if (percentage >= 80) {
    comment = 'よくできています！';
  } else if (percentage >= 60) {
    comment = 'もう一度復習しましょう。';
  } else {
    comment = 'もっと練習が必要です。';
  }

  const wrongQuestions = state.questionHistory
    .map((h, idx) => h.correct ? null : state.questions[idx])
    .filter(q => q);

  const html = `
    <div class="results-container">
      <h1>結果発表</h1>

      <div class="results-score">
        <p class="big-score">${correctCount}/${totalQuestions}問正解</p>
        <p class="percentage">${percentage}%</p>
        <p class="comment">${comment}</p>
      </div>

      ${state.quizMode === 'test' ? `
        <div class="test-score">
          <p>テストスコア：<strong>${state.earnedPoints}</strong>／${state.maxPoints}点</p>
          <p style="font-size:0.85em;color:#64748b;">（${state.maxPoints > 0 ? Math.round((state.earnedPoints / state.maxPoints) * 100) : 0}%）</p>
        </div>
      ` : ''}

      ${wrongQuestions.length > 0 ? `
        <div class="wrong-questions">
          <h3>まちがえた問題を復習しよう</h3>
          <ul>
            ${wrongQuestions.map((q, idx) => `
              <li>
                <span style="font-weight:600;">問${idx + 1}）</span>
                ${q.question.split('\n').pop()}
                <span style="color:#EF4444;margin-left:4px;">→ 正解: ${q.answer}</span>
              </li>
            `).join('')}
          </ul>
        </div>
      ` : `<p style="color:#10B981;font-weight:600;text-align:center;margin:16px 0;">全問正解！完璧です🎉</p>`}

      <div class="results-buttons">
        <button onclick="startQuiz('${state.quizMode}', '${state.currentUnitId}')" class="btn-large">もう一度挑戦</button>
        <button onclick="showScreen('unit-detail', '${state.currentUnitId}')" class="btn-large">単元に戻る</button>
        <button onclick="showScreen('home')" class="btn-large">ホームに戻る</button>
      </div>
    </div>
  `;

  const workScreen = document.getElementById('screen-work');
  if (workScreen) {
    workScreen.innerHTML = html;
  }

  // 学習記録を保存
  saveQuizResult();
}

function saveQuizResult() {
  const now = new Date();
  const dateStr = formatDate(now);

  if (!state.learningRecord[dateStr]) {
    state.learningRecord[dateStr] = {};
  }

  const unitData = state.learningRecord[dateStr][state.currentUnitId] || { questions: 0, correct: 0, modes: [] };
  unitData.questions += state.questions.length;
  unitData.correct += state.score;
  if (!unitData.modes) unitData.modes = [];
  if (!unitData.modes.includes(state.quizMode)) {
    unitData.modes.push(state.quizMode);
  }

  state.learningRecord[dateStr][state.currentUnitId] = unitData;
  saveLearningRecord();
}

/* === 問題フォーム === */
function renderQuestionForm() {
  const html = `
    <h1>質問フォーム</h1>
    <p>わかりにくい問題について質問してください。</p>

    <form>
      <div class="form-group">
        <label>単元を選択してください</label>
        <select id="question-unit">
          <option value="s01">三単現のs</option>
          <option value="b01">be動詞（am / is / are）</option>
          <option value="g01">一般動詞</option>
        </select>
      </div>

      <div class="form-group">
        <label>問題番号</label>
        <input type="text" id="question-number" placeholder="例：b01, t05">
      </div>

      <div class="form-group">
        <label>質問内容</label>
        <textarea id="question-content" placeholder="質問内容を入力してください" rows="6"></textarea>
      </div>

      <div class="form-buttons">
        <button type="button" onclick="submitQuestion()">送信</button>
        <button type="button" onclick="showScreen('home')">キャンセル</button>
      </div>
    </form>
  `;

  const questionScreen = document.getElementById('screen-question');
  if (questionScreen) {
    questionScreen.innerHTML = html;
  }
}

function submitQuestion() {
  const unit = document.getElementById('question-unit').value;
  const number = document.getElementById('question-number').value;
  const content = document.getElementById('question-content').value;

  if (!number || !content) {
    alert('すべてのフィールドを入力してください');
    return;
  }

  alert('質問を送信しました。\nご回答までお待ちください。');
  showScreen('home');
}

/* === 質問履歴 === */
function renderQuestionHistory() {
  const html = `
    <h1>質問履歴</h1>
    <p>これまでの質問と回答が表示されます。</p>

    <div class="question-history-list">
      <p>質問履歴はまだありません。</p>
    </div>

    <button onclick="showScreen('home')" style="margin-top: 20px; width: 100%;">ホームに戻る</button>
  `;

  const historyScreen = document.getElementById('screen-question-history');
  if (historyScreen) {
    historyScreen.innerHTML = html;
  }
}

/* === 学習記録 === */
function renderRecords() {
  let tableHtml = '';

  const sortedDates = Object.keys(state.learningRecord).sort().reverse();

  if (sortedDates.length === 0) {
    tableHtml = '<p>学習記録がありません。</p>';
  } else {
    tableHtml = `
      <table class="records-table">
        <thead>
          <tr>
            <th>日付</th>
            <th>単元</th>
            <th>問題数</th>
            <th>正解数</th>
            <th>正答率</th>
          </tr>
        </thead>
        <tbody>
          ${sortedDates.map(date => {
            const dayRecord = state.learningRecord[date];
            return Object.keys(dayRecord).map(unitId => {
              const unit = MATERIALS[unitId];
              const data = dayRecord[unitId];
              const percentage = data.questions > 0 ? Math.round((data.correct / data.questions) * 100) : 0;
              return `
                <tr>
                  <td>${date}</td>
                  <td>${unit ? unit.unitInfo.title : unitId}</td>
                  <td>${data.questions}</td>
                  <td>${data.correct}</td>
                  <td>${percentage}%</td>
                </tr>
              `;
            }).join('');
          }).join('')}
        </tbody>
      </table>
    `;
  }

  const html = `
    <h1>学習記録</h1>
    <p>これまでの学習を記録しています。</p>

    ${tableHtml}

    <button onclick="clearRecords()" style="margin-top: 20px;">記録をクリア</button>
    <button onclick="showScreen('home')" style="margin-top: 10px; width: 100%;">ホームに戻る</button>
  `;

  const recordsScreen = document.getElementById('screen-records');
  if (recordsScreen) {
    recordsScreen.innerHTML = html;
  }
}

function clearRecords() {
  if (confirm('学習記録をすべて削除します。よろしいですか？')) {
    state.learningRecord = {};
    saveLearningRecord();
    renderRecords();
  }
}

/* === 保護者向けページ === */
function renderParent() {
  const html = `
    <h1>保護者向けページ</h1>

    <div class="parent-section">
      <h2>学習統計</h2>
      <p>お子さんの学習統計がここに表示されます。</p>

      <div class="stats-grid">
        <div class="stat-card">
          <h3>総学習時間</h3>
          <p class="stat-number">0時間</p>
        </div>
        <div class="stat-card">
          <h3>学習した単元</h3>
          <p class="stat-number">0単元</p>
        </div>
        <div class="stat-card">
          <h3>平均正答率</h3>
          <p class="stat-number">0%</p>
        </div>
      </div>
    </div>

    <div class="parent-section">
      <h2>サポート</h2>
      <p>ご不明な点やご質問があればお問い合わせください。</p>
      <button>お問い合わせ</button>
    </div>

    <button onclick="showScreen('home')" style="margin-top: 20px; width: 100%;">ホームに戻る</button>
  `;

  const parentScreen = document.getElementById('screen-parent');
  if (parentScreen) {
    parentScreen.innerHTML = html;
  }
}

/* === メニュー === */
function renderMenu() {
  const html = `
    <h1>メニュー</h1>

    <div class="menu-options">
      <button onclick="showScreen('home')" class="menu-btn">
        <span>🏠</span>
        <span>ホーム</span>
      </button>

      <button onclick="showScreen('units')" class="menu-btn">
        <span>📚</span>
        <span>学習単元</span>
      </button>

      <button onclick="showScreen('records')" class="menu-btn">
        <span>📊</span>
        <span>学習記録</span>
      </button>

      <button onclick="showScreen('question')" class="menu-btn">
        <span>❓</span>
        <span>質問フォーム</span>
      </button>

      <button onclick="showScreen('question-history')" class="menu-btn">
        <span>💬</span>
        <span>質問履歴</span>
      </button>

      <button onclick="showScreen('parent')" class="menu-btn">
        <span>👨‍👩‍👧</span>
        <span>保護者向け</span>
      </button>

      <button onclick="openSettings()" class="menu-btn">
        <span>⚙️</span>
        <span>設定</span>
      </button>
    </div>

    <div class="menu-info">
      <p>中学校英語サポート＋</p>
      <p>Version 2.0</p>
    </div>
  `;

  const menuScreen = document.getElementById('screen-menu');
  if (menuScreen) {
    menuScreen.innerHTML = html;
  }
}

function openSettings() {
  alert('設定ページはただいま準備中です。');
}

/* === ユーティリティ関数 === */
function formatDate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

function saveLearningRecord() {
  localStorage.setItem('learningRecord', JSON.stringify(state.learningRecord));
}

function loadLearningRecord() {
  const stored = localStorage.getItem('learningRecord');
  if (stored) {
    try {
      state.learningRecord = JSON.parse(stored);
    } catch (e) {
      console.error('学習記録の読み込みに失敗しました', e);
      state.learningRecord = {};
    }
  }
}
