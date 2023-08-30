import React from "react"

export default function Configuration({openConfig, handleConfig, setApiQueryString}) {
    const [formData, setFormData] = React.useState({
        amount: 5,
        category: "",
        difficulty: "",
        type: 'multiple'
    })

    function handleChange(event) {
        const {name, value} = event.target
        setFormData((prevData) => (
            {
                ...prevData,
                [name] : value
            }
        ) )
    }

    React.useEffect(() => {
        const { amount, category, difficulty, type } = formData;
        setApiQueryString(
          `https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}&type=${type}`
        );
      }, [formData, setApiQueryString]);

    return (
        <div className={openConfig ? "configurations active" : "configurations"} >
            <div className="configurations__input-group">
                <label htmlFor="configurationsCount">Number of Questions</label>
                <input 
                    id="configurationsCount"
                    type="number" 
                    name="amount" 
                    min="5" 
                    max="50" 
                    placeholder="Enter a number [5-50]"
                    onChange={handleChange}
                    value={formData.amount}
                />
            </div>
            <div className="configurations__input-group">
                <label htmlFor="configurationsCategories">Category</label>
                <select 
                    id="configurationsCategories"
                    name="category"
                    onChange={handleChange}
                    value={formData.category}
                >
                    <option value="">Any Category</option>
                    <option value="9">General Knowledge</option>
                    <option value="10">Entertainment: Books</option>
                    <option value="11">Entertainment: Film</option>
                    <option value="12">Entertainment: Music</option>
                    <option value="13">Entertainment: Musicals  Theatres</option>
                    <option value="14">Entertainment: Television</option>
                    <option value="15">Entertainment: Video Games</option>
                    <option value="16">Entertainment: Board Games</option>
                    <option value="17">Science &amp; Nature</option>
                    <option value="18">Science: Computers</option>
                    <option value="19">Science: Mathematics</option>
                    <option value="20">Mythology</option>
                    <option value="21">Sports</option>
                    <option value="22">Geography</option>
                    <option value="23">History</option>
                    <option value="24">Politics</option>
                    <option value="25">Art</option>
                    <option value="26">Celebrities</option>
                    <option value="27">Animals</option>
                    <option value="28">Vehicles</option>
                    <option value="29">Entertainment: Comics</option>
                    <option value="30">Science: Gadgets</option>
                    <option value="31">Entertainment: Japanese Anime &amp; Manga</option>
                    <option value="32">Entertainment: Cartoon &amp; Animations</option>
                </select>
            </div>
            <div className="configurations__input-group">
                <label htmlFor="configurationsDifficulty">Difficulty</label>
                <select 
                    id="configurationsDifficulty"
                    name="difficulty"
                    onChange={handleChange}
                    value={formData.difficulty}
                >
                    <option value="">Any Difficulty</option>
                    <option value="easy">Easy</option>
                    <option value="medium">Medium</option>
                    <option value="hard">Hard</option>
                </select>
            </div>
            <button className="configurations__btn" onClick={handleConfig}></button>
        </div>
    )
}