import './styles.css';

//Task 1
// import './task1';

//Task 2.1
// import './task2.1';

//Task 2.2
// import './task2.2';

//Task 2.3
// import './task2.3';

//Task 3
import Timer from './task3';
const spanRef = document.querySelectorAll('span');
const finishDay = new Date('September 28, 2021 07:00:00');
const timer = new Timer(finishDay, spanRef);
timer.setDate();


