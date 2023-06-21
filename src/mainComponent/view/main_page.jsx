import ContactSection from '../widget/contacts';
import GroupSection from '../widget/groups';
import MessageSection from '../widget/messages';
import Post from '../widget/posts';

import postData from '../model/post_model';

const HomePage = () => {
    return (
        <div className="bg-gray-100 min-h-screen pt-14">
            <main className=" grid grid-cols-1 w-full    lg:grid-cols-4  ">
                <div className="hidden lg:block">
                    <GroupSection></GroupSection>
                </div>
                <div className="lg:col-span-2 mt-6 sm:p-4 lg:p-0">
                    {postData.map((post) => (
                        <Post
                            key={post.date}
                            author={post.author}
                            authorAvatarUrl={post.authorAvatarUrl}
                            date={post.date}
                            content={post.content}
                            imageUrl={post.imageUrl}
                            likes={post.likes}
                            comments={post.comments}
                            shares={post.shares}
                            commentsData={post.commentsData}
                        />
                    ))}
                </div>
                <div className="hidden lg:block">
                    <ContactSection></ContactSection>
                </div>
                <MessageSection></MessageSection>

            </main>
        </div>
    );
};

export default HomePage;