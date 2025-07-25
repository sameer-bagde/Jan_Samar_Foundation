import BackgroundImage from '../../assets/tourists-go-up-hill-sunrise.jpg';
import './GetInvolved.css';
import { useState, useCallback, useMemo } from "react";
import { User, Mail, Phone, MapPin, Globe, ChevronDown } from "lucide-react";
import Qr from '../../assets/Rename.png';
import png from '../../assets/4877806.jpg';
import handimage from '../../assets/multiplehand.jpg';
import { Calendar, Clock } from 'lucide-react';


const STATES = [
  'Maharashtra', 'Delhi', 'Karnataka', 'Tamil Nadu', 'Uttar Pradesh',
  'West Bengal', 'Rajasthan', 'Gujarat'
];

const PROGRAMS = [
  { value: 'education', label: 'Education Program' },
  { value: 'health', label: 'Health Campaign' },
  { value: 'environment', label: 'Environment Initiative' }
];

const DONATION_CARDS = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    location: "Panvel, Maharashtra",
    title: "Leave a greener footprint",
    description: "Create a sustainable and environmentally friendly legacy",
    raised: 100000,
    target: 200000,
    donations: 4079,
    progress: 50
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1593113630400-ea4288922497?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    location: "Panvel, Maharashtra",
    title: "Fill a plate, change a fate",
    description: "Everyone deserves a meal, we can all play a part in making a future without hunger",
    raised: 125000,
    target: 250000,
    donations: 9156,
    progress: 50
  }
];

const AMOUNT_OPTIONS = [50, 100, 200, 500];
const FREQUENCY_OPTIONS = ['Once', 'Monthly', 'Yearly'];
const PAYMENT_MODES = ['UPI', 'Bank Transfer', 'Card Transfer'];

const GPay = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 48 48">
    <path fill="#ed5748" d="M42.858,11.975c-4.546-2.624-10.359-1.065-12.985,3.481L23.25,26.927c-1.916,3.312,0.551,4.47,3.301,6.119l6.372,3.678c2.158,1.245,4.914,0.506,6.158-1.649l6.807-11.789C48.176,19.325,46.819,14.262,42.858,11.975z"/>
    <path fill="#fcc60e" d="M35.365,16.723l-6.372-3.678c-3.517-1.953-5.509-2.082-6.954,0.214l-9.398,16.275c-2.624,4.543-1.062,10.353,3.481,12.971c3.961,2.287,9.024,0.93,11.311-3.031l9.578-16.59C38.261,20.727,37.523,17.968,35.365,16.723z"/>
    <path fill="#48b564" d="M36.591,8.356l-4.476-2.585c-4.95-2.857-11.28-1.163-14.137,3.787L9.457,24.317c-1.259,2.177-0.511,4.964,1.666,6.22l5.012,2.894c2.475,1.43,5.639,0.582,7.069-1.894l9.735-16.86c2.017-3.492,6.481-4.689,9.974-2.672L36.591,8.356z"/>
    <path fill="#2c85eb" d="M19.189,13.781l-4.838-2.787c-2.158-1.242-4.914-0.506-6.158,1.646l-5.804,10.03c-2.857,4.936-1.163,11.252,3.787,14.101l3.683,2.121l4.467,2.573l1.939,1.115c-3.442-2.304-4.535-6.92-2.43-10.555l1.503-2.596l5.504-9.51C22.083,17.774,21.344,15.023,19.189,13.781z"/>
  </svg>
);

const PhonePe = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 48 48">
    <path fill="#4527a0" d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"/>
    <path fill="#fff" d="M32.267,20.171c0-0.681-0.584-1.264-1.264-1.264h-2.334l-5.35-6.25c-0.486-0.584-1.264-0.778-2.043-0.584l-1.848,0.584c-0.292,0.097-0.389,0.486-0.195,0.681l5.836,5.666h-8.851c-0.292,0-0.486,0.195-0.486,0.486v0.973c0,0.681,0.584,1.506,1.264,1.506h1.972v4.305c0,3.502,1.611,5.544,4.723,5.544c0.973,0,1.378-0.097,2.35-0.486v3.112c0,0.875,0.681,1.556,1.556,1.556h0.786c0.292,0,0.584-0.292,0.584-0.584V21.969h2.812c0.292,0,0.486-0.195,0.486-0.486V20.171z M26.043,28.413c-0.584,0.292-1.362,0.389-1.945,0.389c-1.556,0-2.097-0.778-2.097-2.529v-4.305h4.043V28.413z"/>
  </svg>
);

const Paytm = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 48 48">
    <path fill="#0d47a1" d="M5.446 18.01H.548c-.277 0-.502.167-.503.502L0 30.519c-.001.3.196.45.465.45.735 0 1.335 0 2.07 0C2.79 30.969 3 30.844 3 30.594 3 29.483 3 28.111 3 27l2.126.009c1.399-.092 2.335-.742 2.725-2.052.117-.393.14-.733.14-1.137l.11-2.862C7.999 18.946 6.949 18.181 5.446 18.01zM4.995 23.465C4.995 23.759 4.754 24 4.461 24H3v-3h1.461c.293 0 .534.24.534.535V23.465zM13.938 18h-3.423c-.26 0-.483.08-.483.351 0 .706 0 1.495 0 2.201C10.06 20.846 10.263 21 10.552 21h2.855c.594 0 .532.972 0 1H11.84C10.101 22 9 23.562 9 25.137c0 .42.005 1.406 0 1.863-.008.651-.014 1.311.112 1.899C9.336 29.939 10.235 31 11.597 31h4.228c.541 0 1.173-.474 1.173-1.101v-8.274C17.026 19.443 15.942 18.117 13.938 18zM14 27.55c0 .248-.202.45-.448.45h-1.105C12.201 28 12 27.798 12 27.55v-2.101C12 25.202 12.201 25 12.447 25h1.105C13.798 25 14 25.202 14 25.449V27.55zM18 18.594v5.608c.124 1.6 1.608 2.798 3.171 2.798h1.414c.597 0 .561.969 0 .969H19.49c-.339 0-.462.177-.462.476v2.152c0 .226.183.396.422.396h2.959c2.416 0 3.592-1.159 3.591-3.757v-8.84c0-.276-.175-.383-.342-.383h-2.302c-.224 0-.355.243-.355.422v5.218c0 .199-.111.316-.29.316H21.41c-.264 0-.409-.143-.409-.396v-5.058C21 18.218 20.88 18 20.552 18c-.778 0-1.442 0-2.22 0C18.067 18 18 18.263 18 18.594L18 18.594z"/>
    <path fill="#00adee" d="M27.038 20.569v-2.138c0-.237.194-.431.43-.431H28c1.368-.285 1.851-.62 2.688-1.522.514-.557.966-.704 1.298-.113L32 18h1.569C33.807 18 34 18.194 34 18.431v2.138C34 20.805 33.806 21 33.569 21H32v9.569C32 30.807 31.806 31 31.57 31h-2.14C29.193 31 29 30.807 29 30.569V21h-1.531C27.234 21 27.038 20.806 27.038 20.569L27.038 20.569zM42.991 30.465c0 .294-.244.535-.539.535h-1.91c-.297 0-.54-.241-.54-.535v-6.623-1.871c0-1.284-2.002-1.284-2.002 0v8.494C38 30.759 37.758 31 37.461 31H35.54C35.243 31 35 30.759 35 30.465V18.537C35 18.241 35.243 18 35.54 18h1.976c.297 0 .539.241.539.537v.292c1.32-1.266 3.302-.973 4.416.228 2.097-2.405 5.69-.262 5.523 2.375 0 2.916-.026 6.093-.026 9.033 0 .294-.244.535-.538.535h-1.891C45.242 31 45 30.759 45 30.465c0-2.786 0-5.701 0-8.4 0-1.307-2-1.37-2 0v8.44H42.991z"/>
  </svg>
);

const useFormData = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobile: '',
    town: '',
    district: '',
    state: '',
    pincode: ''
  });

  const updateField = useCallback((field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  }, []);

  const resetForm = useCallback(() => {
    setFormData({
      fullName: '',
      email: '',
      mobile: '',
      town: '',
      district: '',
      state: '',
      pincode: ''
    });
  }, []);

  return { formData, updateField, resetForm };
};

const useDonationForm = () => {
  const [frequency, setFrequency] = useState('Once');
  const [selectedAmount, setSelectedAmount] = useState(100);
  const [customAmount, setCustomAmount] = useState('');
  const [selectedProgram, setSelectedProgram] = useState('');
  const [nationality, setNationality] = useState('Indian');
  const [paymentMode, setPaymentMode] = useState('UPI');
  const [upiId, setUpiId] = useState('');
  const [coverCharges, setCoverCharges] = useState(false);

  

  const selectAmount = useCallback((amount) => {
    setSelectedAmount(amount);
    setCustomAmount('');
  }, []);

  const handleCustomAmountChange = useCallback((value) => {
    setCustomAmount(value);
    if (value) {
      setSelectedAmount(null);
    }
  }, []);

  const finalAmount = useMemo(() => {
    return customAmount ? parseFloat(customAmount) || 0 : selectedAmount || 0;
  }, [customAmount, selectedAmount]);

  return {
    frequency, setFrequency,
    selectedAmount, selectAmount,
    customAmount, handleCustomAmountChange,
    selectedProgram, setSelectedProgram,
    nationality, setNationality,
    paymentMode, setPaymentMode,
    upiId, setUpiId,
    coverCharges, setCoverCharges,
    finalAmount
  };
};

// Components
const DonationCard = ({ card }) => (
  <div className="donation-wrapper">
    <div className="donation-image">
      <img src={card.image} alt={card.title} />
      <div className="donation-badge">
        <i className="fas fa-map-marker-alt donation-icon"></i>
        {card.location}
      </div>
    </div>
    
    <div className="donation-card">
      <div className="donation-card-header">
        <h3 className="donation-card-title">{card.title}</h3>
        <p className="donation-card-description">{card.description}</p>
      </div>
      
      <div className="donation-amount">₹ {card.raised.toLocaleString()}</div>
      
      <div className="donation-progress">
        <div className="donation-fill" style={{ width: `${card.progress}%` }}></div>
      </div>
      
      <div className="donation-stats">
        <div className="donation-count">
          <i className="fas fa-users donation-users"></i>
          {card.donations.toLocaleString()} Donation
        </div>
        <div>
          <span className="donation-target">Target fund - </span>
          <span className="donation-goal">₹ {card.target.toLocaleString()}</span>
        </div>
      </div>
      
      <button className="button">Donate Now</button>
    </div>
  </div>
);

const FrequencySelector = ({ frequency, setFrequency }) => (
  <div className="frequency-options">
    {FREQUENCY_OPTIONS.map(freq => (
      <button 
        key={freq}
        className={`frequency-btn ${frequency === freq ? 'active' : ''}`} 
        onClick={() => setFrequency(freq)}
      >
        {freq}
      </button>
    ))}
  </div>
);

const AmountSelector = ({ selectedAmount, selectAmount }) => (
  <div className="amount-options">
    {AMOUNT_OPTIONS.map(amount => (
      <button 
        key={amount}
        className={`amount-btn ${selectedAmount === amount ? 'active' : ''}`} 
        onClick={() => selectAmount(amount)}
      >
        ₹ {amount}
      </button>
    ))}
  </div>
);

const CustomAmountInput = ({ customAmount, handleCustomAmountChange }) => (
  <div className="custom-amount">
    <div className="currency-select">
      <span>INR</span>
    </div>
    <span style={{ marginRight: "8px" }}>₹</span>
    <input
      type="number"
      className="amount-input"
      placeholder="Enter Amount"
      value={customAmount}
      onChange={(e) => handleCustomAmountChange(e.target.value)}
      min="1"
    />
  </div>
);

const ProgramSelector = ({ selectedProgram, setSelectedProgram }) => (
  <select 
    className="program-dropdown"
    value={selectedProgram}
    onChange={(e) => setSelectedProgram(e.target.value)}
  >
    <option value="">Program/ Campaign</option>
    {PROGRAMS.map(program => (
      <option key={program.value} value={program.value}>
        {program.label}
      </option>
    ))}
  </select>
);

const NationalitySelector = ({ nationality, setNationality }) => (
  <div className="nationality-options">
    <span className='nationality-options-span'>Nationality</span>
    <label className="radio-option">
      <input 
        type="radio" 
        name="nationality" 
        checked={nationality === 'Indian'}
        onChange={() => setNationality('Indian')}
      />
      <span>Indian</span>
    </label>
    <label className="radio-option">
      <input 
        type="radio" 
        name="nationality" 
        checked={nationality === 'Foreign/NRI'}
        onChange={() => setNationality('Foreign/NRI')}
      />
      <span>Foreign/ NRI</span>
    </label>
  </div>
);

const InputField = ({ icon: Icon, type = "text", placeholder, value, onChange, ...props }) => (
  <div className="input-group">
    <Icon className="input-icon" size={20} color="#999" />
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      {...props}
    />
  </div>
);

const StateSelector = ({ value, onChange }) => (
  <div className="input-group select-group">
    <MapPin className="input-icon" size={20} color="#999" />
    <select 
      className='program-dropdown'
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      <option value="">State*</option>
      {STATES.map(state => (
        <option key={state} value={state}>{state}</option>
      ))}
    </select>
    <ChevronDown className="select-arrow" size={16} color="#666" />
  </div>
);

const PaymentModeSelector = ({ paymentMode, setPaymentMode }) => (
  <div className="payment-buttons">
    {PAYMENT_MODES.map(mode => (
      <button 
        key={mode}
        className={`payment-btn ${paymentMode === mode ? 'active' : ''}`} 
        onClick={() => setPaymentMode(mode)}
      >
        {mode}
      </button>
    ))}
  </div>
);

const UPIPayment = ({ upiId, setUpiId }) => (
  <div className='upi-container'>
    <div className="upi-input-container">
      <input 
        type="text" 
        className="upi-input"
        placeholder="Enter UPI ID*" 
        value={upiId}
        onChange={(e) => setUpiId(e.target.value)}
      />
      
      <div className="payment-icons">
        <GPay />
        <PhonePe />
        <Paytm />
      </div>
      
      <div className="or-divider-line">
        <span>or</span>
      </div>
    </div>

    <div className="qr-img-container">
      <img src={Qr} alt="QR Code" className="qr-img" loading="lazy" />
    </div>  
  </div>
);

const CardPayment = () => (
  <div className="card-details">
    <h3 className='title-h3'>Credit/Debit Card Payment</h3>
    <div className="input-group" style={{marginBottom: '16px'}}>
      <input
        type="text"
        placeholder="Card Number*"
        style={{paddingLeft: '16px'}}
        maxLength="19"
      />
    </div>
    <div className="two-column" style={{marginBottom: '16px'}}>
      <div className="input-group">
        <input
          type="text"
          placeholder="MM/YY*"
          style={{paddingLeft: '16px'}}
          maxLength="5"
        />
      </div>
      <div className="input-group">
        <input
          type="text"
          placeholder="CVV*"
          style={{paddingLeft: '16px'}}
          maxLength="4"
        />
      </div>
    </div>
    <div className="input-group">
      <input
        type="text"
        placeholder="Cardholder Name*"
        style={{paddingLeft: '16px'}}
      />
    </div>
  </div>
);



// Separate volunteer form hook
const useVolunteerForm = () => {
  const [VolunteerformData, setFormData] = useState({
    fullName: '',
    email: '',
    mobile: '',
    gender: '',
    townCity: '',
    district: '',
    state: '',
    pinCode: '',
    program: '',
    timePeriod: '',
    duration: '',
    aboutYourself: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic validation
    const requiredFields = ['fullName', 'email', 'mobile', 'townCity', 'district', 'state', 'aboutYourself'];
    const missingFields = requiredFields.filter(field => !VolunteerformData[field].trim());
    
    if (missingFields.length > 0) {
      alert(`Please fill in all required fields: ${missingFields.join(', ')}`);
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(VolunteerformData.email)) {
      alert('Please enter a valid email address');
      return;
    }

    // Mobile validation (Indian mobile number)
    const mobileRegex = /^[6-9]\d{9}$/;
    if (!mobileRegex.test(VolunteerformData.mobile)) {
      alert('Please enter a valid 10-digit mobile number');
      return;
    }

    console.log('Form submitted with data:', VolunteerformData);
    alert('Thank you for registering as a volunteer! Jan Samar Foundation team will contact you soon.');
    
    // Reset form after successful submission
    setFormData({
      fullName: '',
      email: '',
      mobile: '',
      gender: '',
      townCity: '',
      district: '',
      state: '',
      pinCode: '',
      program: '',
      timePeriod: '',
      duration: '',
      aboutYourself: ''
    });
  };

  return { VolunteerformData, handleInputChange, handleSubmit };
};


const GetInvolved = () => {
  const { formData, updateField } = useFormData();
  const donationForm = useDonationForm();
  const { VolunteerformData, handleInputChange, handleSubmit } = useVolunteerForm();

  const heroStyle = useMemo(() => ({
    backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${BackgroundImage})`,
  }), []);

  const handleDonateClick = useCallback(() => {
    // Add donation logic here
    console.log('Donation Details:', {
      amount: donationForm.finalAmount,
      frequency: donationForm.frequency,
      program: donationForm.selectedProgram,
      paymentMode: donationForm.paymentMode,
      formData,
      coverCharges: donationForm.coverCharges
    });
  }, [donationForm, formData]);

  return (
    <>
      <section className="get-involved-intro" style={heroStyle}>
        <div className="get-involved-content">
          <h1>
            <span className="highlight-orange">Together,</span> we can turn dreams into
            <br />
            realities. Let's <span className="highlight-orange">get involved</span> and
            <br />
            make a difference!
          </h1>
          <p>
            Begin your journey driven by purpose and passion with{' '}
            <span className="highlight-orange">Jan Samar</span>
          </p>
        </div>
      </section>

      <section className='donation-section'>
        <div className='donation-container'>
          <div className='donation-header'>
            <div className='donation-title'>
              <h1>Donation</h1>
            </div>
            <div className='donation-description'>
              <p>
                "Happiness doesn't result from what we get, but from what we give". 
                <span className='donation-description-highlight'> -Ben Carson</span>
              </p>
            </div>
          </div>
        </div>
        
        <div className="donation-body">
          <div className="donation-container">
            <div className="donation-grid">
              {DONATION_CARDS.map(card => (
                <DonationCard key={card.id} card={card} />
              ))}
            </div>
          </div>
        </div>
        
        <div className="donation-pagination">
          {[...Array(4)].map((_, index) => (
            <div 
              key={index} 
              className={`donation-dot ${index === 0 ? 'active' : ''}`}
            ></div>
          ))}
        </div>
      </section>


      <div>
              <h1 className='contribute-title'>I Would Like to Contribute</h1>

      </div>

      <div className="paymant-container">

        <div className='required-note'>
          <p>(*) This field must be filled out.</p>
        </div>

        <div className="top-section">
          <div className="left-section">
            <h2 className="payment-section-title">Your Contribution</h2>

            <FrequencySelector 
              frequency={donationForm.frequency} 
              setFrequency={donationForm.setFrequency} 
            />

            <AmountSelector 
              selectedAmount={donationForm.selectedAmount} 
              selectAmount={donationForm.selectAmount} 
            />

            <CustomAmountInput 
              customAmount={donationForm.customAmount}
              handleCustomAmountChange={donationForm.handleCustomAmountChange}
            />

            <ProgramSelector 
              selectedProgram={donationForm.selectedProgram}
              setSelectedProgram={donationForm.setSelectedProgram}
            />

            <div className="contributor-section">
              <h2 className="payment-section-title">Contributor Information</h2>
              
              <NationalitySelector 
                nationality={donationForm.nationality}
                setNationality={donationForm.setNationality}
              />

              <InputField
                icon={User}
                placeholder="Full Name*"
                value={formData.fullName}
                onChange={(value) => updateField('fullName', value)}
                required
              />

              <InputField
                icon={Mail}
                type="email"
                placeholder="Email ID*"
                value={formData.email}
                onChange={(value) => updateField('email', value)}
                required
              />

              <InputField
                icon={Phone}
                type="tel"
                placeholder="Mobile No*"
                value={formData.mobile}
                onChange={(value) => updateField('mobile', value)}
                required
              />

              <div className="two-column">
                <InputField
                  icon={MapPin}
                  placeholder="Town/ City*"
                  value={formData.town}
                  onChange={(value) => updateField('town', value)}
                  required
                />
                <InputField
                  icon={Globe}
                  placeholder="District*"
                  value={formData.district}
                  onChange={(value) => updateField('district', value)}
                  required
                />
              </div>

              <div className="two-column">
                <StateSelector
                  value={formData.state}
                  onChange={(value) => updateField('state', value)}
                />
                <InputField
                  icon={MapPin}
                  placeholder="Pincode*"
                  value={formData.pincode}
                  onChange={(value) => updateField('pincode', value)}
                  maxLength="6"
                  required
                />
              </div>
            </div>
          </div>

          <div className="right-section">
            <h2 className="payment-section-title">Payment Mode</h2>
            
            <PaymentModeSelector 
              paymentMode={donationForm.paymentMode}
              setPaymentMode={donationForm.setPaymentMode}
            />

            {donationForm.paymentMode === 'UPI' && (
              <UPIPayment 
                upiId={donationForm.upiId}
                setUpiId={donationForm.setUpiId}
              />
            )}

            {donationForm.paymentMode === 'Card Transfer' && <CardPayment />}

            <div className="checkbox-container">
              <label className="checkbox-label">
                <input 
                  type="checkbox" 
                  className="checkbox-input"
                  checked={donationForm.coverCharges}
                  onChange={(e) => donationForm.setCoverCharges(e.target.checked)}
                />
                I'd like to cover the charges along with my contribution if there is any
              </label>
            </div>
          </div>
        </div>

        <div className="bottom-section"> 
          <button className="donate-button" onClick={handleDonateClick}>
            Donate Now
          </button>
        </div>
      </div>

      <div className="container-Jan-Samar">
        <div className="Jan-Samar-left">
          <img src={png} alt="Jan-Samar-Logo" loading="lazy" />
        </div>
        <div className="Jan-Samar-right">
          <p className='right-p'>
            Jan Samar Foundation is registered under Section 80G of the Income Tax Act, 1961. 
            Your donation is eligible for tax exemption.
          </p>
          <br />
          <p className='right-p-highlight'>Instructions on Section 80G of the Income Tax Act:</p>
          <ul>
            <li>
              Any donations made in cash exceeding ₹2,000 will not be allowed as deduction. 
              Donations above ₹2,000 should be made in any mode other than cash to qualify as a deduction.
            </li>
            <li>
              Obtain a receipt from the organization, which will contain the name and address 
              of the charitable organization, along with their registration number.
            </li>
          </ul>
        </div>
      </div>

      <section className='Volunteering-section'>
        <div className='Volunteering-container'> 
        <div className='Volunteering-header'>
          <div className='Volunteering-title h1'>
            <h1>Volunteering</h1>
          </div>
        </div>
<div className="Volunteering-description">
  <p >
    “If you want to touch the past, touch a rock. If you want to touch the present, touch a flower.
    If you want to touch the future, touch a life.”
    <span className="Volunteering-description-highlight"> – Author Unknown</span>
  </p>
</div>
        </div>
<div className="Volunteering-card">
    <div className="Volunteering-top">
      <div className='volunteering-top-left'>
        <p>The Jan Samar Foundation offers a variety of short-term, low-commitment volunteer opportunities that bring people
together in a powerful way. As a volunteer driven
organization, we thrive on the passion of thousands of
amazing individuals and groups. It is truly inspiring to witness
people from all walks of life uniting with Jan Samar to share
their time and talents. Our volunteers range from college
students to business professionals and retirees, all eager to
lend a hand. Behind every program, campaign, and event is a
dedicated army of volunteers who provide direct services,
support special events, engage in outreach, and offer vital
administrative assistance - they truly do it all!</p>

      </div>

      <div className='volunteering-top-right'>
    <img src={handimage} alt="Volunteering hands together"/>

      </div>

    </div>
    <div className="Volunteering-bottom">
      <div className='Volunteering-bottom-header'> 
        <div className='Volunteering-bottom-title'>
      <h1>Join us at <span className='donation-description-highlight'>Jan Samar Foundation</span></h1>

        </div>
      </div>
      <div className="Volunteering-Registration">
        <h3 className="payment-section-title">Volunteer Details</h3>
        
        <div>
          <InputField
            icon={User}
            placeholder="Full Name*"
            value={formData.fullName}
            onChange={(value) => updateField('fullName', value)}
            required
          />
          
          <div className="two-column">
            <InputField
              icon={Mail}
              type="email"
              placeholder="Email ID*"
              value={formData.email}
              onChange={(value) => updateField('email', value)}
              required
            />
            <InputField
              icon={Phone}
              type="tel"
              placeholder="Mobile No*"
              value={formData.mobile}
              onChange={(value) => updateField('mobile', value)}
              required
            />
          </div>
          
            <div className="radio-section">
              <div className="gender-options">
                <span className="gender-options-span">Gender</span>
                <div className="radio-option" onClick={() => updateField('gender', 'male')}>
                  <input
                    type="radio"
                    name="gender"
                    value="male"
                    checked={formData.gender === 'male'}
                    onChange={(e) => updateField('gender', e.target.value)}
                  />
                  Male
                </div>
                <div className="radio-option" onClick={() => updateField('gender', 'female')}>
                  <input
                    type="radio"
                    name="gender"
                    value="female"
                    checked={formData.gender === 'female'}
                    onChange={(e) => updateField('gender', e.target.value)}
                  />
                  Female
                </div>
                <div className="radio-option" onClick={() => updateField('gender', 'others')}>
                  <input
                    type="radio"
                    name="gender"
                    value="others"
                    checked={formData.gender === 'others'}
                    onChange={(e) => updateField('gender', e.target.value)}
                  />
                  Others
                </div>
              </div>
            </div>
          
          <div className="two-column">
            <InputField
              icon={MapPin}
              placeholder="Town/ City*"
              value={formData.town}
              onChange={(value) => updateField('town', value)}
              required
            />
            <InputField
              icon={MapPin}
              placeholder="District*"
              value={formData.district}
              onChange={(value) => updateField('district', value)}
              required
            />
          </div>
          
          <div className="two-column">
            <StateSelector
              value={formData.state}
              onChange={(value) => updateField('state', value)}
            />
            <InputField
              icon={MapPin}
              placeholder="Pincode*"
              value={formData.pinCode}
              onChange={(value) => updateField('pinCode', value)}
              maxLength="6"
              required
            />
          </div>

        </div>
        <h3 className="payment-section-title">Volunteering Details</h3>

                                <div>
                      <ProgramSelector 
              selectedProgram={donationForm.selectedProgram}
              setSelectedProgram={donationForm.setSelectedProgram}
            />
          
<div className="two-column">
  <InputField
    icon={Calendar}
    type="select"
    placeholder="Select Time Period*"
    value={formData.timePeriod}
    onChange={(value) => updateField('timePeriod', value)}
    required
    options={[
      { value: 'morning', label: 'Morning (6 AM - 12 PM)' },
      { value: 'afternoon', label: 'Afternoon (12 PM - 6 PM)' },
      { value: 'evening', label: 'Evening (6 PM - 10 PM)' },
      { value: 'weekends', label: 'Weekends Only' },
      { value: 'flexible', label: 'Flexible' }
    ]}
  />
  <InputField
    icon={Clock}
    type="text"
    placeholder="Duration of Volunteering"
    value={formData.duration}
    onChange={(value) => updateField('duration', value)}
  />
</div>

    <textarea
    placeholder="About Yourself*"
    value={formData.aboutYourself}
    onChange={(e) => updateField('aboutYourself', e.target.value)}
    required
    rows={6}
    className="textarea-input"
  />
      </div>
      </div>
            <button className="button">Register Now</button>
            <div className="Registration-note"><p>*Jan Samar Team will reach out to you through mail or Mobile No.</p></div>
    </div>
</div>

    <div className="benefits-directives-container">
        <div className="section">
            <h2 className="section-title">Benefits</h2>
            <div className="section-content">
                <div className="benefit-item">Certificate of completion or appreciation</div>
                <div className="benefit-item">Potential for letters of recommendation</div>
                <div className="benefit-item">Networking opportunities with other volunteers and NGO staff</div>
            </div>
        </div>

        <div className="section">
            <h2 className="section-title">Directives</h2>
            <div className="section-content">
                <div className="directive-item">The foundation reserves the right to approve or reject volunteer applications at any time</div>
                <div className="directive-item">Putting in genuine effort during volunteering is crucial</div>
                <div className="directive-item">Follow the provided instructions closely, as failure to do so may result in immediate termination of your volunteership.</div>
                <div className="directive-item">No misuse of the foundation's name for dishonest purposes. Guilty parties will face strict consequences.</div>
            </div>
        </div>
    </div>

      </section>
    </>
  );
};

export default GetInvolved;