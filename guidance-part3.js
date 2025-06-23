// Guidance content for Part 3: General Best Practices & Strategy
const guidancePart3 = {
    // 1. Thinking Like a Reviewer
    "q3_1": {
        title: "Key Ideas and Significance",
        content: `
            <h3>Anticipating Reviewer Perception</h3>
            <p>Consider how reviewers will identify and evaluate your key ideas and their significance.</p>
            
            <p>From the blog:</p>
            <blockquote>
                "Reviewers have a job and are under time pressure, so make their job easier."
            </blockquote>
            
            <blockquote>
                "What questions does the reviewer need to answer on the review form? <strong>1. Summary. In 3–5 sentences, describe the key ideas and experiments and their significance.</strong> Give them these 3–5 sentences. That is, make sure the key ideas are clear and easy to summarize."
            </blockquote>
            
            <div class="example">
                <p><strong>Example:</strong> "A reviewer will likely identify these key ideas and their significance:</p>
                <ol>
                    <li>The paper introduces a novel end-to-end approach for low-light image recognition that jointly optimizes enhancement and recognition, addressing a significant practical challenge in computer vision applications.</li>
                    <li>The illumination-aware loss function represents an innovative technical contribution that specifically addresses the unique challenges of low-light training.</li>
                    <li>The synthetic data generation pipeline offers a practical solution to the limited training data problem, which is significant for real-world deployment.</li>
                    <li>The comprehensive experiments across multiple datasets provide convincing evidence of substantial performance improvements (15% on average) over state-of-the-art methods.</li>
                    <li>The broader methodological insight about joint optimization of traditionally sequential pipelines has significant implications for other computer vision tasks.</li>
                </ol>"
            </div>
            
            <p>When anticipating reviewer perception:</p>
            <ul>
                <li>Identify your most novel and significant contributions</li>
                <li>Consider both technical innovations and practical impact</li>
                <li>Think about what aspects will be most interesting to your target audience</li>
                <li>Make these key ideas explicit and easy to find in your paper</li>
                <li>Ensure your abstract and introduction clearly communicate these points</li>
            </ul>
        `
    },
    "q3_2": {
        title: "Paper Strengths",
        content: `
            <h3>Highlighting Your Paper's Strengths</h3>
            <p>Identify the aspects of your paper that reviewers are likely to view positively.</p>
            
            <p>From the blog:</p>
            <blockquote>
                "2. What aspects of the paper are particularly good? 3. Strengths. Consider the significance of key ideas, experimental validation, writing quality. Explain clearly why these aspects of the paper are valuable."
            </blockquote>
            
            <div class="example">
                <p><strong>Example:</strong> "Reviewers will likely highlight these strengths:</p>
                <ol>
                    <li><strong>Novel insight:</strong> The fundamental reconceptualization of low-light recognition as a joint optimization problem rather than a sequential pipeline</li>
                    <li><strong>Technical innovation:</strong> The illumination-aware loss function that dynamically adapts to lighting conditions</li>
                    <li><strong>Practical contribution:</strong> The synthetic data generation approach that addresses a key limitation in training data availability</li>
                    <li><strong>Strong evaluation:</strong> Comprehensive experiments across multiple datasets with both quantitative metrics and qualitative visualizations</li>
                    <li><strong>Significant improvements:</strong> The substantial performance gains (15% on average) over state-of-the-art methods</li>
                    <li><strong>Broader impact:</strong> The potential applications in critical domains like autonomous driving and surveillance</li>
                    <li><strong>Methodological implications:</strong> The insight that other sequential pipelines might benefit from similar joint optimization</li>
                </ol>"
            </div>
            
            <p>When identifying strengths:</p>
            <ul>
                <li>Consider both technical and practical aspects</li>
                <li>Highlight the novelty and significance of your contributions</li>
                <li>Emphasize the thoroughness of your evaluation</li>
                <li>Note any broader implications or applications</li>
                <li>Make these strengths explicit in your paper, particularly in the introduction and conclusion</li>
            </ul>
        `
    },
    "q3_3": {
        title: "Potential Weaknesses",
        content: `
            <h3>Addressing Potential Criticisms</h3>
            <p>Anticipate and prepare for potential criticisms or questions from reviewers.</p>
            
            <p>From the blog:</p>
            <blockquote>
                "4. Weaknesses. Consider significance of key ideas, experiments, writing quality. Clearly explain why these are weak aspects of the paper, e.g. why a specific prior work has already demonstrated the key contributions, or why the experiments are insufficient to validate the claims."
            </blockquote>
            
            <blockquote>
                "What are your weaknesses? Make it very clear how you go beyond prior work. Put the experiments in context so that they understand how the experiments validate the claims."
            </blockquote>
            
            <div class="example">
                <p><strong>Example:</strong> "Reviewers might question these aspects:</p>
                <ol>
                    <li><strong>Novelty concern:</strong> Whether joint optimization has been explored in previous work, which I'll address by clearly differentiating our approach from related methods like [Specific Prior Work]</li>
                    <li><strong>Evaluation limitation:</strong> Whether synthetic low-light transformations truly represent real-world conditions, which I'll mitigate by including experiments on real-world datasets and discussing the limitations explicitly</li>
                    <li><strong>Computational complexity:</strong> Whether the increased complexity justifies the performance gains, which I'll address with a detailed efficiency analysis</li>
                    <li><strong>Generalizability question:</strong> Whether the approach works across diverse lighting conditions and scenes, which I'll demonstrate through varied test cases</li>
                    <li><strong>Implementation details:</strong> Whether certain design choices are properly justified, which I'll support with ablation studies</li>
                </ol>
                <p>For each potential weakness, I'll provide:</p>
                <ul>
                    <li>A clear acknowledgment of the limitation</li>
                    <li>Evidence or reasoning that mitigates the concern</li>
                    <li>Discussion of how future work might address remaining issues</li>
                </ul>"
            </div>
            
            <p>When addressing potential weaknesses:</p>
            <ul>
                <li>Be honest about limitations but don't undermine your contributions</li>
                <li>Provide evidence or reasoning that mitigates each concern</li>
                <li>Clearly differentiate your work from prior approaches</li>
                <li>Use ablation studies to justify design choices</li>
                <li>Acknowledge areas where future work is needed</li>
                <li>Ensure your evaluation methodology is sound and comprehensive</li>
            </ul>
        `
    },

    // 2. Readiness and Risks
    "q3_4": {
        title: "Data Readiness",
        content: `
            <h3>Assessing Data Readiness</h3>
            <p>Evaluate whether you have all the necessary data to support your claims and evaluations.</p>
            
            <p>From the blog:</p>
            <blockquote>
                "Do you have all the necessary data to support your claims and evaluations?"
            </blockquote>
            
            <blockquote>
                "What are the key risks? Do you have all the data you need?"
            </blockquote>
            
            <div class="example">
                <p><strong>Example assessment:</strong></p>
                <p><strong>Data we have:</strong></p>
                <ul>
                    <li>ExDark dataset (7,363 low-light images with annotations)</li>
                    <li>Our synthetic low-light transformations applied to ImageNet validation set</li>
                    <li>500 real-world nighttime images we've collected and annotated</li>
                    <li>Implementations of baseline methods for comparison</li>
                </ul>
                <p><strong>Data we still need:</strong></p>
                <ul>
                    <li>Additional real-world low-light images to validate generalization</li>
                    <li>Sensor-specific noise patterns for more realistic synthetic data</li>
                    <li>Performance metrics on edge devices for efficiency claims</li>
                </ul>
                <p><strong>Mitigation plan:</strong></p>
                <ul>
                    <li>Collect 200 more diverse real-world images within the next week</li>
                    <li>Characterize noise patterns from 3 common camera sensors</li>
                    <li>Run benchmarks on mobile GPU by next Tuesday</li>
                </ul>
            </div>
            
            <p>When assessing data readiness:</p>
            <ul>
                <li>Inventory all datasets and resources you currently have</li>
                <li>Identify any gaps in data needed to support your claims</li>
                <li>Consider both quantity and quality/diversity of data</li>
                <li>Assess whether baseline implementations are available</li>
                <li>Develop a concrete plan to acquire any missing data</li>
                <li>Set realistic timelines for data collection and processing</li>
            </ul>
        `
    },
    "q3_5": {
        title: "Key Risks",
        content: `
            <h3>Identifying Key Risks</h3>
            <p>Recognize potential obstacles that could prevent successful completion of your paper.</p>
            
            <p>From the blog:</p>
            <blockquote>
                "What are the key risks to completing this paper on time or with the desired results? (e.g., missing data, unresolved bugs, lack of specific expertise)"
            </blockquote>
            
            <div class="example">
                <p><strong>Example risk assessment:</strong></p>
                <ol>
                    <li><strong>Technical risks:</strong>
                        <ul>
                            <li><strong>Risk:</strong> Joint model training might be unstable or fail to converge</li>
                            <li><strong>Mitigation:</strong> Implement gradient clipping and progressive training strategy</li>
                        </ul>
                    </li>
                    <li><strong>Data risks:</strong>
                        <ul>
                            <li><strong>Risk:</strong> Insufficient real-world test cases for convincing evaluation</li>
                            <li><strong>Mitigation:</strong> Supplement with additional synthetic data and clearly acknowledge limitations</li>
                        </ul>
                    </li>
                    <li><strong>Expertise risks:</strong>
                        <ul>
                            <li><strong>Risk:</strong> Limited experience with physics-based lighting models</li>
                            <li><strong>Mitigation:</strong> Consult with domain expert (Dr. Smith) and review relevant literature</li>
                        </ul>
                    </li>
                    <li><strong>Implementation risks:</strong>
                        <ul>
                            <li><strong>Risk:</strong> Memory constraints when training on high-resolution images</li>
                            <li><strong>Mitigation:</strong> Implement gradient checkpointing and mixed precision training</li>
                        </ul>
                    </li>
                    <li><strong>Timeline risks:</strong>
                        <ul>
                            <li><strong>Risk:</strong> Ablation studies might take longer than expected</li>
                            <li><strong>Mitigation:</strong> Prioritize core experiments and parallelize ablation studies</li>
                        </ul>
                    </li>
                </ol>
            </div>
            
            <p>When identifying key risks:</p>
            <ul>
                <li>Consider technical, data, expertise, implementation, and timeline risks</li>
                <li>Assess the likelihood and impact of each risk</li>
                <li>Develop specific mitigation strategies for high-priority risks</li>
                <li>Identify contingency plans for the most critical risks</li>
                <li>Set clear decision points for when to pivot or adjust your approach</li>
                <li>Be realistic about what can be accomplished within your timeframe</li>
            </ul>
        `
    }
};

// Export the guidance content
if (typeof module !== 'undefined' && module.exports) {
    module.exports = guidancePart3;
}
