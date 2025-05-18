// --- Notification Utility ---
function showNotification(message) {
  const notifications = document.getElementById('notifications');
  const notification = document.createElement('div');
  notification.className = 'notification';
  notification.innerText = message;
  notifications.appendChild(notification);
  setTimeout(() => notification.remove(), 5000);
}

// --- Language Support ---
const translations = {
  ru: {
    login: "Вход",
    username: "Имя пользователя",
    password: "Пароль",
    loginBtn: "Войти",
    register: "Регистрация",
    invalidCredentials: "Неверные данные!",
    dashboard: "Панель",
    salesExpenses: "Продажи и расходы",
    customers: "Клиенты",
    tasks: "Задачи",
    analytics: "Аналитика",
    installments: "Рассрочка",
    warehouse: "Склад",
    logout: "Выйти",
    honeySold: "Продан мёд (кг)",
    beesSold: "Проданы пчёлы (шт)",
    totalSales: "Общие продажи (TJS)",
    totalExpenses: "Общие расходы (TJS)",
    netProfit: "Чистая прибыль (TJS)",
    pendingInstallments: "Ожидающие рассрочки",
    overdueTasks: "Просроченные задачи",
    addSale: "Добавить продажу",
    saleType: { honey: "Мёд (кг)", bees: "Пчёлы (шт)" },
    amount: "Количество",
    price: "Общая цена (TJS)",
    date: "Дата",
    selectCustomer: "Выберите клиента",
    payInstallment: "Оплата в рассрочку",
    addSaleBtn: "Добавить продажу",
    addExpense: "Добавить расход",
    description: "Описание",
    expenseType: { swinging: "Качка мёда", salary: "Зарплата", other: "Другое" },
    expenseAmount: "Сумма (TJS)",
    addExpenseBtn: "Добавить расход",
    salesHistory: "История продаж",
    expensesHistory: "История расходов",
    tableHeaders: {
      date: "Дата",
      type: "Тип",
      amount: "Количество",
      price: "Цена(TJS)",
      customer: "Клиент",
      installment: "Рассрочка",
      paid: "Оплачено",
      description: "Описание",
      purchases: "Покупки",
      payments: "Платежи",
      status: "Статус",
      task: "Задача",
      dueDate: "Срок",
      priority: "Приоритет",
      actions: "Действия",
      hives: "Ульи (шт)",
      honey: "Мёд (кг)"
    },
    addCustomer: "Добавить клиента",
    fullName: "Полное имя",
    phone: "Номер телефона",
    email: "Email",
    address: "Адрес",
    notes: "Заметки",
    addCustomerBtn: "Добавить клиента",
    customersPayments: "Клиенты и платежи",
    salesTrend: "Тренд продаж (Мёд и Пчёлы)",
    monthlySales: "Продажи за месяц",
    currentMonth: "Текущий месяц",
    monthlyReports: "Месячные/Годовые отчёты",
    pendingInstallmentsSection: "Ожидающие рассрочки",
    markPaid: "Отметить оплаченным",
    addTask: "Добавить задачу",
    taskDesc: "Описание задачи",
    priority: { low: "Низкий", medium: "Средний", high: "Высокий" },
    addTaskBtn: "Добавить задачу",
    tasksList: "Список задач",
    exportData: "Экспорт данных",
    search: "Поиск",
    warehouseStatus: "Состояние склада",
    addStock: "Добавить на склад",
    calculateProfit: "Калькулятор прибыли",
    generateReport: "Сгенерировать PDF",
    overduePayment: "Просроченный платеж",
    overdueTask: "Просроченная задача",
    registerUser: "Зарегистрировать пользователя",
    role: "Роль",
    admin: "Админ",
    beekeeper: "Пчеловод"
  },
  en: {
    login: "Login",
    username: "Username",
    password: "Password",
    loginBtn: "Login",
    register: "Register",
    invalidCredentials: "Invalid credentials!",
    dashboard: "Dashboard",
    salesExpenses: "Sales & Expenses",
    customers: "Customers",
    tasks: "Tasks",
    analytics: "Analytics",
    installments: "Installments",
    warehouse: "Warehouse",
    logout: "Logout",
    honeySold: "Honey Sold (kg)",
    beesSold: "Bees Sold (units)",
    totalSales: "Total Sales (TJS)",
    totalExpenses: "Total Expenses (TJS)",
    netProfit: "Net Profit (TJS)",
    pendingInstallments: "Pending Installments",
    overdueTasks: "Overdue Tasks",
    addSale: "Add Sale",
    saleType: { honey: "Honey (kg)", bees: "Bees (units)" },
    amount: "Amount",
    price: "Total Price (TJS)",
    date: "Date",
    selectCustomer: "Select Customer",
    payInstallment: "Pay by Installment",
    addSaleBtn: "Add Sale",
    addExpense: "Add Expense",
    description: "Description",
    expenseType: { swinging: "Honey Extraction", salary: "Salary", other: "Other" },
    expenseAmount: "Amount (TJS)",
    addExpenseBtn: "Add Expense",
    salesHistory: "Sales History",
    expensesHistory: "Expenses History",
    tableHeaders: {
      date: "Date",
      type: "Type",
      amount: "Amount",
      price: "Price (TJS)",
      customer: "Customer",
      installment: "Installment",
      paid: "Paid",
      description: "Description",
      purchases: "Purchases",
      payments: "Payments",
      status: "Status",
      task: "Task",
      dueDate: "Due Date",
      priority: "Priority",
      actions: "Actions",
      hives: "Hives (units)",
      honey: "Honey (kg)"
    },
    addCustomer: "Add Customer",
    fullName: "Full Name",
    phone: "Phone Number",
    email: "Email",
    address: "Address",
    notes: "Notes",
    addCustomerBtn: "Add Customer",
    customersPayments: "Customers & Payments",
    salesTrend: "Sales Trend (Honey & Bees)",
    monthlySales: "Monthly Sales",
    currentMonth: "Current Month",
    monthlyReports: "Monthly/Yearly Reports",
    pendingInstallmentsSection: "Pending Installments",
    markPaid: "Mark as Paid",
    addTask: "Add Task",
    taskDesc: "Task Description",
    priority: { low: "Low", medium: "Medium", high: "High" },
    addTaskBtn: "Add Task",
    tasksList: "Tasks List",
    exportData: "Export Data",
    search: "Search",
    warehouseStatus: "Warehouse Status",
    addStock: "Add to Stock",
    calculateProfit: "Profit Calculator",
    generateReport: "Generate PDF",
    overduePayment: "Overdue Payment",
    overdueTask: "Overdue Task",
    registerUser: "Register User",
    role: "Role",
    admin: "Admin",
    beekeeper: "Beekeeper"
  }
};

// --- State ---
let currentLang = 'ru';
let currentUser = null;
let currentSection = 'dashboard';
const data = {
  users: loadData('users', [
    { username: "admin", password: "admin123", role: "admin", name: "Администратор" },
    { username: "beekeeper", password: "bee456", role: "beekeeper", name: "Пчеловод Иван" }
  ]),
  sales: loadData('sales', [
    { id: 1, type: "honey", amount: 25, price: 150, date: "2025-05-10", customerId: 1, installment: false, paid: true },
    { id: 2, type: "bees", amount: 10, price: 300, date: "2025-05-12", customerId: 2, installment: true, paid: false, dueDate: "2025-11-12" }
  ]),
  expenses: loadData('expenses', [
    { id: 1, desc: "Расходы на качку меда", type: "swinging", amount: 60, date: "2025-05-08" },
    { id: 2, desc: "Зарплата за май", type: "salary", amount: 200, date: "2025-05-01" }
  ]),
  customers: loadData('customers', [
    { id: 1, name: "Алиса Смирнова", phone: "998-123-4567", email: "alice@example.com", address: "Душанбе", notes: "", pays: [{ saleId: 1, amount: 150, date: "2025-05-10" }] },
    { id: 2, name: "Борис Пчелин", phone: "998-333-2222", email: "boris@example.com", address: "Худжанд", notes: "", pays: [] }
  ]),
  tasks: loadData('tasks', [
    { id: 1, desc: "Проверить ульи", dueDate: "2025-05-20", priority: "high", completed: false },
    { id: 2, desc: "Связаться с Алисой", dueDate: "2025-05-15", priority: "medium", completed: false }
  ]),
  warehouse: loadData('warehouse', { hives: 100, honey: 5000 }), // Initial stock
  saleIdSeq: loadData('saleIdSeq', 3),
  expenseIdSeq: loadData('expenseIdSeq', 3),
  customerIdSeq: loadData('customerIdSeq', 3),
  taskIdSeq: loadData('taskIdSeq', 3)
};

// --- LocalStorage Handling ---
function loadData(key, defaultValue) {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : defaultValue;
}

function saveData(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

// --- Theme and Language ---
document.getElementById('themeSwitch').addEventListener('change', (e) => {
  document.body.className = `${e.target.value}-theme`;
  document.getElementById('themeToggle').innerHTML = e.target.value === 'dark' ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
});

document.getElementById('languageSwitch').addEventListener('change', (e) => {
  currentLang = e.target.value;
  renderCurrentSection();
});

// --- Authentication ---
function login() {
  const username = document.getElementById("loginUsername").value.trim();
  const password = document.getElementById("loginPassword").value;
  const user = data.users.find(u => u.username === username && u.password === password);
  const errorEl = document.getElementById("loginError");
  if (user) {
    currentUser = user;
    document.getElementById("loginSection").style.display = "none";
    document.getElementById("dashboardSection").style.display = "block";
    renderDashboard();
    showSection('dashboard');
    checkOverdue();
    errorEl.innerText = "";
  } else {
    errorEl.innerText = translations[currentLang].invalidCredentials;
    errorEl.classList.add('shake');
    setTimeout(() => errorEl.classList.remove('shake'), 300);
  }
}

function showRegisterForm() {
  if (currentUser?.role !== 'admin') {
    showNotification(translations[currentLang].registerUser + ': ' + translations[currentLang].admin);
    return;
  }
  openModal(`
    <h2>${translations[currentLang].registerUser}</h2>
    <form class="form-section" onsubmit="event.preventDefault(); registerUser();">
      <input type="text" id="regUsername" placeholder="${translations[currentLang].username}" required>
      <input type="password" id="regPassword" placeholder="${translations[currentLang].password}" required>
      <input type="text" id="regName" placeholder="${translations[currentLang].fullName}" required>
      <select id="regRole" required>
        <option value="admin">${translations[currentLang].admin}</option>
        <option value="beekeeper">${translations[currentLang].beekeeper}</option>
      </select>
      <button type="submit">${translations[currentLang].register} <i class="fas fa-user-plus"></i></button>
    </form>
  `);
}

function registerUser() {
  const username = document.getElementById("regUsername").value.trim();
  const password = document.getElementById("regPassword").value;
  const name = document.getElementById("regName").value.trim();
  const role = document.getElementById("regRole").value;
  if (!username || !password || !name || !role) return;
  if (data.users.find(u => u.username === username)) {
    showNotification('Пользователь уже существует!');
    return;
  }
  data.users.push({ username, password, role, name });
  saveData('users', data.users);
  closeModal();
  showNotification('Пользователь успешно зарегистрирован!');
}

function logout() {
  currentUser = null;
  document.getElementById("dashboardSection").style.display = "none";
  document.getElementById("loginSection").style.display = "block";
  document.getElementById("loginUsername").value = "";
  document.getElementById("loginPassword").value = "";
}

// --- Modal Handling ---
function openModal(content) {
  document.getElementById("modalBody").innerHTML = content;
  document.getElementById("modal").style.display = "flex";
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
  document.getElementById("modalBody").innerHTML = "";
}

// --- Navigation ---
function showSection(section) {
  if (section === 'analytics' && currentUser?.role !== 'admin') {
    showNotification('Доступ к аналитике только для админа!');
    return;
  }
  currentSection = section;
  document.querySelectorAll(".nav button").forEach(btn => btn.classList.remove("active"));
  document.getElementById(`${section}Btn`).classList.add("active");
  renderCurrentSection();
}

function renderCurrentSection() {
  if (currentSection === 'dashboard') {
    renderDashboard();
    document.getElementById("sectionContents").innerHTML = "";
  } else if (currentSection === 'sales') {
    renderSalesSection();
  } else if (currentSection === 'customers') {
    renderCustomersSection();
  } else if (currentSection === 'tasks') {
    renderTasksSection();
  } else if (currentSection === 'analytics') {
    renderAnalyticsSection();
  } else if (currentSection === 'installments') {
    renderInstallmentsSection();
  } else if (currentSection === 'warehouse') {
    renderWarehouseSection();
  }
}

// --- Dashboard ---
function renderDashboard() {
  const honeySold = data.sales.filter(s => s.type === "honey").reduce((acc, s) => acc + s.amount, 0);
  const beesSold = data.sales.filter(s => s.type === "bees").reduce((acc, s) => acc + s.amount, 0);
  const totalSales = data.sales.reduce((acc, s) => acc + s.price, 0);
  const totalExpenses = data.expenses.reduce((acc, e) => acc + e.amount, 0);
  const netProfit = totalSales - totalExpenses;
  const pendingInstallments = data.sales.filter(s => s.installment && !s.paid).length;
  const overdueTasks = data.tasks.filter(t => !t.completed && new Date(t.dueDate) < new Date()).length;
  document.getElementById("dashboard").innerHTML = `
    <div class="card"><div class="card-title">${translations[currentLang].honeySold}</div><div class="card-value">${honeySold}</div></div>
    <div class="card"><div class="card-title">${translations[currentLang].beesSold}</div><div class="card-value">${beesSold}</div></div>
    <div class="card"><div class="card-title">${translations[currentLang].totalSales}</div><div class="card-value">${totalSales}</div></div>
    <div class="card"><div class="card-title">${translations[currentLang].totalExpenses}</div><div class="card-value">${totalExpenses}</div></div>
    <div class="card"><div class="card-title">${translations[currentLang].netProfit}</div><div class="card-value">${netProfit}</div></div>
    <div class="card"><div class="card-title">${translations[currentLang].pendingInstallments}</div><div class="card-value">${pendingInstallments}</div></div>
    <div class="card"><div class="card-title">${translations[currentLang].overdueTasks}</div><div class="card-value">${overdueTasks}</div></div>
  `;
}

// --- Sales & Expenses ---
function renderSalesSection() {
  let html = `
    <div class="section-title">${translations[currentLang].salesHistory}</div>
    <button onclick="openSaleForm()">+ ${translations[currentLang].addSale}</button>
    <input type="text" id="salesSearch" placeholder="${translations[currentLang].search}" oninput="renderSalesSection()">
    <select id="salesSort" onchange="renderSalesSection()">
      <option value="date-desc">Дата (убыв.)</option>
      <option value="date-asc">Дата (возр.)</option>
      <option value="price-desc">Цена (убыв.)</option>
      <option value="price-asc">Цена (возр.)</option>
    </select>
    <table class="data-table">
      <tr>
        <th>${translations[currentLang].tableHeaders.date}</th>
        <th>${translations[currentLang].tableHeaders.type}</th>
        <th>${translations[currentLang].tableHeaders.amount}</th>
        <th>${translations[currentLang].tableHeaders.price}</th>
        <th>${translations[currentLang].tableHeaders.customer}</th>
        <th>${translations[currentLang].tableHeaders.installment}</th>
        <th>${translations[currentLang].tableHeaders.paid}</th>
      </tr>
      ${filterSales().map(s => `
        <tr>
          <td>${s.date}</td>
          <td>${translations[currentLang].saleType[s.type]}</td>
          <td>${s.amount}</td>
          <td>${s.price} TJS</td>
          <td>${getCustomerName(s.customerId)}</td>
          <td>${s.installment ? 'Да' : 'Нет'}</td>
          <td>${s.paid ? 'Да' : 'Нет'}</td>
        </tr>
      `).join('')}
    </table>
    <div class="section-title">${translations[currentLang].expensesHistory}</div>
    <button onclick="openExpenseForm()">+ ${translations[currentLang].addExpense}</button>
    <input type="text" id="expensesSearch" placeholder="${translations[currentLang].search}" oninput="renderSalesSection()">
    <table class="data-table">
      <tr>
        <th>${translations[currentLang].tableHeaders.date}</th>
        <th>${translations[currentLang].tableHeaders.description}</th>
        <th>${translations[currentLang].tableHeaders.type}</th>
        <th>${translations[currentLang].tableHeaders.amount}</th>
      </tr>
      ${filterExpenses().map(e => `
        <tr>
          <td>${e.date}</td>
          <td>${e.desc}</td>
          <td>${translations[currentLang].expenseType[e.type]}</td>
          <td>${e.amount} TJS</td>
        </tr>
      `).join('')}
    </table>
    <button onclick="exportData('sales')">${translations[currentLang].exportData}</button>
    <button onclick="exportData('expenses')">${translations[currentLang].exportData}</button>
  `;
  document.getElementById("sectionContents").innerHTML = html;
}

function filterSales() {
  const search = document.getElementById("salesSearch")?.value.toLowerCase() || "";
  const sort = document.getElementById("salesSort")?.value || "date-desc";
  let filtered = data.sales.filter(s =>
    getCustomerName(s.customerId).toLowerCase().includes(search) ||
    translations[currentLang].saleType[s.type].toLowerCase().includes(search) ||
    s.date.includes(search)
  );
  if (sort === 'date-asc') filtered.sort((a, b) => new Date(a.date) - new Date(b.date));
  else if (sort === 'date-desc') filtered.sort((a, b) => new Date(b.date) - new Date(a.date));
  else if (sort === 'price-asc') filtered.sort((a, b) => a.price - b.price);
  else if (sort === 'price-desc') filtered.sort((a, b) => b.price - a.price);
  return filtered;
}

function filterExpenses() {
  const search = document.getElementById("expensesSearch")?.value.toLowerCase() || "";
  return data.expenses.filter(e =>
    e.desc.toLowerCase().includes(search) ||
    translations[currentLang].expenseType[e.type].toLowerCase().includes(search) ||
    e.date.includes(search)
  );
}

function openSaleForm() {
  openModal(`
    <h2>${translations[currentLang].addSale}</h2>
    <form class="form-section" onsubmit="event.preventDefault(); addSale();">
      <select id="saleType" required>
        <option value="honey">${translations[currentLang].saleType.honey}</option>
        <option value="bees">${translations[currentLang].saleType.bees}</option>
      </select>
      <input type="number" id="saleAmount" min="1" placeholder="${translations[currentLang].amount}" required>
      <input type="number" id="salePrice" min="1" placeholder="${translations[currentLang].price}" required>
      <input type="date" id="saleDate" required>
      <select id="saleCustomer" required>
        <option value="">${translations[currentLang].selectCustomer}</option>
        ${data.customers.map(c => `<option value="${c.id}">${c.name}</option>`).join('')}
      </select>
      <label><input type="checkbox" id="saleInstallment">${translations[currentLang].payInstallment}</label>
      <input type="date" id="saleDueDate" placeholder="Срок платежа" style="display:none;">
      <button type="submit">${translations[currentLang].addSaleBtn} <i class="fas fa-plus"></i></button>
    </form>
    <script>
      document.getElementById('saleInstallment').addEventListener('change', () => {
        document.getElementById('saleDueDate').style.display = document.getElementById('saleInstallment').checked ? 'block' : 'none';
      });
    </script>
  `);
}

function addSale() {
  const type = document.getElementById("saleType").value;
  const amount = +document.getElementById("saleAmount").value;
  const price = +document.getElementById("salePrice").value;
  const date = document.getElementById("saleDate").value;
  const customerId = +document.getElementById("saleCustomer").value;
  const installment = document.getElementById("saleInstallment").checked;
  const dueDate = document.getElementById("saleDueDate").value;
  if (!type || !amount || !price || !date || !customerId || (installment && !dueDate)) return;
  data.sales.push({ id: data.saleIdSeq++, type, amount, price, date, customerId, installment, paid: !installment, dueDate: installment ? dueDate : null });
  if (type === 'honey') data.warehouse.honey -= amount;
  else if (type === 'bees') data.warehouse.hives -= amount;
  saveData('sales', data.sales);
  saveData('saleIdSeq', data.saleIdSeq);
  saveData('warehouse', data.warehouse);
  closeModal();
  renderSalesSection();
  renderDashboard();
  showNotification('Продажа добавлена!');
}

function openExpenseForm() {
  openModal(`
    <h2>${translations[currentLang].addExpense}</h2>
    <form class="form-section" onsubmit="event.preventDefault(); addExpense();">
      <input type="text" id="expenseDesc" placeholder="${translations[currentLang].description}" required>
      <select id="expenseType" required>
        <option value="swinging">${translations[currentLang].expenseType.swinging}</option>
        <option value="salary">${translations[currentLang].expenseType.salary}</option>
        <option value="other">${translations[currentLang].expenseType.other}</option>
      </select>
      <input type="number" id="expenseAmount" min="1" placeholder="${translations[currentLang].expenseAmount}" required>
      <input type="date" id="expenseDate" required>
      <button type="submit">${translations[currentLang].addExpenseBtn} <i class="fas fa-plus"></i></button>
    </form>
  `);
}

function addExpense() {
  const desc = document.getElementById("expenseDesc").value.trim();
  const type = document.getElementById("expenseType").value;
  const amount = +document.getElementById("expenseAmount").value;
  const date = document.getElementById("expenseDate").value;
  if (!desc || !type || !amount || !date) return;
  data.expenses.push({ id: data.expenseIdSeq++, desc, type, amount, date });
  saveData('expenses', data.expenses);
  saveData('expenseIdSeq', data.expenseIdSeq);
  closeModal();
  renderSalesSection();
  renderDashboard();
  showNotification('Расход добавлен!');
}

function getCustomerName(customerId) {
  const customer = data.customers.find(c => c.id === customerId);
  return customer ? customer.name : 'Неизвестно';
}

function exportData(type) {
  const dataToExport = type === 'sales' ? data.sales : data.expenses;
  const csv = type === 'sales' ?
    ['Дата,Тип,Количество,Цена,Клиент,Рассрочка,Оплачено',
      ...dataToExport.map(s => `${s.date},${translations[currentLang].saleType[s.type]},${s.amount},${s.price},${getCustomerName(s.customerId)},${s.installment ? 'Да' : 'Нет'},${s.paid ? 'Да' : 'Нет'}`)].join('\n') :
    ['Дата,Описание,Тип,Сумма',
      ...dataToExport.map(e => `${e.date},${e.desc},${translations[currentLang].expenseType[e.type]},${e.amount}`)].join('\n');
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = `${type}_${new Date().toISOString().slice(0, 10)}.csv`;
  link.click();
}

// --- Customers ---
function renderCustomersSection() {
  let html = `
    <div class="section-title">${translations[currentLang].customersPayments}</div>
    <button onclick="openCustomerForm()">+ ${translations[currentLang].addCustomer}</button>
    <input type="text" id="customersSearch" placeholder="${translations[currentLang].search}" oninput="renderCustomersSection()">
    <table class="data-table">
      <tr>
        <th>${translations[currentLang].tableHeaders.fullName}</th>
        <th>${translations[currentLang].tableHeaders.phone}</th>
        <th>${translations[currentLang].tableHeaders.email}</th>
        <th>${translations[currentLang].tableHeaders.address}</th>
        <th>${translations[currentLang].tableHeaders.purchases}</th>
        <th>${translations[currentLang].tableHeaders.payments}</th>
        <th>${translations[currentLang].tableHeaders.actions}</th>
      </tr>
      ${filterCustomers().map(c => `
        <tr>
          <td>${c.name}</td>
          <td>${c.phone}</td>
          <td>${c.email}</td>
          <td><a href="#" onclick="showCustomerMap('${c.address}')">${c.address}</a></td>
          <td>${data.sales.filter(s => s.customerId === c.id).length}</td>
          <td>${c.pays.reduce((acc, p) => acc + p.amount, 0)} TJS</td>
          <td><button onclick="deleteCustomer(${c.id})"><i class="fas fa-trash"></i></button></td>
        </tr>
      `).join('')}
    </table>
    <button onclick="exportData('customers')">${translations[currentLang].exportData}</button>
  `;
  document.getElementById("sectionContents").innerHTML = html;
}

function filterCustomers() {
  const search = document.getElementById("customersSearch")?.value.toLowerCase() || "";
  return data.customers.filter(c =>
    c.name.toLowerCase().includes(search) ||
    c.phone.includes(search) ||
    c.email.toLowerCase().includes(search) ||
    c.address.toLowerCase().includes(search)
  );
}

function openCustomerForm() {
  openModal(`
    <h2>${translations[currentLang].addCustomer}</h2>
    <form class="form-section" onsubmit="event.preventDefault(); addCustomer();">
      <input type="text" id="customerName" placeholder="${translations[currentLang].fullName}" required>
      <input type="tel" id="customerPhone" placeholder="${translations[currentLang].phone}" required>
      <input type="email" id="customerEmail" placeholder="${translations[currentLang].email}">
      <input type="text" id="customerAddress" placeholder="${translations[currentLang].address}" required>
      <textarea id="customerNotes" placeholder="${translations[currentLang].notes}"></textarea>
      <button type="submit">${translations[currentLang].addCustomerBtn} <i class="fas fa-plus"></i></button>
    </form>
  `);
}

function addCustomer() {
  const name = document.getElementById("customerName").value.trim();
  const phone = document.getElementById("customerPhone").value.trim();
  const email = document.getElementById("customerEmail").value.trim();
  const address = document.getElementById("customerAddress").value.trim();
  const notes = document.getElementById("customerNotes").value.trim();
  if (!name || !phone || !address) return;
  data.customers.push({ id: data.customerIdSeq++, name, phone, email, address, notes, pays: [] });
  saveData('customers', data.customers);
  saveData('customerIdSeq', data.customerIdSeq);
  closeModal();
  renderCustomersSection();
  showNotification('Клиент добавлен!');
}

function deleteCustomer(id) {
  if (data.sales.some(s => s.customerId === id)) {
    showNotification('Нельзя удалить клиента с активными продажами!');
    return;
  }
  data.customers = data.customers.filter(c => c.id !== id);
  saveData('customers', data.customers);
  renderCustomersSection();
  showNotification('Клиент удален!');
}

// --- Tasks ---
function renderTasksSection() {
  let html = `
    <div class="section-title">${translations[currentLang].tasksList}</div>
    <button onclick="openTaskForm()">+ ${translations[currentLang].addTask}</button>
    <input type="text" id="tasksSearch" placeholder="${translations[currentLang].search}" oninput="renderTasksSection()">
    <table class="data-table">
      <tr>
        <th>${translations[currentLang].tableHeaders.task}</th>
        <th>${translations[currentLang].tableHeaders.dueDate}</th>
        <th>${translations[currentLang].tableHeaders.priority}</th>
        <th>${translations[currentLang].tableHeaders.status}</th>
        <th>${translations[currentLang].tableHeaders.actions}</th>
      </tr>
      ${filterTasks().map(t => `
        <tr>
          <td>${t.desc}</td>
          <td>${t.dueDate}</td>
          <td>${translations[currentLang].priority[t.priority]}</td>
          <td>${t.completed ? 'Выполнено' : (new Date(t.dueDate) < new Date() ? 'Просрочено' : 'В процессе')}</td>
          <td>
            <button onclick="toggleTask(${t.id})"><i class="fas ${t.completed ? 'fa-undo' : 'fa-check'}"></i></button>
            <button onclick="deleteTask(${t.id})"><i class="fas fa-trash"></i></button>
          </td>
        </tr>
      `).join('')}
    </table>
    <button onclick="exportData('tasks')">${translations[currentLang].exportData}</button>
  `;
  document.getElementById("sectionContents").innerHTML = html;
}

function filterTasks() {
  const search = document.getElementById("tasksSearch")?.value.toLowerCase() || "";
  return data.tasks.filter(t =>
    t.desc.toLowerCase().includes(search) ||
    t.dueDate.includes(search) ||
    translations[currentLang].priority[t.priority].toLowerCase().includes(search)
  );
}

function openTaskForm() {
  openModal(`
    <h2>${translations[currentLang].addTask}</h2>
    <form class="form-section" onsubmit="event.preventDefault(); addTask();">
      <input type="text" id="taskDesc" placeholder="${translations[currentLang].taskDesc}" required>
      <input type="date" id="taskDueDate" required>
      <select id="taskPriority" required>
        <option value="low">${translations[currentLang].priority.low}</option>
        <option value="medium">${translations[currentLang].priority.medium}</option>
        <option value="high">${translations[currentLang].priority.high}</option>
      </select>
      <button type="submit">${translations[currentLang].addTaskBtn} <i class="fas fa-plus"></i></button>
    </form>
  `);
}

function addTask() {
  const desc = document.getElementById("taskDesc").value.trim();
  const dueDate = document.getElementById("taskDueDate").value;
  const priority = document.getElementById("taskPriority").value;
  if (!desc || !dueDate || !priority) return;
  data.tasks.push({ id: data.taskIdSeq++, desc, dueDate, priority, completed: false });
  saveData('tasks', data.tasks);
  saveData('taskIdSeq', data.taskIdSeq);
  closeModal();
  renderTasksSection();
  showNotification('Задача добавлена!');
}

function toggleTask(id) {
  const task = data.tasks.find(t => t.id === id);
  task.completed = !task.completed;
  saveData('tasks', data.tasks);
  renderTasksSection();
  renderDashboard();
  showNotification(task - 1 ? 'Задача отмечена как выполненная!' : 'Задача возвращена в работу!');
}

function deleteTask(id) {
  data.tasks = data.tasks.filter(t => t.id !== id);
  saveData('tasks', data.tasks);
  renderTasksSection();
  showNotification('Задача удалена!');
}

// --- Analytics ---
function renderAnalyticsSection() {
  let html = `
    <div class="section-title">${translations[currentLang].salesTrend}</div>
    <canvas id="salesTrendChart"></canvas>
    <div class="section-title">${translations[currentLang].monthlySales}</div>
    <canvas id="monthlySalesChart"></canvas>
    <div class="section-title">${translations[currentLang].monthlyReports}</div>
    <table class="data-table">
      <tr>
        <th>${translations[currentLang].tableHeaders.date}</th>
        <th>${translations[currentLang].totalSales}</th>
        <th>${translations[currentLang].totalExpenses}</th>
        <th>${translations[currentLang].netProfit}</th>
        <th>${translations[currentLang].tableHeaders.status}</th>
      </tr>
      ${generateMonthlyReports().map(r => `
        <tr>
          <td>${r.month}</td>
          <td>${r.sales} TJS</td>
          <td>${r.expenses} TJS</td>
          <td>${r.profit} TJS</td>
          <td>${r.profit >= 0 ? 'Прибыль' : 'Убыток'}</td>
        </tr>
      `).join('')}
    </table>
    <button onclick="generatePDF('analytics')">${translations[currentLang].generateReport}</button>
  `;
  document.getElementById("sectionContents").innerHTML = html;

  const salesData = {
    labels: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май'],
    datasets: [
      {
        label: translations[currentLang].saleType.honey,
        data: [50, 60, 45, 70, 25],
        borderColor: '#f9a602',
        fill: false
      },
      {
        label: translations[currentLang].saleType.bees,
        data: [10, 15, 8, 12, 10],
        borderColor: '#ffb92d',
        fill: false
      }
    ]
  };

  new Chart(document.getElementById('salesTrendChart').getContext('2d'), {
    type: 'line',
    data: salesData,
    options: { responsive: true }
  });

  const monthlySales = {
    labels: [translations[currentLang].currentMonth],
    datasets: [{
      label: translations[currentLang].monthlySales,
      data: [data.sales.reduce((acc, s) => acc + s.price, 0)],
      backgroundColor: '#f9a602'
    }]
  };

  new Chart(document.getElementById('monthlySalesChart').getContext('2d'), {
    type: 'bar',
    data: monthlySales,
    options: { responsive: true }
  });
}

function generateMonthlyReports() {
  const reports = [];
  const months = ['2025-01', '2025-02', '2025-03', '2025-04', '2025-05'];
  months.forEach(month => {
    const sales = data.sales.filter(s => s.date.startsWith(month)).reduce((acc, s) => acc + s.price, 0);
    const expenses = data.expenses.filter(e => e.date.startsWith(month)).reduce((acc, e) => acc + e.amount, 0);
    const profit = sales - expenses;
    reports.push({ month: month, sales, expenses, profit });
  });
  return reports;
}

// --- Installments ---
function renderInstallmentsSection() {
  let html = `
    <div class="section-title">${translations[currentLang].pendingInstallmentsSection}</div>
    <table class="data-table">
      <tr>
        <th>${translations[currentLang].tableHeaders.customer}</th>
        <th>${translations[currentLang].tableHeaders.date}</th>
        <th>${translations[currentLang].tableHeaders.amount}</th>
        <th>${translations[currentLang].tableHeaders.dueDate}</th>
        <th>${translations[currentLang].tableHeaders.actions}</th>
      </tr>
      ${data.sales.filter(s => s.installment && !s.paid).map(s => `
        <tr>
          <td>${getCustomerName(s.customerId)}</td>
          <td>${s.date}</td>
          <td>${s.price} TJS</td>
          <td>${s.dueDate}</td>
          <td><button onclick="markPaid(${s.id})">${translations[currentLang].markPaid}</button></td>
        </tr>
      `).join('')}
    </table>
  `;
  document.getElementById("sectionContents").innerHTML = html;
}

function markPaid(id) {
  const sale = data.sales.find(s => s.id === id);
  sale.paid = true;
  const customer = data.customers.find(c => c.id === sale.customerId);
  customer.pays.push({ saleId: id, amount: sale.price, date: new Date().toISOString().slice(0, 10) });
  saveData('sales', data.sales);
  saveData('customers', data.customers);
  renderInstallmentsSection();
  renderDashboard();
  showNotification('Платеж отмечен как оплаченный!');
}

// --- Warehouse ---
function renderWarehouseSection() {
  let html = `
    <div class="section-title">${translations[currentLang].warehouseStatus}</div>
    <div class="card">
      <div class="card-title">${translations[currentLang].tableHeaders.hives}</div>
      <div class="card-value">${data.warehouse.hives}</div>
    </div>
    <div class="card">
      <div class="card-title">${translations[currentLang].tableHeaders.honey}</div>
      <div class="card-value">${data.warehouse.honey} кг (${(data.warehouse.honey / 1000).toFixed(2)} т)</div>
    </div>
    <button onclick="openStockForm()">+ ${translations[currentLang].addStock}</button>
    <button onclick="openProfitCalculator()">${translations[currentLang].calculateProfit}</button>
  `;
  document.getElementById("sectionContents").innerHTML = html;
}

function openStockForm() {
  openModal(`
    <h2>${translations[currentLang].addStock}</h2>
    <form class="form-section" onsubmit="event.preventDefault(); addStock();">
      <input type="number" id="stockHives" min="0" placeholder="${translations[currentLang].tableHeaders.hives}">
      <input type="number" id="stockHoney" min="0" placeholder="${translations[currentLang].tableHeaders.honey}">
      <button type="submit">${translations[currentLang].addStock} <i class="fas fa-plus"></i></button>
    </form>
  `);
}

function addStock() {
  const hives = +document.getElementById("stockHives").value || 0;
  const honey = +document.getElementById("stockHoney").value || 0;
  data.warehouse.hives += hives;
  data.warehouse.honey += honey;
  saveData('warehouse', data.warehouse);
  closeModal();
  renderWarehouseSection();
  showNotification('Склад обновлен!');
}

function openProfitCalculator() {
  openModal(`
    <h2>${translations[currentLang].calculateProfit}</h2>
    <form class="form-section" onsubmit="event.preventDefault(); calculateProfit();">
      <input type="number" id="calcHoney" min="0" placeholder="Мёд (кг)">
      <input type="number" id="calcHoneyPrice" min="0" placeholder="Цена за кг (TJS)">
      <input type="number" id="calcBees" min="0" placeholder="Пчёлы (шт)">
      <input type="number" id="calcBeesPrice" min="0" placeholder="Цена за семью (TJS)">
      <input type="number" id="calcExpenses" min="0" placeholder="Расходы (TJS)">
      <button type="submit">Рассчитать <i class="fas fa-calculator"></i></button>
    </form>
    <div id="calcResult"></div>
  `);
}

function calculateProfit() {
  const honey = +document.getElementById("calcHoney").value || 0;
  const honeyPrice = +document.getElementById("calcHoneyPrice").value || 0;
  const bees = +document.getElementById("calcBees").value || 0;
  const beesPrice = +document.getElementById("calcBeesPrice").value || 0;
  const expenses = +document.getElementById("calcExpenses").value || 0;
  const revenue = (honey * honeyPrice) + (bees * beesPrice);
  const profit = revenue - expenses;
  document.getElementById("calcResult").innerHTML = `
    <div>Доход: ${revenue} TJS</div>
    <div>Прибыль: ${profit} TJS</div>
  `;
}

// --- Notifications ---
function checkOverdue() {
  data.sales.forEach(s => {
    if (s.installment && !s.paid && new Date(s.dueDate) < new Date()) {
      showNotification(`${translations[currentLang].overduePayment}: ${getCustomerName(s.customerId)} (${s.price} TJS)`);
    }
  });
  data.tasks.forEach(t => {
    if (!t.completed && new Date(t.dueDate) < new Date()) {
      showNotification(`${translations[currentLang].overdueTask}: ${t.desc}`);
    }
  });
}

// --- PDF Reports ---
function generatePDF(section) {
  const element = document.getElementById(section === 'analytics' ? 'sectionContents' : 'dashboard');
  html2pdf().from(element).save(`${section}_${new Date().toISOString().slice(0, 10)}.pdf`);
}

// --- Map ---
function showCustomerMap(address) {
  openModal(`
    <h2>Карта клиента</h2>
    <div id="map"></div>
  `);
  setTimeout(() => {
    const map = L.map('map').setView([38.573, 68.786], 13); // Dushanbe coordinates
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(map);
    L.marker([38.573, 68.786]).addTo(map).bindPopup(address).openPopup();
  }, 100);
}