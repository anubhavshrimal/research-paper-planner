// Guidance content for Part 2: Section-by-Section Content Preparation
const guidancePart2 = {
    // 1. Title and Acronym
    "q2_1": {
        title: "Paper Title",
        content: `
            <h3>Crafting an Effective Title</h3>
            <p>A good title is concise, informative, and memorable.</p>
            
            <p>From the blog:</p>
            <blockquote>
                "What is the key insight? What is the key contribution? Can you reduce this to a short advertisement?"
            </blockquote>
            
            <blockquote>
                "While the abstract is a summary of the paper, you can think of the title as a summary of the abstract. It is the key contribution of the paper condensed to a line of poetry. Like poetry, it should be short and suggestive. It should conjure in the mind the concept of the paper."
            </blockquote>
            
            <div class="example">
                <p><strong>Examples of good titles:</strong></p>
                <ul>
                    <li>"SMPL: A Skinned Multi-Person Linear Model" - Concise, includes the acronym</li>
                    <li>"On the unification of line processes, outlier rejection, and robust statistics with applications in early vision" - Describes the key insight</li>
                    <li>"Towards Accurate Markerless Human Shape and Pose Estimation over Time" - Uses "Towards" for preliminary work</li>
                </ul>
            </div>
            
            <p>Title types:</p>
            <ul>
                <li><strong>"Towards" papers</strong>: For preliminary work that starts something new</li>
                <li><strong>"On" papers</strong>: For work that provides a foundation, focuses on providing an insight, or opens a new area</li>
                <li>Avoid being too cute or using marketing language</li>
            </ul>
        `
    },
    "q2_2": {
        title: "Method Description Words",
        content: `
            <h3>Identifying Key Terms for Your Acronym</h3>
            <p>Collect relevant nouns and verbs that describe your method to help generate a memorable acronym.</p>
            
            <p>From the blog:</p>
            <blockquote>
                "A catchy, short, and pronounceable acronym helps people remember, refer to, and cite your work. Here is the trick for creating this: Write down all the relevant words, take the first letters and then see what you can spell that sounds relevant or catchy."
            </blockquote>
            
            <div class="example">
                <p><strong>Example from the blog:</strong></p>
                <p>For a paper on dressing 3D bodies, these words might be relevant:</p>
                <ul>
                    <li>Multi, Mesh, Human</li>
                    <li>Clothing, Cloth</li>
                    <li>Dressing, Person, Body</li>
                    <li>Pose, Latent</li>
                    <li>Auto-Encoder, Variational</li>
                    <li>Wardrobe, Displacement, Regression</li>
                </ul>
                <p>These give letters like: M, C, D, P, B, L, V, W, R, H (consonants) and A, E (vowels)</p>
            </div>
            
            <p>When collecting words:</p>
            <ul>
                <li>Focus on technical terms that describe your method</li>
                <li>Include both nouns and verbs</li>
                <li>Consider the key components or innovations</li>
                <li>Think about the problem domain and application area</li>
            </ul>
        `
    },
    "q2_3": {
        title: "Acronym Generation",
        content: `
            <h3>Creating a Memorable Acronym</h3>
            <p>A good acronym makes your work more memorable and easier to reference.</p>
            
            <p>From the blog:</p>
            <blockquote>
                "A good acronym should be invertible. That is, the acronym should let me infer the words that generated it. At least it should be a reminder of those words. This is why I always make an acronym from the first nouns and/or verbs in the description."
            </blockquote>
            
            <div class="example">
                <p><strong>Examples from the blog:</strong></p>
                <ul>
                    <li><strong>SMPL</strong> (Skinned Multi-Person Linear model) - Reinforces that the model is "simple"</li>
                    <li><strong>MANO</strong> (hand Model with Articulated and Non-rigid defOrmations) - "Mano" means "hand" in Spanish</li>
                    <li>Potential acronyms from clothing words: CLOTHE, ROBE, CAPE, GOWN, CLOAK, WRAP, GARB</li>
                    <li>Examples: CAPE (Clothed Auto Person Encoding), WRAP (Wardrobe Regressor Auto-Encoder for People)</li>
                </ul>
            </div>
            
            <p>Characteristics of a good acronym:</p>
            <ul>
                <li><strong>Pronounceable</strong>: Easy to say out loud</li>
                <li><strong>Memorable</strong>: Easy to remember</li>
                <li><strong>Relevant</strong>: Related to your topic</li>
                <li><strong>Unique</strong>: Distinctive enough to be searchable</li>
                <li><strong>Semantic</strong>: Has meaning related to your work</li>
            </ul>
            
            <p>Tip: Use online tools like Scrabble word finders to help generate potential acronyms from your letters.</p>
        `
    },

    // 2. Abstract
    "q2_4": {
        title: "Topic Introduction",
        content: `
            <h3>Introducing Your Topic</h3>
            <p>Begin your abstract by establishing the importance of your research area.</p>
            
            <p>From the blog:</p>
            <blockquote>
                "Here is my Mad Libs version of an abstract. Keep the bold words and fill in the rest."
            </blockquote>
            
            <blockquote>
                "<strong>_____</strong> is widely used in computer vision and has applications in <strong>_____</strong>."
            </blockquote>
            
            <div class="example">
                <p><strong>Example:</strong> "Low-light image recognition is widely used in computer vision and has applications in autonomous driving, surveillance, and mobile photography."</p>
            </div>
            
            <p>This opening sentence should:</p>
            <ul>
                <li>Establish the broad research area</li>
                <li>Highlight practical applications</li>
                <li>Signal to readers why they should care</li>
                <li>Be concise and direct</li>
            </ul>
        `
    },
    "q2_5": {
        title: "Previous Approaches",
        content: `
            <h3>Summarizing Previous Approaches</h3>
            <p>Briefly describe how others have tackled this problem.</p>
            
            <p>From the blog:</p>
            <blockquote>
                "Recent work has addressed this problem by <strong>_____</strong>."
            </blockquote>
            
            <div class="example">
                <p><strong>Example:</strong> "Recent work has addressed this problem by applying image enhancement techniques as a preprocessing step before feeding images to standard recognition networks."</p>
            </div>
            
            <p>When summarizing previous approaches:</p>
            <ul>
                <li>Be concise but accurate</li>
                <li>Focus on the most relevant or recent methods</li>
                <li>Group similar approaches together</li>
                <li>Avoid detailed critiques (save that for later)</li>
            </ul>
        `
    },
    "q2_6": {
        title: "Limitations of Previous Approaches",
        content: `
            <h3>Identifying Limitations</h3>
            <p>Highlight the shortcomings of existing methods to create tension.</p>
            
            <p>From the blog:</p>
            <blockquote>
                "<strong>Unfortunately</strong>, all of these approaches <strong>_____</strong>."
            </blockquote>
            
            <div class="example">
                <p><strong>Example:</strong> "Unfortunately, all of these approaches suffer from error propagation between the enhancement and recognition stages, as enhancement artifacts often confuse the recognition networks."</p>
            </div>
            
            <p>When describing limitations:</p>
            <ul>
                <li>Be specific about the technical shortcomings</li>
                <li>Avoid overly harsh criticism</li>
                <li>Focus on limitations relevant to your contribution</li>
                <li>Use this to create tension and interest in your solution</li>
            </ul>
        `
    },
    "q2_7": {
        title: "Your Key Insight",
        content: `
            <h3>Presenting Your Key Insight</h3>
            <p>Introduce your novel approach that addresses the limitations.</p>
            
            <p>From the blog:</p>
            <blockquote>
                "<strong>In contrast</strong>, we do something different (insert nugget of an idea)."
            </blockquote>
            
            <div class="example">
                <p><strong>Example:</strong> "In contrast, we propose a unified end-to-end architecture that jointly learns enhancement and recognition, allowing these processes to inform each other during training rather than operating independently."</p>
            </div>
            
            <p>When presenting your key insight:</p>
            <ul>
                <li>Clearly state what makes your approach different</li>
                <li>Focus on the insight, not just the technical details</li>
                <li>Make it clear how this addresses the limitations you identified</li>
                <li>Be concise but specific</li>
            </ul>
        `
    },
    "q2_8": {
        title: "Initial Results and New Challenges",
        content: `
            <h3>Acknowledging Progress and Remaining Challenges</h3>
            <p>Show that your solution works but identify new challenges that emerge.</p>
            
            <p>From the blog:</p>
            <blockquote>
                "This fixes <strong>_____</strong>, <strong>however</strong>, it does not solve <strong>_____</strong>."
            </blockquote>
            
            <div class="example">
                <p><strong>Example:</strong> "This fixes the error propagation problem, however, it does not solve the challenge of effectively training such a joint model with limited labeled low-light data."</p>
            </div>
            
            <p>This structure:</p>
            <ul>
                <li>Shows progress (your solution works for the main problem)</li>
                <li>Demonstrates honesty and scientific rigor</li>
                <li>Creates a new tension that keeps the reader engaged</li>
                <li>Sets up the next part of your contribution</li>
            </ul>
        `
    },
    "q2_9": {
        title: "Your Technical Contribution",
        content: `
            <h3>Describing Your Technical Contribution</h3>
            <p>Explain the technical innovation that implements your insight.</p>
            
            <p>From the blog:</p>
            <blockquote>
                "<strong>Consequently</strong>, we develop a novel <strong>_____</strong>."
            </blockquote>
            
            <div class="example">
                <p><strong>Example:</strong> "Consequently, we develop a novel illumination-aware loss function that specifically addresses the challenges of low-light training by dynamically weighting feature importance based on illumination levels."</p>
            </div>
            
            <p>When describing your technical contribution:</p>
            <ul>
                <li>Be specific about what you developed</li>
                <li>Use technical terminology appropriate for your audience</li>
                <li>Make it clear how this contribution implements your insight</li>
                <li>Focus on what's novel about your approach</li>
            </ul>
        `
    },
    "q2_10": {
        title: "Implementation Challenges",
        content: `
            <h3>Acknowledging Implementation Challenges</h3>
            <p>Discuss the practical challenges in implementing your approach.</p>
            
            <p>From the blog:</p>
            <blockquote>
                "<strong>While promising</strong>, <strong>_____</strong> is non-trivial."
            </blockquote>
            
            <div class="example">
                <p><strong>Example:</strong> "While promising, training this joint model with limited real-world low-light data is non-trivial."</p>
            </div>
            
            <p>This section:</p>
            <ul>
                <li>Shows awareness of practical implementation issues</li>
                <li>Demonstrates depth of understanding</li>
                <li>Acknowledges the complexity of your solution</li>
                <li>Sets up your final technical contribution</li>
            </ul>
        `
    },
    "q2_11": {
        title: "Final Technical Piece",
        content: `
            <h3>Presenting Your Final Technical Piece</h3>
            <p>Describe how you overcome the implementation challenges.</p>
            
            <p>From the blog:</p>
            <blockquote>
                "<strong>Therefore</strong>, we further do something <strong>_____</strong>."
            </blockquote>
            
            <div class="example">
                <p><strong>Example:</strong> "Therefore, we further develop a synthetic data generation pipeline that creates realistic low-light training examples from standard datasets, enabling effective training of our joint model."</p>
            </div>
            
            <p>This final technical piece:</p>
            <ul>
                <li>Addresses the implementation challenges you identified</li>
                <li>Completes your technical contribution</li>
                <li>Shows thoroughness in your approach</li>
                <li>Demonstrates problem-solving ability</li>
            </ul>
        `
    },
    "q2_12": {
        title: "Evaluation Summary",
        content: `
            <h3>Summarizing Your Evaluation</h3>
            <p>Briefly describe how you evaluated your method and the results.</p>
            
            <p>From the blog:</p>
            <blockquote>
                "We evaluate <strong>_____</strong> qualitatively and quantitatively on <strong>_____</strong> and find that it is more accurate than the state of the art."
            </blockquote>
            
            <div class="example">
                <p><strong>Example:</strong> "We evaluate our joint enhancement-recognition approach qualitatively and quantitatively on our new NightVision benchmark and modified versions of COCO and ImageNet, and find that it is more accurate than the state of the art by an average of 15% in classification accuracy under low-light conditions."</p>
            </div>
            
            <p>An effective evaluation summary:</p>
            <ul>
                <li>Mentions both qualitative and quantitative evaluation</li>
                <li>Names specific datasets or benchmarks</li>
                <li>Provides a clear statement about performance compared to state-of-the-art</li>
                <li>Optionally includes specific improvement metrics</li>
                <li>May mention that code and data will be available</li>
            </ul>
        `
    },

    // 3. Introduction
    "q2_13": {
        title: "Topic Importance",
        content: `
            <h3>Establishing Topic Importance</h3>
            <p>Explain why your topic matters and why it remains unsolved.</p>
            
            <p>From the blog:</p>
            <blockquote>
                "Don't write things like 'We are interested in X'. Nobody cares what you are interested in or what you want. What does your audience want? Instead, write something like 'X is important because… and X is unsolved because…'. Don't personalize things. The paper is not about you, it is about the problem in the world."
            </blockquote>
            
            <div class="example">
                <p><strong>Example:</strong> "Reliable image recognition in low-light conditions is essential for 24-hour operation of autonomous systems and surveillance applications. Despite significant advances in computer vision, recognition performance still degrades substantially in low-light environments due to reduced signal-to-noise ratio, color distortion, and loss of detail. Current approaches that separate enhancement from recognition introduce artifacts that further degrade performance, leaving this important problem unsolved."</p>
            </div>
            
            <p>When establishing importance:</p>
            <ul>
                <li>Focus on the problem, not your interest in it</li>
                <li>Provide concrete reasons why the problem matters</li>
                <li>Explain specific technical challenges that have prevented solutions</li>
                <li>Use objective language rather than personal statements</li>
            </ul>
        `
    },
    "q2_14": {
        title: "Explicit Contributions",
        content: `
            <h3>Stating Your Contributions</h3>
            <p>Clearly list the specific contributions of your paper.</p>
            
            <p>From the blog:</p>
            <blockquote>
                "What are your explicit contributions that you will state in the introduction? (e.g., 'Our contributions are...')"
            </blockquote>
            
            <div class="example">
                <p><strong>Example:</strong> "Our contributions are:</p>
                <ol>
                    <li>A novel end-to-end architecture that jointly learns enhancement and recognition for low-light images</li>
                    <li>An illumination-aware loss function that dynamically weights feature importance based on lighting conditions</li>
                    <li>A synthetic data generation pipeline for creating realistic low-light training examples</li>
                    <li>A new benchmark dataset, NightVision, for evaluating low-light recognition performance</li>
                    <li>Comprehensive experiments showing an average 15% improvement over state-of-the-art methods across multiple datasets</li>
                </ol>"
            </div>
            
            <p>Effective contribution statements:</p>
            <ul>
                <li>Are specific and concrete</li>
                <li>Use numbered or bulleted lists for clarity</li>
                <li>Cover both technical and experimental contributions</li>
                <li>Highlight what's novel or significant</li>
                <li>Make it easy for reviewers to identify your key claims</li>
            </ul>
        `
    },
    "q2_15": {
        title: "Nugget Introduction",
        content: `
            <h3>Introducing Your Nugget</h3>
            <p>Frame your key insight as the solution to the core problem.</p>
            
            <p>From the blog:</p>
            <blockquote>
                "How will you introduce your 'Nugget' and frame it as the solution to the core problem?"
            </blockquote>
            
            <blockquote>
                "The nugget is not your technical contribution. I repeat: it is not your technical contribution. It is the insight that leads to your contribution."
            </blockquote>
            
            <div class="example">
                <p><strong>Example:</strong> "Our key insight is that enhancement and recognition in low-light conditions are fundamentally intertwined tasks that should inform each other. While previous work has treated these as separate sequential steps, we observe that jointly optimizing them in a single end-to-end framework allows the enhancement process to focus specifically on features that are important for recognition, rather than general visual quality. This insight transforms the problem from a pipeline of potentially incompatible components to a unified task with a shared objective."</p>
            </div>
            
            <p>When introducing your nugget:</p>
            <ul>
                <li>Focus on the insight, not the technical implementation</li>
                <li>Explain how this insight changes the way we think about the problem</li>
                <li>Show how it makes the previously unsolvable now solvable</li>
                <li>Connect it to the limitations of previous approaches</li>
                <li>Make it clear and accessible, even to non-experts</li>
            </ul>
        `
    },

    // 4. Previous / Related Work
    "q2_16": {
        title: "Related Work Themes",
        content: `
            <h3>Organizing Related Work by Themes</h3>
            <p>Group previous papers into meaningful categories to provide structure.</p>
            
            <p>From the blog:</p>
            <blockquote>
                "What are the main themes or common approaches that group the previous papers you've identified?"
            </blockquote>
            
            <blockquote>
                "To achieve this, it should *organize* the work into themes or groups — that is, it should point out commonality between methods."
            </blockquote>
            
            <div class="example">
                <p><strong>Example:</strong> "Previous work on low-light image recognition can be categorized into three main approaches:</p>
                <ol>
                    <li><strong>Enhancement-focused methods:</strong> Works like EnhanceNet (Smith et al., 2019) and LIME (Wang et al., 2018) that focus on improving image quality before recognition</li>
                    <li><strong>Robust recognition methods:</strong> Approaches like RobustRecognition (Zhang et al., 2021) that modify standard recognition networks to handle adverse conditions</li>
                    <li><strong>Sequential pipelines:</strong> Methods like Sequential-EP (Wang et al., 2022) that explicitly connect enhancement and prediction but maintain them as separate stages</li>
                </ol>
                <p>Additionally, several works have contributed specialized datasets for low-light imagery, including NightVision (Jones et al., 2020) and DarkSight (Chen et al., 2021)."</p>
            </div>
            
            <p>When organizing related work:</p>
            <ul>
                <li>Identify meaningful categories or approaches</li>
                <li>Group papers by their core methodology or contribution</li>
                <li>Highlight seminal works in each category</li>
                <li>Show the evolution of ideas within each theme</li>
                <li>Consider chronological development within themes</li>
            </ul>
        `
    },
    "q2_17": {
        title: "Related Work Structure",
        content: `
            <h3>Structuring Your Related Work Section</h3>
            <p>Organize your discussion to provide insight into the field's history and context.</p>
            
            <p>From the blog:</p>
            <blockquote>
                "A good related work section is not a laundry list of what others have done. It teaches. That is, it should organize and summarize the related work. Each paragraph should cover a 'topic' and should say what the prior art on that topic got right and what it missed. This is key. You need to analyze the prior art and not just report it."
            </blockquote>
            
            <blockquote>
                "A good previous work section gives the reader insight into the history of the field. It provides a starting point for people to learn about the field but, more importantly, gives them a way to think about it. It frames the history in the context of the current paper."
            </blockquote>
            
            <div class="example">
                <p><strong>Example structure:</strong></p>
                <ol>
                    <li><strong>Introduction paragraph:</strong> Overview of the field and its evolution</li>
                    <li><strong>Theme 1 - Enhancement methods:</strong> Discuss key works, their contributions, and limitations</li>
                    <li><strong>Theme 2 - Robust recognition:</strong> Analyze approaches, strengths, and weaknesses</li>
                    <li><strong>Theme 3 - Sequential pipelines:</strong> Examine attempts to connect enhancement and recognition</li>
                    <li><strong>Datasets and evaluation:</strong> Review existing benchmarks and evaluation protocols</li>
                    <li><strong>Transition paragraph:</strong> Summarize limitations and connect to your approach</li>
                </ol>
            </div>
            
            <p>Effective related work sections:</p>
            <ul>
                <li>Teach the reader about the field's history and context</li>
                <li>Analyze what previous work got right and what it missed</li>
                <li>Organize papers by themes rather than listing them chronologically</li>
                <li>Show how the field has evolved toward your approach</li>
                <li>Frame previous work in relation to your contributions</li>
                <li>Use present tense consistently (e.g., "Smith et al. propose..." not "proposed")</li>
            </ul>
        `
    },

    // 5. Experiments / Results / Evaluation
    "q2_18": {
        title: "Quantitative Metrics",
        content: `
            <h3>Selecting Quantitative Metrics</h3>
            <p>Choose appropriate metrics to evaluate your method rigorously.</p>
            
            <p>From the blog:</p>
            <blockquote>
                "What are the specific quantitative metrics you will use to evaluate your method?"
            </blockquote>
            
            <div class="example">
                <p><strong>Example:</strong> "We will evaluate our method using the following quantitative metrics:</p>
                <ol>
                    <li><strong>Classification accuracy:</strong> Standard top-1 and top-5 accuracy on classification tasks</li>
                    <li><strong>Precision, recall, and F1 score:</strong> For detection and recognition tasks</li>
                    <li><strong>Mean Average Precision (mAP):</strong> For object detection performance</li>
                    <li><strong>Illumination-normalized accuracy:</strong> A new metric we propose that weights performance by scene illumination level</li>
                    <li><strong>Enhancement quality metrics:</strong> PSNR and SSIM for cases where ground truth enhanced images are available</li>
                </ol>"
            </div>
            
            <p>When selecting metrics:</p>
            <ul>
                <li>Use established metrics in your field for comparability</li>
                <li>Include task-specific metrics relevant to your problem</li>
                <li>Consider both standard and specialized metrics</li>
                <li>Propose new metrics if existing ones don't capture important aspects</li>
                <li>Explain why each metric is appropriate for your evaluation</li>
            </ul>
        `
    },
    "q2_19": {
        title: "Datasets Selection",
        content: `
            <h3>Choosing Appropriate Datasets</h3>
            <p>Select datasets that effectively test your claims and contributions.</p>
            
            <p>From the blog:</p>
            <blockquote>
                "What datasets will you use, and why are they appropriate?"
            </blockquote>
            
            <div class="example">
                <p><strong>Example:</strong> "We will evaluate our method on the following datasets:</p>
                <ol>
                    <li><strong>NightVision (our new dataset):</strong> Contains 10,000 paired low-light and normal-light images with classification labels, specifically designed to test recognition performance across illumination levels</li>
                    <li><strong>ExDark:</strong> An existing benchmark for low-light image recognition with 7,363 images in 12 categories</li>
                    <li><strong>Modified ImageNet:</strong> We apply realistic low-light transformations to the ImageNet validation set to test generalization on a large-scale dataset</li>
                    <li><strong>Real-world nighttime images:</strong> A collection of 500 challenging real-world nighttime scenes for qualitative evaluation</li>
                </ol>
                <p>These datasets are appropriate because they cover both synthetic and real low-light conditions, include diverse object categories, and allow direct comparison with previous methods."</p>
            </div>
            
            <p>When selecting datasets:</p>
            <ul>
                <li>Include standard benchmarks in your field</li>
                <li>Consider creating new datasets if existing ones are insufficient</li>
                <li>Use diverse datasets to demonstrate generalization</li>
                <li>Explain why each dataset is appropriate for testing your claims</li>
                <li>Consider both synthetic and real-world data when applicable</li>
            </ul>
        `
    },
    "q2_20": {
        title: "Baseline Comparisons",
        content: `
            <h3>Selecting Baseline Methods</h3>
            <p>Choose appropriate methods to compare against your approach.</p>
            
            <p>From the blog:</p>
            <blockquote>
                "What baseline methods or state-of-the-art approaches will you compare against?"
            </blockquote>
            
            <blockquote>
                "You have a fancy new method and you're really excited about it. Your reviewers love new fancy methods. But the first thing you should think is 'is there a simpler method that can solve this?'. This is your baseline. Implement the simple baseline up front and test it. You may be surprised that simple baselines are often hard to beat."
            </blockquote>
            
            <div class="example">
                <p><strong>Example:</strong> "We will compare our method against the following baselines and state-of-the-art approaches:</p>
                <ol>
                    <li><strong>Simple baselines:</strong>
                        <ul>
                            <li>Standard CNN without any low-light adaptation</li>
                            <li>Basic histogram equalization + standard CNN</li>
                            <li>Data augmentation with synthetic low-light images</li>
                        </ul>
                    </li>
                    <li><strong>Enhancement-focused methods:</strong>
                        <ul>
                            <li>EnhanceNet (Smith et al., 2019)</li>
                            <li>LIME (Wang et al., 2018)</li>
                        </ul>
                    </li>
                    <li><strong>Robust recognition methods:</strong>
                        <ul>
                            <li>RobustRecognition (Zhang et al., 2021)</li>
                            <li>AdversarialTraining (Liu et al., 2020)</li>
                        </ul>
                    </li>
                    <li><strong>Sequential pipelines:</strong>
                        <ul>
                            <li>Sequential-EP (Wang et al., 2022)</li>
                            <li>EnhanceAndRecognize (Chen et al., 2021)</li>
                        </ul>
                    </li>
                </ol>"
            </div>
            
            <p>When selecting baselines:</p>
            <ul>
                <li>Include simple baselines to show that a complex solution is necessary</li>
                <li>Compare against state-of-the-art methods in your field</li>
                <li>Include methods from all relevant categories or approaches</li>
                <li>Ensure fair comparison by using official implementations when possible</li>
                <li>Be transparent about implementation details and parameters</li>
            </ul>
        `
    },
    "q2_21": {
        title: "Qualitative Results",
        content: `
            <h3>Planning Qualitative Results</h3>
            <p>Design effective visualizations and examples to demonstrate your method's performance.</p>
            
            <p>From the blog:</p>
            <blockquote>
                "How will you present your qualitative results or 'demo' to convincingly show your idea works? (e.g., specific examples, visualizations)"
            </blockquote>
            
            <div class="example">
                <p><strong>Example:</strong> "We will present our qualitative results through:</p>
                <ol>
                    <li><strong>Side-by-side comparisons:</strong> Visual examples showing the original low-light image, results from baseline methods, and our method's results</li>
                    <li><strong>Attention visualization:</strong> Heat maps showing which image regions our model focuses on compared to baseline methods</li>
                    <li><strong>Illumination gradient analysis:</strong> Examples showing performance across a spectrum of lighting conditions</li>
                    <li><strong>Failure case analysis:</strong> Honest examination of challenging cases where our method struggles</li>
                    <li><strong>Enhancement visualization:</strong> For methods that include enhancement, visualizing the intermediate enhanced images</li>
                </ol>"
            </div>
            
            <p>Effective qualitative results:</p>
            <ul>
                <li>Show real-world examples, not just cherry-picked cases</li>
                <li>Include direct comparisons with baseline methods</li>
                <li>Visualize internal workings of your approach when possible</li>
                <li>Include failure cases to demonstrate honesty and understanding</li>
                <li>Use clear, well-labeled figures with informative captions</li>
            </ul>
        `
    },
    "q2_22": {
        title: "Key Findings",
        content: `
            <h3>Highlighting Key Findings</h3>
            <p>Identify the most important takeaways from your experiments.</p>
            
            <p>From the blog:</p>
            <blockquote>
                "What are the key findings or takeaways from your experiments that you want to highlight?"
            </blockquote>
            
            <div class="example">
                <p><strong>Example:</strong> "The key findings from our experiments include:</p>
                <ol>
                    <li>Our joint enhancement-recognition approach outperforms sequential pipelines by 15% on average across all datasets, demonstrating the benefit of end-to-end optimization</li>
                    <li>The illumination-aware loss function provides a 7% improvement over standard losses, with greater gains in extremely low-light conditions</li>
                    <li>Our synthetic data generation approach effectively addresses the limited data problem, improving performance by 9% compared to training on real data alone</li>
                    <li>Performance improvements are most significant for fine-grained recognition tasks where subtle features are critical</li>
                    <li>Computational overhead is minimal (10% increase) compared to sequential approaches, making our method practical for real-world applications</li>
                </ol>"
            </div>
            
            <p>When highlighting key findings:</p>
            <ul>
                <li>Focus on results that support your main claims</li>
                <li>Quantify improvements whenever possible</li>
                <li>Explain why the results matter, not just what they are</li>
                <li>Connect findings back to your original hypothesis</li>
                <li>Include unexpected or surprising results that provide new insights</li>
            </ul>
        `
    },

    // 6. Discussion / Limitations / Future Work
    "q2_23": {
        title: "Limitations",
        content: `
            <h3>Acknowledging Limitations</h3>
            <p>Honestly discuss the weaknesses and constraints of your approach.</p>
            
            <p>From the blog:</p>
            <blockquote>
                "What are the clear limitations or weaknesses of your current work? (Be honest and objective)"
            </blockquote>
            
            <blockquote>
                "Good scientific practice works slightly against us in point 4. It is vital to discuss the limitations or weaknesses of your method. It is true that reviewers sometimes lock onto this with a vengeance but we must do it."
            </blockquote>
            
            <div class="example">
                <p><strong>Example:</strong> "Our approach has several limitations:</p>
                <ol>
                    <li>Performance degrades in extremely low-light conditions (below 1 lux) where noise dominates the signal</li>
                    <li>The joint model requires more training data than separate enhancement and recognition models</li>
                    <li>Our synthetic data generation doesn't fully capture all real-world low-light phenomena, particularly sensor-specific noise patterns</li>
                    <li>The computational requirements make real-time processing challenging on mobile devices</li>
                    <li>Performance improvements are less significant for simple recognition tasks where standard methods already perform well</li>
                </ol>"
            </div>
            
            <p>When discussing limitations:</p>
            <ul>
                <li>Be honest and objective about weaknesses</li>
                <li>Focus on technical limitations rather than implementation details</li>
                <li>Acknowledge constraints in your evaluation or methodology</li>
                <li>Discuss cases where your method might not be appropriate</li>
                <li>Show that you understand the boundaries of your contribution</li>
            </ul>
        `
    },
    "q2_24": {
        title: "Future Research Opportunities",
        content: `
            <h3>Framing Limitations as Opportunities</h3>
            <p>Show how current limitations create clear paths for future research.</p>
            
            <p>From the blog:</p>
            <blockquote>
                "How will you frame these limitations as clear opportunities for future research?"
            </blockquote>
            
            <blockquote>
                "Think about the weaknesses and think about how future work can address them. Write about how to address them. Reviewers sometimes say 'ok, do those things and resubmit'. That's a risk but there is no alternative."
            </blockquote>
            
            <div class="example">
                <p><strong>Example:</strong> "These limitations suggest several promising directions for future research:</p>
                <ol>
                    <li>Developing specialized architectures for extremely low-light conditions by incorporating physics-based noise models</li>
                    <li>Exploring semi-supervised and self-supervised learning approaches to reduce the dependency on large labeled datasets</li>
                    <li>Creating more realistic synthetic data generation by modeling sensor-specific characteristics and environmental factors</li>
                    <li>Optimizing the model architecture and inference for mobile deployment through techniques like quantization and pruning</li>
                    <li>Extending the approach to video recognition where temporal information could help overcome limitations in individual frames</li>
                </ol>"
            </div>
            
            <p>When framing future work:</p>
            <ul>
                <li>Connect each opportunity directly to a limitation you identified</li>
                <li>Suggest concrete approaches rather than vague directions</li>
                <li>Show that these opportunities are feasible and promising</li>
                <li>Indicate which opportunities might be most impactful</li>
                <li>Consider both short-term improvements and long-term research directions</li>
            </ul>
        `
    },
    "q2_25": {
        title: "Broader Implications",
        content: `
            <h3>Discussing Broader Implications</h3>
            <p>Explore the wider impact and potential applications of your work.</p>
            
            <p>From the blog:</p>
            <blockquote>
                "What broader implications or interesting discussions can arise from your results?"
            </blockquote>
            
            <div class="example">
                <p><strong>Example:</strong> "Our work has several broader implications:</p>
                <ol>
                    <li><strong>Practical applications:</strong> By enabling reliable recognition in low-light conditions, our approach could significantly improve the safety of autonomous vehicles at night and enhance security surveillance systems</li>
                    <li><strong>Methodological insights:</strong> The success of our joint learning approach suggests that other traditionally sequential computer vision pipelines might benefit from end-to-end optimization</li>
                    <li><strong>Dataset biases:</strong> Our analysis reveals that many standard computer vision datasets are biased toward well-lit conditions, highlighting the need for more diverse training data</li>
                    <li><strong>Human-AI comparison:</strong> Our results show that while AI systems still lag behind humans in extremely challenging lighting conditions, the gap is narrowing through specialized approaches like ours</li>
                    <li><strong>Energy efficiency:</strong> By improving performance in low-light conditions, our approach could reduce the need for active illumination in vision systems, potentially saving energy in large-scale deployments</li>
                </ol>"
            </div>
            
            <p>When discussing broader implications:</p>
            <ul>
                <li>Consider practical applications beyond the immediate technical contribution</li>
                <li>Identify methodological insights that might apply to other problems</li>
                <li>Discuss what your results reveal about the field or problem domain</li>
                <li>Explore connections to related fields or disciplines</li>
                <li>Consider societal impacts or ethical considerations when relevant</li>
            </ul>
        `
    },

    // 7. Conclusion
    "q2_26": {
        title: "Conclusion Summary",
        content: `
            <h3>Summarizing Your Contribution</h3>
            <p>Concisely recap the main contribution and findings of your paper.</p>
            
            <p>From the blog:</p>
            <blockquote>
                "How will you succinctly summarize the main contribution and findings of your paper?"
            </blockquote>
            
            <blockquote>
                "This should provide a concise review of the key insights and results. It is like an abstract. It is in the present tense. Unlike an abstract, it provides a bit more analysis of the results since the reader has now seen these."
            </blockquote>
            
            <div class="example">
                <p><strong>Example:</strong> "In this paper, we presented a novel end-to-end approach for image recognition in low-light conditions that jointly learns enhancement and classification. Our key insight is that these traditionally separate tasks are fundamentally intertwined and benefit from mutual optimization. We developed an illumination-aware loss function and synthetic data generation pipeline to effectively train our model despite limited real-world low-light data. Extensive experiments on multiple datasets demonstrate that our approach outperforms state-of-the-art methods by an average of 15% in classification accuracy under challenging lighting conditions. The results confirm our hypothesis that joint optimization leads to more robust recognition by focusing enhancement on recognition-critical features rather than general visual quality."</p>
            </div>
            
            <p>An effective conclusion summary:</p>
            <ul>
                <li>Restates the key problem and your approach</li>
                <li>Highlights your main technical contributions</li>
                <li>Summarizes the most important experimental results</li>
                <li>Connects back to your original hypothesis or insight</li>
                <li>Is concise but comprehensive (typically one paragraph)</li>
            </ul>
        `
    },
    "q2_27": {
        title: "Key Takeaway",
        content: `
            <h3>Crafting Your Final Message</h3>
            <p>Identify the single most important message you want readers to remember.</p>
            
            <p>From the blog:</p>
            <blockquote>
                "What is the single most important message you want the reader to take away from your paper?"
            </blockquote>
            
            <div class="example">
                <p><strong>Example:</strong> "The most important takeaway from our work is that low-light image recognition benefits significantly from jointly optimizing enhancement and recognition in an end-to-end framework, rather than treating them as separate sequential steps. This insight challenges the conventional pipeline approach and opens new possibilities for robust visual recognition in challenging lighting conditions."</p>
            </div>
            
            <p>An effective key takeaway:</p>
            <ul>
                <li>Focuses on your core insight or contribution</li>
                <li>Is memorable and impactful</li>
                <li>Highlights what makes your work novel or significant</li>
                <li>Suggests broader implications when appropriate</li>
                <li>Leaves the reader with a clear understanding of your paper's value</li>
            </ul>
        `
    }
};

// Export the guidance content
if (typeof module !== 'undefined' && module.exports) {
    module.exports = guidancePart2;
}
