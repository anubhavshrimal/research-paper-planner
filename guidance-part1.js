// Guidance content for Part 1: Idea Formulation and Core Story
const guidancePart1 = {
    // 1. Defining Your Core Idea
    "q1_1": {
        title: "Central Problem",
        content: `
            <h3>Defining Your Central Problem</h3>
            <p>A clear problem statement is the foundation of a good paper. It should be specific, concise, and focused.</p>
            
            <p>From the blog:</p>
            <blockquote>
                "What is the goal and why do people care? If you want it yourself to solve some problem, then that is a good sign. Explain why you want it."
            </blockquote>
            
            <div class="example">
                <p><strong>Example:</strong> Instead of "We want to improve image recognition," try "Current image recognition systems fail in low-light conditions, limiting their use in critical nighttime applications like autonomous driving."</p>
            </div>
            
            <p>A good problem statement:</p>
            <ul>
                <li>Is specific and well-defined</li>
                <li>Has clear boundaries</li>
                <li>Addresses a real need</li>
                <li>Can be understood by your target audience</li>
            </ul>
        `
    },
    "q1_2": {
        title: "Problem Importance",
        content: `
            <h3>Why Your Problem Matters</h3>
            <p>Explaining why your problem is important helps reviewers understand the significance of your work.</p>
            
            <p>From the blog:</p>
            <blockquote>
                "Don't write things like 'We are interested in X'. Nobody cares what you are interested in or what you want. What does your audience want? Instead, write something like 'X is important because… and X is unsolved because…'. Don't personalize things. The paper is not about you, it is about the problem in the world."
            </blockquote>
            
            <div class="example">
                <p><strong>Example:</strong> "Accurate low-light image recognition would enable autonomous vehicles to operate safely at night, potentially preventing thousands of accidents annually and expanding the utility of self-driving technology to 24-hour operation."</p>
            </div>
            
            <p>When explaining importance, consider:</p>
            <ul>
                <li>Practical applications</li>
                <li>Societal impact</li>
                <li>Technical significance</li>
                <li>Economic implications</li>
            </ul>
        `
    },
    "q1_3": {
        title: "Previous Work Limitations",
        content: `
            <h3>Identifying Limitations in Previous Work</h3>
            <p>Understanding what has prevented others from solving this problem is crucial for positioning your contribution.</p>
            
            <p>From the blog:</p>
            <blockquote>
                "What are the key previous works and what do they get wrong? All papers have limitations. Find these and they point the way forward."
            </blockquote>
            
            <div class="example">
                <p><strong>Example:</strong> "Previous approaches to low-light image recognition have relied heavily on image enhancement preprocessing, which introduces artifacts that confuse classification networks. Additionally, existing datasets lack sufficient diversity in nighttime scenarios."</p>
            </div>
            
            <p>When analyzing previous work:</p>
            <ul>
                <li>Be fair and objective</li>
                <li>Identify specific technical limitations</li>
                <li>Recognize dataset or evaluation shortcomings</li>
                <li>Note methodological constraints</li>
            </ul>
        `
    },
    "q1_4": {
        title: "Hypothesis",
        content: `
            <h3>Formulating a Testable Hypothesis</h3>
            <p>A clear hypothesis guides your research and makes your claims verifiable.</p>
            
            <p>From the blog:</p>
            <blockquote>
                "What is your hypothesis? I'd like everyone to have the sentence 'My hypothesis is….' even if we do not include it in the paper. Is your hypothesis testable? How will you know whether it is true or not? Focusing on a hypothesis keeps you out of the trap of incremental engineering (i.e. hacking your way to slightly better numbers)."
            </blockquote>
            
            <div class="example">
                <p><strong>Example:</strong> "We hypothesize that by jointly learning image enhancement and classification in a single end-to-end network with a specialized loss function that accounts for low-light characteristics, we can achieve superior nighttime image recognition compared to sequential enhancement-then-classification approaches."</p>
            </div>
            
            <p>A good hypothesis:</p>
            <ul>
                <li>Is specific and testable</li>
                <li>Predicts outcomes</li>
                <li>Can be supported or refuted by experiments</li>
                <li>Addresses the core problem</li>
            </ul>
        `
    },
    "q1_5": {
        title: "The Nugget",
        content: `
            <h3>Your Key Insight: The Nugget</h3>
            <p>The "nugget" is your key insight that makes the impossible possible.</p>
            
            <p>From the blog:</p>
            <blockquote>
                "A nugget is a shiny piece of gold. In your paper, it is your key insight. It is the insight that nobody had before. It is the idea that takes a problem that could not be solved and turns it into one that can be solved. The nugget is how you see the world differently from everyone who has come before you."
            </blockquote>
            
            <blockquote>
                "The nugget is not your technical contribution. I repeat: it is not your technical contribution. It is the insight that leads to your contribution. It was Max Planck who said 'insight precedes innovation'. If you can articulate your insight and share it with the reader, you have done most of your job. The rest is details."
            </blockquote>
            
            <div class="example">
                <p><strong>Example from the blog:</strong> "Previous work in optical flow estimation has focused on the violation of spatial smoothness at motion boundaries while ignoring violations of the brightness constancy assumption. Within the robust estimation framework, violations of both constraints are treated in a uniform manner and we will demonstrate that this 'robustification' of the brightness constancy assumption greatly improves the flow estimates."</p>
            </div>
            
            <p>A good nugget:</p>
            <ul>
                <li>Represents a fundamental insight, not just a technical detail</li>
                <li>Often connects two previously unconnected ideas</li>
                <li>Makes the unsolvable solvable</li>
                <li>Changes how people think about the problem</li>
            </ul>
        `
    },

    // 2. Understanding Your Audience and Impact
    "q1_6": {
        title: "Primary Audience",
        content: `
            <h3>Identifying Your Primary Audience</h3>
            <p>Understanding who will read your paper helps you tailor your message effectively.</p>
            
            <p>From the blog:</p>
            <blockquote>
                "Who is your audience? Who is going to use this? Make sure you have a clear message."
            </blockquote>
            
            <div class="example">
                <p><strong>Example:</strong> "Our primary audience includes computer vision researchers focused on robust perception systems, as well as practitioners developing autonomous driving technology who need reliable nighttime vision capabilities."</p>
            </div>
            
            <p>Consider these audience aspects:</p>
            <ul>
                <li>Technical background and expertise level</li>
                <li>Specific sub-fields or research communities</li>
                <li>Academic vs. industry practitioners</li>
                <li>What they already know vs. what you need to explain</li>
            </ul>
        `
    },
    "q1_7": {
        title: "Future Impact",
        content: `
            <h3>Anticipating Future Impact</h3>
            <p>Considering who will build upon your work helps position it for maximum influence.</p>
            
            <p>From the blog:</p>
            <blockquote>
                "Who is your audience? Who will use this or build on this?"
            </blockquote>
            
            <div class="example">
                <p><strong>Example:</strong> "Our work will likely be built upon by researchers developing multi-modal perception systems who can integrate our low-light vision approach with other sensors. Additionally, those working on domain adaptation may extend our techniques to other challenging lighting conditions."</p>
            </div>
            
            <p>When considering future impact, think about:</p>
            <ul>
                <li>Which research directions your work enables</li>
                <li>Practical applications that might adopt your approach</li>
                <li>How your methods might generalize to other domains</li>
                <li>What tools or datasets you're providing that others can use</li>
            </ul>
        `
    },

    // 3. Crafting Your Narrative
    "q1_8": {
        title: "Goal Definition",
        content: `
            <h3>Defining the Goal for Your Reader</h3>
            <p>Make the reader want what you're offering by clearly defining a desirable goal.</p>
            
            <p>From the blog:</p>
            <blockquote>
                "Define your goal. Make the reader want this by explaining why it is important."
            </blockquote>
            
            <blockquote>
                "How to tell a story: Goal, Problem, Solution... The structure of a good science paper is similar to [a classic story]. There is a goal to be achieved (true love, the Ring, or defeating the villain) but something stands in the way."
            </blockquote>
            
            <div class="example">
                <p><strong>Example:</strong> "The goal is to create vision systems that perform consistently across all lighting conditions, particularly in challenging low-light environments where current systems fail. This would enable critical applications like nighttime autonomous driving and 24-hour surveillance systems to operate reliably."</p>
            </div>
            
            <p>A compelling goal:</p>
            <ul>
                <li>Is clearly desirable and important</li>
                <li>Addresses a recognized need</li>
                <li>Has obvious benefits if achieved</li>
                <li>Is ambitious but not impossible</li>
            </ul>
        `
    },
    "q1_9": {
        title: "Problem Presentation",
        content: `
            <h3>Creating Tension with the Problem</h3>
            <p>Describe what prevents the goal from being achieved to create narrative tension.</p>
            
            <p>From the blog:</p>
            <blockquote>
                "Then take it away. This creates the excitement and drama. As a reader, I now want the thing and can't have it."
            </blockquote>
            
            <blockquote>
                "This rhythm of problem-solution-problem-solution is the clearest way to convey a scientific story in discoverable pieces. You lead the reader from problem to insight in layers."
            </blockquote>
            
            <div class="example">
                <p><strong>Example:</strong> "However, current computer vision systems experience a dramatic performance drop in low-light conditions due to reduced signal-to-noise ratio, color distortion, and loss of detail. Traditional approaches that separate enhancement from recognition introduce artifacts that further degrade performance."</p>
            </div>
            
            <p>An effective problem presentation:</p>
            <ul>
                <li>Creates tension by showing why the goal is currently unattainable</li>
                <li>Identifies specific obstacles or challenges</li>
                <li>Explains why existing approaches fail</li>
                <li>Makes the reader want a solution</li>
            </ul>
        `
    },
    "q1_10": {
        title: "Solution Presentation",
        content: `
            <h3>Presenting Your Solution as the Hero</h3>
            <p>Show how your clever idea overcomes the obstacle and achieves the goal.</p>
            
            <p>From the blog:</p>
            <blockquote>
                "You then fix this with a clever idea and make it possible. This makes you the hero."
            </blockquote>
            
            <div class="example">
                <p><strong>Example:</strong> "Our solution is a novel end-to-end architecture that jointly learns enhancement and recognition, guided by a specialized loss function that accounts for low-light characteristics. By allowing these processes to inform each other during training, our approach avoids enhancement artifacts and optimizes directly for recognition performance."</p>
            </div>
            
            <p>An effective solution presentation:</p>
            <ul>
                <li>Directly addresses the stated problem</li>
                <li>Highlights your key insight (nugget)</li>
                <li>Explains why it works where others failed</li>
                <li>Provides a clear path to achieving the goal</li>
            </ul>
        `
    },
    "q1_11": {
        title: "Layered Narrative",
        content: `
            <h3>Building a Layered Narrative</h3>
            <p>For complex papers with multiple insights, create a layered structure of goals, problems, and solutions.</p>
            
            <p>From the blog:</p>
            <blockquote>
                "But in a really good story that is not the end. On a quest, one faces a series of challenges. Each one must be surmounted."
            </blockquote>
            
            <div class="example">
                <p><strong>Example:</strong></p>
                <p><strong>Layer 1:</strong><br>
                Goal: Reliable low-light image recognition<br>
                Problem: Traditional sequential approaches introduce artifacts<br>
                Solution: Joint end-to-end learning of enhancement and recognition</p>
                
                <p><strong>Layer 2:</strong><br>
                Goal: Effective training of the joint model<br>
                Problem: Standard loss functions don't account for low-light characteristics<br>
                Solution: Novel illumination-aware loss function</p>
                
                <p><strong>Layer 3:</strong><br>
                Goal: Generalizing to diverse real-world conditions<br>
                Problem: Limited low-light training data<br>
                Solution: Synthetic data generation and domain adaptation techniques</p>
            </div>
            
            <p>Benefits of a layered narrative:</p>
            <ul>
                <li>Handles complex ideas in digestible chunks</li>
                <li>Creates multiple moments of insight for the reader</li>
                <li>Builds a compelling case through progressive revelations</li>
                <li>Addresses different aspects of a complex problem</li>
            </ul>
        `
    },

    // 4. Distilling Your Message
    "q1_12": {
        title: "Elevator Pitch",
        content: `
            <h3>Crafting Your Elevator Pitch</h3>
            <p>A concise summary of your paper's core idea that can be quickly understood.</p>
            
            <p>From the blog:</p>
            <blockquote>
                "What is your elevator pitch? That is, if you meet a senior scientist in an elevator and she asks you what your paper is about, how do you describe it in 3 sentences or fewer."
            </blockquote>
            
            <div class="example">
                <p><strong>Example:</strong> "We've developed a novel approach for image recognition in low-light conditions that jointly learns enhancement and classification in a single network. Unlike traditional methods that separate these steps, our end-to-end approach avoids enhancement artifacts and optimizes directly for recognition performance. Our method achieves state-of-the-art results on nighttime imagery, enabling more reliable computer vision applications in challenging lighting conditions."</p>
            </div>
            
            <p>An effective elevator pitch:</p>
            <ul>
                <li>Is brief (three sentences or fewer)</li>
                <li>Captures the core problem and your solution</li>
                <li>Highlights what makes your approach novel</li>
                <li>Conveys the significance of your contribution</li>
            </ul>
        `
    },
    "q1_13": {
        title: "Teaser Image",
        content: `
            <h3>Creating a Compelling Teaser Image</h3>
            <p>A visual representation that instantly communicates your core idea.</p>
            
            <p>From the blog:</p>
            <blockquote>
                "Teaser — what would a teaser image show to explain this core idea?"
            </blockquote>
            
            <blockquote>
                "What is a teaser image and why is it there? An abstract summarizes the main idea of the paper. The teaser does the same thing but visually. It helps the reader get the main idea before diving into the paper. The abstract and the teaser may be the only thing some people read so the combination should provide a digest of the work."
            </blockquote>
            
            <div class="example">
                <p><strong>Example:</strong> A side-by-side comparison showing: (1) A nighttime image, (2) The same image after traditional enhancement (with visible artifacts), (3) The same image processed by our method, and (4) Classification results for each approach, highlighting our method's superior performance.</p>
            </div>
            
            <p>A teaser image can take several forms:</p>
            <ul>
                <li>Summary of results: Show your method's superior performance</li>
                <li>Illustration of the problem: Show why current methods fail</li>
                <li>System overview: A simplified diagram of your approach</li>
                <li>Before/after comparison: Demonstrate the improvement visually</li>
            </ul>
        `
    },

    // 5. Related Work and Evaluation
    "q1_14": {
        title: "Key Previous Works",
        content: `
            <h3>Identifying Key Previous Works</h3>
            <p>Understand and acknowledge the important prior research that relates to your work.</p>
            
            <p>From the blog:</p>
            <blockquote>
                "A good related work section can push a good paper into a paper that 'stands the test of time'."
            </blockquote>
            
            <blockquote>
                "A good previous work section gives the reader insight into the history of the field. It provides a starting point for people to learn about the field but, more importantly, gives them a way to think about it. It frames the history in the context of the current paper."
            </blockquote>
            
            <div class="example">
                <p><strong>Example:</strong> "Key previous works include: (1) EnhanceNet (Smith et al., 2019) which pioneered deep learning for low-light image enhancement, (2) NightVision (Jones et al., 2020) which introduced specialized datasets for nighttime imagery, (3) RobustRecognition (Zhang et al., 2021) which focused on recognition under adverse conditions but didn't specifically address low-light scenarios, and (4) Sequential-EP (Wang et al., 2022) which proposed a two-stage enhance-then-predict pipeline."</p>
            </div>
            
            <p>When identifying previous works:</p>
            <ul>
                <li>Look beyond recent papers (last 4 years)</li>
                <li>Trace ideas back to their origins</li>
                <li>Group works by themes or approaches</li>
                <li>Include seminal papers that defined the field</li>
            </ul>
        `
    },
    "q1_15": {
        title: "Previous Work Limitations",
        content: `
            <h3>Analyzing Limitations in Previous Work</h3>
            <p>Identify specific shortcomings in prior research that your work addresses.</p>
            
            <p>From the blog:</p>
            <blockquote>
                "To achieve this, it should *organize* the work into themes or groups — that is, it should point out commonality between methods."
            </blockquote>
            
            <blockquote>
                "A good related work section is not a laundry list of what others have done. It teaches. That is, it should organize and summarize the related work. Each paragraph should cover a 'topic' and should say what the prior art on that topic got right and what it missed. This is key. You need to analyze the prior art and not just report it."
            </blockquote>
            
            <div class="example">
                <p><strong>Example:</strong> "Previous works fall short in several key areas: (1) Enhancement-focused approaches like EnhanceNet optimize for visual quality rather than recognition performance, introducing artifacts that confuse classifiers; (2) Recognition-focused methods like RobustRecognition treat low-light as just another augmentation rather than addressing its unique challenges; (3) Sequential approaches like Sequential-EP suffer from error propagation between stages; and (4) Existing datasets lack sufficient diversity in nighttime scenarios, limiting generalization to real-world conditions."</p>
            </div>
            
            <p>When analyzing limitations:</p>
            <ul>
                <li>Be fair and objective in your assessment</li>
                <li>Identify specific technical limitations, not just general shortcomings</li>
                <li>Group similar limitations across multiple papers</li>
                <li>Show how these limitations create an opportunity for your work</li>
            </ul>
        `
    },
    "q1_16": {
        title: "Quantitative Evaluation",
        content: `
            <h3>Planning Your Quantitative Evaluation</h3>
            <p>Define how you'll rigorously evaluate your method with metrics and comparisons.</p>
            
            <p>From the blog:</p>
            <blockquote>
                "How will you quantitatively evaluate your method? (What metrics, datasets, comparisons?)"
            </blockquote>
            
            <blockquote>
                "You have a fancy new method and you're really excited about it. Your reviewers love new fancy methods. But the first thing you should think is 'is there a simpler method that can solve this?'. This is your baseline. Implement the simple baseline up front and test it. You may be surprised that simple baselines are often hard to beat."
            </blockquote>
            
            <div class="example">
                <p><strong>Example:</strong> "We will evaluate our method using: (1) Standard classification metrics (accuracy, precision, recall, F1) on low-light images; (2) Datasets including our new NightVision benchmark and modified versions of COCO and ImageNet with synthetic low-light transformations; (3) Comparisons against both enhancement-only methods (EnhanceNet, LIME), recognition-only methods (RobustRecognition), and sequential pipelines (Sequential-EP); and (4) Ablation studies isolating the contribution of each component of our approach."</p>
            </div>
            
            <p>For effective quantitative evaluation:</p>
            <ul>
                <li>Use established metrics relevant to your task</li>
                <li>Include appropriate datasets that test your claims</li>
                <li>Compare against strong baselines and state-of-the-art methods</li>
                <li>Perform ablation studies to validate each component</li>
                <li>Change one thing at a time to isolate effects</li>
            </ul>
        `
    },
    "q1_17": {
        title: "Qualitative Demonstration",
        content: `
            <h3>Planning Your Qualitative Demonstration</h3>
            <p>Define how you'll visually or intuitively demonstrate that your method works.</p>
            
            <p>From the blog:</p>
            <blockquote>
                "What is your 'demo'? How will you convincingly show that your idea works? (Beyond quantitative metrics, what qualitative demonstration?)"
            </blockquote>
            
            <div class="example">
                <p><strong>Example:</strong> "Our qualitative demonstration will include: (1) Visual comparisons of recognition results on challenging real-world nighttime scenes; (2) Attention map visualizations showing how our model focuses on different image regions compared to baselines; (3) A failure case analysis identifying remaining challenges; and (4) An interactive demo allowing users to upload their own low-light images and see classification results from our method versus baselines."</p>
            </div>
            
            <p>Effective qualitative demonstrations:</p>
            <ul>
                <li>Show real-world examples where your method succeeds and others fail</li>
                <li>Visualize internal workings of your approach (e.g., attention maps)</li>
                <li>Include challenging cases and failure analysis</li>
                <li>Demonstrate practical applications</li>
                <li>Provide interactive demos when possible</li>
            </ul>
        `
    }
};

// Export the guidance content
if (typeof module !== 'undefined' && module.exports) {
    module.exports = guidancePart1;
}
