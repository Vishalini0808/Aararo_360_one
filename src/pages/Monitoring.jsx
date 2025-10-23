import React, { useState, useEffect } from 'react';
import './Monitoring.css';

const Monitoring = () => {
  const [activeTab, setActiveTab] = useState('pregnancy');
  const [babyData, setBabyData] = useState([]);

  // Pregnancy Health Tracking Data
  const [pregnancyData, setPregnancyData] = useState({
    weight: [],
    bloodPressure: [],
    bloodSugar: [],
    hemoglobin: [],
    heartRate: [],
    sleep: [],
    nutrition: [],
    waterIntake: 0,
    mood: '',
    exercise: [],
    medicalRecords: [],
    ultrasound: [],
    prescriptions: [],
    vaccinations: []
  });

  // Baby Monitoring Data
  const [babyMonitoring, setBabyMonitoring] = useState({
    weight: [],
    height: [],
    headCircumference: [],
    feeding: [],
    sleep: [],
    vaccinations: [],
    temperature: [],
    milestones: [],
    symptoms: []
  });

  // Load baby data from localStorage
  useEffect(() => {
    const savedBabyData = localStorage.getItem('babyData');
    if (savedBabyData) {
      setBabyData(JSON.parse(savedBabyData));
    }
  }, []);

  // Add new health record
  const addHealthRecord = (type, value) => {
    setPregnancyData(prev => ({
      ...prev,
      [type]: [...prev[type], { value, date: new Date().toLocaleDateString() }]
    }));
  };

  // Add baby record
  const addBabyRecord = (type, value) => {
    setBabyMonitoring(prev => ({
      ...prev,
      [type]: [...prev[type], { value, date: new Date().toLocaleDateString() }]
    }));
  };

  // Health Tracker Component
  const HealthTracker = ({ title, type, unit, onAdd, data }) => {
    const [value, setValue] = useState('');

    const handleSubmit = (e) => {
      e.preventDefault();
      if (value) {
        onAdd(type, value);
        setValue('');
      }
    };

    return (
      <div className="health-tracker">
        <h3>{title}</h3>
        <form onSubmit={handleSubmit} className="tracker-form">
          <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder={`${title} ${unit}`}
            className="tracker-input"
          />
          <button type="submit" className="tracker-btn">Add</button>
        </form>
        <div className="tracker-history">
          {data.map((record, index) => (
            <div key={index} className="tracker-record">
              <span>{record.value}{unit}</span>
              <small>{record.date}</small>
            </div>
          ))}
        </div>
      </div>
    );
  };

  // Baby Growth Tracker Component
  const BabyGrowthTracker = ({ title, type, unit, onAdd, data }) => {
    const [value, setValue] = useState('');

    const handleSubmit = (e) => {
      e.preventDefault();
      if (value) {
        onAdd(type, value);
        setValue('');
      }
    };

    return (
      <div className="growth-tracker">
        <h3>{title}</h3>
        <form onSubmit={handleSubmit} className="tracker-form">
          <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder={`${title} ${unit}`}
            className="tracker-input"
          />
          <button type="submit" className="tracker-btn">Add</button>
        </form>
        <div className="growth-chart">
          {data.map((record, index) => (
            <div key={index} className="growth-record">
              <span>{record.value}{unit}</span>
              <small>{record.date}</small>
            </div>
          ))}
        </div>
      </div>
    );
  };

  // Week by Week Progress Component
  const WeekByWeekProgress = () => {
    const [currentWeek, setCurrentWeek] = useState(1);

    return (
      <div className="week-progress">
        <h3>Week by Week Progress</h3>
        <div className="week-slider">
          <input 
            type="range" 
            min="1" 
            max="40" 
            value={currentWeek}
            onChange={(e) => setCurrentWeek(e.target.value)}
            className="week-range"
          />
          <span>Current Week: {currentWeek}</span>
        </div>
        <div className="week-info">
          <p>Pregnancy: {currentWeek} weeks</p>
          <p>Baby size: Comparable to a {getBabySize(currentWeek)}</p>
        </div>
      </div>
    );
  };

  const getBabySize = (week) => {
    const sizes = [
      "poppy seed", "sesame seed", "blueberry", "kidney bean", "grape", 
      "olive", "plum", "avocado", "banana", "carrot", "pomegranate",
      "lime", "peach", "apple", "bell pepper", "cucumber", "mango",
      "sweet potato", "cantaloupe", "pineapple", "small pumpkin"
    ];
    return sizes[Math.min(week - 1, sizes.length - 1)] || "watermelon";
  };

  // Trimester Chart Component
  const TrimesterChart = () => {
    return (
      <div className="trimester-chart">
        <h3>Pregnancy Trimesters</h3>
        <div className="trimester-progress">
          <div className="trimester first">First Trimester (1-12 weeks)</div>
          <div className="trimester second">Second Trimester (13-27 weeks)</div>
          <div className="trimester third">Third Trimester (28-40 weeks)</div>
        </div>
      </div>
    );
  };

  // Due Date Calculator Component
  const DueDateCalculator = () => {
    const [lmpDate, setLmpDate] = useState('');
    const [dueDate, setDueDate] = useState('');

    const calculateDueDate = () => {
      if (lmpDate) {
        const lmp = new Date(lmpDate);
        const due = new Date(lmp.getTime() + 280 * 24 * 60 * 60 * 1000);
        setDueDate(due.toLocaleDateString());
      }
    };

    return (
      <div className="due-date-calculator">
        <h3>Due Date Calculator</h3>
        <div className="calculator-form">
          <label>Last Menstrual Period Date:</label>
          <input
            type="date"
            value={lmpDate}
            onChange={(e) => setLmpDate(e.target.value)}
            className="date-input"
          />
          <button onClick={calculateDueDate} className="calculate-btn">
            Calculate
          </button>
          {dueDate && <p className="due-date-result">Due Date: {dueDate}</p>}
        </div>
      </div>
    );
  };

  // Kick Counter Component
  // const KickCounter = ({ kicks, onUpdate }) => {
  //   const [count, setCount] = useState(kicks);

  //   const incrementKicks = () => {
  //     const newCount = count + 1;
  //     setCount(newCount);
  //     onUpdate(newCount);
  //   };

  //   const resetKicks = () => {
  //     setCount(0);
  //     onUpdate(0);
  //   };

  //   return (
  //     <div className="kick-counter">
  //       <h3>Baby Kick Counter</h3>
  //       <div className="kick-display">
  //         <span className="kick-count">{count}</span>
  //         <div className="kick-buttons">
  //           <button onClick={incrementKicks} className="kick-btn">
  //             Add Kick
  //           </button>
  //           <button onClick={resetKicks} className="reset-btn">
  //             Reset
  //           </button>
  //         </div>
  //       </div>
  //     </div>
  //   );
  // };

  // Medical Records Component
  const MedicalRecords = ({ records, onUpdate }) => {
    const [newRecord, setNewRecord] = useState({
      date: '',
      doctor: '',
      notes: '',
      type: 'checkup'
    });

    const handleAddRecord = () => {
      if (newRecord.date && newRecord.doctor) {
        onUpdate([...records, { ...newRecord, id: Date.now() }]);
        setNewRecord({ date: '', doctor: '', notes: '', type: 'checkup' });
      }
    };

    return (
      <div className="medical-records">
        <h3>Medical Records</h3>
        <div className="record-form">
          <input
            type="date"
            value={newRecord.date}
            onChange={(e) => setNewRecord(prev => ({ ...prev, date: e.target.value }))}
            className="form-input"
            placeholder="Date"
          />
          <input
            type="text"
            value={newRecord.doctor}
            onChange={(e) => setNewRecord(prev => ({ ...prev, doctor: e.target.value }))}
            className="form-input"
            placeholder="Doctor Name"
          />
          <select
            value={newRecord.type}
            onChange={(e) => setNewRecord(prev => ({ ...prev, type: e.target.value }))}
            className="form-select"
          >
            <option value="checkup">Checkup</option>
            <option value="scan">Scan</option>
            <option value="test">Test</option>
          </select>
          <textarea
            value={newRecord.notes}
            onChange={(e) => setNewRecord(prev => ({ ...prev, notes: e.target.value }))}
            className="form-textarea"
            placeholder="Notes"
          />
          <button onClick={handleAddRecord} className="add-record-btn">
            Add Record
          </button>
        </div>
        <div className="records-list">
          {records.map((record) => (
            <div key={record.id} className="record-item">
              <div className="record-header">
                <span className="record-date">{record.date}</span>
                <span className="record-type">{record.type}</span>
              </div>
              <p className="record-doctor">Doctor: {record.doctor}</p>
              <p className="record-notes">{record.notes}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };

  // Ultrasound Reports Component
  const UltrasoundReports = ({ reports, onUpdate }) => {
    const [newReport, setNewReport] = useState({
      date: '',
      week: '',
      findings: '',
      image: null
    });

    const handleAddReport = () => {
      if (newReport.date && newReport.week) {
        onUpdate([...reports, { ...newReport, id: Date.now() }]);
        setNewReport({ date: '', week: '', findings: '', image: null });
      }
    };

    return (
      <div className="ultrasound-reports">
        <h3>Ultrasound Reports</h3>
        <div className="report-form">
          <input
            type="date"
            value={newReport.date}
            onChange={(e) => setNewReport(prev => ({ ...prev, date: e.target.value }))}
            className="form-input"
            placeholder="Scan Date"
          />
          <input
            type="text"
            value={newReport.week}
            onChange={(e) => setNewReport(prev => ({ ...prev, week: e.target.value }))}
            className="form-input"
            placeholder="Week"
          />
          <textarea
            value={newReport.findings}
            onChange={(e) => setNewReport(prev => ({ ...prev, findings: e.target.value }))}
            className="form-textarea"
            placeholder="Findings"
          />
          <button onClick={handleAddReport} className="add-record-btn">
            Add Report
          </button>
        </div>
      </div>
    );
  };

  // Prescription Tracker Component
  const PrescriptionTracker = ({ prescriptions, onUpdate }) => {
    const [newPrescription, setNewPrescription] = useState({
      medicine: '',
      dosage: '',
      frequency: '',
      duration: ''
    });

    const handleAddPrescription = () => {
      if (newPrescription.medicine && newPrescription.dosage) {
        onUpdate([...prescriptions, { ...newPrescription, id: Date.now() }]);
        setNewPrescription({ medicine: '', dosage: '', frequency: '', duration: '' });
      }
    };

    return (
      <div className="prescription-tracker">
        <h3>Prescription Tracker</h3>
        <div className="prescription-form">
          <input
            type="text"
            value={newPrescription.medicine}
            onChange={(e) => setNewPrescription(prev => ({ ...prev, medicine: e.target.value }))}
            className="form-input"
            placeholder="Medicine Name"
          />
          <input
            type="text"
            value={newPrescription.dosage}
            onChange={(e) => setNewPrescription(prev => ({ ...prev, dosage: e.target.value }))}
            className="form-input"
            placeholder="Dosage"
          />
          <input
            type="text"
            value={newPrescription.frequency}
            onChange={(e) => setNewPrescription(prev => ({ ...prev, frequency: e.target.value }))}
            className="form-input"
            placeholder="Frequency"
          />
          <input
            type="text"
            value={newPrescription.duration}
            onChange={(e) => setNewPrescription(prev => ({ ...prev, duration: e.target.value }))}
            className="form-input"
            placeholder="Duration"
          />
          <button onClick={handleAddPrescription} className="add-record-btn">
            Add Medicine
          </button>
        </div>
        <div className="prescriptions-list">
          {prescriptions.map((prescription) => (
            <div key={prescription.id} className="prescription-item">
              <strong>{prescription.medicine}</strong> - {prescription.dosage}
              <br />
              <small>{prescription.frequency}, {prescription.duration}</small>
            </div>
          ))}
        </div>
      </div>
    );
  };

  // Nutrition Tracker Component
  const NutritionTracker = ({ nutrition, onUpdate }) => {
    const [meal, setMeal] = useState({ type: 'breakfast', food: '', time: '' });

    const handleAddMeal = () => {
      if (meal.food && meal.time) {
        onUpdate([...nutrition, { ...meal, id: Date.now() }]);
        setMeal({ type: 'breakfast', food: '', time: '' });
      }
    };

    return (
      <div className="nutrition-tracker">
        <h3>Nutrition Tracker</h3>
        <div className="meal-form">
          <select
            value={meal.type}
            onChange={(e) => setMeal(prev => ({ ...prev, type: e.target.value }))}
            className="form-select"
          >
            <option value="breakfast">Breakfast</option>
            <option value="lunch">Lunch</option>
            <option value="dinner">Dinner</option>
            <option value="snack">Snack</option>
          </select>
          <input
            type="text"
            value={meal.food}
            onChange={(e) => setMeal(prev => ({ ...prev, food: e.target.value }))}
            className="form-input"
            placeholder="Food details"
          />
          <input
            type="time"
            value={meal.time}
            onChange={(e) => setMeal(prev => ({ ...prev, time: e.target.value }))}
            className="form-input"
          />
          <button onClick={handleAddMeal} className="add-record-btn">
            Add Meal
          </button>
        </div>
      </div>
    );
  };

  // Water Intake Tracker Component
  const WaterIntakeTracker = ({ intake, onUpdate }) => {
    const addGlass = () => {
      onUpdate(intake + 1);
    };

    const resetIntake = () => {
      onUpdate(0);
    };

    return (
      <div className="water-tracker">
        <h3>Water Intake Tracker</h3>
        <div className="water-display">
          <div className="water-count">{intake} Glasses</div>
          <div className="water-buttons">
            <button onClick={addGlass} className="water-btn">
              Add Glass
            </button>
            <button onClick={resetIntake} className="reset-btn">
              Reset
            </button>
          </div>
        </div>
      </div>
    );
  };

  // Exercise Tracker Component
  const ExerciseTracker = ({ exercise, onUpdate }) => {
    const [newExercise, setNewExercise] = useState({ type: '', duration: '' });

    const handleAddExercise = () => {
      if (newExercise.type && newExercise.duration) {
        onUpdate([...exercise, { ...newExercise, id: Date.now(), date: new Date().toLocaleDateString() }]);
        setNewExercise({ type: '', duration: '' });
      }
    };

    return (
      <div className="exercise-tracker">
        <h3>Exercise Tracker</h3>
        <div className="exercise-form">
          <input
            type="text"
            value={newExercise.type}
            onChange={(e) => setNewExercise(prev => ({ ...prev, type: e.target.value }))}
            className="form-input"
            placeholder="Exercise type"
          />
          <input
            type="text"
            value={newExercise.duration}
            onChange={(e) => setNewExercise(prev => ({ ...prev, duration: e.target.value }))}
            className="form-input"
            placeholder="Duration (minutes)"
          />
          <button onClick={handleAddExercise} className="add-record-btn">
            Add
          </button>
        </div>
      </div>
    );
  };

  // Mood Tracker Component
  const MoodTracker = ({ mood, onUpdate }) => {
    const moods = [
      { emoji: '😊', label: 'Happy' },
      { emoji: '😐', label: 'Neutral' },
      { emoji: '😢', label: 'Sad' },
      { emoji: '😡', label: 'Angry' },
      { emoji: '😴', label: 'Tired' }
    ];

    return (
      <div className="mood-tracker">
        <h3>Today's Mood</h3>
        <div className="mood-buttons">
          {moods.map((m) => (
            <button
              key={m.label}
              onClick={() => onUpdate(m.label)}
              className={`mood-btn ${mood === m.label ? 'active' : ''}`}
            >
              {m.emoji} {m.label}
            </button>
          ))}
        </div>
        {mood && <p className="current-mood">Current Mood: {mood}</p>}
      </div>
    );
  };

  // Mindfulness Activities Component
  const MindfulnessActivities = () => {
    const activities = [
      '5 minutes deep breathing',
      '10 minutes slow walk',
      '15 minutes yoga',
      'Listen to relaxing music',
      'Prayer/Meditation'
    ];

    return (
      <div className="mindfulness-activities">
        <h3>Mindfulness Activities</h3>
        <div className="activities-list">
          {activities.map((activity, index) => (
            <div key={index} className="activity-item">
              {activity}
            </div>
          ))}
        </div>
      </div>
    );
  };

  // Feeding Tracker Component
  const FeedingTracker = ({ feeding, onUpdate }) => {
    const [newFeed, setNewFeed] = useState({ type: 'breast', amount: '', time: '' });

    const handleAddFeed = () => {
      if (newFeed.amount && newFeed.time) {
        onUpdate([...feeding, { ...newFeed, id: Date.now(), date: new Date().toLocaleDateString() }]);
        setNewFeed({ type: 'breast', amount: '', time: '' });
      }
    };

    return (
      <div className="feeding-tracker">
        <h3>Feeding Tracker</h3>
        <div className="feed-form">
          <select
            value={newFeed.type}
            onChange={(e) => setNewFeed(prev => ({ ...prev, type: e.target.value }))}
            className="form-select"
          >
            <option value="breast">Breast Milk</option>
            <option value="formula">Formula</option>
            <option value="solid">Solid Food</option>
          </select>
          <input
            type="text"
            value={newFeed.amount}
            onChange={(e) => setNewFeed(prev => ({ ...prev, amount: e.target.value }))}
            className="form-input"
            placeholder="Amount (ml/minutes)"
          />
          <input
            type="time"
            value={newFeed.time}
            onChange={(e) => setNewFeed(prev => ({ ...prev, time: e.target.value }))}
            className="form-input"
          />
          <button onClick={handleAddFeed} className="add-record-btn">
            Add Record
          </button>
        </div>
      </div>
    );
  };

  // Sleep Tracker Component
  const SleepTracker = ({ sleep, onUpdate }) => {
    const [sleepStart, setSleepStart] = useState('');
    const [sleepEnd, setSleepEnd] = useState('');

    const handleAddSleep = () => {
      if (sleepStart && sleepEnd) {
        const newSleep = {
          start: sleepStart,
          end: sleepEnd,
          id: Date.now(),
          date: new Date().toLocaleDateString()
        };
        onUpdate([...sleep, newSleep]);
        setSleepStart('');
        setSleepEnd('');
      }
    };

    return (
      <div className="sleep-tracker">
        <h3>Sleep Tracker</h3>
        <div className="sleep-form">
          <div className="time-inputs">
            <label>Sleep Start:</label>
            <input
              type="time"
              value={sleepStart}
              onChange={(e) => setSleepStart(e.target.value)}
              className="form-input"
            />
          </div>
          <div className="time-inputs">
            <label>Sleep End:</label>
            <input
              type="time"
              value={sleepEnd}
              onChange={(e) => setSleepEnd(e.target.value)}
              className="form-input"
            />
          </div>
          <button onClick={handleAddSleep} className="add-record-btn">
            Add Sleep Record
          </button>
        </div>
      </div>
    );
  };

  // Vaccination Schedule Component
  const VaccinationSchedule = ({ vaccinations, onUpdate }) => {
    const commonVaccines = [
      { name: 'BCG', dueDate: 'At Birth', given: false },
      { name: 'Hepatitis B - 1', dueDate: 'At Birth', given: false },
      { name: 'OPV - 1', dueDate: '6 weeks', given: false },
      { name: 'DPT - 1', dueDate: '6 weeks', given: false }
    ];

    const toggleVaccine = (index) => {
      const updated = [...commonVaccines];
      updated[index] = { ...updated[index], given: !updated[index].given };
      onUpdate(updated);
    };

    return (
      <div className="vaccination-tracker">
        <h3>Vaccination Schedule</h3>
        <div className="vaccine-list">
          {commonVaccines.map((vaccine, index) => (
            <div key={index} className="vaccine-item">
              <input
                type="checkbox"
                checked={vaccine.given}
                onChange={() => toggleVaccine(index)}
                className="vaccine-checkbox"
              />
              <span className={`vaccine-name ${vaccine.given ? 'completed' : ''}`}>
                {vaccine.name}
              </span>
              <span className="vaccine-due">{vaccine.dueDate}</span>
            </div>
          ))}
        </div>
      </div>
    );
  };

  // Milestone Tracker Component
  const MilestoneTracker = ({ milestones, onUpdate }) => {
    const commonMilestones = [
      'First Smile',
      'Head Holding',
      'Rolling Over',
      'Sitting',
      'Crawling',
      'Standing',
      'Walking',
      'First Word'
    ];

    const toggleMilestone = (milestone) => {
      if (milestones.includes(milestone)) {
        onUpdate(milestones.filter(m => m !== milestone));
      } else {
        onUpdate([...milestones, milestone]);
      }
    };

    return (
      <div className="milestone-tracker">
        <h3>Development Milestones</h3>
        <div className="milestone-grid">
          {commonMilestones.map((milestone) => (
            <div
              key={milestone}
              className={`milestone-item ${milestones.includes(milestone) ? 'achieved' : ''}`}
              onClick={() => toggleMilestone(milestone)}
            >
              {milestone}
              {milestones.includes(milestone) && ' ✓'}
            </div>
          ))}
        </div>
      </div>
    );
  };

  // Baby Card Component
  const BabyCard = ({ baby }) => {
    return (
      <div className="baby-card">
        <h3>{baby.babyName || 'Baby'}</h3>
        <div className="baby-info">
          <p><strong>Date of Birth:</strong> {baby.dob}</p>
          <p><strong>Birth Time:</strong> {baby.birthTime}</p>
          <p><strong>Birth Weight:</strong> {baby.birthWeight} kg</p>
          <p><strong>Gender:</strong> {baby.gender === 'male' ? 'Male' : 'Female'}</p>
        </div>
      </div>
    );
  };

  // Parent Tips Component
  const ParentTips = () => {
    const tips = [
      'Give warm water bath to baby',
      'Keep umbilical cord clean',
      'Rapid weight loss is normal',
      'Use warm water for constipation',
      'Put to bed only when sleepy'
    ];

    return (
      <div className="parent-tips">
        <h3>Parenting Tips</h3>
        <div className="tips-list">
          {tips.map((tip, index) => (
            <div key={index} className="tip-item">
              {tip}
            </div>
          ))}
        </div>
      </div>
    );
  };

  // Doctor Visit Tracker Component
  const DoctorVisitTracker = () => {
    return (
      <div className="doctor-visit-tracker">
        <h3>Doctor Visit Schedule</h3>
        <p>Next visit: In 2 weeks</p>
      </div>
    );
  };

  // Postpartum Tracker Component
  const PostpartumTracker = () => {
    return (
      <div className="postpartum-tracker">
        <h3>Postpartum Recovery</h3>
        <div className="recovery-status">
          <div className="status-item">Bleeding: ⚠️ Monitor</div>
          <div className="status-item">Stitches: 👍 Healing well</div>
          <div className="status-item">Weight: 📉 Decreasing</div>
        </div>
      </div>
    );
  };

  // Breastfeeding Health Component
  const BreastfeedingHealth = () => {
    return (
      <div className="breastfeeding-health">
        <h3>Breastfeeding Health</h3>
        <div className="breastfeeding-tips">
          <p>💧 Drink plenty of water</p>
          <p>🍎 Eat nutritious food</p>
          <p>⏰ Feed every 2-3 hours</p>
        </div>
      </div>
    );
  };

  // Emotional Wellness Component
  const EmotionalWellness = () => {
    return (
      <div className="emotional-wellness">
        <h3>Emotional Wellness</h3>
        <div className="wellness-tips">
          <p>Talk about your concerns</p>
          <p>Engage in leisure activities</p>
          <p>Get adequate rest</p>
        </div>
      </div>
    );
  };

  // Emergency Alerts Component
  const EmergencyAlerts = () => {
    const alerts = [
      'High blood pressure - Contact doctor',
      'Sudden weight loss - Monitor closely'
    ];

    return (
      <div className="emergency-alerts">
        <h3>Emergency Alerts</h3>
        <div className="alert-list">
          {alerts.map((alert, index) => (
            <div key={index} className="alert-item">
              <span className="alert-icon">⚠️</span>
              {alert}
            </div>
          ))}
        </div>
      </div>
    );
  };

  // Data Dashboard Component
  const DataDashboard = ({ pregnancyData, babyMonitoring }) => {
    return (
      <div className="data-dashboard">
        <h3>Data Dashboard</h3>
        <div className="dashboard-stats">
          <div className="stat-card">
            <h4>Pregnancy</h4>
            <p>24 weeks</p>
          </div>
          <div className="stat-card">
            <h4>Baby Weight</h4>
            <p>3.2 kg</p>
          </div>
          <div className="stat-card">
            <h4>Water Intake</h4>
            <p>6 Glasses</p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="monitoring-container">
      <div className="monitoring-header">
        <h1>👶 Aararo 360° Monitoring</h1>
        <p>Mother and Baby Health Tracking Center</p>
      </div>

      {/* Tab Navigation */}
      <div className="monitoring-tabs">
        <button 
          className={`tab-btn ${activeTab === 'pregnancy' ? 'active' : ''}`}
          onClick={() => setActiveTab('pregnancy')}
        >
          🤰 Pregnancy Monitoring
        </button>
        <button 
          className={`tab-btn ${activeTab === 'parenting' ? 'active' : ''}`}
          onClick={() => setActiveTab('parenting')}
        >
          👶 Baby Health Monitoring
        </button>
      </div>

      {/* Pregnancy Monitoring Section */}
      {activeTab === 'pregnancy' && (
        <div className="pregnancy-monitoring">
          {/* Health Tracking */}
          <div className="monitoring-section">
            <h2>❤️ Health Tracking</h2>
            <div className="health-grid">
              <HealthTracker 
                title="Weight Tracker" 
                type="weight" 
                unit="kg"
                onAdd={addHealthRecord}
                data={pregnancyData.weight}
              />
              <HealthTracker 
                title="Blood Pressure" 
                type="bloodPressure" 
                unit="mmHg"
                onAdd={addHealthRecord}
                data={pregnancyData.bloodPressure}
              />
              <HealthTracker 
                title="Blood Sugar" 
                type="bloodSugar" 
                unit="mg/dL"
                onAdd={addHealthRecord}
                data={pregnancyData.bloodSugar}
              />
              <HealthTracker 
                title="Hemoglobin" 
                type="hemoglobin" 
                unit="g/dL"
                onAdd={addHealthRecord}
                data={pregnancyData.hemoglobin}
              />
            </div>
          </div>

          {/* Pregnancy Progress */}
          <div className="monitoring-section">
            <h2>📈 Pregnancy Progress</h2>
            <div className="progress-grid">
              <WeekByWeekProgress />
              <TrimesterChart />
              <DueDateCalculator />
              {/* <KickCounter 
                kicks={pregnancyData.kicks}
                onUpdate={(kicks) => setPregnancyData(prev => ({...prev, kicks}))}
              /> */}
            </div>
          </div>

          {/* Medical Records */}
          <div className="monitoring-section">
            <h2>🏥 Medical Records</h2>
            <MedicalRecords 
              records={pregnancyData.medicalRecords}
              onUpdate={(medicalRecords) => setPregnancyData(prev => ({...prev, medicalRecords}))}
            />
            <UltrasoundReports 
              reports={pregnancyData.ultrasound}
              onUpdate={(ultrasound) => setPregnancyData(prev => ({...prev, ultrasound}))}
            />
            <PrescriptionTracker 
              prescriptions={pregnancyData.prescriptions}
              onUpdate={(prescriptions) => setPregnancyData(prev => ({...prev, prescriptions}))}
            />
          </div>

          {/* Nutrition & Lifestyle */}
          <div className="monitoring-section">
            <h2>🍎 Nutrition & Lifestyle</h2>
            <NutritionTracker 
              nutrition={pregnancyData.nutrition}
              onUpdate={(nutrition) => setPregnancyData(prev => ({...prev, nutrition}))}
            />
            <WaterIntakeTracker 
              intake={pregnancyData.waterIntake}
              onUpdate={(waterIntake) => setPregnancyData(prev => ({...prev, waterIntake}))}
            />
            <ExerciseTracker 
              exercise={pregnancyData.exercise}
              onUpdate={(exercise) => setPregnancyData(prev => ({...prev, exercise}))}
            />
          </div>

          {/* Mental Well-being */}
          <div className="monitoring-section">
            <h2>😊 Mental Well-being</h2>
            <MoodTracker 
              mood={pregnancyData.mood}
              onUpdate={(mood) => setPregnancyData(prev => ({...prev, mood}))}
            />
            <MindfulnessActivities />
          </div>
        </div>
      )}

      {/* Parenting & Baby Monitoring Section */}
      {activeTab === 'parenting' && (
        <div className="parenting-monitoring">
          {/* Baby Health Tracking */}
          <div className="monitoring-section">
            <h2>👶 Baby Health Tracking</h2>
            <div className="health-grid">
              <BabyGrowthTracker 
                title="Weight" 
                type="weight" 
                unit="kg"
                onAdd={addBabyRecord}
                data={babyMonitoring.weight}
              />
              <BabyGrowthTracker 
                title="Height" 
                type="height" 
                unit="cm"
                onAdd={addBabyRecord}
                data={babyMonitoring.height}
              />
              <BabyGrowthTracker 
                title="Head Circumference" 
                type="headCircumference" 
                unit="cm"
                onAdd={addBabyRecord}
                data={babyMonitoring.headCircumference}
              />
            </div>
            
            <FeedingTracker 
              feeding={babyMonitoring.feeding}
              onUpdate={(feeding) => setBabyMonitoring(prev => ({...prev, feeding}))}
            />
            
            <SleepTracker 
              sleep={babyMonitoring.sleep}
              onUpdate={(sleep) => setBabyMonitoring(prev => ({...prev, sleep}))}
            />
            
            <VaccinationSchedule 
              vaccinations={babyMonitoring.vaccinations}
              onUpdate={(vaccinations) => setBabyMonitoring(prev => ({...prev, vaccinations}))}
            />
          </div>

          {/* Milestone Tracking */}
          <div className="monitoring-section">
            <h2>🎯 Development Milestones</h2>
            <MilestoneTracker 
              milestones={babyMonitoring.milestones}
              onUpdate={(milestones) => setBabyMonitoring(prev => ({...prev, milestones}))}
            />
          </div>

          {/* Baby Details from Home Page */}
          {babyData.length > 0 && (
            <div className="monitoring-section">
              <h2>📋 Baby Details</h2>
              <div className="baby-details-grid">
                {babyData.map((baby, index) => (
                  <BabyCard key={index} baby={baby} />
                ))}
              </div>
            </div>
          )}

          {/* Parental Guidance */}
          <div className="monitoring-section">
            <h2>👨‍👩‍👧 Parental Guidance</h2>
            <ParentTips />
            <DoctorVisitTracker />
          </div>

          {/* Postnatal Mother Health */}
          <div className="monitoring-section">
            <h2>🤱 Postnatal Mother Health</h2>
            <PostpartumTracker />
            <BreastfeedingHealth />
            <EmotionalWellness />
          </div>
        </div>
      )}

      {/* Emergency Alerts & Dashboard */}
      <div className="monitoring-section">
        <EmergencyAlerts />
        <DataDashboard 
          pregnancyData={pregnancyData}
          babyMonitoring={babyMonitoring}
        />
      </div>
    </div>
  );
};

export default Monitoring;