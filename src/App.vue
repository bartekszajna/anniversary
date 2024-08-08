<script setup>
import { ref, watch } from 'vue';

const currentStep = ref(0);

const isError = ref(false);

const numberInput = ref(null);
const addInput = ref(null);
const wordInput = ref();
const correctWords = ['Rocznica', 'rocznica', 'Rocznica!', 'rocznica!'];
const radioInput = ref();

const sudokuInputs = ref([]);

function sudokuInputHandler(e, index) {
  console.log(e.target.value);
  sudokuInputs.value[index] = e.target.value;

  console.log(sudokuInputs.value);
}

const correctSudokuValues = [
  6, 5, 2, 9, 8, 2, 8, 1, 2, 6, 3, 2, 6, 9, 4, 8, 9, 1, 5, 8, 3, 5,
];

function restartSudoku() {
  sudokuInputs.value = [];
}

let backLabel = 'Wstecz';
let goLabel = 'Dalej';

watch(currentStep, () => {
  if (currentStep.value === 4) {
    backLabel = 'Jeszcze szukam';
    goLabel = 'Mam';
  } else if (currentStep.value === 5) {
    backLabel = 'Wstecz';
    goLabel = 'Jestem na miejscu';
  } else if (currentStep.value === 8) {
    isError.value = false;
  } else if (currentStep.value === 9) {
    if (numberInput.value !== 1092) {
      isError.value = true;
    }
  } else if (currentStep.value === 13) {
    isError.value = false;
  } else if (currentStep.value === 14) {
    if (addInput.value !== 3731) {
      isError.value = true;
    }
  } else if (currentStep.value === 16) {
    isError.value = false;
  } else if (currentStep.value === 17) {
    if (!correctWords.includes(wordInput.value)) {
      isError.value = true;
    }
  } else if (currentStep.value === 20) {
    isError.value = false;
  } else if (currentStep.value === 21) {
    console.log(correctSudokuValues.join(''), sudokuInputs.value.join(''));
    if (correctSudokuValues.join('') !== sudokuInputs.value.join('')) {
      isError.value = true;
    }
  } else if (currentStep.value === 31) {
    backLabel = 'Jeszcze nie';
    goLabel = 'Tak';
  } else {
    backLabel = 'Wstecz';
    goLabel = 'Dalej';
  }
});
</script>

<template>
  <main
    class="bg-brand text-sm text-white w-full h-svh flex flex-col justify-between py-10 px-8"
  >
    <section class="section" v-if="currentStep === 0">
      <h1 class="text-3xl font-bold mb-8">Cześć raz jeszcze!</h1>
      <p class="mb-4">
        Chodzą słuchy, że uwielbiasz przygody, nieobce Ci są zagadki, escape
        roomy oraz szeroko pojęty outdoor, jesteś ponoć także ogromną fanką
        dobrego jedzenia. To zupełnie tak jak ja! Chyba mamy wiele wspólnego!
      </p>
      <p class="mb-8">
        Dziś postaram się dostarczyć Ci choć odrobinę każdej z tych rzeczy, tak
        się bowiem składa, że wyruszamy na poszukiwania legendarnego skarbu!
        Ubierz się wygodnie.
      </p>

      <svg
        class="mx-auto"
        xmlns="http://www.w3.org/2000/svg"
        width="67"
        height="67"
        viewBox="0 0 67 67"
        fill="none"
      >
        <path
          d="M32.3036 62.2143C47.5006 62.2143 59.8214 49.8935 59.8214 34.6964C59.8214 19.4994 47.5006 7.17857 32.3036 7.17857C17.1065 7.17857 4.78571 19.4994 4.78571 34.6964C4.78571 49.8935 17.1065 62.2143 32.3036 62.2143Z"
          fill="#F4F4F4"
        />
        <path
          d="M56.8686 13.7182C57.7708 14.1274 58.771 14.3571 59.8214 14.3571C63.7696 14.3571 67 11.1268 67 7.17857C67 3.23036 63.7696 0 59.8214 0C55.8732 0 52.6429 3.23036 52.6429 7.17857C52.6429 8.23143 52.8726 9.22925 53.2817 10.1314C47.4386 5.12757 39.9964 2.38227 32.3036 2.39286C14.4624 2.39286 0 16.8553 0 34.6964C0 52.5376 14.4624 67 32.3036 67C50.1447 67 64.6071 52.5376 64.6071 34.6964C64.6177 27.0036 61.8724 19.5614 56.8686 13.7182ZM55.9689 7.15464C55.9689 6.1329 56.3748 5.153 57.0973 4.43051C57.8198 3.70803 58.7997 3.30214 59.8214 3.30214C60.8432 3.30214 61.8231 3.70803 62.5456 4.43051C63.268 5.153 63.6739 6.1329 63.6739 7.15464C63.6739 8.17639 63.268 9.15629 62.5456 9.87877C61.8231 10.6013 60.8432 11.0071 59.8214 11.0071C58.7997 11.0071 57.8198 10.6013 57.0973 9.87877C56.3748 9.15629 55.9689 8.17639 55.9689 7.15464ZM57.4286 34.6964C57.4286 48.5726 46.1797 59.8214 32.3036 59.8214C18.4274 59.8214 7.17857 48.5726 7.17857 34.6964C7.17857 20.8202 18.4274 9.57143 32.3036 9.57143C46.1797 9.57143 57.4286 20.8202 57.4286 34.6964Z"
          fill="#F9C23C"
        />
        <path
          d="M55.8732 14.3571L52.6189 11.1029L55.8732 7.84857C56.7585 6.96322 58.2182 6.96322 59.1275 7.84857C60.0128 8.73393 60.0128 10.1936 59.1275 11.1029L55.8732 14.3571Z"
          fill="#FFB02E"
        />
        <path
          d="M26.855 37.6253L22.5168 43.5739C22.0861 44.1482 22.8039 44.866 23.4021 44.4593L29.3699 40.1043L31.6097 54.4375C31.7293 55.2271 32.8779 55.2271 32.9975 54.4375L35.5722 37.965L52.0446 35.3903C52.8343 35.2707 52.8343 34.1221 52.0446 34.0025L37.7114 31.7604L42.0664 25.795C42.4972 25.2207 41.7793 24.5028 41.1811 24.9096L35.2324 29.2479L32.9975 14.9553C32.8779 14.1657 31.7293 14.1657 31.6097 14.9553L29.0349 31.4278L12.5625 34.0025C11.7729 34.1221 11.7729 35.2707 12.5625 35.3903L26.855 37.6253Z"
          fill="#9B9B9B"
        />
        <path
          d="M36.7016 31.1071L45.3183 46.2468C45.8543 47.1991 44.8063 48.2472 43.8515 47.7112L28.7143 39.0849L36.7016 31.1071Z"
          fill="#9B9B9B"
        />
        <path
          d="M27.939 38.2857L19.2864 23.1437C19.1702 22.9396 19.1242 22.703 19.1555 22.4702C19.1869 22.2374 19.2938 22.0213 19.4599 21.8552C19.626 21.6891 19.8421 21.5822 20.0749 21.5508C20.3077 21.5195 20.5443 21.5654 20.7484 21.6817L35.8928 30.3175L27.939 38.2857Z"
          fill="#E5336D"
        />
        <path
          d="M32.3036 40.6786C33.8901 40.6786 35.4117 40.0483 36.5336 38.9264C37.6554 37.8046 38.2857 36.283 38.2857 34.6964C38.2857 33.1099 37.6554 31.5883 36.5336 30.4664C35.4117 29.3445 33.8901 28.7143 32.3036 28.7143C30.717 28.7143 29.1954 29.3445 28.0735 30.4664C26.9517 31.5883 26.3214 33.1099 26.3214 34.6964C26.3214 36.283 26.9517 37.8046 28.0735 38.9264C29.1954 40.0483 30.717 40.6786 32.3036 40.6786Z"
          fill="#D3D3D3"
        />
      </svg>
    </section>
    <section class="section" v-if="currentStep === 1">
      <p class="mb-4">Nasza przygoda zaczyna się właśnie teraz.</p>
      <p class="mb-64">Gdy będziesz gotowa, przejdź Dalej.</p>
      <p>Nie mogę się doczekać!</p>
    </section>
    <section class="section" v-if="currentStep === 2">
      <p class="mb-4">
        Na naszej dzisiejszej drodze napotkasz zagadki i zadania do rozwiązania.
        Odpowiedzi na kilka z nich będziesz musiała wprowadzić tu, w aplikacji,
        a ja zdecyduję czy są poprawne.
      </p>
      <p class="mb-48">
        <span class="font-bold"
          >Wszystko na co się dziś natkniesz warto zatrzymać</span
        >, nigdy bowiem nie wiesz co i kiedy będzie Ci jeszcze potrzebne!
      </p>
      <p>Zanim wyruszymy, mam jednak pewien problem...</p>
    </section>

    <section class="section" v-if="currentStep === 3">
      <p class="mb-48">
        Chciałem wyposażyć Cię w zestaw pewnych symboli, jednak pech chciał, że
        gdzieś mi się zgubiły. Odnajdziesz je dla mnie?
      </p>
      <h1 class="uppercase font-black text-base mb-4">Zadanie</h1>
      <p>
        Odszukaj w mieszkaniu 6 znaczków, które pojawiły się w nocy. Gdy to
        zrobisz, przejdź Dalej.
      </p>
    </section>
    <section class="section" v-if="currentStep === 4">
      <h1 class="text-3xl font-bold mb-8">?</h1>
      <p>
        Posiadanie wszystkich 6 znaczków będzie kluczowe w przyszłości, upewnij
        się więc że je masz.
      </p>
    </section>
    <section class="section" v-if="currentStep === 5">
      <p class="mb-48">
        Wspaniale, wiedziałem, że mi pomożesz! Teraz możemy wyruszać. Pierwszą
        część Twojej przygody wykonasz sama.
      </p>
      <h1 class="uppercase font-black text-base mb-4">Zadanie</h1>
      <p>
        Przygotuj małe lusterko i latarkę, którą dostaniesz od Bartka, przydadzą
        się później. Wyjdź z domu. Po wyjściu z bloku skręć w lewo, strzałki
        wskażą Ci drogę. Przejdź Dalej gdy dojdziesz do punktu.
      </p>
    </section>
    <section class="section" v-if="currentStep === 6">
      <p class="mb-8">
        Rozejrzyj się dookoła. Mury, które widzisz mogą być niezłym miejscem na
        umieszczenie poszlaki prowadzącej do skarbu... szczególnie te pokryte
        bluszczem.
      </p>
      <p>Przejdź Dalej.</p>
    </section>
    <section class="section" v-if="currentStep === 7">
      <h1 class="uppercase font-bold text-base mb-4">Zadanie</h1>

      <p class="mb-8">
        Poszukaj wskazówkę. Pomocny może okazać się poniższy rysunek:
      </p>

      <svg
        class="mx-auto mb-8"
        xmlns="http://www.w3.org/2000/svg"
        width="184"
        height="104"
        viewBox="0 0 184 104"
        fill="none"
      >
        <rect y="14.0012" width="12.0004" height="90.0034" fill="#C16937" />
        <rect
          x="86.4032"
          y="14.0012"
          width="12.0004"
          height="90.0034"
          fill="#C16937"
        />
        <rect
          x="171.606"
          y="12.8012"
          width="12.0004"
          height="90.0034"
          fill="#C16937"
        />
        <rect y="2.00076" width="183.607" height="12.0004" fill="#C16937" />
        <path
          d="M98.5098 92.0324L86.2978 84.9818"
          stroke="#367C2D"
          stroke-width="4"
          stroke-linecap="round"
        />
        <path
          d="M98.5098 82.4321L86.2978 75.3815"
          stroke="#367C2D"
          stroke-width="4"
          stroke-linecap="round"
        />
        <path
          d="M98.5098 63.2313L86.2978 56.1807"
          stroke="#367C2D"
          stroke-width="4"
          stroke-linecap="round"
        />
        <path
          d="M98.5098 53.631L86.2978 46.5804"
          stroke="#367C2D"
          stroke-width="4"
          stroke-linecap="round"
        />
        <path
          d="M98.5098 44.0306L86.2978 36.9801"
          stroke="#367C2D"
          stroke-width="4"
          stroke-linecap="round"
        />
        <path
          d="M98.5098 34.4302L86.2978 27.3797"
          stroke="#367C2D"
          stroke-width="4"
          stroke-linecap="round"
        />
        <path
          d="M98.5098 24.8299L58.8022 2.00077"
          stroke="#367C2D"
          stroke-width="4"
          stroke-linecap="round"
        />
        <path
          d="M114.11 14.0258L93.6035 2.00077"
          stroke="#367C2D"
          stroke-width="4"
          stroke-linecap="round"
        />
        <path
          d="M99.6037 15.2013L76.7544 2.08387"
          stroke="#367C2D"
          stroke-width="4"
          stroke-linecap="round"
        />
        <path
          d="M130.805 14.0012L110.404 2.00077"
          stroke="#367C2D"
          stroke-width="4"
          stroke-linecap="round"
        />
        <path
          d="M147.654 13.9182L127.156 2.08386"
          stroke="#367C2D"
          stroke-width="4"
          stroke-linecap="round"
        />
        <path
          d="M164.455 13.9182L143.957 2.08386"
          stroke="#367C2D"
          stroke-width="4"
          stroke-linecap="round"
        />
        <path
          d="M42.0042 1.99615L62.4023 14.0012"
          stroke="#367C2D"
          stroke-width="4"
          stroke-linecap="round"
        />
        <path
          d="M98.5098 72.8317L86.2978 65.7811"
          stroke="#367C2D"
          stroke-width="4"
          stroke-linecap="round"
        />
      </svg>
      <p>
        Gdy Ci się uda, pozostań na tej stronie. Przeanalizuj wskazówkę i
        wykonaj jej polecenia, a w aplikacji przejdź Dalej dopiero gdy
        zostaniesz o to poproszona.
      </p>
    </section>
    <section class="section" v-if="currentStep === 8">
      <p class="mb-8">Jaki numer odnalazłaś?</p>
      <p class="mb-8">Wprowadź go poniżej i przejdź Dalej.</p>
      <input
        type="number"
        v-model="numberInput"
        placeholder="Odpowiedź"
        class="w-4/5 focus:outline-none border rounded-full border-white py-3 px-5 opacity-70 focus:opacity-100 bg-brand color-white text-base font-bold"
      />
    </section>
    <section class="section" v-if="currentStep === 9 && isError">
      <p class="mb-8">To niestety błędny numer. Wróć i spróbuj jeszcze raz.</p>
    </section>
    <section class="section" v-else-if="currentStep === 9">
      <p class="mb-8">Zgadza się. Zapamiętaj ten numer.</p>

      <h1 class="uppercase font-bold text-base mb-4">Zadanie</h1>

      <p class="mb-40">
        Skieruj się teraz w miejsce, które właściwie codziennie stanowi cel
        Twoich spacerów z synem. Ponoć lata tam ostatnio wiele os czyhających na
        słodkie owoce grzejące się w słońcu :)
      </p>
      <p class="mb-8">Przejdź Dalej dopiero gdy dotrzesz do celu.</p>
    </section>
    <section class="section" v-if="currentStep === 10">
      <p class="mb-8">
        Jeśli dotarłaś do celu, wiesz już że chodziło o nasz ryneczek.
      </p>

      <p class="mb-8">
        Znajduje się tu jedno z tych urządzeń z których tak często korzystasz
        gdy kupujesz rzeczy przez internet. Czy wiesz o co chodzi?
      </p>

      <svg
        class="mx-auto"
        xmlns="http://www.w3.org/2000/svg"
        width="94"
        height="115"
        viewBox="0 0 94 115"
        fill="none"
      >
        <path
          d="M44.9941 0.584884C46.2627 -0.194961 47.8087 -0.194961 49.0376 0.584884L92.3271 27.8384C93.3578 28.4952 93.9921 29.6855 93.9921 30.9168L47.0159 63.617L0 31.3231V30.9127C0 29.6813 0.634278 28.4911 1.66498 27.8754L44.9941 0.584884Z"
          fill="#F3C07B"
        />
        <path
          d="M47 58.4699L92.0337 30.1492C92.2312 30.0273 92.4563 29.9618 92.6862 29.9593C92.9161 29.9568 93.1425 30.0175 93.3424 30.1352C93.5422 30.2528 93.7084 30.4232 93.8239 30.629C93.9394 30.8348 94.0002 31.0687 94 31.3067V81.9556C94.0005 83.1753 93.6982 84.3746 93.122 85.4384C92.5458 86.5022 91.7151 87.3947 90.7096 88.0302L48.5302 114.545C48.4228 114.606 48.3062 114.648 48.1853 114.668C48.0786 114.701 47.9675 114.716 47.8562 114.713C47.4061 114.844 46.9356 114.881 46.4716 114.822C46.0076 114.764 45.5594 114.611 45.1526 114.373H45.1764L35.6781 69.7736L47 58.4699Z"
          fill="#FFCE7C"
        />
        <path
          d="M47.0159 113.371V58.4945L2.02178 30.1738C1.82311 30.0416 1.59366 29.9673 1.35762 29.9588C1.12158 29.9504 0.887704 30.008 0.680673 30.1257C0.473641 30.2434 0.301127 30.4167 0.181328 30.6275C0.0615297 30.8382 -0.00111124 31.0785 1.49211e-05 31.3231V81.972C1.49211e-05 84.4757 1.26857 86.7742 3.29033 88.0466L45.1923 114.397C45.3712 114.514 45.5768 114.579 45.7882 114.586C45.9995 114.593 46.2088 114.542 46.3946 114.438C46.5804 114.333 46.7359 114.179 46.8451 113.992C46.9543 113.804 47.0132 113.59 47.0159 113.371Z"
          fill="#E19747"
        />
        <path
          d="M41.6245 101.715V93.6698C41.6245 92.7258 41.1488 91.8638 40.3955 91.3713L29.2957 84.4348C28.5425 83.9833 27.5911 84.5169 27.5911 85.4199V93.4646C27.5911 94.4086 28.0668 95.2705 28.82 95.7631L39.9198 102.7C40.673 103.151 41.6245 102.618 41.6245 101.715Z"
          fill="#D3D3D3"
        />
        <path
          d="M30.7625 59.7299V41.0095L17.7598 40.1066V53.0766C17.7598 53.4871 17.958 53.8975 18.3148 54.1438L28.9389 60.8341C29.7318 61.2855 30.7625 60.715 30.7625 59.7299Z"
          fill="#8C5543"
        />
        <path
          d="M64.7756 10.5177L17.7598 40.1108L30.7625 48.3197L77.7783 18.7676L64.7756 10.5177Z"
          fill="#A56953"
        />
      </svg>
    </section>
    <section class="section" v-if="currentStep === 11">
      <p class="mb-16">Wewnątrz niego zamknięto coś co jest Ci przeznaczone.</p>

      <p class="mb-8">Wykorzystaj numer telefonu Bartka. Ale skąd wziąć kod?</p>
    </section>
    <section class="section" v-if="currentStep === 12">
      <p class="mb-8">
        Podczas gdy Ty zajęta byłaś wczytywaniem się w wskazówki, ktoś z Twoich
        bliskich znajomych właśnie udostępnił w mediach społecznościowych coś
        dziwnego i na pozór bezsensownego.
      </p>
      <p class="mb-20">Może dla Ciebie będzie jednak znaczyć coś więcej?</p>

      <h1 class="uppercase font-bold text-base mb-4">Zadanie</h1>

      <p class="mb-12">
        Odszukaj udostępnioną informację. Użyj jej by otrzymać przesyłkę. Otwórz
        ją.
      </p>
      <p class="">
        Pozostań na tej stronie i przejdź Dalej tylko gdy zostaniesz o to
        poproszona.
      </p>
    </section>
    <section class="section" v-if="currentStep === 13">
      <h1 class="uppercase font-bold text-base mb-4">Zadanie</h1>
      <p class="mb-8">
        Stań na środku placu i spójrz w stronę popiersia Jana Matejki. Nieco
        niżej znajduje się coś, co wygląda jak operacja matematyczna. Czy jesteś
        w stanie podać jej wynik? Wprowadź go poniżej i przejdź Dalej.
      </p>

      <input
        type="number"
        v-model="addInput"
        placeholder="Odpowiedź"
        class="w-4/5 focus:outline-none border rounded-full border-white py-3 px-5 opacity-70 focus:opacity-100 bg-brand color-white text-base font-bold"
      />
    </section>

    <section class="section" v-if="currentStep === 14 && isError">
      <p class="mb-8">To niestety błędny wynik. Wróć i spróbuj jeszcze raz.</p>
    </section>

    <section class="section" v-else-if="currentStep === 14">
      <p class="mb-8">To poprawny wynik, brawo!</p>
      <p class="mb-8">
        Spójrz teraz na obrazek poniżej. Czy widzisz wokół siebie coś co może mu
        odpowiadać?
      </p>

      <svg
        class="mx-auto mb-8"
        width="190"
        height="134"
        viewBox="0 0 190 134"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="7.5" cy="7.5" r="7.5" fill="#C16937" />
        <circle cx="8.66077" cy="36.5178" r="7.5" fill="#C16937" />
        <circle cx="16.7858" cy="78.3035" r="7.5" fill="#C16937" />
        <circle cx="49.2858" cy="114.286" r="7.5" fill="#C16937" />
        <circle cx="180.446" cy="36.5178" r="7.5" fill="#C16937" />
        <circle cx="171.161" cy="78.3035" r="7.5" fill="#C16937" />
        <circle cx="139.821" cy="114.286" r="7.5" fill="#C16937" />
        <circle cx="181.607" cy="7.5" r="7.5" fill="#C16937" />
        <circle cx="94.5536" cy="125.893" r="7.5" fill="#C16937" />
      </svg>

      <p>Jeśli tak, przejdź Dalej.</p>
    </section>
    <section class="section" v-if="currentStep === 15">
      <h1 class="uppercase font-bold text-base mb-4">Zadanie</h1>
      <p class="mb-8">
        Przyglądnij się bliżej rzeczywistym odpowiednikom. Kryją w sobie coś, co
        mimo słońca pozostaje niewidoczne gołym okiem.
      </p>

      <p class="mb-8">
        Może warto rzucić na tę tajemnicę trochę innego światła?
      </p>

      <svg
        class="mx-auto mb-8"
        width="91"
        height="91"
        viewBox="0 0 91 91"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M86.4855 67.7096L49.5239 28.6792C46.4882 13.8703 37.118 5.11157 37.118 5.11157L5.18982 37.0398C5.18982 37.0398 12.804 47.1991 28.7574 49.4599L68.0011 86.3931C71.8331 89.6491 78.6581 88.2842 83.4711 83.2152C88.1136 78.3381 89.4928 71.4634 86.4855 67.7096Z"
          fill="#2F7889"
        />
        <path
          d="M35.291 7.10944C39.3647 11.1831 36.3787 20.7737 28.6153 28.5371C20.8518 36.3005 11.2613 39.2865 7.18762 35.2128C3.11395 31.1391 6.107 21.5486 13.8633 13.7851C21.6197 6.0217 31.2173 3.04287 35.291 7.10944Z"
          fill="#9E740B"
        />
        <path
          d="M36.201 10.1308C39.4855 13.4154 35.7886 21.3565 28.6153 28.537C21.4419 35.7175 13.4936 39.4072 10.2091 36.1227C6.92456 32.8382 10.0811 24.3638 17.2616 17.1833C24.4421 10.0029 32.9235 6.85341 36.201 10.1308Z"
          fill="#FFEE58"
        />
        <path
          d="M38.0067 16.2379C38.0067 16.2379 35.4402 23.3828 29.447 29.376C23.4538 35.3692 16.3089 37.9286 16.3089 37.9286C12.804 34.4236 14.8159 26.7242 20.8091 20.731C26.8023 14.7378 34.5018 12.7258 38.0067 16.2379Z"
          fill="white"
        />
        <path
          d="M33.9189 6.91023C37.4664 10.4578 34.3099 19.3587 26.8735 26.7951C19.4371 34.2316 10.529 37.3881 6.98856 33.8405C3.44809 30.293 6.59754 21.392 14.034 13.9556C21.4704 6.51921 30.3784 3.36265 33.9189 6.91023ZM37.0257 5.01202C34.58 2.5664 30.5561 2.17538 25.6862 3.89585C21.3637 5.43148 16.7426 8.50984 12.669 12.5835C8.59528 16.6572 5.50981 21.2783 3.98129 25.6008C2.25372 30.4707 2.65184 34.5017 5.09747 36.9402C7.54309 39.3787 11.567 39.7769 16.4369 38.0564C20.7594 36.5208 25.3805 33.4424 29.4542 29.3687C33.5279 25.2951 36.6062 20.6811 38.1418 16.3515C39.8623 11.4887 39.4642 7.45765 37.0257 5.01202Z"
          fill="#80DEEA"
        />
        <path
          d="M13.0173 28.9494C11.9082 29.0987 10.8631 29.1627 11.1404 28.2242C13.2945 20.7736 20.5887 14.2187 25.8426 12.0362C27.0227 11.5456 26.5677 13.2163 26.4042 14.2259C26.2336 15.2354 25.9563 15.8255 25.4231 16.1098C22.5012 17.6526 16.8919 22.0177 14.9155 27.7977C14.688 28.4517 14.1263 28.8001 13.0173 28.9494Z"
          fill="#FFFF8D"
        />
        <path
          d="M7.99806 29.1626C7.10228 29.4185 6.10697 30.0868 6.2847 29.1768C8.28955 18.6905 17.3398 9.78951 26.1412 6.83912C26.646 6.6685 26.6317 7.15904 26.4113 8.57381C26.1981 9.93881 25.8995 10.0881 25.5867 10.2516C20.2475 13.0101 12.7613 18.4629 9.32041 27.6838C9.14978 28.1388 8.9365 28.8142 7.99806 29.1626Z"
          fill="#E2A610"
        />
        <path
          d="M57.5575 51.2445L50.1708 44.5617C49.6685 44.0591 49.3864 43.3776 49.3864 42.667C49.3864 41.9564 49.6685 41.275 50.1708 40.7724L51.1803 39.6206C51.6829 39.1183 52.3644 38.8362 53.075 38.8362C53.7856 38.8362 54.467 39.1183 54.9696 39.6206L62.079 46.73C62.5813 47.2326 62.8635 47.9141 62.8635 48.6247C62.8635 49.3352 62.5813 50.0167 62.079 50.5193L61.3468 51.2516C60.8423 51.7512 60.1606 52.0309 59.4506 52.0296C58.7406 52.0282 58.06 51.746 57.5575 51.2445Z"
          fill="#212121"
        />
        <path
          d="M53.4127 45.1445C54.7005 45.1445 55.7446 44.1004 55.7446 42.8126C55.7446 41.5247 54.7005 40.4807 53.4127 40.4807C52.1248 40.4807 51.0808 41.5247 51.0808 42.8126C51.0808 44.1004 52.1248 45.1445 53.4127 45.1445Z"
          fill="#49A4BA"
        />
        <path
          d="M38.3906 24.5559C38.4191 27.2574 40.6443 26.5394 42.7913 31.2956C43.5805 33.0516 44.5829 32.5824 45.0734 31.8927C47.3271 28.7149 46.9219 27.9826 46.1683 24.9398C45.5711 22.5581 43.0899 16.6502 41.9951 16.4512C40.9002 16.2521 40.8434 17.5745 40.5234 18.7404C39.6561 21.9325 38.3764 23.134 38.3906 24.5559Z"
          fill="#49A4BA"
        />
        <path
          d="M25.9563 48.9409C25.9563 48.9409 33.4567 47.6399 41.2059 39.8836C48.9551 32.1272 48.8769 26.1838 48.8769 25.9563L49.4741 28.5654C49.4741 28.5654 50.505 34.7079 43.2179 41.995C35.9308 49.2822 28.5797 49.4172 28.5797 49.4172L25.9563 48.9409Z"
          fill="#212121"
        />
      </svg>

      <p>Gdy ją odkryjesz, przejdź Dalej.</p>
    </section>
    <section class="section" v-if="currentStep === 16">
      <p class="mb-8">
        Z liter, które odnalazłaś można ułożyć słowo szczególnie związane z
        dzisiejszym dniem. Potrafisz je odgadnąć?
      </p>

      <p class="mb-8">Wpisz je poniżej i przejdź Dalej.</p>

      <input
        type="text"
        v-model="wordInput"
        placeholder="Odpowiedź"
        class="w-4/5 focus:outline-none border rounded-full border-white py-3 px-5 opacity-70 focus:opacity-100 bg-brand color-white text-base font-bold"
      />
    </section>
    <section class="section" v-if="currentStep === 17 && isError">
      <p class="mb-8">
        To niestety niepoprawna odpowiedź. Wróć i spróbuj jeszcze raz.
      </p>
    </section>
    <section class="section" v-else-if="currentStep === 17">
      <p class="mb-8">“Rocznica” to rzeczywiście poprawna odpowiedź :)</p>
      <h1 class="uppercase font-bold text-base mb-4">Zadanie</h1>
      <p class="mb-8">
        Udaj się teraz do restauracji Charlotte i poszukaj pracownika o
        imieniu...
      </p>

      <p class="mb-8">
        Przedstaw swoje imię i poproś o przekazanie wskazówki. Przeanalizuj ją.
      </p>
      <p>Przejdź Dalej dopiero gdy zostaniesz o to poproszona.</p>
    </section>
    <section class="section" v-if="currentStep === 18">
      <p class="mb-8">To dobra chwila by odpocząć od wrażeń.</p>
      <p class="mb-8">
        Bartek kieruje Was na miejsce, podczas gdy Ty możesz zająć się czymś
        innym.
      </p>

      <p>Przejdź Dalej.</p>
    </section>
    <section class="section" v-if="currentStep === 19">
      <p class="mb-8">
        Podobno swego czasu lubiłaś rozwiązywać z Bartkiem sudoku.
      </p>
      <p class="mb-8">
        To kolejna rzecz, która nas łączy. Mówił mi też, że byłaś w tym naprawdę
        dobra! Sprawdźmy więc ile z tego jeszcze pamiętasz.
      </p>

      <p class="mb-8">To co, zaczynamy?</p>
    </section>
    <section class="section" v-if="currentStep === 20">
      <h1 class="uppercase font-bold text-base mb-4">Zadanie</h1>
      <p class="mb-8">Wypełnij poprawnie puste pola i przejdź Dalej.</p>

      <div
        class="mx-auto flex flex-wrap mb-4 size-64 rounded bg-white text-brand"
      >
        <div class="w-1/3 h-1/3 flex flex-wrap border border-brand">
          <div
            class="w-1/3 h-1/3 flex justify-center items-center outline outline-1 outline-brand bg-gray"
          >
            <p>3</p>
          </div>
          <div
            class="w-1/3 h-1/3 flex justify-center items-center outline outline-1 outline-brand bg-gray"
          >
            <input
              type="number"
              :value="sudokuInputs[0]"
              @change="sudokuInputHandler($event, 0)"
              class="border-none outline-none size-full pl-2 text-primary"
            />
          </div>
          <div
            class="w-1/3 h-1/3 flex justify-center items-center outline outline-1 outline-brand bg-gray"
          >
            <p>7</p>
          </div>
          <div
            class="w-1/3 h-1/3 flex justify-center items-center outline outline-1 outline-brand bg-gray"
          >
            <p>4</p>
          </div>
          <div
            class="w-1/3 h-1/3 flex justify-center items-center outline outline-1 outline-brand bg-gray"
          >
            <input
              type="number"
              :value="sudokuInputs[1]"
              @change="sudokuInputHandler($event, 1)"
              class="border-none outline-none size-full pl-2 text-primary"
            />
          </div>
          <div
            class="w-1/3 h-1/3 flex justify-center items-center outline outline-1 outline-brand bg-gray"
          >
            <p>8</p>
          </div>
          <div
            class="w-1/3 h-1/3 flex justify-center items-center outline outline-1 outline-brand bg-gray"
          >
            <p>9</p>
          </div>
          <div
            class="w-1/3 h-1/3 flex justify-center items-center outline outline-1 outline-brand bg-gray"
          >
            <input
              type="number"
              :value="sudokuInputs[2]"
              @change="sudokuInputHandler($event, 2)"
              class="border-none outline-none size-full pl-2 text-primary"
            />
          </div>
          <div
            class="w-1/3 h-1/3 flex justify-center items-center outline outline-1 outline-brand bg-gray"
          >
            <p>1</p>
          </div>
        </div>

        <div class="w-1/3 h-1/3 flex flex-wrap border border-brand">
          <div
            class="w-1/3 h-1/3 flex justify-center items-center outline outline-1 outline-brand bg-gray"
          >
            <p>1</p>
          </div>
          <div
            class="w-1/3 h-1/3 flex justify-center items-center outline outline-1 outline-brand bg-gray"
          >
            <input
              type="number"
              :value="sudokuInputs[3]"
              @change="sudokuInputHandler($event, 3)"
              class="border-none outline-none size-full pl-2 text-primary"
            />
          </div>
          <div
            class="w-1/3 h-1/3 flex justify-center items-center outline outline-1 outline-brand bg-gray"
          >
            <p>4</p>
          </div>
          <div
            class="w-1/3 h-1/3 flex justify-center items-center outline outline-1 outline-brand bg-gray"
          >
            <p>6</p>
          </div>
          <div
            class="w-1/3 h-1/3 flex justify-center items-center outline outline-1 outline-brand bg-gray"
          >
            <p>7</p>
          </div>
          <div
            class="w-1/3 h-1/3 flex justify-center items-center outline outline-1 outline-brand bg-gray"
          >
            <p>2</p>
          </div>
          <div
            class="w-1/3 h-1/3 flex justify-center items-center outline outline-1 outline-brand bg-gray"
          >
            <p>3</p>
          </div>
          <div
            class="w-1/3 h-1/3 flex justify-center items-center outline outline-1 outline-brand bg-gray"
          >
            <input
              type="number"
              :value="sudokuInputs[4]"
              @change="sudokuInputHandler($event, 4)"
              class="border-none outline-none size-full pl-2 text-primary"
            />
          </div>
          <div
            class="w-1/3 h-1/3 flex justify-center items-center outline outline-1 outline-brand bg-gray"
          >
            <p>5</p>
          </div>
        </div>

        <div class="w-1/3 h-1/3 flex flex-wrap border border-brand">
          <div
            class="w-1/3 h-1/3 flex justify-center items-center outline outline-1 outline-brand bg-gray"
          >
            <p>5</p>
          </div>
          <div
            class="w-1/3 h-1/3 flex justify-center items-center outline outline-1 outline-brand bg-gray"
          >
            <input
              type="number"
              :value="sudokuInputs[5]"
              @change="sudokuInputHandler($event, 5)"
              class="border-none outline-none size-full pl-2 text-primary"
            />
          </div>
          <div
            class="w-1/3 h-1/3 flex justify-center items-center outline outline-1 outline-brand bg-gray"
          >
            <p>8</p>
          </div>
          <div
            class="w-1/3 h-1/3 flex justify-center items-center outline outline-1 outline-brand bg-gray"
          >
            <p>3</p>
          </div>
          <div
            class="w-1/3 h-1/3 flex justify-center items-center outline outline-1 outline-brand bg-gray"
          >
            <p>1</p>
          </div>
          <div
            class="w-1/3 h-1/3 flex justify-center items-center outline outline-1 outline-brand bg-gray"
          >
            <p>9</p>
          </div>
          <div
            class="w-1/3 h-1/3 flex justify-center items-center outline outline-1 outline-brand bg-gray"
          >
            <p>7</p>
          </div>
          <div
            class="w-1/3 h-1/3 flex justify-center items-center outline outline-1 outline-brand bg-gray"
          >
            <p>6</p>
          </div>
          <div
            class="w-1/3 h-1/3 flex justify-center items-center outline outline-1 outline-brand bg-gray"
          >
            <p>4</p>
          </div>
        </div>

        <div class="w-1/3 h-1/3 flex flex-wrap border border-brand">
          <div
            class="w-1/3 h-1/3 flex justify-center items-center outline outline-1 outline-brand bg-gray"
          >
            <input
              type="number"
              :value="sudokuInputs[6]"
              @change="sudokuInputHandler($event, 6)"
              class="border-none outline-none size-full pl-2 text-primary"
            />
          </div>
          <div
            class="w-1/3 h-1/3 flex justify-center items-center outline outline-1 outline-brand bg-gray"
          >
            <p>9</p>
          </div>
          <div
            class="w-1/3 h-1/3 flex justify-center items-center outline outline-1 outline-brand bg-gray"
          >
            <p>5</p>
          </div>
          <div
            class="w-1/3 h-1/3 flex justify-center items-center outline outline-1 outline-brand bg-gray"
          >
            <input
              type="number"
              :value="sudokuInputs[7]"
              @change="sudokuInputHandler($event, 7)"
              class="border-none outline-none size-full pl-2 text-primary"
            />
          </div>
          <div
            class="w-1/3 h-1/3 flex justify-center items-center outline outline-1 outline-brand bg-gray"
          >
            <p>7</p>
          </div>

          <div
            class="w-1/3 h-1/3 flex justify-center items-center outline outline-1 outline-brand bg-gray"
          >
            <input
              type="number"
              :value="sudokuInputs[8]"
              @change="sudokuInputHandler($event, 8)"
              class="border-none outline-none size-full pl-2 text-primary"
            />
          </div>
          <div
            class="w-1/3 h-1/3 flex justify-center items-center outline outline-1 outline-brand bg-gray"
          >
            <input
              type="number"
              :value="sudokuInputs[9]"
              @change="sudokuInputHandler($event, 9)"
              class="border-none outline-none size-full pl-2 text-primary"
            />
          </div>
          <div
            class="w-1/3 h-1/3 flex justify-center items-center outline outline-1 outline-brand bg-gray"
          >
            <p>4</p>
          </div>
          <div
            class="w-1/3 h-1/3 flex justify-center items-center outline outline-1 outline-brand bg-gray"
          >
            <p>3</p>
          </div>
        </div>

        <div class="w-1/3 h-1/3 flex flex-wrap border border-brand">
          <div
            class="w-1/3 h-1/3 flex justify-center items-center outline outline-1 outline-brand bg-gray"
          >
            <p>4</p>
          </div>
          <div
            class="w-1/3 h-1/3 flex justify-center items-center outline outline-1 outline-brand bg-gray"
          >
            <input
              type="number"
              :value="sudokuInputs[10]"
              @change="sudokuInputHandler($event, 10)"
              class="border-none outline-none size-full pl-2 text-primary"
            />
          </div>
          <div
            class="w-1/3 h-1/3 flex justify-center items-center outline outline-1 outline-brand bg-gray"
          >
            <p>6</p>
          </div>
          <div
            class="w-1/3 h-1/3 flex justify-center items-center outline outline-1 outline-brand bg-gray"
          >
            <p>8</p>
          </div>
          <div
            class="w-1/3 h-1/3 flex justify-center items-center outline outline-1 outline-brand bg-gray"
          >
            <p>5</p>
          </div>
          <div
            class="w-1/3 h-1/3 flex justify-center items-center outline outline-1 outline-brand bg-gray"
          >
            <p>9</p>
          </div>
          <div
            class="w-1/3 h-1/3 flex justify-center items-center outline outline-1 outline-brand bg-gray"
          >
            <p>7</p>
          </div>
          <div
            class="w-1/3 h-1/3 flex justify-center items-center outline outline-1 outline-brand bg-gray"
          >
            <input
              type="number"
              :value="sudokuInputs[11]"
              @change="sudokuInputHandler($event, 11)"
              class="border-none outline-none size-full pl-2 text-primary"
            />
          </div>
          <div
            class="w-1/3 h-1/3 flex justify-center items-center outline outline-1 outline-brand bg-gray"
          >
            <p>1</p>
          </div>
        </div>

        <div class="w-1/3 h-1/3 flex flex-wrap border border-brand">
          <div
            class="w-1/3 h-1/3 flex justify-center items-center outline outline-1 outline-brand bg-gray"
          >
            <p>1</p>
          </div>
          <div
            class="w-1/3 h-1/3 flex justify-center items-center outline outline-1 outline-brand bg-gray"
          >
            <p>7</p>
          </div>
          <div
            class="w-1/3 h-1/3 flex justify-center items-center outline outline-1 outline-brand bg-gray"
          >
            <p>2</p>
          </div>
          <div
            class="w-1/3 h-1/3 flex justify-center items-center outline outline-1 outline-brand bg-gray"
          >
            <input
              type="number"
              :value="sudokuInputs[12]"
              @change="sudokuInputHandler($event, 12)"
              class="border-none outline-none size-full pl-2 text-primary"
            />
          </div>
          <div
            class="w-1/3 h-1/3 flex justify-center items-center outline outline-1 outline-brand bg-gray"
          >
            <p>4</p>
          </div>
          <div
            class="w-1/3 h-1/3 flex justify-center items-center outline outline-1 outline-brand bg-gray"
          >
            <p>3</p>
          </div>
          <div
            class="w-1/3 h-1/3 flex justify-center items-center outline outline-1 outline-brand bg-gray"
          >
            <p>8</p>
          </div>
          <div
            class="w-1/3 h-1/3 flex justify-center items-center outline outline-1 outline-brand bg-gray"
          >
            <input
              type="number"
              :value="sudokuInputs[13]"
              @change="sudokuInputHandler($event, 13)"
              class="border-none outline-none size-full pl-2 text-primary"
            />
          </div>
          <div
            class="w-1/3 h-1/3 flex justify-center items-center outline outline-1 outline-brand bg-gray"
          >
            <p>5</p>
          </div>
        </div>

        <div class="w-1/3 h-1/3 flex flex-wrap border border-brand">
          <div
            class="w-1/3 h-1/3 flex justify-center items-center outline outline-1 outline-brand bg-gray"
          >
            <p>5</p>
          </div>
          <div
            class="w-1/3 h-1/3 flex justify-center items-center outline outline-1 outline-brand bg-gray"
          >
            <p>3</p>
          </div>
          <div
            class="w-1/3 h-1/3 flex justify-center items-center outline outline-1 outline-brand bg-gray"
          >
            <input
              type="number"
              :value="sudokuInputs[14]"
              @change="sudokuInputHandler($event, 14)"
              class="border-none outline-none size-full pl-2 text-primary"
            />
          </div>
          <div
            class="w-1/3 h-1/3 flex justify-center items-center outline outline-1 outline-brand bg-gray"
          >
            <p>2</p>
          </div>
          <div
            class="w-1/3 h-1/3 flex justify-center items-center outline outline-1 outline-brand bg-gray"
          >
            <p>1</p>
          </div>
          <div
            class="w-1/3 h-1/3 flex justify-center items-center outline outline-1 outline-brand bg-gray"
          >
            <p>6</p>
          </div>
          <div
            class="w-1/3 h-1/3 flex justify-center items-center outline outline-1 outline-brand bg-gray"
          >
            <p>7</p>
          </div>
          <div
            class="w-1/3 h-1/3 flex justify-center items-center outline outline-1 outline-brand bg-gray"
          >
            <input
              type="number"
              :value="sudokuInputs[15]"
              @change="sudokuInputHandler($event, 15)"
              class="border-none outline-none size-full pl-2 text-primary"
            />
          </div>
          <div
            class="w-1/3 h-1/3 flex justify-center items-center outline outline-1 outline-brand bg-gray"
          >
            <input
              type="number"
              :value="sudokuInputs[16]"
              @change="sudokuInputHandler($event, 16)"
              class="border-none outline-none size-full pl-2 text-primary"
            />
          </div>
        </div>

        <div class="w-1/3 h-1/3 flex flex-wrap border border-brand">
          <div
            class="w-1/3 h-1/3 flex justify-center items-center outline outline-1 outline-brand bg-gray"
          >
            <p>9</p>
          </div>
          <div
            class="w-1/3 h-1/3 flex justify-center items-center outline outline-1 outline-brand bg-gray"
          >
            <input
              type="number"
              :value="sudokuInputs[17]"
              @change="sudokuInputHandler($event, 17)"
              class="border-none outline-none size-full pl-2 text-primary"
            />
          </div>
          <div
            class="w-1/3 h-1/3 flex justify-center items-center outline outline-1 outline-brand bg-gray"
          >
            <p>7</p>
          </div>
          <div
            class="w-1/3 h-1/3 flex justify-center items-center outline outline-1 outline-brand bg-gray"
          >
            <input
              type="number"
              :value="sudokuInputs[18]"
              @change="sudokuInputHandler($event, 18)"
              class="border-none outline-none size-full pl-2 text-primary"
            />
          </div>
          <div
            class="w-1/3 h-1/3 flex justify-center items-center outline outline-1 outline-brand bg-gray"
          >
            <p>4</p>
          </div>
          <div
            class="w-1/3 h-1/3 flex justify-center items-center outline outline-1 outline-brand bg-gray"
          >
            <input
              type="number"
              :value="sudokuInputs[19]"
              @change="sudokuInputHandler($event, 19)"
              class="border-none outline-none size-full pl-2 text-primary"
            />
          </div>
          <div
            class="w-1/3 h-1/3 flex justify-center items-center outline outline-1 outline-brand bg-gray"
          >
            <p>2</p>
          </div>
          <div
            class="w-1/3 h-1/3 flex justify-center items-center outline outline-1 outline-brand bg-gray"
          >
            <p>6</p>
          </div>
          <div
            class="w-1/3 h-1/3 flex justify-center items-center outline outline-1 outline-brand bg-gray"
          >
            <input
              type="number"
              :value="sudokuInputs[20]"
              @change="sudokuInputHandler($event, 20)"
              class="border-none outline-none size-full pl-2 text-primary"
            />
          </div>
        </div>

        <div class="w-1/3 h-1/3 flex flex-wrap border border-brand">
          <div
            class="w-1/3 h-1/3 flex justify-center items-center outline outline-1 outline-brand bg-gray"
          >
            <p>2</p>
          </div>
          <div
            class="w-1/3 h-1/3 flex justify-center items-center outline outline-1 outline-brand bg-gray"
          >
            <p>8</p>
          </div>
          <div
            class="w-1/3 h-1/3 flex justify-center items-center outline outline-1 outline-brand bg-gray"
          >
            <p>6</p>
          </div>
          <div
            class="w-1/3 h-1/3 flex justify-center items-center outline outline-1 outline-brand bg-gray"
          >
            <p>9</p>
          </div>
          <div
            class="w-1/3 h-1/3 flex justify-center items-center outline outline-1 outline-brand bg-gray"
          >
            <p>3</p>
          </div>
          <div
            class="w-1/3 h-1/3 flex justify-center items-center outline outline-1 outline-brand bg-gray"
          >
            <p>7</p>
          </div>
          <div
            class="w-1/3 h-1/3 flex justify-center items-center outline outline-1 outline-brand bg-gray"
          >
            <p>4</p>
          </div>
          <div
            class="w-1/3 h-1/3 flex justify-center items-center outline outline-1 outline-brand bg-gray"
          >
            <input
              type="number"
              :value="sudokuInputs[21]"
              @change="sudokuInputHandler($event, 21)"
              class="border-none outline-none size-full pl-2 text-primary"
            />
          </div>
          <div
            class="w-1/3 h-1/3 flex justify-center items-center outline outline-1 outline-brand bg-gray"
          >
            <p>1</p>
          </div>
        </div>
      </div>

      <button @click="restartSudoku" class="flex items-center p-2 mx-auto">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18.2581 3.50784C18.3951 3.56461 18.5123 3.66076 18.5947 3.78411C18.6771 3.90747 18.7211 4.05249 18.7211 4.20084V8.44384C18.7211 8.64276 18.642 8.83352 18.5014 8.97417C18.3607 9.11483 18.17 9.19384 17.9711 9.19384H13.7281C13.5798 9.19371 13.4349 9.14966 13.3117 9.06724C13.1885 8.98482 13.0925 8.86773 13.0358 8.73077C12.9791 8.5938 12.9642 8.44311 12.9931 8.29771C13.022 8.15231 13.0933 8.01873 13.1981 7.91384L14.8001 6.30984C13.3285 5.69362 11.6948 5.57998 10.1521 5.98654C8.60941 6.3931 7.2439 7.29716 6.26718 8.55859C5.29047 9.82003 4.75711 11.3684 4.74976 12.9637C4.7424 14.5591 5.26146 16.1123 6.2265 17.3827C7.19154 18.6531 8.54866 19.5697 10.0875 19.9905C11.6264 20.4112 13.2611 20.3127 14.7383 19.71C16.2154 19.1074 17.4526 18.0344 18.258 16.6572C19.0634 15.2801 19.3921 13.6757 19.1931 12.0928C19.1724 11.8976 19.2292 11.702 19.3512 11.5482C19.4732 11.3943 19.6506 11.2945 19.8454 11.27C20.0402 11.2455 20.2368 11.2984 20.3931 11.4173C20.5493 11.5362 20.6527 11.7116 20.6811 11.9058C20.9245 13.842 20.5137 15.804 19.514 17.4799C18.5143 19.1558 16.9831 20.4494 15.1637 21.1551C13.3444 21.8608 11.3414 21.9381 9.47305 21.3746C7.60475 20.8112 5.9784 19.6394 4.85255 18.0456C3.72669 16.4517 3.16594 14.5272 3.25944 12.578C3.35295 10.6289 4.09533 8.76688 5.36859 7.28809C6.64184 5.8093 8.37288 4.79857 10.2865 4.41657C12.2002 4.03458 14.1866 4.30323 15.9301 5.17984L17.4401 3.66984C17.545 3.56512 17.6786 3.49384 17.824 3.46501C17.9694 3.43617 18.1211 3.45108 18.2581 3.50784Z"
            fill="white"
          />
        </svg>

        Restart
      </button>
    </section>
    <section class="section" v-if="currentStep === 21 && isError">
      <p class="mb-8">
        Oj, to sudoku nie wygląda na poprawnie rozwiązane, spróbujesz jeszcze
        raz?
      </p>
    </section>
    <section class="section" v-else-if="currentStep === 21">
      <p class="mb-8">
        Wow, pogłoski o Twoich umiejętnościach nie były przesadzone!
      </p>
      <p class="mb-8">Tymczasem możliwe, że docieracie właśnie na miejsce.</p>

      <p class="mb-8">Gdy wysiądziecie z samochodu, przejdź Dalej.</p>
    </section>
    <section class="section" v-if="currentStep === 22">
      <p class="mb-8">
        Legenda głosi, że nazwa mostu wywodzi się od diabła, który pojawia się
        tu czasem nocami. Dobrze więc, że jesteśmy tak wcześnie!
      </p>
      <p class="mb-8">
        Was jednak bardziej zainteresuje inna pogłoska mówiąca o tym, że w
        okolicy Diabelskiego Mostu zakopano ponoć skarb pamiętający czasy sprzed
        jego budowy.
      </p>

      <p class="mb-8">To jednak nie koniec historii, bowiem...</p>
    </section>
    <section class="section" v-if="currentStep === 23">
      <p class="mb-8">
        ... szansa na odnalezienie drogi do niego pojawia się jedynie raz do
        roku, właśnie 11 sierpnia!
      </p>
      <p class="mb-8">
        By to się udało trzeba ponoć dokładnie o godzinie
        {{
          new Date().toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit',
          })
        }}
        spojrzeć na most z miejsca oznaczonego symbolem diabła i - jeśli jest
        się tego godnym - ukaże się coś co nakieruje nas w poszukiwaniach.
      </p>

      <p class="mb-8">
        Pospieszcie się więc, możliwe że to Wasza jedyna okazja!
      </p>

      <h1 class="uppercase font-bold text-base mb-4">Zadanie</h1>
      <p class="mb-8">
        Za siedzeniem kierowcy znajdziesz narzędzia, które mogą się przydać.
        Następnie odnajdź symbol diabła i stań na nim. Spójrz na most. Upatruj
        znaku, który doprowadzi Was do celu.
      </p>
      <p>Przejdź Dalej dopiero gdy zostaniesz o to poproszona.</p>
    </section>
    <section class="section" v-if="currentStep === 24">
      <p class="mb-8">Gdzie może być ten skarb...?</p>
      <p class="mb-8">
        Wygląda na to, że nazwa którą usłyszałaś przez telefon to narazie jedyna
        poszlaka jaka nam została.
      </p>

      <p>Skierujcie swoje kroki w stronę Kładki.</p>
    </section>

    <section class="section" v-if="currentStep === 25">
      <p class="mb-8">
        Kładka nosi również inną, nieoficjalną nazwę - most Miłości.
      </p>
      <p class="mb-8">
        Stał się on miejscem dla wielu zakochanych, którzy przypinają tu kłódki
        z wygrawerowanymi inicjałami i wrzucają kluczyki do Wisły na znak
        nierozerwalnej miłości.
      </p>

      <h1 class="uppercase font-bold text-base mb-4">Zadanie</h1>
      <p class="mb-8">
        Wśród setek kłódek jest jedna, która należy do Was. Zakapturzona postać
        zdaje się spoglądać w jej kierunku. Odszukaj kłódkę i przejdź Dalej.
      </p>
    </section>
    <section class="section" v-if="currentStep === 26">
      <p class="mb-8">
        Kłódka stanowi symbol Waszej miłości i zaangażowania w jej rozwój.
      </p>
      <p class="mb-20">
        By ten symbol mógł stać się kompletny, czegoś tu chyba brakuje...
      </p>

      <p class="mb-8">Przejdź Dalej.</p>
    </section>
    <section class="section" v-if="currentStep === 27">
      <h1 class="uppercase font-bold text-base mb-4">Zadanie</h1>
      <p class="mb-8">
        Bartek jest w posiadaniu kluczyka do kłódki. Jeśli chcesz upewnij się,
        że do niej pasuje a następnie wyrzućcie go razem bezpowrotnie do wody.
      </p>
      <p class="mb-8">Gdy będziesz gotowa, przejdź Dalej.</p>
    </section>
    <section class="section" v-if="currentStep === 28">
      <p class="mb-8">
        Wygląda na to, że żadne wskazówki, legendy i poszlaki nie doprowadziły
        nas do skarbu. Może w tym wszystkim chodzi o coś zupełnie innego?
      </p>
      <p class="mb-8">
        Chyba musimy podejść do tego inaczej, czas więc zdać się na Twoją
        intuicję. Gdzie według Ciebie powinniśmy się teraz udać?
      </p>
      <label
        class="flex items-center justify-start mb-4 opacity-75 has-[:checked]:opacity-100"
      >
        <input
          class="mr-3 appearance-none block border bg-transparent size-4 rounded-full checked:bg-primary checked:border-none"
          type="radio"
          name="destination"
          value="A"
          id="A"
          v-model="radioInput"
        />
        Kameralne miejsce wśród drzew
      </label>
      <label
        class="flex items-center justify-start mb-12 opacity-75 has-[:checked]:opacity-100"
      >
        <input
          class="mr-3 appearance-none block border bg-transparent size-4 rounded-full checked:bg-primary checked:border-none"
          type="radio"
          name="destination"
          value="B"
          id="B"
          v-model="radioInput"
        />
        Wzgórze z widokiem na miasto
      </label>
      <h1 class="uppercase font-bold text-base mb-4">Zadanie</h1>
      <p class="mb-8">Wybierz jedno i przejdź Dalej</p>
    </section>
    <section class="section" v-if="currentStep === 29 && radioInput === 'A'">
      <p class="mb-8">
        Świetnie, niech tak będzie! Gdyby to ode mnie zależało - również tak bym
        wybrał!
      </p>
      <p class="mb-12">
        Wsiądźcie do auta, skierujcie się na ul. Rękawka i zaparkujcie w pobliżu
        pasów.
      </p>
      <p>Gdy to zrobicie, przejdź Dalej.</p>
    </section>
    <section class="section" v-if="currentStep === 29 && radioInput === 'B'">
      <p class="mb-8">
        Świetnie, niech tak będzie! Gdyby to ode mnie zależało - również tak bym
        wybrał!
      </p>
      <p class="mb-12">
        Wsiądźcie do auta, skierujcie się w okolice Alei pod Kopcem lub ul.
        Lanckorońskiej i zaparkujcie.
      </p>
      <p>Gdy to zrobicie, przejdź Dalej.</p>
    </section>
    <section class="section" v-if="currentStep === 30 && radioInput === 'A'">
      <h1 class="uppercase font-bold text-base mb-4">Zadanie</h1>
      <p class="mb-8">
        Zabierzcie z bagażnika koszyk oraz parasol. Niedaleko wspomnianych
        wcześniej pasów są schody w górę. Udajcie się tam by po chwili skręcić w
        lewo, na ścieżkę prowadzącą między drzewa.
      </p>
      <p class="mb-8">
        Gdy dotrzecie na otwartą przestrzeń i zobaczycie kościółek, będziecie na
        miejscu.
      </p>
      <p class="mb-8">
        Wybierz najbardziej dogodne dla Ciebie miejsce i zacznijcie piknik.
      </p>
      <p>Gdy wykonasz wszystkie powyższe polecenia, przejdź Dalej.</p>
    </section>
    <section class="section" v-if="currentStep === 30 && radioInput === 'B'">
      <h1 class="uppercase font-bold text-base mb-4">Zadanie</h1>
      <p class="mb-8">
        Zabierzcie z bagażnika koszyk oraz parasol i udajcie się na górę.
      </p>
      <p class="mb-12">
        Gdy tam dotrzecie, wybierz najbardziej dogodne dla Ciebie miejsce i
        zacznijcie piknik.
      </p>

      <p>Gdy wykonasz wszystkie powyższe polecenia, przejdź Dalej.</p>
    </section>
    <section class="section" v-if="currentStep === 31">
      <p class="mb-8">Czy na pewno zrealizowałaś wszystkie polecenia?</p>
    </section>
    <section class="section" v-if="currentStep === 32">
      <h1 class="text-2xl font-bold mb-8">Gratulacje!</h1>
      <p class="mb-8">
        Tym samym podołałaś wszystkim krokom i zadaniom przewidzianym w
        aplikacji!
      </p>
      <p class="mb-12">Możesz ją teraz opuścić.</p>

      <p class="mb-8">PS.</p>
      <p class="mb-8">
        W koszyku piknikowym znajduje coś przeznaczone wyłącznie dla Twoich rąk.
      </p>
      <p>Otwórz i przeczytaj wiadomość.</p>
    </section>

    <footer class="flex justify-between">
      <button
        @click="currentStep--"
        class="active:scale-90 transition-transform py-2 text-base px-6 rounded-full font-bold bg-transparent border text-white"
        :class="{ 'pointer-events-none opacity-30': currentStep === 0 }"
      >
        {{ backLabel }}
      </button>
      <button
        @click="currentStep++"
        class="active:scale-90 transition-transform py-2 text-base px-7 rounded-full font-bold bg-white text-brand"
        :class="{
          'pointer-events-none opacity-30':
            currentStep === 32 ||
            (currentStep === 9) & isError ||
            (currentStep === 14) & isError ||
            (currentStep === 17) & isError ||
            (currentStep === 21) & isError,
        }"
      >
        {{ goLabel }}
      </button>
    </footer>
  </main>
</template>

<style>
.section {
  @apply text-center leading-normal text-base;
}

.disabled {
  @apply pointer-events-none opacity-30;
}
</style>
