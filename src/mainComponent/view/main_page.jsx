import usePostStore from '../controller/create_postController';
import ContactSection from '../widget/contacts';
import GroupSection from '../widget/groups';
import MessageSection from '../widget/messages';
import Post from '../widget/posts';
import useThemeStore from '../controller/themeController';

const HomePage = () => {

    const { posts } = usePostStore();

    const { theme } = useThemeStore();

    return (
        <div className={`${theme === "light" ? 'bg-gray-100' : 'bg-slate-800 bg-opacity-80'}min-h-screen pt-14`}>

            <main className=" grid grid-cols-1 w-full    lg:grid-cols-4  ">

                {/* <div className='w-full col-span-4 fixed h-20 z-20' >


                    <Stories />
                </div> */}

                <div className="hidden lg:block">
                    <GroupSection></GroupSection>
                </div>
                <div className="lg:col-span-2 mt-6 sm:p-4 lg:p-0 ">
                    {posts.map((post, index) => (
                        <Post

                            key={index}
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