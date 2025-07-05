import axios from "axios";
import { useState, useEffect } from "react";

export default function Admin() {
    const [feedbacks, setFeedbacks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [refreshKey, setRefreshKey] = useState(0);

    const getFeedbacks = async () => {
        try {
            setLoading(true);
            setError("");
            const response = await axios.get("https://feedback-backend-hwa9.onrender.com/feedbacks");
            setFeedbacks(response.data);
        } catch (err) {
            setError("Failed to load feedbacks. Please try again.");
            console.error("Error fetching feedbacks:", err);
        } finally {
            setLoading(false);
        }
    };

    const handleRefresh = () => {
        setRefreshKey(prev => prev + 1);
    };

    useEffect(() => {
        getFeedbacks();
    }, [refreshKey]);

    const formatDate = (dateString) => {
        if (!dateString) return "Unknown date";
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    };

    if (loading) {
        return (
            <div className="container" style={{ paddingTop: 'var(--spacing-xl)' }}>
                <div className="glass-card fade-in" style={{ textAlign: 'center' }}>
                    <div className="loading" style={{ width: '40px', height: '40px', margin: '0 auto var(--spacing-md)' }}></div>
                    <p style={{ color: 'var(--text-secondary)' }}>Loading feedbacks...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="container" style={{ paddingTop: 'var(--spacing-xl)' }}>
            <div className="glass-card fade-in">
                <div style={{ 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'center',
                    marginBottom: 'var(--spacing-lg)',
                    flexWrap: 'wrap',
                    gap: 'var(--spacing-md)'
                }}>
                    <div>
                        <h1 style={{ 
                            fontSize: '2.5rem', 
                            fontWeight: '700', 
                            marginBottom: 'var(--spacing-xs)',
                            background: 'var(--primary-gradient)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text'
                        }}>
                            Admin Dashboard
                        </h1>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>
                            Manage and review user feedback
                        </p>
                    </div>
                    
                    <div style={{ display: 'flex', gap: 'var(--spacing-sm)' }}>
                        <button 
                            onClick={handleRefresh} 
                            className="glass-button"
                            disabled={loading}
                        >
                            {loading ? (
                                <>
                                    <span className="loading"></span>
                                    Refreshing...
                                </>
                            ) : (
                                '🔄 Refresh'
                            )}
                        </button>
                    </div>
                </div>

                {error && (
                    <div className="form-error" style={{ marginBottom: 'var(--spacing-md)' }}>
                        {error}
                    </div>
                )}

                <div style={{ 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'center',
                    marginBottom: 'var(--spacing-md)',
                    padding: 'var(--spacing-md)',
                    background: 'var(--bg-tertiary)',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid rgba(255, 69, 0, 0.2)'
                }}>
                    <h2 style={{ 
                        color: 'var(--text-primary)', 
                        fontSize: '1.5rem',
                        fontWeight: '600'
                    }}>
                        All Feedbacks
                    </h2>
                    <span style={{ 
                        background: 'var(--primary-gradient)',
                        color: '#000000',
                        padding: 'var(--spacing-xs) var(--spacing-sm)',
                        borderRadius: 'var(--radius-sm)',
                        fontSize: '0.875rem',
                        fontWeight: '600'
                    }}>
                        {feedbacks.length} {feedbacks.length === 1 ? 'feedback' : 'feedbacks'}
                    </span>
                </div>

                {feedbacks.length === 0 ? (
                    <div style={{ 
                        textAlign: 'center', 
                        padding: 'var(--spacing-xl)',
                        color: 'var(--text-secondary)'
                    }}>
                        <div style={{ fontSize: '3rem', marginBottom: 'var(--spacing-md)' }}>📝</div>
                        <h3 style={{ marginBottom: 'var(--spacing-sm)' }}>No feedbacks yet</h3>
                        <p>When users submit feedback, it will appear here.</p>
                    </div>
                ) : (
                    <div className="feedback-list">
                        {feedbacks.map((feedback, index) => (
                            <div key={index} className="feedback-item fade-in" style={{
                                animationDelay: `${index * 0.1}s`
                            }}>
                                <div style={{ 
                                    display: 'flex', 
                                    justifyContent: 'space-between', 
                                    alignItems: 'flex-start',
                                    marginBottom: 'var(--spacing-sm)',
                                    flexWrap: 'wrap',
                                    gap: 'var(--spacing-sm)'
                                }}>
                                    <div className="feedback-name" style={{ fontSize: '1.1rem' }}>
                                        👤 {feedback.name}
                                    </div>
                                    <div style={{ 
                                        color: 'var(--text-muted)', 
                                        fontSize: '0.875rem',
                                        background: 'var(--bg-tertiary)',
                                        padding: 'var(--spacing-xs) var(--spacing-sm)',
                                        borderRadius: 'var(--radius-sm)',
                                        border: '1px solid rgba(255, 69, 0, 0.2)'
                                    }}>
                                        📅 {formatDate(feedback.createdAt || feedback.date)}
                                    </div>
                                </div>
                                <div className="feedback-message" style={{ 
                                    fontSize: '1rem',
                                    lineHeight: '1.7',
                                    whiteSpace: 'pre-wrap'
                                }}>
                                    💬 {feedback.message}
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
